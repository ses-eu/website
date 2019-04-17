---
title: Minutes of en route ATFM delay per flight - RP2
categories:
  - metadata
  - glossary
---

<style>
table, td {
  border: 1px solid #AAAAAA;
  border-collapse: collapse;
}
td {
  padding: 5px;
}

#disclaimer {
  background: #EAEAEA;
}

#note {
  foreground: red;
  background: #E5E5E5;
  border: dashed;
}

</style>

## Contacts

|||
|---------------------------|------------------------------------------------------------------------------------|
| Contact organisation      | EUROCONTROL: The European organisation for the safety of air navigation            |
| Contact organisation unit |	Directorate European Civil-Military Aviation - Performance Review Unit (DECMA/PRU) |
| Contact name              |	Performance Review Unit - EUROCONTROL                                              |
| Contact mail address      | 96 Rue de la Fusée<br>1130 Brussels<br>Belgium                                     |
| Contact e-mail address    | [PRU-Support@eurocontrol.int](mailto:PRU-Support@eurocontrol.int)                  |

## Metadata update

|||
|-------------------------|-------------------|
| Metadata last certified | not applicable    |
| Metadata last posted 	  | 01 November 2016  |
| Metadata last update 	  | 01 November 2016      |


## Statistical presentation

### Data description

<div id="note">
Please note that software release 20.0 of the Network Manager on 04 April 2016 introduced a
change in the computation of ATFM delay for operational purposes.
ATFM delays on this web page are based on this new computation from 04 April 2016 onwards.
See the Source data section below for more information on the changes in NM release 20.0.
</div>

The measure provides an indication of [ATFM delays][atfm-delay] on the ground due to
constraints en-route.

In accordance with EU legislation, [Single European Sky Area][ses-area] States are required to
adopt performance targets contributing adequately to and be consistent with the EU wide targets.
The capacity [KPI][kpi] for the first [reference period](#reference-period) is the
[*en route ATFM delay per flight*][atfm-delay].

In Europe, when traffic demand is anticipated to exceed the available capacity in en route centres
or at airports, Air Traffic Control (ATC) units may request the local
Flow Management Position ([FMP][fmp]) to instigate an Air Traffic Flow Management (ATFM) measure,
or regulation.
Aircraft expected to arrive during a period of congestion are given Air Traffic Flow Management
delay at their departure airport, under the authority of the [Network Manager][nm-cfmu],
in order to regulate the flow of traffic into the constrained downstream en route sector or airport,
thus ensuring safety.
The resulting ATFM delays are calculated as the difference between the estimated take-off time
calculated from the filed flight plan including updates and the calculated take-off time
allocated by the central unit of ATFM.
The reason for the regulation is indicated by the responsible Flow Management Position (FMP).
The delay is attributed to the FIR containing the reference location of the most constraining
capacity constraint.  

**En route ATFM delay** has been in use as a commonly agreed proxy for en route capacity shortfalls
since 1999.
The calculation of ATFM delays is based on a well established and commonly accepted algorithm
and is compliant with the [KPI][kpi] definition in the EU legislation.


### Classification system
En route ATFM delay per flight is classified per Flight Information Region ([FIR][fir])
and per [Functional Airspace Block][fab] within the [Single European Sky Area][ses-area].

For the monitoring of National/FAB Performance targets, the FAB is considered as
the aggregation of the individual FIRs belonging to the Member state within the FAB as per the
following table:


| FAB Name | FIRs included | FMPs |
|----------|---------------|------|
| Baltic FAB | EPWWFIR, EYVLFIR, EYVLUIR | EPWW2012, EYVCFMP, EPWWFMP |
| BLUE MED FAB | LCCCFIR, LCCCUIR, LGGGFIR, LGGGUIR, LIBBFIR, LIBBUIR, LIMMFIR, LIMMUIR, LIRRFIR, LIRRUIR, LMMMFIR, LMMMUIR | LIBBFMP, LGGGFMP, LGMDFMP, LCCCFMP, LMMMFMP, LIRRFMPS, LIRRFMPN, LIRRFMPC, LIMMFMP, LIMMFMPA, LIMMFMPE, LIMMFMPT, LIMMFMPW, LIPPFMP, LIPPFMP1, LIRRFMP |
| DANUBE FAB | LBSRFIR, LRBBFIR | LBSRFMP1, LRBBFMP1, LRBBFMP2, LRBCFMP, LRCKFMP, LRCLFMP, LBSRFMP2, LRARFMP, LBWRFMP, LBSRFMP,LRBBFMP |
| DK-SE FAB | EKDKFIR, ESAAFIR | EKDKFMPE, EKDKFMPW, ESMMFMP, ESMMLOW, ESOSFMP, ESUNFMP, EKDKFMP, EKCHTMA |
| FABEC | EBBUFIR, EBURUIR, EDGGFIR, EDMMFIR, EDUUUIR, EDVVUIR, EDWWFIR, EHAAFIR, LFBBFIR, LFEEFIR, LFFFFIR, LFFFUIR, LFMMFIR, LFRRFIR, LSASFIR, LSASUIR | EBBUFMP, EDBBFMP, EDBBFMP1, EDFFFMP, EDGGFMP1, EDGGFMP2, EDLLFMP, EDLLFMP1, EDMERGE, EDMMFMP, EDMMFMPA, EDMMFMPE, EDMMFMPN, EDMMFMPS, EDUUFMP, EDUUFMPC, EDUUFMPE, EDUUFMPS, EDUUFMPW, EDWWFMP, EDYYFMP, EHAAFMP, LFBBAPP, LFBBFMP, LFBBFMPL, LFBBFMPU, LFBBNU, LFBBSU, LFEEAPP, LFEEFMP, LFFFAD, LFFFFMP, LFFFFMPE, LFFFFMPW, LFMMAPP, LFMMEL, LFMMEU, LFMMFMP, LFMMFMPE, LFMMFMPL, LFMMFMPU, LFMMFMPW, LFMMWL, LFMMWU, LFRRAPP, LFRRFMP, LSAZCTL, LSAGFMP, LSAGFMPL, LSAGFMPU, LSAGLFMP, LSAGUFMP, LSAZFMP, LSAZLFMP, LSAZCFL, LFRRFMP1 |
| FAB CE (SES RP2) | LDZOFIR, LHCCFIR, LJLAFIR, LKAAFIR, LOVVFIR, LZBBFIR | LJLAFMP, LOVVFMP, LZBBFMP, LKAAFMPU, LKAAFMPL, LKAAFMP, LDZOFMP, LHCCFMP |
| NEFAB | EETTFIR, EFINFIR, EFINUIR, ENOBFIR, ENORFIR, EVRRFIR | EVRRFMP, ENTRFMP, ENSVFMP, ENOSFMP, ENBDFMP, EFPSFMP, EFINFMP, EETTFMP, EFESFMP, ENOSEFMP, ENOSWFMP |
| SW FAB | GCCCFIR, GCCCUIR, LECBFIR, LECBUIR, LECMFIR, LECMUIR, LPPCFIR | LECBFMP1, LECMFMPN, LECMFMPS, LECPFMP, GCCCFMP, LECBFMP, LECSFMP, LPPCFMP, LECMFMP |
| UK-Ireland FAB | EGPXFIR, EGPXUIR, EGTTFIR, EGTTUIR, EISNFIR, EISNUIR | EGTCFMP, EIDWFMP, EGTTOLYM, EGTTFMP1, EGTTFMP, EGTCOLYM, EISNFMP, EGPXFMP1, EGPXFMP, EGCCFMP |  



### Sector coverage

The measures pertain to the [Air Transport and Air Traffic Management Sector][air-stats]
of the economy. 


### Statistical concepts and definitions

ATFM delay
: *ATFM delay* is defined as the duration between the last Estimated Take-Off Time ([ETOT][etot])
  and the Calculated Take-Off Time ([CTOT][ctot]) allocated by the [Network Manager][nm-cfmu].
  ATFM delay comprises both Airport ATFM delay] and En route ATFM delay.
  This indicator is solely concerned with En route ATFM delay.
:  The delay is truncated to minutes.

Flights 
: All the [IFR][ifr] flights which have filed a flight plan and have entered the area of
  responsibility of the relevant [ANSP][ansp](s) are taken into account.
: Each flight is only counted once, regardless of its trajectory.

#### Attribution of Delay
[ATFM delay][atfm-delay] to which a flight is subjected is defined to have as cause
the most penalizing [ATFM regulation][regu] which affects it.
Depending of the type and the entity responsible for the [reference location][refloc] protected by
the [ATFM regulation][regu] the [ATFM delay][atfm-delay] is classified as  either an airport or
an en route [ATFM delay][atfm-delay] and attributed to the  [FIR][fir] containing the
[reference location][refloc].

Each ATFM regulation also comprises a designator referring to the cause of delay
which can be used in further analysis.



### Statistical unit
The statistical unit is the State/ANSP to which the ATFM delays are attributed.

### Statistical population
The statistical population comprises the States in the [Single European Sky Area][ses-area].

### Reference area

The reference area is the Single European Sky Area. 


### Time coverage
2012 is the first year for which data is presented.

### Base period
Not applicable.


## Unit of Measure
The en route [ATFM delay][atfm-delay] is measured in minutes per [IFR][ifr] flight.


## Reference period

* The first reference period (RP1) covers the calendar years 2012 to 2014 inclusive.
* The second reference period (RP2) covers the calendar years 2015 to 2019 inclusive. 

Unless decided otherwise, the following reference periods shall be of five calendar years. 

## Institutional Mandate
Legal acts and agreements are established in the 
[EU IR691/2010|Performance Regulation (691 / 2010)][law].


## Confidentiality

* The information is disseminated in accordance with Article 21 of the
  [Performance Regulation (691 / 2010)][law].
* The information is disseminated in accordance with Article 22 of 
  [Commission Implementing Regulation (EU) No 390 / 2013][law]. 


## Release policy

### Release calendar
En route [ATFM delay][atfm-delay] data is released 12 times per year, once per month.

### Release calendar access
Not applicable.

### User access
Information is disseminated to the general public via the [SES Data Portal][ses-portal]. 



## Frequency of dissemination
En route ATFM data is published monthly with the annual performance aggregate being available
in January of the following year.


## Dissemination format
Information is disseminated to the general public via the [SES Data Portal][ses-portal]. 

## Accessibility of documentation

### Documentation on methodology
As per the pertaining regulations (see [Institutional Mandate](#institutional-mandate)).<br>
For technical questions not addressed in [Statistical processing](#statistical-processing)
please contact: [PRU-Support@eurocontrol.int](mailto:PRU-Support@eurocontrol.int).<br>
Additional definitions of the terms used in the frame of the this [KPI][kpi]
are available in the [Metadata page](..).

### Quality documentation
There is no specific documentation on procedures applied for quality management
and quality assessment.

## Quality Management

### Quality assurance
The data is provided by the [Network Manager][nm-cfmu] and as such it is their
responsibility to perform any quality assurance activities.

### Quality assessment

Data is validated by random quality checks, e.g. missing data for given a day,
adherent data, etc.  Any issues are reported to the [Network manager][nm-cfmu] who works with the
[EUROCONTROL Performance Review Unit][pru] to resolve them.


## Relevance

The information is published for performance monitoring purposes in accordance with
the relevant EU legislation. 

### Completeness
The data is collected for the entire [Single European Sky Area][ses-area].

## Accuracy and reliability

### Overall accuracy
The en route [ATFM delay][atfm-delay] is the delay calculated by the central unit of ATFM
as defined in [Commission Regulation (EU) No 255 / 2010][law].
This calculation is based on a well established methodology, which has been in place since 1999.

It is assumed that the data provided is accurate, given the caveats mentioned in sections
[Quality assurance](#quality-assurance) and
[Quality assessment](#quality-assessment).


### Sampling error

There is no sampling and therefore no sampling error. 


## Timeliness and punctuality
### Timeliness
The full set of Minutes of en route [ATFM delay][atfm-delay] per flight is published each month
- in general between 14 and 16 days after the end of the month in question.

###  Punctuality
The internal databases are updated daily. The [statistical processing](#statistical-processing)
is performed once per month.

## Comparability
### Comparability — geographical
The data is collected centrally by the [Network Manager][nm-cfmu] and
computed consistently throughout the entire [Single European Sky Area][ses-area]
which allows comparisons across different units.

### Comparability over time
Comparisons over time are valid.

## Coherence
### Coherence — cross domain
[ATFM delay][atfm-delay] is calculated relative to the flight plan. 

Although not fully cohered, the delay reported by aircraft operators to CODA
under the corresponding IATA delay categories shows a high correlation with the ATFM delay
calculated by the Network Manager. 
It should be noted that the delay reported by aircraft operators relates to airline schedules
rather than flight plan.

### Coherence — internal
Data is fully coherent from an internal perspective.

## Cost and burden

Not available. 


## Data revision

The data revision policy has not yet been defined. 

## Statistical processing

### Source data

En route ATFM delay per flight targets
: The EU-wide target is an average of 0.5 minutes per flight ATFM en route delay in 2014
  and for all years in RP2 (2015-2019)
: National or [FAB][fab] performance targets are contained within the respective performance plans.

Actual en route ATFM delay
: The [Network Manager][nm-cfmu] provides this data.
: Please note that the delays caused by READY to Depart (REA) messages and ATFM slot extensions
  were excluded from the ATFM delay computation with NM release 20 (4 April 2016) which reduces
  the overall amount of computed ATFM delay.
: More information on the adjusted ATFM delay computation as of NM release 20.0
  from 4 April can be found here: [NM release 20.0 - 4 April 2016 - FB750-Delay Calculation improvements][nm20].

Actual Number of [IFR][ifr] flights
: The [Network Manager][nm-cfmu] provides this data.

### Frequency of data collection
Data is collected for each individual flight in real time.


### Data collection

Data is collected and compiled by the [Network Manager][nm-cfmu].


### Data validation

Data validation is the responsibility of the [Network Manager][nm-cfmu].


### Data compilation 

The [Network Manager][nm-cfmu] aggregates the data for the different FIRs.
The [FIR][fir]s monitored during the second reference period are referred to
as the SES RP2 Area.

### Adjustment
Corrections may be made when issues are discovered as described in the
[Quality Assessment section of this document](#quality-assessment).

There are no systematic adjustments applied to this data.

## Comment
No comments.

<div id="disclaimer">
<h3>Disclaimer</h3>

This data is published by the Performance Review Body (PRB) of the Single European Sky. Every effort has been made to ensure that the information and analysis contained on this website are as accurate and complete as possible. Despite these precautions, should you find any errors or inconsistencies we would be grateful if you could please bring them to the Performance Review Unit’s attention.
<br>
The information may be copied in whole or in part providing that the copyright notice and disclaimer are included. The information may not be modified without prior written permission from the PRB. The views expressed herein do not necessarily reflect the official views or policy of EUROCONTROL or of the European Commission, which make no warranty, either implied or express, for the information contained on this website, neither do they assume any legal liability or responsibility for the accuracy, completeness or usefulness of this information. The PRB reserves the right to change or amend the information provided at any time and without prior notice. 
</div>


[atfm-delay]: https://ansperformance.eu/definition/atfm-delay/ "ATFM Delay"
[ses-area]: https://ansperformance.eu/definition/ses-area/ "SES Area"
[kpi]: https://ansperformance.eu/acronym/kpi/ "KPI"
[ifr]: https://ansperformance.eu/acronym/ifr/ "IFR"
[fir]: https://ansperformance.eu/acronym/fir/ "FIR"
[fmp]: https://ansperformance.eu/acronym/fmp/ "FMP"
[nm-cfmu]: https://ansperformance.eu/acronym/nm-cfmu/ "NM"
[ansp]: https://ansperformance.eu/acronym/ansp/ "ANSP"
[fab]: https://ansperformance.eu/acronym/fab/ "FAB"
[air-stats]: https://ansperformance.eu/definition/air-transport-statistics/ "Air Transport Statistics"
[etot]: https://ansperformance.eu/acronym/etot/ "ETOT"
[ctot]: https://ansperformance.eu/acronym/ctot/ "CTOT"
[regu]: https://ansperformance.eu/definition/regulation/ "Regulation"
[refloc]: https://ansperformance.eu/definition/reference-location/ "Reference Location"
[law]: https://ansperformance.eu/bibliography/legislation/ "Legislation"
[pru]: https://ansperformance.eu/about/us/ "PRU"
[ansp-ses-rp1]: {{< relref "/metadata/ansp-ses-rp1.md" >}} "ANSPs - SES RP1"
[nm20]: https://ansperformance.eu/library/NM_20_FB750_Delay_Calculation_improvements.pdf "REA Message"
