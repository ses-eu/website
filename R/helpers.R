get_yearly_flights <- function(year) {
  ## Data preparation for year 'year'
  flt_file <- str_glue("RP2_Flights_{year}.xlsx")
  flt_sheet <- "ERT_FLTS_MM"
  ff <- file.path("../../static/download", year, flt_file)
  
  
  df <- read_excel(path = ff, sheet = flt_sheet, skip = 3)
  df_yy <- df %>%
    filter(Select == 1) %>%
    rename(year = !!names(.[2]), days = Days, flights = !!names(.[6]), avg = !!names(.[7]), pc = !!names(.[8])) %>%
    mutate(
      date = dmy(paste("01-", Month , sep ="")),
      pc = round(pc * 100, digits = 2),
      avg = as.integer(avg)
    ) %>%
    select(-Month, -Label, -Select) %>%
    select(date, avg, pc)
  df_yy  
}


get_monthly_flights <- function(year) {
  ## Data preparation for year 'year'
  flt_file <- str_glue("RP2_Flights_{year}.xlsx")
  flt_sheet <- "ERT_FLTS_MM"
  ff <- file.path("../../static/download", year, flt_file)
  
  df <- read_excel(path = ff, sheet = "ERT_FLTS_YY", skip = 4) %>% 
    rename(year = `Year`, avg = `Avg. Daily`, pc = `% change`) %>% 
    mutate(
      date = ymd(paste(year, "-01-01", sep = "")),
      pc = round(pc * 100, digits = 2),
      avg = as.integer(avg)) %>% 
    select(date, avg, pc)
  df
}