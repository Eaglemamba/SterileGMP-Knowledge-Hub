# PDA Technical Report No. 26 (Revised 2025): Sterilizing Filtration of Liquids

## 1.0 Introduction

Sterilizing filtration is the process of removing microorganisms* from a fluid stream without adversely
affecting product quality (1-4). This technical report is intended to provide a systematic approach to
selecting and validating the most appropriate filter for liquid sterilizing filtration applications.

PDA’s original Technical Report No. 26: Sterilizing Filtration of Liquids, (TR 26) published in 1998
described the use and validation of sterilizing filtration to a generation of pharmaceutical scientists and
engineers. A revision of the original report was developed in 2008 in response to enhancements in filtration
technologies and recent additional regulatory requirements within the pharmaceutical industry at that time.
This current revision has been implemented to reflect current best practices and regulatory expectations, as
well as clarify the roles of filter suppliers and end-users. References are provided for scientific publications
and international regulatory documents where more detail and supportive data may be found.

When membrane filters entered the commercial scale, 0.45 µm-rated membranes were considered
"sterilizing-grade" filters and were used successfully in the sterilizing filtration of parenterals. These filters
were qualified using Serratia marcescens as a standard bacterium for qualifying membranes used for water
quality testing. In a paper published in 1960, however, Dr. Frances Bowman of the U.S. Food and Drug
Administration (FDA) observed a 0.45 µm "sterile-filtered" culture medium to be contaminated with an
organism subsequently shown to repeatedly penetrate 0.45 µm-rated membranes in small numbers at
challenge levels above 104
 – 106 colony forming units (CFU) per cm² (5). This led to the development of
American Society for Testing and Materials (ASTM) F838, a standard test method for evaluating sterilizinggrade
membrane filters (6). Challenge organisms are discussed further in Section 6.0.

*Note: Sterilizing filtration is not intended to remove viruses.

### 1.1 Purpose & Scope

The primary objective of the TR 26 revision team was to develop an updated scientific technical report on
sterilizing filtration. This report does not always address region-specific regulatory expectations but it
provides up-to-date scientific recommendations for use by industry and regulators in establishing a
sterilizing filtration policy. This report should be considered a guide and is not intended to establish
mandatory standards for sterilizing filtration. Concepts presented in TR 26 pertain to processes in which
filtration is used to render a liquid sterile, with all accompanying assurances, and may not be universally
applicable to all filtration processes, such as upstream bioburden reduction steps.

The revision team was composed of European and North American industry professionals to provide a
diverse perspective, thus ensuring that the methods, terminology and practices of sterilizing filtration
presented are reflective of sound science and can be used globally. This report underwent review by global
technical peers that included feedback from experts from the Americas, the Asia-Pacific region and Europe.

# Section 10.0 Appendix I: Diffusive Flow Theory

    

    

PDA Technical Report No. 26 (Revised 2025) — Sterilizing Filtration of Liquids | p78 - p81

    

        

The theory of diffusive flow requires a comprehensive discussion that may be found in reference literature (1-5); however, for the purposes of this report the following is provided.

        

When quantifying diffusive flow during integrity-testing of a wetted membrane, test gas movement (at sufficiently low pressures) follows well-established laws of diffusion. In a symmetric membrane, the diffusive flux of test gas to atmospheric pressure, as a function of the test pressure applied, may be described by:

        

            **Equation 4**  

            N = (D · H / L) · P · φ  
  

            Where:  

            N = the diffusive flux of the test gas  

            D = the diffusivity of the test gas through the wetting liquid  

            H = the solubility coefficient of the test gas in the wetting liquid  

            P = the applied differential pressure (or gauge pressure, if collected at atmospheric conditions)  

            φ = the overall porosity of the structure  

            L = the thickness of the wet layer (thickness of the membrane corrected by a "tortuosity" factor)
        

        

The diffusive flux, N, can be expressed in moles per unit area and unit time, but since these are measured at a fixed set of atmospheric pressure and temperature conditions, moles of gas can be converted to volumetric (ml/min or cc/min) units. Because the wetting fluid, test gas, filter thickness, porosity, and area are fixed, the expression for a volumetric diffusive flow in symmetric membranes further reduces to:

        

            **Equation 5**  

            F = K1 · P  
  

            Where:  

            F = the volumetric diffusive flow  

            K1 = a proportionality constant  

            P = the applied differential pressure (or gauge pressure, if collected at atmospheric conditions)
        

        

Note that the diffusive flux of gas is independent of the actual filter-pore size, providing the pores are filled with the wetting liquid. Further, Equation 5 predicts a linear relationship between the diffusive flow and the applied test pressure. This relationship ceases to exist if the applied test pressure exceeds that required to displace the wetting liquid with gas. Once the bubble-point pressure of the largest pore(s) is reached, bulk or viscous flow of air will occur in addition to the diffusive flow. This viscous flow of test gas through the pores from which the liquid has been displaced will obey Newton's laws of viscous transport, often modeled by the Hagen-Poiseuille equation for flow through cylindrical tubes.

        

            **Equation 6**  

            Q = (π · d4 / 128μ) · (P / L)  
  

            Where:  

            Q = the volumetric flow rate of the test gas  

            P = the applied differential pressure (or gauge pressure, if collected at atmospheric conditions)  

            d = the diameter of the pore  

            μ = the viscosity of the test gas  

            L = the length test gas must travel to the downstream side, or the length of wetted pores through the membrane
        

        

The pressure at which a given pore will open to viscous flow can be estimated from the cylindrical capillary relationship attributed to Laplace, often referred to as the "Bubble Point equation."

        

            **Equation 7**  

            P = (4 · k · γ · cosθ) / d  
  

            Where:  

            P = the differential pressure at which a given pore will open  

            k = the correction factor for the shape of the largest pores  

            γ = the surface tension of the wetting liquid  

            cosθ = the contact ("wetting") angle between the liquid and the membrane  

            d = the diameter of the largest pores
        

        

To demonstrate the dependence on the liquid used to wet the pores and its interaction with the filter material, Equation 7 shows an inverse relationship between the pore diameter and the test pressure necessary to free the wetting liquid from the pore. If the wetting liquid and membrane surface chemistry are held constant, the expression can be simplified to read:

        

            **Equation 8**  

            d = K2 / P  
  

            Where:  

            d = the diameter of the largest pore  

            K2 = a proportionality constant  

            P = the differential pressure at which a given pore will open
        

        

K2 is a correction factor accounting for shape of the largest pores as well as wetting properties for a given membrane/liquid combination. The value of the constant, and therefore the bubble point, in relationship to its retentive capabilities for a given contaminant, is established empirically.

        

The theory behind diffusive flow-testing can best be summarized by the extended integrity-test profile in Figure 7.0-3, depicting the gas-flow properties of a wetted filter as a function of the applied test pressure. The linear portion at the lower test pressures corresponds to the diffusive flow regime described by Equation 4 or Equation 5, while viscous flow becomes the main transport mechanism for the steeper portion at higher pressures. The transition from diffusive to bulk flow (diffusive plus viscous flow) represents the maximum end of the pore-size distribution, as the larger pores are being voided of their wetting liquid. The relative size of the membrane's largest pores can be estimated from the test pressure using Equation 8.

## 2.0 Glossary

Definitions have been provided to help clarify
the concepts discussed in this document. While
some definitions used vary, for instance, among
companies and geographic location, the
definitions described below are consistently used
within this technical report. Where a definition
is based on another published source, the source
is cited.

Adsorption
The retention of solutes, suspended colloidal
particles or microorganisms to fluid contact
surfaces, e.g., the surfaces of pores in filtration
membranes.

Aseptic
Conditions that minimize viable microbial
population.

Assay
Analytical method used to determine purity or
concentration of a specific substance in a
mixture.

Bacterial Retention Study
An experimental test study used to demonstrate
that a filter can effectively retain a defined level
of challenge microorganism under specified
conditions.

Note: This is also referred to as “Bacterial
Challenge Test”.

Bioburden
The type and number of microorganisms per unit
of material (7).

Bracketing Approach
A validation method that tests the specification
extremes of a process or product. The method
assumes the extremes will be representative of
all the samples between the extremes.

Bubble Point
The measured differential gas pressure at which
a wetting liquid (e.g., water, alcohol or product)
is pushed out of the largest pores of a wetted
porous membrane and a steady stream of gas
bubbles or bulk gas flow is detected.

Note: This is also referred to as “Transition
Point”.

Bubble Point Test
A test to indicate the maximum pore size of a
filter. The differential gas pressure at which a
liquid (usually water) is pushed out of the largest
pores and a steady stream of gas bubbles is
detected from a previously wetted filter under
specific test conditions. Used to test filter
integrity with specific, validated, pressure
values, wetting liquids and temperatures for
specific pore-size (and type of) filters.

Capsule Filter
A self-contained filter device or assembly.

Cartridge Filter
A filter device requiring a housing for use.

Compatibility
Proof that no adverse interaction between the
filter, process fluid and filtration conditions has
occurred.

Critical Process Parameter (CPP)
A process parameter whose variability has an
impact on a critical quality attribute and
therefore should be monitored or controlled to
ensure the process produces the desired quality
(8).

Diffusive Flow
The movement of a dissolved gas across a
liquid-wetted membrane based on concentration
(e.g., gas pressure) differential.

Diffusive Flow Test
A test to determine the integrity of a filter based
on a measurement of the diffusive flow rate of a
gas through wetted filter membrane at a set
pressure limit.

Note: “Diffusive Flow” and “Forward Flow” are
generally synonymous terms, “diffusive flow”
will be used in this document.

Double Filtration
Filtration through two filters configured in series
whereby both filters are required to achieve a
sterile effluent as determined by the product and
process-specific bacterial retention validation
study (i.e., both filters must meet post-use
integrity test specifications).

Note: This is also referred to as “Additive
Filtration”.

Downstream Side (of a Filter)
The filtrate or outlet side of the filter.

Effective Filtration Area (EFA)
The total surface area of the filter available to
the process fluid.

Effluent
Fluid that flows out of a process step.

Endotoxin
The major constituent of the outer membranes of
Gram-negative bacteria composed of lipid A, the
core polysaccharide, and the O-antigen
polysaccharide. Endotoxin is also known as
lipopolysaccharide (LPS).

Extractable
A chemical component that is removed from a
material by application of an artificial or
exaggerated force (e.g., solvent, temperature,
time).

Filter (noun)
A device used to remove particles from a fluid
process stream that consists of a porous medium
and a support structure.

Porous material through which a liquid or gas is
passed to remove viable and nonviable particles
(6).

Filter (verb)
To pass a fluid through a porous medium
whereby viable and nonviable particles are
removed from the fluid.

Filterability Test
A test to determine the suitability and sizing of a
filter with a given fluid that typically involves
measuring the rate at which a liquid can be
filtered through a specific filter and the
maximum filter capacity before the filter
becomes clogged/fouled.

Filter Efficiency
A measurement of how well a filter retains
particles. It is usually expressed as the
percentage, or ratio, of the retention of particles
of a specific size by a filter.

Filter Element
The basic filter unit from which cartridges or
capsules are assembled.

Filtrate
Fluid that has passed through a filter.

Filtration
The process by which particles are removed
from a fluid by passing the fluid through a
porous material.

Flow Rate
The volumetric rate of flow of a solution,
expressed in units of volume per time (e.g.,
L/min or gal/day).

Flux
The rate of filtrate flow divided by the
membrane area.

Forward Flow Test
See “Diffusive Flow Test”.

Fouling
The result of solutes blinding or blocking
membrane pores. It is observed as a decrease in
the flux (at constant pressure) or an increase in
the filtration differential pressure (at constant
flux).

Gamma Irradiation
Ionizing radiation, generated by decay of a
radioactive nucleus, that can be used to sterilize
a material.

Gauge Pressure
Gauge pressure is the difference between a given
fluid pressure and that of the atmosphere.

Hydrophilic
Literally “water loving”, a filter that will wet
with aqueous solutions to allow flow at low
pressure differential.

Hydrophobic
Literally “water fearing”, a filter that repels
aqueous and other high surface tension fluids
and therefore cannot be wetted unless subjected
to a high-pressure differential. When prewetted
with low surface tension fluid, such as alcohol,
the membrane will allow water flow at low
pressure differential.

Influent
Fluid that flows into a process step.

Note: This is also referred to as “Feed”.

Integrity Test
A nondestructive physical test that can be
correlated to the bacterial retention capability of
a filter/filter assembly (6).

Leachable
A chemical component that migrates from a
contact surface into a drug product or process

fluid during storage or normal use conditions.

Materials of Construction (MoC)
Polymers or other materials that make up the
components of the filter.

Medium
In filtration, the porous material that retains
particles as a fluid passes through during the
process of filtration.

Membrane
A thin, microporous medium used to remove
particles and microorganisms from a fluid
stream under pressure.

Module
Filter element that is incorporated into a
cartridge or capsule.

Multi-Round Housing
Filter housing designed to allow multiple filter
elements installed in parallel to increase the
effective filtration area (EFA).

Non-Fiber Releasing
Refers to a filter that does not shed fibers into
the filtrate.

Particle
Any discrete unit of material structure; a
discernible mass having an observable length,
width, thickness, size and shape.

Particulate
Relating to, or occurring in the form of,
particles.

Pore
The channel(s)/path(s) in a membrane through
which a fluid may pass.

Porosity
The ratio of void volume to bulk volume of the
filter media.

Prefilter
Any filter placed upstream of the sterilizing
filter(s).

Pressure
Force applied per unit area usually expressed as
psi, mbar, kPa or kg/cm2
.

Back Pressure
Pressure applied downstream of a filter or
other piece of equipment, via restriction in
flow.

Differential Pressure
The difference in pressure between the
upstream (feed or influent) and downstream
(effluent) sides of the filter. (May be
modified with the following terms: applied
differential pressure, available differential
pressure, clean differential pressure, dirty
differential pressure, initial differential
pressure, or maximum differential pressure.)

Note: This is also referred to as “Delta P (Δ
P)”, “Psid”, or “Pressure drop”.

Inlet Pressure
The applied pressure entering the upstream
side of the filter.

Note: This is also referred to as “Influent”,
“Upstream Pressure” or “Line Pressure”.

Outlet Pressure
The pressure exiting the downstream side of
the filter.

Note: This is also referred to as “Effluent
Pressure” or “Downstream Pressure”.

Redundant Filtration
A type of serial filtration where a second
sterilizing filter is used as a backup in the event
of an integrity failure of the primary sterilizing
filter.

Serial Filtration
Filtration through two or more filters of the
same or decreasing pore size, one after the other.

Sterilization
Validated process used to render a product free
of viable microorganisms.

Note: In a sterilization process, microbiological
death or reduction is described by an exponential
function.  Therefore, the number of
microorganisms that survive a sterilization
process can be expressed in terms of
probability.  While the probability may be
reduced to a very low number, it can never be
reduced to zero.

Surface Tension
The tendency of the surface of a liquid to
contract to the smallest area possible under
defined conditions. It is expressed as dynes per
centimeter.

Surfactant
A soluble compound that reduces the surface
tension of a liquid or reduces interfacial tension
between two liquids (causing formation of
micelles), or between a liquid and a solid.

Throughput
The amount of solution that passes through a
filter. It is described as volume through the
membrane area.

Note: This is also referred to as “Capacity”.

Upstream
The influent, or inlet side of the filter.

Validation
A documented program that provides a high
degree of assurance that a specific process,
method or system will consistently produce a
result meeting predetermined acceptance
criteria.

X-ray Irradiation
Ionizing radiation, generated by an electron
beam accelerator coupled with a metal target,
that can be used to sterilize a material.

### 2.1 Abbreviations

CCS Contamination Control Strategy

CFU Colony Forming Unit

EFA Effective Filtration Area

MoC Materials of Construction

NOR Normal Operating Range

PD Process Development

PUPSIT Pre-Use, Post-Sterilization
Integrity Test

SIP Sterilize in Place or Steam in Place

SLB Saline Lactose Broth

SUS Single Use System

TOC Total Organic Carbon

## 3.0 How Filters Work

Liquid filters are widely believed to function by permitting fluid passage through their pores, while retaining
particles, such as microorganisms, that are too large to fit through these apertures. At first, one might
assume this is accomplished entirely by size-exclusion of the particles on the upstream side of a screen or
sieve-like filter membrane. However, this oversimplification ignores many complexities of the actual
mechanisms of particle retention. Although microporous membranes are very thin to the naked eye, the
thickness of the membrane represents a long path from the microscopic perspective of bacteria or other
particles in the fluid stream passing through the membrane. Sterilizing-grade filtration membranes do not
typically consist of cylindrical pores of well-defined diameter. Rather, the membrane is made up of a
sponge-like depth of filter material, and the porous pathways between them, across a distribution of sizes.
Large particles completely outside this pore size distribution are certainly excluded at the upstream surface
of the membrane (i.e., surface screening). But for more marginally sized particles, size-exclusion also
includes entrapment within the depth of the filter matrix.

Additional retention mechanisms beyond simple size exclusion also apply within the depth of the
membrane: adsorptive sequestration occurs when particles small enough to pass through filter pores are still
captured by the filter, through various chemical or physical effects that cause particles to bind to the filter
material that retains them. The effectiveness of adsorptive-sequestration mechanisms can depend on the
surface chemistry of the filter and the particle (e.g., a microorganism) under the applied filtration conditions.
Many different operational conditions govern a filter's adsorptive removal of particles including differential
pressure, flow rate, number of particles present, binding-site saturation, and the liquid vehicle's makeup in
terms of its surface tension, pH, and ionic strength, among other factors.

If each particle challenging the filter is too large to pass through any of the pores, the number of particles
does not matter – all will be retained by surface-screening. For such large particles, filter efficiency (the
completeness with which a filter retains particles confronting it) is independent of many of the complex
factors listed above, as long as the particle and pores are not deformed. But for small microorganisms,
which can grow, shrink, deform, and divide, the additional retention mechanisms and process factors
become important. For sterilizing applications, a user must recognize that complete retention of
microorganisms in a feed stream may become a probabilistic feature of the process and filter, depending on
the factors discussed above. For this reason, the details of each specific sterilizing-filter application are
important and must be validated to claim the use of filtration as a mode of sterilization. Fortunately, modern
sterilizing filter design and manufacturing processes incorporate robust controls and significant safety
factors that reliably assure sterile filtrates in many applications.

### 3.1 Pore Size Rating and Filter Nomenclature

Because of the complex sponge-like distribution of pore sizes in membrane filters, characterization of a
filter by a simple pore-size (diameter) rating has been controversial. Various methods have been proposed
and used by filter manufacturers for filters of varying porosity. For sterilizing filters specifically, a
consensus has arisen in the industry to define sterilizing-grade filters not by physical pore size measurement,
but by its ability to reproducibly retain 107 CFU per cm2 Brevundimonas diminuta according to the ASTM
F838 standard (6). Due to historical reasons, it is the successful demonstration of this retention challenge
that may grant a filter (0.2 µm or smaller) a sterilizing-grade rating (9). To reiterate, quantified pore-size
ratings, such as 0.2 µm, may be assigned without any physical measurement or characterization of pore-size
but based simply on the ability of the filter to pass the standard bacterial retention study. This
characterization has often been used to market filters as sterilizing-grade. As described in Section 6.0, actual
use for critical liquid sterilization applications (where a sterile claim is made for the filtrate) also requires
process-specific validation, only then should a filter be described as a “sterilizing filter.”

Due to the important nuances of these terms, recommended uses of these terms are summarized in Table
3.1-1.

**Table 3.1-1 Recommended Terminology Related to Sterilizing-Grade Filters**

Term Definition

0.2 µm or
0.22 µm
Rated Filter

These pore-size ratings may be assigned by filter suppliers based on successful
completion of the ASTM F838 retention test (synonymous with “sterilizing-grade
filter”). This rating may also be assigned based on other criteria and may be assigned to
filters intended only for bioburden reduction or filters that have not passed the ASTM
F838 retention test. For this reason, “sterilizing-grade filter” is a more precise term for
describing filters designed for sterilization of liquids.

Note: 0.22 µm and 0.2 µm are considered interchangeable nominal pore-size ratings
(7).

SterilizingGrade
FilterFi
lters, typically with an 0.22 µm /0.2 µm pore size rating or smaller have been shown
by
 the manufacturer to have successfully completed the standard bacterial retention
st
udy, that is, complete retention of 107 CFU per cm2 B. diminuta under standard
co
nditions described by ASTM F838.
No

te: This is a claim about a filter (as marketed by the supplier) independent of any
pa
rticular application.
St

erilizing
Fi
lter
Th
is is an additional claim about the function of a filter to actually sterilize a fluid in a
sp
ecific application, and it depends on successful execution of process-specific
va
lidation and other controls in addition to the standard ASTM F838 challenge.
No

te: When using this term, a sterile claim for the filtrate is being made.
No

te: The term “sterile filter” is often used to refer to a “sterilizing filter”; however, that should generally
be
 avoided due to ambiguity whether it refers to the purpose of the filter (sterilizing a fluid) or the state of
th
e filter (the filter itself is sterilized, e.g., via steam or irradiation).
Li

*[Figure 3.1-1 attempts to further clarify these terms with a Venn diagram. This diagram should be taken as a]*

generalization only, as exceptions exist.

*[Figure 3.1-1 Sterilizing Filter Terminology: Venn Diagram]*

### 3.2 Evolution of the Sterilizing Filter

Membrane filtration has been used for decades and became a prevalent mode of sterilization especially with
the introduction of heat-sensitive compounds that typically cannot be terminally sterilized.

Membrane filters are used for microbial control in multiple different applications and manufacturing process
steps, such as the filtration of cell-culture media, and intermediate steps like purification column protection,
buffer filtration, and bioburden reduction as well as final sterilization.

These different filtration steps typically have different requirements for an optimal filtration process, which
means that modern membrane filters are optimized for specific applications, with an emphasis on robust and
reliable retention of organisms. For the most critical application of final product sterilization, modern
sterilizing-grade membrane filters are designed and built to meet the strict requirements of the
biopharmaceutical and pharmaceutical industries and regulatory authorities (9-13). These filters have
undergone continuous optimization and development, resulting in a robust filter designs with wellcontrolled
attributes such as (14):

• Steam Sterilization Resistance: Filters can withstand high temperatures making them suitable
for sterilization by in-line steam or autoclaving, even for multiple cycles. The
temperature/differential pressure profiles of a filter are well-established, which supports the
appropriate operating conditions during steam sterilization, preventing any damage.
• Irradiation Resistance: Filter capsules may also be supplied presterilized (e.g., if part of a
single-use system (SUS) assembly/manifold). These filters are compatible with irradiation
sterilization methods, such as gamma or x-ray irradiation. Presterilized filters should be
validated to show proof that they are sterilized, even when they are sterilized within the
assembly, and the SUS is proven to be compatible with the sterilization method (15).
• Minimal Extractable Substances: Even when used straight out of the box, these filters release
extremely low levels of extractables that have been published and are detailed in qualification
documentation from the filter manufacturers.
• Mechanical Resistance: Modern sterilizing filters can withstand high-differential-pressure
conditions, as validated by the filter manufacturers ensuring their durability and reliability.
• Low Unspecific Adsorption: Most filters have been optimized to greatly reduce the amount of
unspecific adsorption, which is important to avoiding the retention of target proteins or other
important fluid components, for example polysorbate.
• Optimal Total Throughputs: Some filters are designed to maximize volume of filtration,
effectively reducing the cost per liter of filtered material. Highly asymmetric and heterogenous
double-layer filter designs are throughput-focused filter types.

• Flow Rates: Filters are engineered to achieve efficient flow rates, which can reduce processing
times or the required filtration area. Engineering features such as high pleat density, large
effective filtration area (EFA), low-pressure drops, and single-layer membranes are available
for flow rate optimization.
• Robust Integrity-Testing: Sterilizing-grade filters are required to be tested for their integrity
using nondestructive methods such as diffusive flow, pressure decay, or Bubble Point tests.
These tests have been successfully used for decades and are a reliable, essential filter integrity
test.
• Full-Qualification Documentation: Filters are accompanied by comprehensive qualification
documentation, which lists a multitude of tests (e.g., endotoxin release, biological reactivity)
that ensure they meet the necessary regulatory standards.
• Individual Process Validation: The filters undergo process validation specific to the drug
product being filtered under process conditions, confirming their compatibility, performance
and retentivity.
• 100% Integrity-Tested: Every sterilizing-grade filter is individually integrity-tested by the
filter manufacturer as a release criterion for the product.
• Transportation and Shelf Life: Filter suppliers also recommend necessary shelf-life data for
filtration and single-use assembly products and validate the packaging and transportation of
these components to ensure the products are not damaged.
• Membrane Casting Batch Consistency: Filter supplier implemented controls and automation
to assure that the membrane casting process consistently delivers the same membrane quality
and performance.

## 4.0 Filter Qualification, Design, and Characterization

Filter manufacturers typically provide the information discussed in this section, which should be considered
by the end user for their risk assessment when selecting a sterilizing-grade filter. Since bacterial retention
studies and filter integrity testing are important components of manufacturer-supplied information, those
topics are covered separately in Section 6.0 and Section 7.0, respectively.

Sterilizing-grade filters are available in a variety of sizes, configurations (e.g., flat sheets, capsules,
cartridges) and membrane chemistries so that the filter user can select the most appropriate filter for a
particular application. Commonly used membrane chemistries include polyvinylidene fluoride (PVDF),
polysulfone (PS), polyethersulfone (PES), nylon, cellulose esters, polytetrafluoroethylene (PTFE), polyester
and polypropylene. Not only do different chemistries impart differences in flow characteristics and filtration
performance, but they also affect the levels of filter extractables and leachables, the thermal and physical
properties of the filter, and the interactions with the process stream (as determined via compatibility and
adsorption-testing). Once the membrane is manufactured into its final format, it is evaluated by the filter
manufacturer with respect to flow rate and pressure drop, operating limits of temperature and pressure,
extractables, compatibility, cleanliness, sterilization conditions, integrity, and bacterial retention applying
defined test conditions.

Since sterilizing-grade filters are a critical part of any aseptic process, a significant amount of testing and
documentation is conducted by filter manufacturers to qualify their filters. Filter support documentation may
include a validation or qualification guide, FDA Drug Master File (DMF), product literature, specification
sheets, technical bulletins and application notes. Pharmaceutical-grade filters are also often accompanied by
an individual certificate listing the filter part, lot numbers and release criteria. The supporting documentation
from filter manufacturers can help the end users in their assessment for qualifying filters and supporting
regulatory inquiries.

### 4.1 Filter Qualification and Validation

Filter manufacturers typically publish results of tests performed according to applicable compendial
methods to qualify the filter as suitable for pharmaceutical applications. This qualification documentation
supports, but does not replace, performance qualification as a part of process validation conducted by the
filter user. Table 4.1-1 lists qualification and lot-release tests on membranes and devices commonly
performed by manufacturers and validated by filter users.

**Table 4.1-1 Qualification and Validation Recommendations**

Criteria Filter
User
Filter Manufacturer

Membrane Device

Bacteria Retention in Water or Saline Lactose Broth
(SLB) with Integrity Test Correlation in Water or
Solvent
- Q, L Q, L

Bacteria Retention in Product with Respective Process V - -

Chemical Compatibility, Effects on Filter Integrity V Q Q

Extractables E Q Q

Leachables E - -

Sterilization Method, Effects on Filter Integrity E Q Q

Integrity Test (Water or Solvent) E Q, L Q, L

Integrity Test (Product) V - -

Toxicity Testing – Bioreactivity Tests - Q Q

USP Bacterial Endotoxin Test E - Q, L

USP Particulate Matter E - Q

USP Nonfiber Release E - Q

Flush Volume E - Q*

Filter Selection/Fit for Purpose E - -

Impact to Product Critical Quality Attributes (CQAs) E - -

L = Filter Manufacturer’s Lot Release Criteria

Q = Filter Manufacturer’s Qualification

V = Process Validation Testing (Rationale can be provided for scale-down testing)

E = Evaluate the Need for Additional Testing, Document Technical Assessment

+ = Fully Assembled Filter with Membrane, Filter Components and Plastic Housing (if applicable)

* = Typically Using Water

Further details of the tests listed in Table 4.1-1 are provided below:

• Bacterial retention of a filter is initially qualified by the filter manufacturer in saline lactose
broth (SLB), water or another suitable carrier fluid and then again by the filter user under
process conditions for critical sterilizing-filtration applications. In each case, 100% retention is
correlated to an integrity test using a standard reference fluid (e.g., water or alcohol). During the
membrane development process, filter manufacturers define the correlation between integrity
testing and bacterial retention following ASTM F838 methodology (6).
• The chemical compatibility between the filter and product can be qualified by the filter
manufacturer. Filter-user testing is often necessary to confirm compatibility of the process
fluids with the filter and operation conditions. Tests such as product-based integrity and
bacterial retention may be used to assess chemical compatibility.
• Extractables may be qualified by the filter manufacturer using model solvents and specific
laboratory conditions and may also be determined by the filter user for product-specific fluids
under simulated processing conditions (e.g., temperature, duration). Based on the results
obtained from the extractables study, the filter user should evaluate the need for testing of
leachables. The leachables study should build upon the identified extractables and be tested
with the product in scope or a representative surrogate.
• Filter safety testing (i.e., biological reactivity) is conducted by the filter manufacturer and does
not need to be repeated by the filter user (16).
• The capability of a filter to be sterilized and the maximum sterilization conditions
recommended for the filter are qualified by the filter manufacturer. The filter user is responsible
for validating the sterilization method used in the process*
• Particulate matter, nonfiber release, oxidizable substances, total organic carbon (TOC),
conductivity testing and flow rates may be qualified by the filter manufacturer. The filter user
should determine if additional testing is required due to differences in processing conditions.
• Filter selection done by the end user will look at filter sizing, filter type based on process scale
and design, and impact on product critical quality attributes (CQA) by evaluating compatibility
(e.g., adsorption, reaction, degradation) through contact with the filter unit.
• Since solvents could be used as wetting agents to determine if the integrity test failed due to
wetting problems, it would be advisable to determine the appropriate amount of flush volumes
needed.

*Note: Sterilization of filter capsules by gamma or x-ray irradiation is generally validated by the filter
manufacturer.

### 4.2 Filter Design

Sterilizing-grade membranes are employed in a wide variety of sizes and filter formats, including cartridges,
capsules and disc styles to suit many scales and types of applications. Membranes can also be pleated to
increase the surface area, and this can be placed in either a cartridge or a capsule filter. Figure 4.2-1 shows
examples of filter cartridges, capsules and components.

*[Figure 4.2-1 Filter Cartridge (A), Filter Capsule (B), Filter Components (C)]*

The design of filter elements is important because design features like membrane pleat shape and density
determine the EFA which, in turn, influences the flow rate and total throughput (i.e., the larger the EFA, the
higher the flow and/or throughput). If the pleat density is too high, the free flow path is restricted, and the
flow is reduced; if the pleat density is too low, the EFA might be too low and the flow restricted. There may
be a difference in the pleating geometry used in a scale-up study in process development (PD) and the
pleating geometry of the process-scale device, since high-EFA pleating geometries are typically used in
process-scale devices only. Potential differences in performance should be evaluated during PD (see Section
5.4.1 for additional information).

Depending on the filtration needs (e.g., product, process, equipment or facility constraints), different setups
and filter types can be employed. Figure 4.2-2 shows different filter types and configurations.

*[Figure 4.2-2 Different Filter Types and Configurations]*

*[Figure 4.2-3 and Figure 4.2-4 are cutaways that reveal the internal components of a typical cartridge and]*

capsule. Filter capsules, composed of filter elements preinstalled and sealed in plastic housings, are
compact and relatively lightweight. Depending on the orientation and configuration of the capsule or
filter-housing, the fluid may enter from the bottom or from the top of the capsule or housing and flow
around the outside of the internal filter module, pass through the pleated filter membrane to the interior
core, and exit the outlet.

*[Figure 4.2-3 Cartridge Internal Components]*

*[Figure 4.2-4 Capsule Internal Components]*

Stainless-steel filter housings and disposable filter capsules are available in two configurations: T-style or
in-line style (Figure 4.2-5A and Figure 4.2-6A, respectively). The T-style housings have the inlet and outlet
pipe adjacent to each other at the bottom plate of the housing (Figure 4.2-5B). The inlet pipe in the in-linestyle
housing is positioned at the dome of the housing and the outlet pipe on the bottom plate (Figure 4.2-
6B). Most housings and capsules also have vent ports for removing air.

*[Figure 4.2-5A Filter T-Style Housing]*

*[Figure 4.2-5B Flow Diagram for T-Style Filter]*

*[Figure 4.2-6A Cutaway View of an In-line Style Stainless-Steel Filter Housing with Cartridge]*

*[Figure 4.2-6B Flow Diagram for In-Line Filter]*

In addition to housing styles, the filter elements themselves have multiple adapter options (Figure 4.2-7) for
fitting the filter into the housing. The most common filter-cartridge adapter is a double O-ring, doublebayonet
adapter. This adapter type is twisted into place on the base plate to ensure a tight seal between the
filter element and the housing base. As housing-base tolerances may vary, it is imperative that the specific
filter and housing provide the proper seal throughout the filtration operation (e.g., from steam-in-place (SIP)
through post-use integrity-testing).

*[Figure 4.2-7 Cartridge Adaptor Options]*

### 4.3 Filters in Single-Use Disposable Systems

It is common to build transfer sets of filters integrated with tubing, sensors, and connectors that are
presterilized (e.g., gamma, x-ray) typically used together with other single-use technology or in hybrid
systems together with stainless steel equipment. Furthermore, the assembling of multiple filters in ready-touse
assemblies has also become common. These systems offer some advantages over conventional stainlesssteel
equipment including the:

• Ability to obtain presterilized
• Reduction in setup time
• Elimination of cleaning
• Elimination of cleaning validation
• Elimination of risk of cross-contamination
• Elimination of filter housing maintenance
• Reduction in operator exposure due to closed systems
• Reduction of drug product contamination from the external environment
• Reduction of the operator’s exposure to the drug substances

Implementation of SUS should follow a risk-based approach that considers product and process
compatibility and demonstrates robustness, suitability, and consistent performance under intended use
conditions. (Refer to PDA’s Technical Report No. 66: Application of Single-Use Systems in Pharmaceutical
Manufacturing for additional information.)

Depending on the processing considerations and setup requirements, the filter user chooses the best
configuration (capsule, cartridge in stainless-steel housing, or hybrid) for the filtration operation. Use of
disposable capsules obviates the need for cleaning validation and equipment amortization, which may
reduce operating costs. Another advantage is that operator contact with potentially hazardous products is
minimized. The use of stainless steel must be balanced against the use of capsule filters, which can be single
use and can reduce utilities and validation efforts. Different optimization can be performed based on
environment (waste), energy use, or financial analysis.

### 4.4 Filter Toxicity and Biocompatibility

One important aspect of selecting a filter is assessing the safety of the filter medium and/or device. Filter
manufacturers should provide information about the origin and toxicity of the filter components, including
their origin of animal-derived components.

#### 4.4.1 Toxicity

Filters must not impart toxic materials to the fluid stream. Filter manufacturers generally qualify filters
through performance of standardized testing in compliance with compendial methods (16). These tests
involve the introduction of filter extracts or actual filter samples into cell-culture systems. Reactivity of the
cell culture to the test article is assessed visually, scored and compared against predefined acceptance
criteria for toxicological safety. The results of these tests are commonly included as part of the filter
validation guide.

Over the years there has been a shift away from animal-based testing, to better align with animal-welfare
principles.

#### 4.4.2 Animal-Derived Materials

The filter manufacturer typically includes information on biocompatibility of animal-derived materials used
in filter manufacture. The use of bovine tallow-derived stearates poses essentially no risk for transmission of
transmissible spongiform encephalopathies (TSE) and other diseases. Typically, the manufacturing
processes used to produce bovine tallow and tallow derivatives are very rigorous and meet or exceed safety
requirements (17, 18).

### 4.5 Filter Cleanliness

Particulate contamination from the filter, filter hardware, filter installation and the process should be
evaluated and considered since each source may contribute to particle burden in the product. Filter flush
effluent samples are examined for particles greater than 10 microns and greater than 25 microns. Filter flush
effluent is considered compliant upon meeting compendial guidelines for particulate matter in injections.
Using these criteria, filters are also qualified as nonfiber-releasing (10-12).

In addition to particles, filters may be a source of other contaminants, such as endotoxin, organic carbon, or
oxidizable substances. Potential sources may include surfactants, wetting agents, additives in the plastic
component manufacture, manufacturing debris and materials of construction (MoC). Preflushing filters may
reduce levels of particulates and contaminants and may be performed as part of the wetting process prior to
integrity-testing. A filter can be preflushed based on the extractable studies, taking into account the
sterilization method and process step.

Note: Filter flushing and preflushing are performed by the filter user.

### 4.6 Filter Extractables

Since sterilizing-filters are often used in the final manufacturing steps of a pharmaceutical production
process, the effect of the filter on the final product should be evaluated. An extractable is any chemical
component that is removed from a material by the application of an artificial or exaggerated condition (e.g.,
solvent, temperature, time). A leachable is a chemical component that migrates from a contact surface into a
drug product or process fluid during storage or normal use conditions. These are typically a subset of
extractables (19, 20).

Potential sources of extractables and leachables include, but are not limited to, membrane components (e.g.,
plasticizers, surfactants, antioxidants, residual solvents, device support layers), and device components (e.g.,
end caps, housings, cages, O-rings). Factors affecting leachables may include the chemical properties of the
process stream, sterilization process, contact time, temperature, and volume-to-area ratios (21). Filtration of
organic solutions may lead to higher levels of leachables than aqueous solutions.

Extractable data may be obtained from the filter manufacturer or may be generated by the filter user (see
Section 6.5 for filter user-generated data). Filter manufacturers can use model streams to determine the
extractable profiles under worst case conditions (22). Although an important component of filter validation,
the level of extractables and leachables from most sterilizing-grade filters that can potentially enter the
process stream is relatively low. Flushing the filters prior to use can further reduce these levels as
demonstrated by flush curves measured by TOC or other tests for specific leachables (21).

Data should ideally include a comprehensive list of the compounds that could be leachables when the filter
is used in the actual formulation under process conditions. The necessity to perform leachable study should
be evaluated based on risk determined from extractable studies and risk to patient safety.

#### 4.6.1 Chemical Compatibility

The chemical compatibility of the filter device must be evaluated to avoid potential filter damage or
alteration and to avoid fluid contamination by either leachables or particulates. Filter manufacturers will
have general chemical-compatibility guides based on the MoC and a range of standard chemicals. Since
there may be numerous chemical interactions between filter device components and the process fluid or
solvents, the typical chemical compatibility table provided by the filter manufacturer is commonly used as a
starting point for further testing. More extensive testing should be performed by the end user to determine
chemical compatibility of the filter device and process fluid under process conditions (see Section 6.0 for
more details).

Chemical-compatibility testing should encompass the entire device and depends on the fluid, filtration
temperature, and contact time. Additional studies should be performed by the filter user. Additional productspecific
studies may be conducted by the filter vendor on request from the filter user to ensure there is no
impact to product CQAs. Common chemical-compatibility tests include integrity test, tensile strength,
nonvolatile residue (NVR), extractables, particulates, flow rate, optical or scanning electron microscopy
(SEM), burst pressure and membrane/O-ring thickness (23). Use of a combination of tests is recommended
since a single test might not be able to detect subtle incompatibilities.

### 4.7 Operational Ranges

Manufacturers typically specify the maximum operational temperature, pressure, and sterilization
temperature limits and provide water flow-rate data for their filters. Manufacturers provide maximum
forward and reverse differential pressure limits at specific temperature conditions, incorporating adequate
safety margins. This information may also reference limits at different temperatures, facilitating the
selection of process flow rates, temperatures, and sterilization options compatible with the filter. Section 8.0
addresses selection and validation of sterilization options by the filter user.

Filter-system flow rate at a given differential pressure is a function of membrane polymer and structure type,
pore size, housing inlet and outlet diameter, effective filter area, fluid temperature and viscosity. During the
design of a process filtration system, these variables should be evaluated for compatibility with the operating
limits of the filters and the filter area selected. Filter suppliers also test pressure-pulsation cycles to
determine the mechanical stability of the filter device. However, care should be taken to avoid pressures
exceeding the manufacturer’s stated specifications of maximum allowable differential pressure at specified
temperature ranges.

Note: There may be a distinction between the operational ranges with which a filter is generally suitable,
and the “validated filtration parameters” for a sterilizing filtration unit operation, as defined in processspecific
bacterial retention study validation in order to cover scale-down worst-case process conditions (see
Section 6.0).

### 4.8 Shelf Life and Shipping Studies

Filter manufacturers will validate packaging and shipping of the filters according to industry standards to
ensure that the products can withstand common transport hazards (24). In addition, filter manufacturers will
establish shelf-life recommendations based on product stability under defined conditions, which will be
valid if the filter is stored and handled properly. These recommendations can be used by the filter user to
establish expiration dates or use-by dates.

Filters that are sterilized via gamma or x-ray irradiation will have expiration dates due to the sterility claim
associated with the sterilization method.

## 5.0 Filtration Process Design, Usage, and Handling

Considerations

According to the FDA’s Guidance for Industry: Process Validation: General Principles and Practices
(Revision 1), quality, efficacy, and safety must be built into the product and cannot be tested at the end of the
manufacturing process. This concept is especially important for many sterilizing filtration operations, as the
filter often represents the final microbial control barrier prior to patient dosing (25). This guidance document
outlines three stages of process validation: Stage 1-Process Design, Stage 2-Process Qualification, and Stage
3-Continued Process Verification. Section 5.0 focuses on the process design aspects, and Section 6.0
focuses on the process-specific validation requirements for a sterilizing filtration process. Continued process
verification is generally out of scope in this document and is covered in other guidance documents. The
process design methodology discussed here is consistent with the principles of the International Council for
Harmonization (ICH) Quality Guideline (Q8): Pharmaceutical Development, which is to first evaluate the
design space, then develop a control strategy (8).

Membrane filters are used for multiple applications within the pharmaceutical industry and therefore,
membrane filter types, designs and configurations are as varied as their applications. This chapter will focus
on the process design and usage of sterilizing filters for the removal of microorganisms in pharmaceutical
processing. Many of these design principles will also apply to the use of sterilizing-grade filters in locations
other than the final sterilizing barrier for the control of bioburden, although those use cases have
significantly reduced risk to product quality and may not require the same level of validation and controls to
be applied (26).

### 5.1 Process Design: Design Space Evaluation

An initial evaluation of the design space for a sterilizing-filtration operation will generally encompass a
survey of the product properties, compatibility and required operational ranges used in the process.

#### 5.1.1 Product Properties and Filter Compatibility

A good first step in the design of a sterilizing-filtration process is to evaluate the solution that needs to be
sterilized and how it will interact with the filtration system. A thorough evaluation of the properties of the
filtrate will guide in the selection of a filtration membrane and housing system that can withstand chemical
stress such as solvents, strongly basic or acidic media, and high-ionic strengths. After performing this type
of analysis, it can allow the user to select filtration systems that are appropriate for the application.

For the second step of the compatibility analysis, an evaluation of the physical properties of the process fluid
and intended processing parameters should be carried out. Characteristics such as the fluid temperature
range, particulate load, and viscosity can also affect the filter membrane and filtration system selection. The

system must be able to handle the mechanical stresses placed on it and remain integral for the duration of
the filtration process. Since there may be numerous chemical interactions between filter device/SUS
components and the process fluid or solvents, the typical chemical compatibility table provided by the filter
manufacturer is commonly used as a starting point for filter selection.

Another dimension of filter compatibility to consider is adsorption of components from the process stream.
Adsorption is a mechanism of product binding to the membrane or product contacting materials, which may
affect the product composition and concentration. Potential adsorption of product components to the filter
and other components of the filtration system (e.g., bags, connectors, tubing) must be considered
independently. Considerations should include membrane type, MoC used throughout the filtration system,
hardware, and support materials. Flow rate, product concentration, contact time, process fluid components,
temperature and pH can also affect the level of adsorption.

In instances where elevated adsorption occurs in the beginning of the filtration process but levels off during
filtration, the filtered volume could be pooled to achieve the specified product composition. During PD,
adsorption tests are typically performed at small scale and confirmed at large scale. These tests can also be
used to establish potential pretreatment options (e.g., buffer flush, soaking), necessary process parameter
options or membrane polymer choices. Elevated levels of nonspecific product adsorption on the filter
membrane can result in accelerated filter-fouling and performance degradation that would need to be studied
as part of filter-sizing studies.

#### 5.1.2 Defining the Design Space and Operational Ranges

Knowledge of the desired at-scale process prospectively allows setting ranges to be studied during the
development of the filtration process. For example, a survey of the compounding process and the maximum
and minimum volumes that will flow through the filter during the sterilizing filtration process can create an
important set of operational ranges that the filter must be able to process. In addition, a subset of these
parameters will define ranges that need to be validated later (see Section 6.3). While some parameters can
be difficult to know during the initial PD exercise, it can be useful to evaluate the potential market demands
for the product and maximum expected batch volume. This will potentially reduce the need for additional
development and revalidation of the sterilizing-filtration process as the conditions change over the product
lifecycle. Table 5.1.2-1 shows a list of potential factors to consider during the process design phase that can
help determine operational ranges to study.

**Table 5.1.2-1 Factors to Consider When Developing Operational Ranges for Study During**

Sterilizing-Filtration Process Design and Development

Factor Extent Rationale

Temperature Refrigerated to
Warmed
Dependent on product quality effects and physical property
optimization, can affect filter differential pressures and flow
rate due to viscosity differences and also microbial growth
rates

Total Product
Volume
Minimum and
Maximum
Sets limits for bacterial retention study validation and allows
proper filter sizing

Flow Rate Zero to Maximum
Expected
Flow rate dependent on application, e.g., in line with sterile
filling machine or bulk filtration

Differential
Pressure
Minimum to
Maximum
Requires appropriate development studies to determine
pressure/flow rate relationship; reasonable maximum
differential pressure should be defined based on expected
conditions as well as a minimum expected to aid, for
example, in detection of filter installation errors

Filtration Time Maximum Dependent on the processing time required, determines
how long the process will take, including process setup and
any necessary process stops

Product
Contact Time
Maximum Extended contact time may impact product compatibility,
membrane fouling, or filter integrity

Driving Force Pulsatile and/or
Constant Pressure
Determines what type of pump or driving force will be used
in the commercial setting; certain filters may be used in
more than one manufacturing setup

Configuration Single or Redundant
Filter Setup or
Multiple Filter
Setup

Knowledge of physical size constraints for the filter may
necessitate the use of multiple filters site, business or
procedural factors may also require the use of redundant
filtration; and knowing this up front will aid in the design of
the filtration process

### 5.2 Flow Characteristics

Flow-performance criteria during a filtration operation can include parameters such as flow rate, total
throughput, thermal and mechanical resistance, and nonspecific adsorption. A filter’s EFA is used in
calculations for scaling filter performance, determining extractables levels, reporting flow rates (i.e., flux),
and assuring of bacterial retention. Since applications vary, desired filter-performance characteristics also
vary. For example, since buffers widely utilized in purification processes are nonfouling, the optimum filter
may be one with the highest flow rate; for solutions that may contain foulants, such as media, the optimum
filter may be one with the highest filtration capacity for that solution. Optimizing the filter to the process
requires determination of critical and key operational parameters and performance requirements.

Filter flow rate is affected by such parameters as the EFA, membrane porosity, pore size, thickness and area,
differential pressure, flow path design, fluid viscosity, and temperature. Table 5.2-1 shows the relationships
between flow rate and a common list of process parameters.

**Table 5.2-1 Common Factors Affecting Flow Rate**
| Higher Flow Rate | Lower Flow Rate |
| --- | --- |
| High Porosity/Greater Void Volume | Low Porosity/Lesser Void Volume |
| Large Pore Size | Small Pore Size |
| Thin Membrane (less hydraulic resistance) | Thick Membrane (greater hydraulic resistance) |
| Large Effective Filtration Area (EFA) | Low Effective Filtration Area (EFA) |
| High Differential Pressure (fluid force) | Low Differential Pressure |
| Straight Flow Path | Tortuous Flow Path |
| Low Viscosity | High Viscosity |
| High Temperature | Low Temperature |

Most of these parameters are governed by membrane and filter designs or particular fluid properties. The
primary parameter is the differential pressure that is, the difference between inlet (feed side) and outlet
(filtrate side) pressure. The differential pressure can be adjusted within the filter manufacturer supplied
maximum temperature/pressure ranges to achieve the desired process flow rates. Studying the required
pressure and flow rate ranges using scale-down membrane areas with the actual product stream is further
elaborated in Section 5.4.1. It is important to understand this information thoroughly to determine the ranges
that will be challenged during the validation activities (see Section 6.8).

#### 5.2.1 Inlet and Differential Pressure

From the filtration curves it can be determined that increasing the pressure across the membrane will result
in an increased flow rate under most processing conditions, which is an important variable to control during
the sterilizing-filtration process. There are two important ways to specify the pressure: Differential pressure
(ΔP) is the difference in pressure between the upstream (inlet) and downstream (effluent) sides of the filter,
while inlet pressure is the pressure measured directly on the inlet side of the filter. To determine the
differential pressure, the inlet pressure must be measured using a pressure gauge or sensor. When
appropriate, outlet pressure may be assumed to be atmospheric (e.g., a vented downstream vessel). If the
outlet pressure is higher than the atmospheric pressure (e.g., when the fluid is transferred into a pressurized
or unvented system or if the flow rate causes a significant pressure drop downstream of the filter) either the
outlet pressure must be measured, or assume that the inlet pressure represents a worst-case upper limit on
the true differential pressure.

Depending on the flow regime and the safety factor to the validated maximum pressure it may be important
to monitor the inlet or differential pressure of the filtration system (see Section 6.8). Increasing differential
pressure at a constant flow rate is indicative of filter fouling, and detection may be important for certain
types of process streams that are susceptible to fouling behavior.

Many modern filtration systems are driven by peristaltic pumps, especially in the case of SUS. As peristaltic
pumps are a type of positive displacement pump, the flow rate can be easily controlled (correlated with
pump revolutions per minute (RPM) and defined tubing diameter) without needing to worry about cleaning
internal pump components or tubing systems; this adds a degree of safety and convenience to many
filtration process designs. On the other hand, filtration can also be performed by pressurizing the system,
managed by a pressure control valve, which avoids the need of a pump system. In most final sterilizingfiltration
systems, the process stream is nonfouling and the filtration pressure remains relatively consistent
over time. With proper system design and appropriate safety factors, constant flow rate or pressure filtration
setups can operate in pressure regimes well below validated filter pressure limits. Some form of pressure
control or monitoring may be an expectation of certain health authorities, even for pump-driven sterilization
filtration processes that do not exhibit significant fouling.

#### 5.2.2 Filtration Process Temperature

Process temperature has a variety of effects on the filter and fluid stream. Elevated temperatures reduce the
maximum allowable differential pressure due to the strength of the mechanical structure of the filter.
Pressure limits may vary between forward-and-reverse flow directions, based on filter structure (reverse
flow often being considered worst-case). Pressure limits at specific process temperatures may be listed by
the filter manufacturer in the qualification documentation of the particular filter type. Figure 5.2.2-1 depicts
an example of the relationship between process temperature and maximum differential pressure, that is, the
higher the process temperature, the lower the pressure resistance of a filter. Under elevated temperature
conditions, filter users should evaluate the risk factors, and if necessary, monitor process parameters
carefully.

In addition to affecting differential-pressure capabilities, higher process temperatures could result in
elevated leachables or chemical incompatibilities. Consideration should also be given to temperature, as
some polymeric membranes are sensitive to hydrolytic and oxidative alterations by heat.

Higher temperatures reduce fluid viscosity and increase the flow rate through the filter for most Newtonian
fluids. Higher viscosities could also result in the need for higher differential pressures to achieve a required
flow rate. These elevated differential pressures correspondingly require increased monitoring of flow rate
and/or differential pressure to avoid exceeding the rated pressure conditions.

*[Figure 5.2.2-1 Example of Filter Pressure/Temperature Resistance]*

#### 5.2.3 Filtration Time

Filtration time (duration) is the amount of time required to filter a single batch (or campaign) of production
fluid. The process duration will differ depending on if the process is a single bulk-sterilizing filtration
operation or an intermittent in-line-filtration operation used to maintain the level in a break tank connected
to dosing pumps during a sterile filling process. Increasing filtration times may increase the potential for
bacterial penetration; therefore, the filter retentive performance should be validated to the maximum
product/filter contact time for the process (see Section 6.8).

As part of the development of the process an assessment should be conducted to determine the longest
potential product-contact time with the sterilizing filter. The worst-case process time should include
maximum filling-process duration, including manufacturing interruption scenarios prior to and during
filtration.

### 5.3 Filter Throughput and Maximum Volume

Filter throughput, or capacity, is the measurement of a total volume that can be filtered through the EFA
under defined process conditions. Filter capacity depends on membrane material, porosity, pore size,
nonspecific adsorption, pore shape, filtration area, pressure differential, contaminant load, and the physical
properties of the product type being filtered. Table 5.3-1 lists potential factors affecting throughput.

Many process fluids that undergo sterilizing filtration are in the final formulation and do not result in
significant fouling or filter-flux degradation over any practical volume. In many cases, there is no practical
limit to the throughput, while in other cases, there can be particulate matter or subvisible particles present in

the filtrate that do limit the filter throughput. In some cases, the prior processing history of the filtrate can
affect the capacity (e.g., high-shear mixing of monoclonal antibodies can generate agglomerates) (27).
Appropriate scale-down studies can be used to determine these behaviors as outlined in Section 5.4. Even in
the case where no defined maximum filter capacity can be determined, the maximum volume that will be
filtered should be specified so it can be covered during the filter-validation studies (see Section 6.8).

**Table 5.3-1 Factors Affecting Throughput**
| Higher Total Throughput | Lower Total Throughput |
| --- | --- |
| High Porosity/Higher Void Volume | Low Porosity/Lesser Void Volume |
| Large Pore Size | Small Pore Size |
| Low Nonspecific Adsorption | High Nonspecific Adsorption |
| Asymmetric Pore Shape | Isotropic Pore Shape |
| High Effective Filtration Area (EFA) | Low Effective Filtration Area (EFA) |
| Low Contaminant Load | High Contaminant Load |
| Nondeformable, Hard Contaminant | Deformable, Soft Contaminant |
| Low Shear-Stress History | High Shear-Stress History |

### 5.4 Scale-Down Systems and Testing

PD activities are generally done at the bench-scale using scale-down systems to minimize material
quantities and allow for faster and more efficient experimentation. In order for the scale-down systems to be
representative of the larger scales used in manufacturing the available systems and scaling considerations
are discussed in this section.

#### 5.4.1 Small Scale Device Testing

Filter-screening is generally performed using the process fluid in a constant flow or constant pressure
experimental setup. Traditionally, 25mm or 47 mm discs or disc composites (Figure 5.4.1-1) installed in
holders (Figure 5.4.1-2) were used for these screening studies. With modern filtration systems, however,
most filter manufacturers have developed specialized encapsulated discs or small pleated capsules that better
represent the flow dynamics of full-sized filters and allow closer estimates of scaling by EFA (see Figure
4.2-2). The screening tests can also be helpful to determine potential prefilter combinations to optimize the
total throughput and reduce fouling, where required. For yield-sensitive applications, filtrate samples can be
taken at frequent intervals to determine any nonspecific adsorption effects. Small-scale device tests may not
always accurately predict the actual process in regard to flow-path dynamics and pleat-density parameters,
however, and therefore may not scale up in a linear fashion, so care must be taken in the experimental
design to ensure that any throughput or flux limitations are well understood.

*[Figure 5.4.1-1 Filter Disc]*

*[Figure 5.4.1-2 Filter Disc Holder]*

Most filterability tests are performed by keeping pressure constant and measuring the decline in flow rate as
a function of filtered volume. The pressure set-point should mimic production pressure conditions.
Nevertheless, there are some applications that should be evaluated using constant flow rate, such as the
filtration of media. For constant-flow testing, the flow rate is controlled while the pressure gradually
increases until a maximum pressure is reached. This mode of testing avoids compression of contaminants
that may be captured on the membrane surface, leading to membrane fouling. Either constant-flow or
constant-pressure filterability tests can be used to predict manufacturing-scale performance. Ideally, smallscale
tests should be performed using flux and pressure conditions representative of the manufacturing-scale
process or a representative worst-case scenario.

The main output of these small-scale filtration studies is to develop and understand the flow curves and
evaluate filter flux at different pressure conditions, thus allowing selection of the optimal filter size and
configuration to use in the at-scale process. If properly designed, the fouling propensity of the filter and
process fluid combinations can also determine a maximum filter-throughput value. With this information
under representative temperature and process conditions, the process can be scaled up using the ratio of
EFA.

#### 5.4.2 Filtration Process-Scaling Considerations

Scaling up filtration performance from a laboratory-scale filter unit to a production-scale system, which
might contain multiple cartridges or units, poses several challenges to the filter user. Challenges include, but
are not limited to:

• Product for filter trials might be in limited supply due to high production costs and limited
production runs.
• Surrogate fluids might not be representative of the actual process fluid for certain behaviors like
fouling or non-Newtonian flow dynamics.
• Small-scale filter studies may not represent the conditions under which filtration occurs in the
manufacturing process.
• Laboratory-scale filter elements used for testing may not be directly predictive of large-scale
filter capacity.

To overcome these challenges, filter users may elect to work with the filter manufacturer(s) to design smallscale
studies that either closely approximate production systems or, alternatively, rely on appropriate safety
factors to account for unknown variables and ensure successful filtration operations at scale.

Careful attention should be paid to ensuring that the material used for the scale-down studies is
representative of the materials used for commercial production. In the production of proteins, there have
been several documented examples where shear stresses imparted on the molecule upstream in the process
result in the formation of subvisible particulates that can cause filter-fouling (27). In many cases the same
solution that has not been subjected to the same levels of shear stress will show no signs of fouling behavior;
this represents a scale-up risk that can be difficult to characterize that can manifest itself as filter-clogging
during production. In this instance, considerable study may be required to create appropriate scale-down
models of this shear behavior, as not all protein solutions and mixer types react in the same fashion. This is
just one example of the importance of understanding the full-scale process and the stress history of the
filtrate and how they affect filtration performance. There are also instances where freeze-thaw or shipping
conditions of solutions, such as lipid nanoparticles (LNPs) or lentivirus drug products can affect the
filtration performance (e.g., reduced volume throughput). It is critical that the impact of these factors is
understood to ensure small-scale studies provide representative data.

### 5.5 Filtration System Design and Integration

A user requirement specification (URS) is a helpful tool in designing a SUS or stainless-steel setup. The
filter user should have detailed knowledge of all process operational parameters to define the requirements
of a particular assembly. The suitability of particular components depends on the requirements of the
product and process. URSs typically include:

• Flow rate
• Pressure conditions
• Temperature conditions
• MoC
• Filter (pore size, area)
• Product volumes
• Instrumentation

• Sampling requirements
• System configuration
• Fluid properties
• Integrity-test methods and needs
• Sterilization method
• Documentation requirements

In addition to the integrity-test considerations stated in Section 7.0, the following points should be
considered for filtration systems:

• Pressurization of the upstream side of the filter with gas after wetting
• Need for a downstream vent filter to accommodate the gas flow
• Mechanism to aseptically remove the wetting fluid from the system, if necessary
• Use of a hydrophilic drain filter and a separate hydrophobic vent filter or other appropriate
valves and drains for the system
• Use of a combination hydrophilic/hydrophobic vent filter, where applicable
• Appropriate placement of process controls, such as pressure sensors or flowmeters, and
required sampling locations

Note: Use of separate filters enables both to be integrity-tested in situ with water, whereas a combination
hydrophilic/hydrophobic filter can only be tested with alcohol, off-line.

The qualification tests listed in Section 4.1 are performed within the manufacturer’s defined conditions.
Assemblies of components require validation within the filter/single-use user’s process and environment.
Validation should be performed to cover actual or worst-case process conditions, preferably with the
product or a model (surrogate) solution. The single-use component or assembly should meet process and
regulatory requirements. The validation effort should ensure that the components/assembly functions as
intended and does not negatively influence product attributes, neither the product and process conditions,
nor the single-use components or assembly.

Furthermore, functionality tests verify that desired process conditions, (e.g., filtration time) can be met.
Documented evidence should be established that operational parameter specifications can be met repeatedly.

#### 5.5.1 Multiple Filters in Series

Manufacturing processes are frequently designed with trains of multiple filters in a series (sequential flow
through one filter after another), but the purpose of these extra filters varies from process to process, and the
design and purpose of each filter must be clearly documented.

5.5.1.1 Two-Filter Sterilization (Double Filtration)

In uncommon processes, where two filters together in series are both required to achieve sterility and the
train has been validated to achieve the sterilization of a specific product only when passing through both
filters, the filter train can be considered a single sterilizing unit, and both filters must successfully pass the
integrity test.

##### 5.5.1.2 Pre-Filtration

One of the most common purposes for additional filters upstream of the final sterilizing filter is for
prefiltration functions, as opposed to sterilization. An example is bioburden reduction that may be
performed with a sterilizing-grade filter, but the filter is not performing a strict sterilizing function. Rather, it
is assuring that a very low bioburden level is present before entering the final sterilizing filter.

Other prefilters may be performing functions unrelated to microbial control, such as aggregate or particle
removal prior to the final sterilizing filtration, that may not use sterilizing-grade filters.

##### 5.5.1.3 Redundant Filtration

Processes where an additional (redundant) sterilizing filter is placed in the filter train to ensure against loss
of product due to potential-integrity test failure of the primary sterilizing filter. The additional “secondary”
filter is typically identical to the primary sterilizing filter, is fully validated to sterilize the fluid on its own
and undergoes post-use integrity-testing as a contingency in the event the primary filter fails. Generally, the
filter closest to filling (farthest downstream) should be the primary filter (10). The pressure and flow-rate
controls are generally designed to apply across both sterilizing filters.

Figure 5.5-1, Figure 5.5-2, Figure 5.5-3, and 5.5-4 illustrate different filter trains that can be used for the
filtration operation (see Section 7.4.3 for additional information).

Note: DP/DS stands for drug product/drug substance.

*[Figure 5.5-1 Single Filter Train Configuration]*

*[Figure 5.5-2 Pre-Filter Train Configuration]*

*[Figure 5.5-3 Redundant Sterilizing Filter Train Configuration]*

*[Figure 5.5-4 “Double” Filtration Train Configuration (uncommon)]*

### 5.6 Pre-Filtration Bioburden Monitoring

An important aspect of filtration process design is pre-filtration bioburden monitoring: a common regulatory
expectation. The inlet to the final sterilizing filter should have well-controlled bioburden levels, despite the
extreme bacterial removal efficiency typically validated in retention studies (see Section 6.6) (28). The
difference between the low bioburden levels routinely entering the sterilizing filter, and the high levels
validated to be removed by retention studies provides a large safety factor which is an important principle in
sterilization by filtration. Factors to consider when designing a pre-filtration bioburden monitoring program
include:

• Relevant regulatory expectations for allowable bioburden limit (i.e., the acceptance criteria of
the test)

• Representative sampling time:

– If bioburden levels could rise over the course of the filtration operation, sampling at or
near the end of the filtration could be warranted. For short filtration durations or
bacteriostatic/bactericidal fluids, sampling at the beginning of the filtration may be
appropriate.

• Location of the sample: the pre-filtration bioburden sample should be taken immediately
upstream of the sterilizing filter (or, in cases of redundant filtration, upstream of the first
sterilizing filter), and downstream of any bioburden reduction filters.
• Impact of preservatives on the bioburden assay.

### 5.7 Flushing Conditions/Filter Priming

Sterilizing-grade filters generally must be flushed and primed prior to use, either in the process of integritytesting
or as a separate step, and filter manufacturers typically have recommendations for minimum flush
volumes. Pre-use flushing with water for injection (WFI), buffer, product, or sequential combinations as
necessary may be used to reduce leachables and can be important to reduce the level of nonspecific
adsorption and ensure that the filtrate is homogeneous during the process. Filter-priming is also necessary to
remove air from the filters and ensure that the filter membrane is fully wet thus making use of all of the filter
EFA during the process. For specific flushing considerations related to pre-use post-sterilization integrity
test (PUPSIT) refer to Section 7.0.

Pre-use flush volumes are typically determined empirically at scale for each installation based on the needs
of the process. Depending on the propensity of the filter to adsorb the product or excipients contained in the
product stream, there may also be a specific flushing solution used. For example, polysorbate or poloxamer
surfactants are common excipients in the final formulation of many protein-based pharmaceutical products.
Depending on the filter chemistry and the formulation composition, the saturation of adsorption sites on the
filter material with these excipients can occur considerably slower than the saturation of adsorption sites that
chemically bind the protein active ingredient, leading to reduced excipient concentrations at the beginning
of the filtration. In these instances, a surfactant containing flush buffer can considerably reduce the required
product flush volume, significantly increasing the product yield. The flush steps can be estimated using a
scale down system, although due to the flow dynamics and different surface area-to-volume ratios between
small-and-large scales, they require confirmation at full scale. In these instances, a larger flush volume,
calculated as a multiple of the EFA-ratio scale-down volume required, is used, the flush is done in a
stepwise fashion, and the material is collected after the filter. This fractionated material can then be
subjected to characterization testing, such as TOC, excipient concentration, or protein-specific assays that
can be used to generate a filter-flush curve to determine when the leachables are removed, the filter reaches
saturation equilibrium and the filtrate is completely homogeneous. Nonproduct flushes may need to be
chased with a product flush to avoid diluting effects and return the filtrate to a homogeneous state.

### 5.8 Filter Handling and Installation

An important part of the development of a sterilizing filtration process involves the installation and handling
of the sterilizing filters in the manufacturing environment. Filter cartridges must be installed into a filter
housing. Filters encapsulated in a polymeric housing may be part of a pre-assembled SUS assembly. Most
commonly, the filter cartridge will be installed into the filter housing and heat sterilized via in-line steam

sterilization or autoclaving. Capsule filters are commonly supplied presterilized via irradiation, or they can
be autoclaved by the end user.

#### 5.8.1 Cartridge Handling and Installation Considerations

By following these guidelines for cartridge-handling during the development of the process, users can
ensure the proper installation, maintenance, and performance of the filtration system.

1. Identification and Receipt

– Cartridges should be identified by checking the part number, lot number, and
description.

– Enclosed documentation such as the quality certificate or certificate of conformance
should be reviewed to verify the correct filter type and conformance with the
specifications.

– The outer and inner packaging material should be checked for damage with processes.
put in place to segregate and evaluate any instances of damage.

2. Installation

– Cartridges should be installed in the classified area as defined within the approved
contamination control strategy (CCS) to mitigate contamination.

– Cartridges should be handled with care and protected by the packaging during
installation to avoid contamination or unnecessary operator contact.

– Cartridges should be inserted into the filter-housing recess or adapter without twisting
and ensuring a secure fit without forcing it in place. If the cartridge includes locking
tabs, the cartridge should be rotated into position by holding it near the filter’s base
rather than at the closed end.

– If needed, the manufacturer's recommendations for lubricating O-rings and using a
product-compatible liquid should be followed.

– Proper alignment and secure installation to prevent leaks or bypass.

– Cartridges must be handled carefully to avoid damage to the filter media. Ensure proper
procedures or instructions are in place to note any dropping or rough handling of the
filtration system during installation.

3. Wetting

– Some filter cartridges are required to be wet with water before steam sterilization or
autoclave cycles. In that case care should be taken to achieve saturated steam
conditions on the porous membrane structure during the sterilization phase and to
ensure the differential pressure stays within the required conditions during the different
sterilization phases.

– Filter manufacturers typically have process recommendations on how to wet the filter
to ensure the entire membrane matrix is properly wet.

#### 5.8.2 In-Line Steam Sterilization Considerations

In-line steam sterilization is one of the main sources of potential damage to a filter. Well-defined standard
operating procedures (SOPs), a proper training program, and close qualification and monitoring of pressure
conditions are essential to prevent damage during steam sterilization. In addition to the sterilization
considerations outlined in Section 8.0, the following items should be considered during PD to ensure the
filter is not subjected to undue stress during steam sterilization.

1. Positioning

– During steam sterilization, the cartridge should be positioned to prevent the
accumulation of condensate, allowing drainage from the housing.

2. Temperature and Pressure Monitoring

– Pressure gauges should be installed as appropriate to monitor pressure conditions
during the steam sterilization process or during qualification activities.

– Excessive pressure conditions during steam sterilization can potentially damage the
membrane of the filter cartridge.

3. Potential Damage

– Reverse-steaming of the filter at elevated differential pressure conditions can cause
damage to the filter, leading to issues like pleat-pack movement, cage imprinting, or
cartridge deformation.

4. Precautions

– Care should be taken to avoid condensation vacuum by pressurizing the system or
venting through appropriate sterilizing-vent filters.

By following these guidelines for steam sterilization of filter cartridges, end users can ensure the integrity of
the filtration system and ensure the effective sterilization of the cartridges for safe and reliable filtration
processes.

#### 5.8.3 Autoclaving Considerations

While the goals of steam sterilization using an autoclave are similar to those of in-line steaming, the process
of placing a filtration device into an autoclave chamber is distinct in several aspects. Similar to sterilizing
any item in an autoclave, the preparation of the filter must be considered, including appropriate wetting if
necessary and how to wrap it to safeguard the sterilized equipment from contamination when removed after
the sterilization cycle. The wrapping material must strike a balance; it should be porous enough to allow the
penetration of steam and air while effectively blocking any bacterial ingress. Autoclave cycles typically run
a pre- and post-vacuum cycle to evacuate any residual air and to dry the load. These vacuum cycles can
cause high differential pressure when the wrapping materials are affixed too tight on the inlet, outlet and
vent connections. Sterilizing-grade filters are vulnerable to damage from excessive differential pressure
across the membrane at elevated temperatures; therefore the preparation of the filter requires attention
during the development phase.

In addition, the placement of the filter within the autoclave is of importance as it should not have any
contact with other parts within the autoclave especially the autoclave walls as this could result in
temperature gradients which can result in additional stress on the filter.

#### 5.8.4 Filter-Capsule Handling

The filter-capsule handling can be compared with the filter-cartridge activities, except the filter capsule is a
filter unit that does not need to be installed into a filter-housing; it is already encapsulated and just needs to
be connected into the process stream. More detailed information on the handling of single-use capsule filters
can be found in PDA TR 66.

Most filter capsules cannot be in-line steam-sterilized and either require to be autoclaved or are supplied
presterilized using gamma or x-ray irradiation. The autoclaving cycle for filter capsules requires the same
attention as the filter cartridge to prevent damage to the filtration system

### 5.9 Impact of Filter Sterilization

As shown in Table 4.1-1, the effect of the sterilization method and conditions on filter bacterial retention for
both the membrane and the assembled filter unit should be a part of the filter manufacturer’s qualification
package. These studies are generally performed to demonstrate that stresses that occur during the
sterilization process do not affect the ability of the filtration system to retain microbes. The work that the
filter manufacturers perform demonstrates, that after sterilization stress, the filter performs as designed as
long as the integrity test passes. Within the sterilization stress ranges studied, this allows nondestructive
integrity-testing of the filters by the end user to demonstrate that sterilizing filters are functioning as
designed. It should be noted that these sterilization-method qualification studies are different than those
performed for product-specific bacterial retention validation studies, as outlined in Section 6.0. In the
absence of any filtration surface modifications caused by the sterilization method, no additional product
specific studies related to the filter sterilization conditions are generally required.

As long as the sterilization processes performed by the end user are within the ranges (e.g., temperature,
time, ionizing radiation exposure) qualified by the filter manufacturer, performing an integrity test is an
appropriate control strategy that connects the filter performance back to the microbial-retention testing
performed during the filter qualifications.

## 6.0 Product and Process-Specific Validation Testing for

Sterilizing Filtration

Process-specific filter validation studies, to provide assurance that the filter will perform as expected under
worst-case processing conditions, are required prior to submission for marketing authorization. However,
filter validation studies may be conducted earlier based on risk assessment. A risk assessment can be based
on prior knowledge from how the product, process and filter interact, leveraging successful filter validations
of similar molecules. This risk assessment can be performed to evaluate whether a product operates within
the design space. Bacterial retention studies, with the final sterilizing-grade filter, are required when a sterile
claim is made and the product is not terminally sterilized (29). This section describes factors to consider
when performing process-specific filter validation studies.

### 6.1 Performance of Process-Specific Filter Validation

The rationale for selection of a suitable filter for final sterilizing filtration should be documented in an end
user’s CCS. As described in Section 5.0, during PD, end users will review generic information available
from their supplier (i.e., qualification data) to assess suitability of components for the intended process and
identify any potential risks associated with compatibility, adsorption, and extractables as part of their initial
risk assessment. Consideration should also be given if the final sterilizing filter will be part of a SUS, which
could include tubing and bags, as this may impact the maximum processing parameters and potentially the
design of the final process-specific filter validation studies. While it is recognized that process-specific filter
validation studies must be performed prior to commercial manufacture or release of product, there is no
specific guidance that states precisely when such studies should be performed in the development/validation
lifecycle. Consequently, the decision when to perform filter validation is determined largely by the end user.
This usually coincides when the drug product is in late phase development, as it is important that the
proposed critical process parameters (CPPs) and full-scale manufacturing conditions are well understood to
ensure the testing performed validates the intended filtration design space. If a specific risk is identified, it
may be appropriate to conduct process-specific testing earlier during PD (e.g., if the drug is subject to
expedited clinical development). Generation of early process-specific data can also be considered for the
purposes of risk assessment and not the final filter validation.

### 6.2 Purpose of Process-Specific Filter Validation Testing

The purpose of performing process-specific validation testing for final sterilizing filtration is twofold:

1. To assess any impact the filter may have on the quality of the final drug product.
2. To assess any impact the drug product may have on the performance of the filter.

Table 6.2-1 provides a summary of typical testing that is in scope for process-specific filter validation.

**Table 6.2-1 Test Types for Process-Specific Filter Validation**

Objective Test Type Purpose

Determine Any Impact
of Filter on Product*
Adsorption Determine any loss of product
components to the filter membrane and
components.

Extractables Assess potential compounds released from
the filter into the final product under
exaggerated conditions (30). If
documentation is adequate these tests do
not need to be repeated (see Section 4.6).

Leachables Assess potential compounds released from
the filter (and) into the final product under
normal operating conditions.

Determine Any Impact
of Product on Filter
Performance (e.g.,
bacterial retention)

Viability, Inhibition and
Bacterial Retention Study
Determine method for performing
bacterial retention study based on
properties of process fluid.

Demonstrate bacterial retention of B.
diminuta (or other appropriate process
isolate) at a minimum challenge level of ≥ 1
x 107 CFU/cm2 under simulated worstcase
processing parameters.

Chemical Compatibility
Filter
Confirm filter is compatible with process
fluid / operating parameters and will
perform as expected.

Product Wet Integrity
Test Value Determination
(optional – not a
regulatory requirement)

Define integrity test limits for a sterilizinggrade
filter using the process fluid (or
alternative fluid) that are correlated to
bacterial retention.

*Any impact of the filter on the product CQAs should be conducted by the end-user during PD. Refer to
Table 4.1.1.

### 6.3 Selection of Worst-Case Test Parameters Following Quality-by-Design

Principles

The principles of quality by design (QbD) should be applied when considering the worst-case parameters
and conditions in which the sterilizing-grade filter should be validated. This includes a rationale for
selection of worst-case parameters that must be based on a thorough understanding of the intended design
space, including the normal operating range (NOR) and proven acceptable range (PAR) (8, 31). While it is
expected that an end user will apply a safety factor to validate the use of the final sterilizing-grade filter in
the given application, this should represent reasonable control of a process (based on manufacturing control

limits) and defines the PAR for use of the sterilizing-grade filter in the application as outlined in Section
5.0.

A summary of worst-case parameters is included under the description of factors to consider for each filter
validation test type.

### 6.4 Adsorption

While adsorption studies are typically performed during PD, as described in Section 5.0, some end users
elect to have this performed as part of the filter validation package. Considerations for worst-case test
conditions to assess potential adsorption are shown in Table 6.4-1, but the parameters selected for testing
should be based on risk assessment.

**Table 6.4-1 Considerations for Worst-Case Test Parameters to Assess Potential Adsorption**

Description Worst Case Rationale

Flow Rate Case Dependent Adsorption may occur more rapidly at
lower flow rates but should be based on
risk assessment

Contact Time Shortest Shortest contact time may not allow
filter membrane to become saturated

Longest Extended period of static soak prior to
filtration may not allow filter
membrane to become saturated

Temperature Dependent on Product
Composition
Most adsorption processes are inversely
related to temperature (32)

Product
Component
Concentration

Consider Preservatives,
Surfactants, Active
Pharmaceutical Ingredient (API)

Increased potential for adsorption which
may impact product quality control
specifications

Component
Concentration
Lower Increased potential for adsorption due to
ratio of product concentration:
membrane/surface area

pH Test Extremes May impact surface charge of membrane

### 6.5 Extractables and Leachables

During filter selection, extractables (and potentially leachables, based on a risk assessment of the
extractables data) should be considered during early-PD. This is typically assessed based on the availability
of supplier data using standardized conditions (e.g., model solvents under specified test conditions) (22, 33,
34). As defined in Section 4.6, an extractable is any chemical component that is removed from a material by
the application of an artificial or exaggerated condition (e.g., solvent, temperature, time). A leachable is
typically a chemical component that migrates from a contact surface into a drug product or process fluid

during storage or normal-use conditions. However, on occasion, interaction with product components may
produce leachables not seen as extractables (20).

Extractables testing may be repeated as part of the final filter validation. After selection of a suitable
extraction solution(s) (model solvent, surrogate or combination of solutions), extraction studies should be
designed to encompass the worst-case process conditions with regard to key variables, such as temperature,
time, pH, and pretreatment steps (e.g., flushing, sterilization) (see Table 6.5-1). Extraction studies are
performed with the filter device using worst-case conditions of contact time and temperature with filters that
have been sterilized by autoclaving or irradiation. Extraction studies may be conducted using methods such
as static soak or recirculation/reciprocation/agitation. For static soak, the filter is submerged in the extraction
solution at a given temperature for a defined amount of time. Extractables may also be generated by
recirculating or reciprocating the extraction solution through the filter for a given amount of time under a
defined temperature. The extract is collected and tested for the presence of filter extractables.

**Table 6.5-1 Worst-Case Parameters for Extractables/Leachables Testing Selection Factors**

Description Parameters WorstCaseRationaleProcess
Fluid Product Type Solvents Increased potential for extractables
Pr

oduct Type Process
Fl
uid
Ev
aluate leachables under normal processing
co
nditions (if required)
pH

 pH
Ex
tremes
In
creased extraction potential at extreme pH
va
lues
Pr

ocess
Co
nditions
Te
mperature Higher Higher temperatures may generate more
ex
tractables
Du

ration Longer Longer durations may increase potential
ex
tractables
Fi

lter
St
erilization
Hi
gher Higher autoclave temperature and/or cycles
in
creases potential for extractables
Hi

gher irradiation dose may increase
po
tential for extractables
On

ce the filter extracts are obtained, a quantitative and qualitative assessment of the filter-derived materials
ar
e determined through selection of appropriate analytical methods. Additional information regarding these
me
thods can be found in BioPhorum’s Disposables: Extractables Testing of Polymeric Single-Use
Co
mponents Used in Biopharmacetuical Manufacturing (30). In addition to determining identities and
qu
antities of filter extractables, patient safety is evaluated through a toxicological assessment.
Ba

sed on a qualitative (e.g., extractable chemical name with CAS number) and quantitative assessment of
ex
tractables to evaluate the patient exposure to potential leachables, the end user may also elect to perform a
Li

leachables study. This involves using the actual process fluid with the same filter type that will be used in
production. Due to the low levels of potential leachables, extractables testing using a model solvent
approach is usually a prerequisite to having a leachables study performed. Circumstances, such as drug
product interference with analytical methods or the prohibitive cost of the drug product, may necessitate the
use of a surrogate solution. Surrogates should closely resemble the product to be filtered. Another option is
to use several solutions to bracket the properties of pH, ionic strength, or level of organic components of the
actual fluid. When a surrogate or bracketing approach is used, a clear rationale for the selection of solutions
and extraction conditions should be documented.

### 6.6 Bacterial Retention Study

Bacterial retention studies are used to validate a filter to perform the sterilizing function (i.e., render the
filtrate sterile) by showing complete microbial removal from the challenge fluid, product, or product family,
using a representative challenge microorganism (1, 35, 36). Two primary elements are taken into
consideration for bacterial retention study validation:

1. Classification of the filter membranes as sterilizing-grade by means of bacterial retention studies ,
using standardized test methods (6) . This is the responsibility of the filter supplier as part of the
filter qualification to demonstrate that the filter retains bacteria using standardized methodology
(i.e., proof that the filter retains B. diminuta when challenged at a level of ≥ 1 x 107 CFU/cm2 and
can be classified as a sterilizing-grade filter in accordance with the principles of ASTM F838).
2. Demonstration by the filter user or designated test facility (e.g., filter manufacturer or contract
laboratory) of complete retention of a microbial challenge from each product or product family in
the actual process conditions. Scientific rationale for each product group should be developed and
may be reviewed with the appropriate regulatory agency before validation testing. It is the
responsibility of the end user to confirm that the selected sterilizing-grade filter performs as
expected for process-specific applications (i.e., under simulated worst-case processing conditions
with the intended drug product).

These two filter-testing concepts are not interchangeable and should be validated independently.

#### 6.6.1 Factors Influencing Bacterial Retention

Factors potentially affecting bacterial retention include, but are not limited to (2, 3):

• Filter type (e.g., asymmetric, isometric)

– Base polymer, surface modification chemistry, pore size distribution, and thickness

• Fluid components

– Formulation, surfactants, and additives

• Fluid properties

– pH, viscosity, osmolarity, ionic strength, and surface tension

• Process conditions

– Filter reuse, temperature, pressure differential, flow rate, filtration time, total
filter/product contact time, and volume throughput.* The potential impact of
intermittency should be considered.

• Potential bioburden in the product (quantitative and qualitative)

*Note: As sterilization of the filter is part of the supplier qualification performed during development, exact
simulation of the end user’s sterilization method (e.g., irradiation, autoclave, SIP temperature, number of
cycles) is not generally required for process-specific bacterial retention study.

In addition to these factors, process bioburden should be evaluated in order to establish B. diminuta as a
relevant organism. Evaluation should be based on bioburden identification and a risk assessment to ensure
the absence of potentially more penetrative organisms in the prefiltration bioburden (see Section 6.6.2).
Consideration should be given to potential product formulations or process conditions affecting cell size or
other physiological or morphological microorganism attributes that might allow organism passage.

#### 6.6.2 Challenge Organism Selection Criteria

Historically, Pseudomonas diminuta, reclassified as B. diminuta , has been the microorganism of choice for
bacterial retention studies. Although a product may be bactericidal to B. diminuta under normal processing
conditions, other microorganisms may survive under the same conditions. Another bacterial retention study
method for bactericidal products is the use of "indigenous bioburden." Indigenous bioburden consists of
bacterial isolates from the manufacturing environment or the product formulation that have demonstrated
the ability to survive within the product formulation under actual production processing conditions.

In process bacteria should be propagated or equilibrated in the product in order to ensure that their
morphological and physiological characteristics are representative of process isolates. The smallest, or worst
-case, indigenous organism should be used based on a risk assessment against use of B. diminuta as the
challenge organism. For additional discussion of preparation and use of challenge organisms, see Section
6.6.3.

If diminutive microorganisms are known to exist in the product, they or an appropriate model organism,
may be used to challenge test filters. Typically, these challenges are conducted in addition to B. diminuta
testing, and it is strongly recommended that appropriate measures be taken to remove these organisms as a
potential contaminant.

If other bacteria are used, they should be small enough to challenge the retentivity of the sterilizing-grade
filter and should simulate the smallest microorganism found in production (4). A risk assessment should
determine the likelihood of any prefiltration bacteria potentially being able to penetrate a 0.2 µm sterilizinggrade
filter (37).

The size of the challenge microorganism should be confirmed by demonstrating passage through a 0.45 μmrated
membrane as a positive control for each challenge performed. This confirms the challenge organism is
appropriately sized and monodispersed. B. diminuta grown under standard culture conditions penetrates
0.45 μm-rated membranes in small numbers at high challenge levels, typically ≥ 107CFU/cm2 (see Section
6.6.3). In some cases, B. diminuta may not be a representative worst-case model. Documented rationale
should be provided if a different challenge organism is chosen.

#### 6.6.3 Culture Maintenance and Challenge Preparation

B. diminuta ATCC® 19146 TM can be obtained in lyophilized form from bacterial culture collections such as
the American Type Culture Collection (ATCC). After reconstituting the microorganism according to the
manufacturer’s instructions, stocks can be maintained (either refrigerated or frozen) on appropriate media

per standard microbiological practice. Maintenance conditions for process isolates to be used for challenge
studies should be established.

Two standard techniques have been recognized as suitable for preparation and maintenance of B. diminuta
for bacterial retention studies. These are the SLB and the frozen cell paste (FCP) methods. Both methods
have been found to be effective in producing suitable suspensions of B. diminuta of approximately 0.3 – 0.4
µm in diameter by 0.6 – 1.0 µm in length.

Alternate media and culture methods may be equally valid to prepare B. diminuta provided they produce
single, monodispersed cells suitably sized to penetrate 0.45 µm-rated membrane filters. Alternate culture
methods should be validated. Bacterial retention study stock cultures can be screened for aggregation by
optical microscopy. In cases where aggregation is observed, immersion of the stock culture in an ultrasonic
cleaning bath filled with cold water for a qualified duration is one means of dispersing the aggregate. The
cavitation action of the bath is effective in disaggregating bacterial cells without the loss of viability. This
effect should be confirmed by optical microscopy, viable count, and recovery downstream of the 0.45 µmrated
size control filter (38).

The bacterial challenge concentration should provide a uniform challenge over the duration in which
viability of B. diminuta is assured to yield a final challenge level of at least 107 CFU/cm2 of filter surface
area. Operational parameters (e.g., flow rate, time, and pressure) should be taken into consideration when
calculating the bacterial retention concentration.

A bacterial challenge level of ≥ 1 x 107 CFU/cm2 is, therefore, the requirement for a sterilizing-grade filter
(historically a filter rated at 0.2 μm). This level was derived from Bowman's observations that B. diminuta
could penetrate a 0.45 µm-rated membrane at > 104
–106 CFU/cm² bacterial challenge level, and her
suggestion for qualifying 0.2 µm-rated membranes as "sterilizing-grade" with B. diminuta at 107 CFU/cm²
to assure minimally sufficient sensitivity to detect oversized pores (39). Bacterial challenge concentration
(CFU/mL) should not be confused with bacterial challenge level (CFU/cm2
).

The viability and titer of the B. diminuta suspension should be confirmed using a suitable recovery medium
such as soybean-casein digest agar (also known as tryptic soy agar), Mueller Hinton Agar, or other qualified
growth medium. When performing filter challenges, the viable titer of the bacterial retention suspension
should be determined immediately prior to and after the challenge; the bacterial titer should be determined
using an accepted microbiological testing method. For situations when this is not possible (e.g., extremely
short-duration bacterial retention studies), a rationale should be provided to justify the use of either a pre- or
post-input viability sample. The same culture medium should also be used to determine any recovery of B.
diminuta downstream of the test and control filters.

6.6.4 Viability/Filter Flush Qualification Testing Procedure and Protocol Development

Prior to completing the bacterial retention study, the test organism's viability should be verified by direct
inoculation into the carrier fluid (ideally, product or surrogate fluid, if justified) in order to determine the
appropriate challenge test methodology (see Figure 6.9-1). Scientific justification should be provided if
viability testing is not performed before finalizing the bacterial retention study design (e.g., nonaqueous
process fluids). The microorganism should be grown in the same manner as that used for challenge-testing
to preserve its morphological and physiological characteristics. The test exposure time chosen for the
viability studies should equal or exceed the maximum filter/product contact time, unless viability of the test
organism is demonstrated to decline by ≥ 1 log before the actual process filtration time is reached.

Note: It is not necessary to determine the exact point in time at which viability of the test organism declines
by ≥1 log; however, the viability test time should be sufficient to allow meaningful measurements to be
taken during the bacterial retention study.

The organism should be added to the process fluid (or surrogate solution) such that the inoculation volume
does not cause significant dilution of the drug product and viability should be monitored by taking
appropriate samples over the intended process duration to determine cell concentration in accordance with
standard methods. A control (e.g., water, buffer) should be spiked at the same ratio and viability of the
organism monitored over the same duration. If the temperature may be inhibitory to the viability of the
challenge organism (typically, over 40⁰C for B. diminuta), consideration should be given to assessing
viability at ambient temperature so the bacterial retention study could be conducted by inoculating the
organism directly into the process fluid (40). In addition, for broad processing temperature ranges,
consideration may be given to the impact of the extremes of the temperature range on viability of the
challenge organism. If there is less than an approximately 1 log difference between the test and control over
at least 30 minutes, direct inoculation of the organism into the process fluid may be an option for the
bacterial retention study. Additional consideration should be given for situations where the viability of the
challenge organism in the process fluid is reduced by close to 1 log at the desired time point. For such cases,
it may be necessary to reduce the total exposure time of the challenge organism in the process fluid to
reduce the likelihood of die-off, which could prevent the minimum challenge level being met during the
bacterial retention study. A decision should be made between ensuring the minimum challenge level of ≥ 1
x 107 CFU/cm2 is met and ensuring the bacterial retention study duration is sufficiently long to allow
adequate measurements of differential pressure, flow rate, volume throughput and temperature.

Filter flush schemes should also be considered prior to performing a process-specific bacterial retention
study. If the drug product is bactericidal to the challenge organism, then adequate removal/neutralization of
bactericidal effects resulting from residual process fluid should be ensured prior to introduction of the
bacteria to the test system. If the process fluid is nonbactericidal and used as the challenge vehicle, the lack
of potential inhibitory effects to the challenge organism should be ensured during the incubation period.

After the test organism's viability within the product has been established, the challenge methodology and
protocol should be developed.

#### 6.6.5 Bacterial Retention Validation Studies

The goal of bacterial retention validation studies is to have documented evidence demonstrating that the
filtration process will consistently remove a high level of a standard bacterium, or relevant bioburden
isolate, suspended within the product or surrogate fluid under simulated process conditions.

The decision to test membrane discs or a full-size process filter depends upon the study goal. Ideally, the test
filter should mimic the process filter unit as closely as possible, including the membrane type and pore size.
If the study is to validate the bacterial retention efficiency of a particular membrane material, the use of a
small test membrane disc is generally regarded as sufficient, but the filter selected should be justified. The
test methodology used for determining physical integrity of process filters should yield results that are
meaningful in terms of bacterial retention studies, and correlation data should be available from the filter
supplier. If different test methods are used, a relationship between the two should be demonstrated.

The following should be considered when conducting process-specific bacterial retention validation studies
on membrane filters:

• A thorough assessment of the filtration process should be conducted, including the nature of the
process fluid (e.g., aqueous, acid, base, organic), active filtration volume, total product/filter
contact time, process pressure, process flow rate, process temperature, number and/or frequency
of intermittent cycles (“on/off”), and process-filter design specifications.
• Multiple filter membrane lots (typically three) should be included in process-specific bacterial
retention validation studies. In cases where the product may be considered aggressive to the
membrane, the exact number of filters and the test design will depend on the process.
• At least one of the three filter membrane lots used for the process-specific bacterial retention
validation study should have a pre-study or pre-use physical integrity-test value as close as
possible to the filter manufacturer's test specification. The filter manufacturer is responsible for
defining the criteria for the minimum specification filter. Due to improved process control
during membrane manufacturing, it may not be possible to obtain membranes at or near the
filter manufacturer’s production limit. In this case, test membranes should be selected from a
manufactured lot whose pre-use integrity test values are as low as practical but representative of
the standard filter-manufacturing process.
• Membrane physical-integrity test values from bacterial retention validation studies should be
included in test reports. The physical integrity should be determined prior to and after
challenge-testing using water, product, or other wetting fluid for which specifications exist. Use
of a low-surface-tension wetting fluid for post-use integrity-testing may be required to remove
residual product.
• An investigation should be conducted if the test organism is recovered downstream of any filter
after the product bacterial retention study. If the investigation confirms penetration of the filter
by the test organism and the filter meets its integrity-test specification, then the applicability of
this filter under these process conditions should be reconsidered.
• Families of products with the same ingredients, varying only in concentration, may be validated
by challenging the concentration extremes and accepting the intermediate concentrations by
bracketing. If a single product is determined to be a worst-case representative, then rationale
and data should accompany the model. A placebo (without the API but belonging to the same
product family) may be considered for product bracketing with appropriate justification.
• During bacterial retention studies, incorporation of pressure increases to simulate integritytesting
(e.g., PUPSIT) should be based on risk assessment performed by the end-user (e.g., if
process fluid is used for PUPSIT that could potentially pose a risk to bacterial penetration).
Examples of factors to consider for risk assessment include the potential bioburden in the
wetting fluid (based on a qualitative and quantitative assessment), type of integrity-test
performed, and maximum number of integrity-tests that the filter could be exposed to. Filter
suppliers qualify the filter to be able to withstand the elevated pressures resulting from
integrity-testing. Therefore, the risk assessment should be focused on the potential for any
bioburden in the wetting fluid to penetrate the filter as a result of PUPSIT.
• Under typical manufacturing conditions with controlled conditions, the risk of bacterial
penetration due to PUPSIT is considered low. If PUPSIT simulation is deemed necessary, the
test design should be accompanied by a technical rationale.
• Filter reuse is typically not practical or recommended for pharmaceutical purposes. However, if
a sterilizing-grade filter is reused, justification should be provided, and reuse parameters should
be validated. Scale-down laboratory studies are unlikely to be able to simulate the conditions of
filter reuse by an end user (e.g., multiple sterilization cycles, clean in place, excessive
handling). Therefore, consideration should be given to testing process filters that have been
exposed to the entire cycle of reuse by the end-user to supplement the small-scale study.

#### 6.6.6 Bacterial Retention Validation Studies: Considerations for Selection of Worst-Case

Test Conditions

There are different levels of risk associated with process-filtration parameters. Some are associated with
microbial proliferation in the product prior to filtration, while others are associated with a higher risk of
passage of bacteria through the filter. While some generalizations can be made with respect to selection of
worst-case test parameters, it is important that worst-case parameters are determined on a case-by-case
basis. Further, the worst-case parameters should be selected such that the intended manufacturing conditions
are covered by the process-specific bacterial retention studies but should be reflective of the processing
parameters established during PD (with an appropriate and justified safety factor). Bacterial challenge over
the full process time assesses the potential for time-dependent factors, such as filter compatibility,
maintenance of integrity and occurrence of time-dependent penetration.

The pressure differential across the test filters demonstrated during bacterial retention studies should meet or
exceed the maximum pressure differential permitted during processing, within the filter manufacturer's
design specifications. The intended process flow rates should be incorporated when designing the challenge
conditions. It may not be possible to maintain both the target pressure and flux for the full duration of a
retention study, while also achieving the desired total filter wet time and (scaled) batch size. In such cases,
static wet hold times, recirculation, or intermittent filtration, can be incorporated into the study design when
justified.

Bacterial retention study conditions should simulate the production process as closely as possible, but
variations may be acceptable when they are well-justified and unlikely to affect the risk of bacterial
penetration. Since bacterial retention studies are generally performed in a laboratory, the methodology
should be scaled accordingly. The flux should be scaled to an equivalent flow rate per unit area, expressed
for example in (ml/min)/cm2
. If filtration is regulated by pressure, the challenge test pressure should
represent the NOR with consideration to the maximum filtration pressure allowed within the process and the
likelihood of operating the filtration process at the PAR. Product recovery by blowdown may be performed
at a higher pressure than maximum pressure during normal filtration and should be simulated at the end of
the bacterial retention study.

Table 6.6.6-1 lists examples of factors to consider when selecting worst-case parameters for processspecific
bacterial retention studies.

**Table 6.6.6-1 Considerations for Selection of Bacterial Retention Study Parameters**

Description Parameters Worst-Case Rationale

Drug Product
Properties

Viscosity Higher Potential to cause higher pressure to the filter

Surface
Tension
Lower Potential to contribute to bacterial penetration (based on higher-risk fluids, such as
liposomes)

Osmolarity Higher Potential for reduction in cell size over prolonged exposure

Components Liposomes,
Emulsions
with Lipids

Potential to contribute to bacterial penetration

Bioburden Diminutive
Organisms
Potential to contribute to bacterial penetration

pH Neutral Neutral pH more likely to support bioburden

Ionic Strength Consider
Extremes
Potential impact to adsorptive retention

Process
Conditions

Temperature Case-specific Lower temperatures may increase product viscosity leading to increased pressure
to filter

Ambient temperature more likely to support bioburden

High temperatures may identify any potential compatibility issues

Duration Longer Extended durations may increase possibility of bacterial penetration. Consideration
should be given to the total filter/product contact time (e.g., account for time
needed for any potential product-wet integrity-testing prior to filtration)

Pressure Higher Higher pressures may contribute to bacterial penetration under specific conditions
(e.g., higher-risk fluids)

Description Parameters Worst-Case Rationale

Process
Conditions

Flow rate Higher Higher flow rates may contribute to bacterial penetration under specific conditions
(e.g., higher risk fluids)

Throughput Higher Increased volume throughput may increase potential prefiltration bioburden to the
filter

Intermittency Case Specific Consider if pressure spikes following an “off” cycle could impact potential filter
performance; exact simulation of “on/off’ cycles may not be possible in scale-down
test

#### 6.6.7 Factors to Consider for Bacterial Retention Study Design

If questions arise during protocol development regarding the acceptability of a testing methodology, it may
be advisable to contact the appropriate regulatory agency for guidance. Figure 6.6.7-1 reflects key steps to
be considered when selecting the appropriate validation strategy for a specific filter and product/process
combination.

*Note: Concurrence of the appropriate regulatory agency should be sought prior to using this methodology.

*[Figure 6.6.7-1 Sterilizing Filtration Process Validation Strategy]*

Irrespective of the test design used, it is important to include a 0.4/0.45 µm positive control filter in parallel
with the test filters to assure organism size, monodispersion and viability. Other modifications for the 0.45
µm control filter may be appropriate if fully justified and still demonstrate the challenge organism is fit for
purpose.

##### 6.6.7.1 Non-bactericidal Processes and Fluids

Direct inoculation of the product with the challenge microorganism is the preferred method of validating
microbial retention of a sterilizing-grade filter. This is possible with products and process fluids that have
demonstrated no bactericidal effects from the product or processing conditions. For these processes, the
product should be directly inoculated with the challenge organism at sufficient concentration and under
simulated processing conditions, including time, pressure, flow rate, volume throughput and other critical
variables (e.g., temperature) as indicated in Table 6.6.6-1. Dilution from bacterial inoculation should be
minimized to prevent altering the product any more than necessary.

##### 6.6.7.2 Bacteriostatic/Bactericidal/Nondispersive Challenge Fluids

Performing bacterial retention studies on bactericidal products makes it more difficult to answer questions
relating to validation, such as What effect does the product have on the filter and what effect does the
product have on flora within the product? Bacterial retention studies performed on a bactericidal
formulation, or under challenge conditions adverse to microbial viability (e.g., elevated temperature), may
not produce valid results.

To evaluate the potential effect of the product/process on the filter, the filter may be preconditioned with the
product under simulated processing conditions, including flow rate, pressure, temperature, volume
throughput and time. This preconditioning may be performed by recirculating the product through the test
filter in a closed-loop system or by a single pass (which could include a static soak to meet required contact
time) through the test filter, followed by the bacterial challenge. Section 6.6.7.3, Section 6.6.7.4, and
Section 6.6.7.5 discuss examples of test-method modifications that may be used to accommodate this type
of bacterial retention study. Other modification methods may be equally appropriate, however, if justified.

##### 6.6.7.3 Reduced Exposure Time

In some instances, the challenge organism may not survive in the product for the total processing time. The
product should be inoculated directly with the challenge organism at sufficient concentration near the end of
the preconditioning phase of the challenge (see Figure 6.6.7-1). The duration of the bacterial retention study
should be supported by the viability data.

An alternative is to expose the challenge microorganisms in the challenge fluid under static conditions. After
exposing the challenge bacteria in the product at process temperature and preconditioning the filter by
recirculating the product (without the bacteria) under simulated processing conditions, the filter could be
challenged under worst-case processing conditions (e.g., differential pressure and flow rate). The challenge
duration should be minimized to ensure the challenge microorganisms remain viable during the actual
exposure, challenge, and recovery periods.

##### 6.6.7.4 Modify Test Method Parameters

Test-method parameter modification is useful for challenging bactericidal products, since it can involve
changing only one process variable, such as temperature. Using this approach maintains the
product/challenge organism interaction. This approach does not account for all possible process/product

interactions but should allow the use of the standard challenge organism. After preconditioning the filter
with the product under actual process conditions, the bactericidal component of the process (e.g.,
temperature) is modified and the bacterial retention study performed. The product should be inoculated
directly with the bacterial retention study microorganism at a sufficient concentration (see Figure 6.6.7-1).

##### 6.6.7.5 Modifying Test Product Formulation

Another modified method is to remove the bactericidal component from the product for the bacterial
retention study following preconditioning of the filter with the actual product. This may be as simple as
adjusting the pH to a nonbactericidal range, removing or diluting the bactericidal component, or using a
surrogate fluid. Whatever approach is used should be supported by a technical rationale.

The modified formulation should be inoculated directly with the challenge organism at a sufficient
concentration under simulated product processing conditions (see Figure 6.6.7-1). The bactericidal agent
should be removed to a level that eliminates its interference with the challenge microorganism.

Another option is to precondition the test and control filters with the bactericidal process fluid under
simulated worst-case processing conditions. After removing the bactericidal fluid from the test rig, the filters
can then be challenged with the test organism suspended in surrogate fluid that has been justified to
resemble the process fluid (e.g., chemical or physical properties). Other test modifications may also be
acceptable if justified.

#### 6.6.8 Filtrate Sampling

Analysis of the entire challenge effluent is necessary to determine the ability of a sterilizing-grade filter to
retain the bacterial challenge. This can be done either by direct passage through an appropriate analytical
membrane installed downstream of the test filter (whereby any penetrating bacteria would be captured on
the analytical membrane) or by filtrate collection in a sterile vessel and subsequent filtration through
analytical membrane(s). The analytical membranes should have been qualified as fit for purpose and will
usually have a maximum rating of 0.4 µm or 0.45 µm. Selection of the size and porosity should be based on
the application conditions and should not prevent achieving the desired differential pressure across the test
filter. Sampling a portion of the filtrate is insufficient to validate sterilizing filtration, because a small
number of cells may have penetrated the filter and remain undetected in the portion of the filtrate not
sampled and analyzed.

#### 6.6.9 Results Interpretation

Acceptance criteria for sterilizing-grade filter performance are met when no passage of the bacterial
challenge is detected in three test filters with a valid positive control (i.e., bacterial recovery through the
0.45 µm-rated control filter). If passage is detected in one filter, and no assignable cause can be determined,
retesting may be conducted (e.g., three filters from the failed membrane lot) following an investigation and
risk assessment to determine a potential root cause. If bacterial penetration occurs in any of the triplicate
tests, then the filter cannot be considered validated under the specified conditions. If an assignable cause for
the failure can be determined (e.g., damage to the filter or breach in aseptic technique), the suspect lot of
filters should also be retested for confirmation of the proposed root cause for the initial failure. If the filter
fouls prior to achieving the target volume throughput, the bacterial retention study should be terminated and
the resultant total challenge determined. An investigation into the cause of fouling should be performed and

documented, and a new bacterial retention study design should be proposed to ensure volume throughput is
met based on filterability test results.

### 6.7 Considerations for Sterilizing-Grade Filters Configured in Series

When two final sterilizing-grade filters are configured in series, it is necessary to clarify whether the setup is
redundant filtration or double filtration, sometimes referred to as additive filtration (see Section 5.5.1 for
detailed descriptions of various filter train designs). When redundant filtration is used (i.e., only one filter is
required to meet sterility and only one filter must meet post-use integrity-test specifications), the processspecific
bacterial retention study should be based on only one filter. Double filtration means both filters are
required to achieve sterility (usually determined from process-specific bacterial retention study), and both
filters must therefore meet post-use integrity test specifications.

Regardless of whether the setup is redundant filtration or double filtration, extractables should be considered
for both filters.

### 6.8 Chemical Compatibility of Filter

While compatibility of the filter is assessed during initial filter-selection by the end user, compatibility
testing may also be performed as part of the final sterilizing-grade filter validation testing. Chemical
compatibility testing should encompass the entire device and depends on the fluid, filtration temperature and
contact time.

A summary of worst-case conditions for conducting compatibility testing is shown in Table 6.8-1.

**Table 6.8-1 Worst-Case Considerations for Compatibility Testing**

Description Worst-Case Rationale

Temperature Higher Higher temperatures increase
potential for chemical reactions

Duration Higher Longer durations may increase
potential for chemical reactions

Properties of drug
product
Consider pH extremes, solvent and
product components
Based on risk assessment

Sterilization Maximum sterilization conditions (e.g.,
maximum temperature, number of
cycles)

Worst-case sterilization conditions
may impart more stress on the filter

An assessment of chemical compatibility could include bacterial retention study data, post-exposure
integrity-testing, tensile strength, nonvolatile residue (NVR), extractables, particulates, flow rate, optical or
scanning electron microscopy (SEM), burst pressure, and membrane/O-ring thickness (23).

### 6.9 Revalidation Considerations

Once a filter is validated for use in a given application, further validation may be required if changes to the
filter or manufacturing process are made. Some changes that may require revalidation include, but are not
limited to:

• Change in membrane type or filter materials of construction.
• Increase in process parameters (e.g., volume to be filtered through a given filter area, flux,
pressure, duration)
• Change in filter configuration (e.g., cartridge to encapsulated device). While the processspecific
bacterial retention study data will likely not be impacted, consideration should be given
to a reassessment of extractables/leachables and compatibility.
• Product formulation changes (e.g., change in product concentration, pH)
• Change in sterilization method (revalidation of the extractables/leachables assessment and
filter-integrity post-sterilization should be considered based on risk assessment with appropriate
justification)
• Temperature of filtration.
• Use of a filter with the same membrane type but not from the same supplier.

A well-structured risk assessment should be performed by process and filtration experts to evaluate the
potential impact of these changes. In line with internal policy for filter management, the filter end user
should approve all changes that potentially impact the current good manufacturing processes (GMP)
compliance of the system.

### 6.10 Miscellaneous

With the introduction of newer manufacturing modalities, such as advanced therapy medicinal products
(ATMPs), additional factors may need to be considered for the purposes of filter validation. For example,
small batch sizes, short shelf life, and physical properties (e.g., shear sensitivity) may require careful
planning and potentially modified test procedures to achieve the goals of filter validation while meeting
regulatory expectations.

## 7.0 Integrity Testing

Bacterial retention studies are used for validating a filter membrane but are not feasible for routine
confirmation of the retentive capabilities of each filter used in the manufacture of sterile pharmaceuticals.
Such challenge tests can clearly not be performed prior to the use of the filter in the production setting, as it
involves deliberate introduction of contaminating microorganisms to the filter (a “destructive” test). It is also
not feasible post-use, as it requires advanced microbiology equipment and multiday incubation periods.
Hence the need for a nondestructive, physical-integrity test method that can be correlated with bacterial
retention (i.e., can be used as a surrogate method for direct bacterial retention). The main objective of a
nondestructive physical integrity test is to determine the presence of defects that may compromise a filter's
retention capability without rendering the filter useless. Additionally, the integrity test establishes the
similarity of the test filter to validated bacterial retention-challenged filters under process-related conditions.

For integrity tests on hydrophilic membranes, gas flow properties of wetted filter membranes are evaluated
over a range of pressures. This can be demonstrated by completely wetting the entire filter membrane and
introducing gas to the upstream side of the membrane at a low pressure. Capillary forces within the filter
material keep the liquid from being expelled from the pores, and the wetted membrane functions as a barrier
to convective gas flow. As this pressure is applied on the upstream side of the filter, a small amount of the
gas dissolves into the wetting liquid, diffuses across the wetted membrane, and is released on the
downstream side when it is maintained at atmospheric pressure (Figure 7.0-1). The diffusion rate increases
as the pressure on the upstream side is increased. Once a critical pressure is achieved (“the bubble point”),
the effect of capillary forces keeping the liquid in the pores will be overcome by sufficient pressure, pushing
the wetting liquid out through the membrane pores. This happens first for the largest pores, where capillary
forces are the weakest (Figure 7.0-2). If the rate of gas flow that passes to the downstream is measured at
increasing pressure values, the membrane characterization curve (Figure 7.0-3) can be obtained for the
given membrane filter.

Characterization of these dynamics (both the diffusive flow rate at pressures below the bubble point, as well
as the exact bubble point pressure) can indicate integrity of the filter in a nondestructive manner, resulting in
a method that can be performed on every filter used in production. Diffusive flow theory is discussed further
in Section 10.1. Figure 7.0-1 illustrates gas diffusion through the wetted membrane pores at pressures
where the wetting fluid is held in the pores by capillary forces. Figure 7.0-2 illustrates gas flow through the
membrane at a pressure exceeding the bubble point where the wetting fluid is expelled from the largest
pores.

*[Figure 7.0-1 Gas Diffusion Through a Wetted Membrane]*

*[Figure 7.0-2 Bubble Point Through a Wetted Membrane]*

*[Figure 7.0-3 illustrates the relationship between measured air flow downstream of a wetted filter]*

membrane. Three characteristic portions of the curves act as the basis for membrane-filter integrity-testing:

1. The linear portion on the low end of the pressure axis shows diffusive gas flow through the liquid
held in the pores of the membrane.
2. As the pressure is increased, there is a characteristic bend in the curve followed by another linear
portion. This bend indicates the transition between diffusive gas flow and bulk, or viscous, flow.
3. For an integral filter, bulk gas flow occurs after the bubble point of the largest pores has been
exceeded. Before reaching this point, the majority of gas flow is due to free-flowing gas through
open pores; a minor portion of the flow results from diffusion through the pores of the membrane
that are still wetted.

*[Figure 7.0-3 Characteristic Curve of the Membrane]*

### 7.1 Relationship Between Integrity Test Results and Bacterial Retention

During membrane development by the filter manufacturer, retentive capability can be assessed by
challenging successively “tighter” samples of the specific membrane under standardized test conditions and
analyzing the bacterial passage results. Typically, the retention pattern observed will allow identification of
physical integrity-test specifications using standard wetting fluids—acceptance criteria for the measured
parameters within which no bacterial penetration will occur under standardized testing conditions (6). The
integrity-test value established by this exercise is linked to the sterility of the filtrate. Such establishment of
integrity-test value specifications should incorporate a safety margin to account for natural variability in
measurement and membrane manufacture (e.g., by applying appropriate statistics with confidence intervals).

*[Figure 7.1-1 illustrates a typical relationship between the gas flow profile values and filtrate sterility from a]*

series of five filters with decreasing maximum pore size (from left to right).

*[Figure 7.1-1 Gas Flow Profile Values and Filtrate Sterility]*

The bubble point test relates to the effective diameter of the largest pores present in the membrane, and
these pores, along with membrane thickness and pore tortuosity, directly influence the retention properties
of the membrane. The resolution of the bubble point test diminishes as a function of increasing filter area,
since diffusive gas flow below the bubble point tends to obscure it (41-43).

While diffusion does not bear a direct relationship to pore size, the diffusive flow test provides a quantitative
measurement in which maximum flow limit is established by the filter manufacturer at a designated test
pressure lower than the minimum bubble point value.

During membrane development and initial integrity-test qualification by the filter manufacturer, testing flow
rate at multiple pressure values enables plotting of the gas flow curve from diffusion at low pressures
through the bubble point region at elevated pressures. These tests combine the advantages of the bubblepoint
and single-point diffusive-flow integrity tests in characterizing the pore size distribution. Methods for
mathematically characterizing the diffusive-flow to bulk-flow transition region and correlation of the value
generated to bacterial titer reduction may be found in reference literature.

#### 7.1.1 Test Method Selection

The method for integrity-testing of production filters by the filter user should be chosen to provide reliable
results based on the nature of the filter, product, and processing conditions. Bubble point, multiple-point and
single-point diffusive-flow and pressure-hold tests can be used, recognizing that each has strengths and
limitations that must be evaluated in terms of the particular circumstances of the test. These test methods can
be used for both hydrophilic and hydrophobic membrane filters and can be performed manually or

preferentially with automated integrity-test instruments. Section 10.2 contains further discussion of filter
integrity-test methods.

The flow rate of the test gas that passes through the wetting fluid in the pores of the filter media via diffusive
flow is much lower than the flow rate of bulk gas that passes through the filter media when the wetting fluid
is displaced from the larger pores of the filter media (i.e., what occurs at and above the bubble point). The
rate at which test gas passes through the filter media via diffusive flow is directly related to the surface area
of the filter media (i.e., as the filter surface area increases, the flow rate due to diffusive flow increases).

Integrity-test instruments have a lower limit at which they can reliably determine the flow rate of the test gas
passing through the filter media. For this reason, there is typically a minimum value for the surface area of
the filter being integrity-tested to perform a diffusive-flow integrity test. Below this minimum surface area,
the automated integrity tester may not be capable of determining the diffusive flow at the specific test
pressure (i.e., <= 80% of bubble point). In contrast, when using the bubble point method, the algorithm is
looking at the change in the flow rate instead of the absolute flow rate as the differential pressure is
increased (specifically, the pressure at which bulk flow starts). For this reason, the bubble point integrity-test
method is typically used instead of the diffusive-flow integrity-test method to perform an integrity test on a
filter with a small surface area.

Above the minimum surface-area threshold for testing via the diffusive-flow integrity-test method, either the
diffusive-flow or the bubble point test method may be used for a range of filter surface areas. As the surface
area of the filter media being tested increases significantly (e.g., in the case where multiple round housings
are used), there comes a point where the diffusive flow of gas passing through the wetted membrane is so
high that it will be difficult for the integrity test to distinguish the bubble point) from the high rate of
“background” diffusive flow through wetted pores. For this reason, the diffusive-flow method is typically
selected for the largest filter sizes.

The exact cutoffs for small, medium, and large surface area depend upon the attributes of the filter media
being tested, the wetting fluid used, and the capability of the automated integrity tester being used, but
general guidance is provided in Table 7.1.1-1.

**Table 7.1.1-1 Suggested Integrity Test Methods Based on Filtration Surface Area**
| Surface Area of Filter Media* | Suggested Integrity Test Method |
| --- | --- |
| < 0.03 m² | Bubble Point |
| 0.03 -- 1.8 m² | Bubble Point or Diffusive Flow |
| > 1.8 m² | Combination of Diffusive Flow and Bubble Point |

0.03 – 1.8 m2 Bubble Point or Diffusive Flow

> 1.8 m2 Combination of Diffusive Flow and Bubble Point

*These values are approximate values only. Consult Filter Manufacturer for specific guidance.

One approach to diffusive-flow testing of large filter systems with multiple cartridges is to derive an
assembly-specific value that is lower than the linear multiplied-limit of each cartridge. A technical
evaluation should be conducted to justify this approach. If the assembly’s diffusive air flow exceeds the

corrected limit, an investigation would be required (e.g., individual tests on each cartridge, and confirmation
of the seals with the housing).

When performing tests on filter capsules with associated SUS, the high pressures required for bubble point
testing could exceed the pressure ratings of such equipment. For this reason, diffusive-flow tests may be
preferred as they typically require lower pressures than bubble point-test methods. Or, in case the bubble
point method is required, the SUS is designed to be compatible with a higher working-pressure range.

A modification to the diffusive flow method is a pressure-hold/decay method, where pressure is allowed to
drop as diffusive flow across the wetted membrane occurs, instead of being held constant (see Appendix B
for more information).

#### 7.1.2 Filtrate Sterility Assurance

Integrity-testing of sterilizing-grade production filters is a fundamental element of sterility assurance for the
most critical applications that require a sterile claim (9, 11). However, integrity-testing alone is insufficient
to ensure the sterility of the filtrate. Other control elements should also be in place, such as:

• Filter manufacturer’s production controls and quality assurance systems should be in place to
ensure the quality and uniformity of the filter membranes and fabricated filters.
• Filter user should conduct bacterial retention validation studies to demonstrate that product,
processing conditions, and sterilizing-grade filter can effectively sterilize the fluid.
• Filter user should ensure appropriate product and process controls (e.g., system design,
operating parameters, bioburden control, process monitoring) are in place so that the filtration
operates within the validated parameters defined by the bacterial retention study.

With the appropriate controls in place, the filter integrity test is only one part of the overall sterilityassurance
strategy. It is incumbent on the filter user to ensure that all elements are, and continue to remain,
in place.

### 7.2 Automated Integrity-Test Instruments

The standard for modern filter integrity-testing utilizes automated integrity-test units, which provide the
most reproducible and sensitive methods. Automated integrity-testers employ highly sensitive pressure
sensors and/or gas flow meters, in combination with the careful regulation of pressure, to test filters in a
highly repeatable manner.

Historically, filter integrity-testing had been performed manually via a combination of manual manipulation
of pressure regulators, graduated cylinders, and/or visual detection of increasing gas flow rate via a stream
of bubbles. Some manual integrity-test methods require downstream manipulations that could compromise
the sterility of the system if performed before use. Automated integrity-test instruments perform the
integrity test from the upstream (nonsterile) side of the filters, minimizing the risk for downstream
contamination. Manual integrity-testing should now only be performed on production filters in special and
justified cases, due to the ready availability of automated integrity-test instruments.

Automatic integrity-test equipment, both hardware and software, should be qualified, as described in
Section 7.3. Most automated integrity-test instruments function by measuring pressure only upstream of the
filter membrane, and assuming downstream pressure is atmospheric. Care must be taken if the downstream
side of the membrane is not in equilibrium with the atmosphere.

### 7.3 Qualification of Integrity Test Devices

Qualification of integrity-test devices is similar to qualifying other process test-equipment. Qualification of
an integrity-test device begins with the development of the device and is usually conducted by the device
manufacturer. Design qualification and device development documentation are generally generated by the
device manufacturer. These documents may be included in the filter user’s qualification documentation
package. Equipment qualification should cover the key functions of the device; however, it may not cover
all possible combinations of functions and configurations. Risk assessment, therefore, should include key
functions such as, but not limited to:

• Test procedures as a main function of the device
• Detection of error conditions and messages
• Compliance with data integrity requirements and good documentation practices
• Qualification of the measurement itself (accuracy and limits)

Typical qualification activities may include:

• Computer software evaluation–test parameters, test methods, programming the unit, and tests
(e.g., ease of use, test options, networking capability, operating systems)
• Unit sensitivity evaluation
• Unit startup
• Unit calibration
• Performing the tests
• Integrity-test performance evaluation (bubble point, diffusive flow, pressure hold)
• Test other functions (volume determination, failure modes, ejecting invalid entries)
• Test printout evaluation
• Password protection in combination with appropriate user roles and permission levels to avoid
modification of a test program by an unauthorized user.
• Peripheral function evaluation (date/time clock, memory, cleaning)

Integrity-test devices that measure pressure and/or gas flow should be calibrated using relevant calibration
standards and should generate records according to applicable regulatory expectations.

Automated integrity-testers often incorporate sensitivity settings and test algorithms to detect atypical test
conditions and to reliably test different filter sizes. These sensitivity settings are of importance and require
careful observation to assure the right sensitivity for the particular filter-size is chosen, otherwise the
integrity test may lack accuracy and validity. The sensitivity parameter establishment can be performed or
confirmed during process qualification (PQ). For thorough qualification strategy, end users should consider
confirming not only that the unit can successfully return a “pass” integrity result for integral filters but can
also reliably detect broken filters or incorrect test setups.

### 7.4 Product Wet Integrity Tests

The default “reference” wetting fluid for physical integrity tests of hydrophilic filters, as validated by
membrane manufacturers, is typically water. However, for testing production filters, drug product or buffers
may be the most appropriate wetting fluid (e.g., after use, when the filter is already wetted with this fluid). A
new integrity-test specification, customized for the unique wetting fluid, can be determined during filter
validation by executing a protocol in which the reference fluid specification is “converted” to an appropriate
specification for the new wetting fluid. This specification is then, by extension, also correlated to the
bacterial retention capabilities of the membrane.

Differences between product-wetted integrity test values and reference fluid-wetted integrity test values are
due to differences in test gas solubility, the diffusion constant, and the surface tension of the wetting fluid.

The scale-down studies are used to determine the correction factor between the water-wet integrity-test
specification and the required product-wet test limits.

#### 7.4.1 Product-Wetted Bubble Point Tests

Tests for determination of product-wet bubble point limits should be conducted, first with water followed by
product-wetting and then by the product-wet test. The technical rationale for establishment of product-wet
bubble point values should be documented. Bubble point values are affected by the surface tension and
temperature of the wetting fluid. Section 7.4.1.1 describes one method used to establish bubble point
specifications using filter discs. Other methods may be appropriate if scientifically justified (see Section
10.2 for further discussion of bubble point tests).

##### 7.4.1.1 Bubble Point Ratio Approach

For determining product-specific bubble point specifications, testing can generally be conducted as follows:

1. Select multiple samples of filter discs for testing—generally at least three membrane lots. Since the
bubble point refers to specific values relating to the membrane’s pore size and the wetting-liquid
surface tension, filter discs can be used.
2. Install the membrane discs in the holder and rinse them with the reference wetting liquid (e.g.,
water, alcohol).
3. Perform the bubble point test on each disc.
4. Either completely dry the filter discs or rinse the membranes with an appropriate amount of the
product in question to ensure complete removal of the wetting fluid used in the first integrity test.
5. Perform the bubble point test with the product. These values are used to calculate the product-wet
bubble point limit.

The bubble point limit for product can be calculated using the formula given in Equation 1. This example
uses water as the reference fluid, which correlates the product-wetted-filter bubble point test data to the
minimum water-wetted bubble point value given by the filter manufacturer.

Equation 1:

𝑃𝑃𝑃𝑃𝑃𝑃𝑚𝑚𝑚𝑚𝑚𝑚 = 𝑊𝑊 𝑚𝑚𝑚𝑚𝑚𝑚 �
𝑃𝑃𝑃𝑃𝑃𝑃𝑎𝑎𝑎𝑎𝑎𝑎
𝑊𝑊 𝑎𝑎𝑎
𝑎𝑎𝑎�
Where:
PBPmin = Pro
duct-wetted bubbl
e p

oint, mi

nimum (minimum validated product-wetted
bubble point)
WBPmin = Water-wetted bub

ble point, mini

mum (minimum water-wetted bubble point
specified by the filter supplier)
PBPav

g = Average product-wetted bubble p

oint of the test samples recorded in the test
WBPavg = Average water-wetted bubble poi

nt of the test samples recorded in the test
Licensed to Kuo, Li-Hung/Amaran Biotechn

#### 7.4.2 Product-Wetted Diffusive Flow Test

The determination of product-wetted test specifications for diffusive flow is a two-step process, which
requires first, identifying the bubble point ratio as described in Equation 1.

Step 1: Determination of Test Pressure
The test pressure for the product-wetted diffusive flow test is typically calculated using the following
formula and the determined product wet bubble point values:

Equation 2

𝑇𝑇 𝑃𝑃𝑃𝑃 = 𝑀𝑀 �
𝑃𝑃𝑃𝑃𝑃𝑃𝑎𝑎𝑎𝑎𝑎𝑎
𝑎𝑎𝑎𝑎𝑎𝑎�
Where:
TPPW = Test pressu
re, prod

uct-wetted (varies with surface tension)
MTPWW = Manufacturer test

pressure, water-wetted (or other test solvent) (see Section
10.2)
PBPavg = Average pr

oduct-w

etted bubble point of the test samples recorded in the test
WBPavg = Average water-wet

ted bubble point of the test samples recorded in the test
Step 2: Determination of t

he Product-Wetted Diffusive Flow Limit
The product-wetted diffusi
ve-flow limit is then typically determined as follows:
1. Conduct replicate water

-wetted diffusive-flow tests on the filter assembly at the test pressure
specified by the filter manufacturer (small-scale devices may be used as long as an accurate
determination of flow is p
ossible).
2. Dry the previously water-wet tested filter assembly and conduct several replicates of the productwetted
diffusive-flow test
 at the appropriate test pressure determined in Step 1, Equation 2 above.
3. Calculate the diffusive-flow test limit using the formula expressed in Equation 3:
Equation 3
𝐷𝐷𝐷𝐷𝐷𝐷𝑃𝑃𝑃𝑃 = 𝐷

𝐷𝐷𝐷𝐷𝐷 � 𝐷𝐷𝐷𝐷

𝑃𝑃𝑃𝑃
𝐷𝐷𝐷𝐷 �
Where:
DFLPW = Diffusive flow limit, product-wetted
DFLWW =

Diffusive-flow test limit specified by the sup

plier, water-wetted
DFPW = Diffusive flow, product-wetted
DFWW = Diffusiv

e flow, water-wetted
Diffusion values

are affected by the solubility of the

 test gas in the wetting fluid and its diffusion constant
through the wetting fluid, therefore acceptance criter
ia are specific to a particular test gas being used.
Licensed to Kuo, Li-Hung/Amaran Biotechnology, Inc.: C

opying and Distribution Prohibited.

### 7.5 When a Sterilizing-Grade Filter Should be Integrity-Tested

Where the claimed purpose of the filter is to sterilize, post-use integrity-testing is mandatory. This confirms
that the filter remained integral throughout its use and was capable of retaining microorganisms. If truly
nonintegral filters are detected post-use, a thorough investigation to determine the root cause is required.
Guidance on best practice is to leverage the supplier’s or manufacturer’s expertise. In most cases, it also
results in discarding a drug batch (or reprocessing, where validated) to protect patient safety from exposure
to a nonsterile product.

For filters marketed for critical sterilizing filtration, each filter element should also be integrity-tested by the
filter manufacturer prior to release.

Integrity-testing can also be performed by the end user prior to use, either before the filter itself is sterilized
(when sterilized by the end user) or after sterilization (Figure 7.5-1). This allows early detection of
nonintegral filters or improperly installed filters prior to execution of the filtration process. Whether to test
filters in-line or off-line will depend on actual process requirements, but the test must include the cartridge
already installed in the filter-housing (if applicable) so the seal between the filter element and the housing is
also confirmed. Regulatory expectations regarding pre- and post-filtration integrity-testing may differ
regionally (9, 11). In general, the objectives of pre- and post-filtration integrity-testing vary, and the need for
each should be informed by risk assessment.

*[Figure 7.5-1 Filter Lifecycle–Opportunities for Integrity-Testing]*

Pre-use, pre-sterilization integrity tests performed by the end user would be redundant to the integrity test
performed by the filter manufacturer to release the sterilizing-grade filter from their production. However, a
presterilization test will additionally confirm that an integral filter of the proper pore size has been correctly
installed in the housing, and that damage has not occurred during shipping and handling. A post-sterilization
integrity test provides the same information as a pre-sterilization test plus confirmation that the filter was not
damaged during sterilization. Steps must be taken to ensure that the downstream side of the system remains
sterile when performing PUPSIT.

#### 7.5.1 Pre-Use Post-Sterilization Integrity Test (PUPSIT) Considerations

The post-use test is designed to detect any filter damage that occurred throughout its lifecycle, up to and
including the filtration process itself. However, under extreme circumstances, post-filtration integrity test
results may be influenced (i.e., shifted) by high-foulant fluids, which may mask a filter flaw or larger pore
structure (44-47). In this scenario a PUPSIT result could identify filter flaws or filter damage when a postuse
integrity may not. Recent publications have shown that these conditions are atypical for terminal
filtration steps as filter-fouling is typically avoided within these filtration applications. Filterability studies,
performed to determine the appropriate filter size and area before any filter design is established, will

indicate the fluid-fouling propensity and filter flaw-masking risk, and gauge potential preventive
measurements against any fouling (47).

In filtration applications with significant pore-plugging or large-pore structure-blockage potential, it is
advisable to know the filter’s prefiltration integrity-test value prior to the influences of contact with the full
batch of product (or more strictly, the potential of foulants to shift the measured post-use integrity-test
results in the direction that might cause false passes.) Any excessive fouling conditions would be also
evidenced by significant flux decay or required pressure increase to maintain flow. True post-use integritytest
failures are typically a result of damages due to extreme mechanical or thermal process conditions. Such
damages are typically catastrophic, and flaw-masking would not be possible for catastrophic or gross
damage to filter membranes, as this damage is not capable of being “masked” by components of the fluid to
an extent that allows a post-use test to appear to pass (48). However, in cases where significant fouling of
the filter is possible, it could potentially mask rare marginal membrane flaws, which may not be detected by
the post-use integrity test. Excessive filter-fouling could also be detected by special customizations to the
post-use test, as the decrease in porosity and blockage of the largest pores would be manifested in a decrease
in diffusive flow and in an increase in the bubble point, respectively (49). Alternative means also exist to
detect any fouling that has the potential to modify post-use test value, including flow and differentialpressure
monitoring during filtration, and possible modifications to the post-use test to detect unexpectedly
low diffusive-flow values or unexpectedly high bubble points. Further, any risk of such flaw-masking (due
to product-specific mechanisms of shifting the integrity-test results after fouling) can be evaluated during
process design. Decades of experiences of filter suppliers and end-users showed that this type of behavior is
scarce and evaluated during filterability tests respectively filter area sizing and process validation.

Any potential risks involved in the sterilizing filtration activity must be thoroughly assessed (28, 50, 51).
While PUPSIT is a common regulatory expectation, there may be process constraints where it is not feasible
(11). In such cases, and in relevant jurisdictions, a thorough risk assessment is required not to justify
omission, but to evaluate and manage the risks associated with not performing PUPSIT. This includes
assessing the filter sterilization process, supply chain controls, packaging, product characteristics, and prefiltration
steps. The goal of this assessment is to ensure that adequate controls are in place to mitigate the
risk of using any non-integral filters.

#### 7.5.2 Post-Filtration Integrity-Test Considerations

For operational reasons, the post-filtration integrity test should be accomplished as soon as feasible to avoid
any detrimental test influences, for example, filter membrane wetting problems. Product residues should not
dry out on the membrane and should be removed, if possible (by sufficiently flushing the filter with an
appropriate fluid, post-use), if not testing in product. Filters should not be discarded until the integrity-test
results are reviewed. Storage conditions and duration should be qualified to ensure they do not adversely
affect the integrity of the filter. In cases of abnormally long delay between the use of the filter and its
integrity test, the possibility of false passes should be evaluated.

The post-use test is not only a test of membrane integrity, but of the junction between the filter element and
its housing or capsule. The filter element to be tested should therefore remain within the filter-housing to
ensure that the filter and its junction with the housing has been integral throughout the filtration process. The
post-use integrity test could be performed in-line or off-line within specific integrity-test laboratories within
the end user’s facility. The post-use test can be performed as a product-wet or water-wet procedure.
Confirmation of integrity must be obtained before any product batch is released; therefore, the filter must
not be discarded before the test result is obtained. If the filter receives an apparently failing integrity-test

result, specific activities for retesting or root cause analysis are required and should be documented in the
relevant procedure or batch record.

#### 7.5.3 Integrity Testing for Serial or Redundant Filtration

Manufacturing processes may be designed with trains of multiple filters, but the purpose of these extra
filters varies from process to process (see Section 5.0). This purpose determines the need for integritytesting
of each filter. If one filter has been validated to achieve sterilization with a specific product, then the
single sterilizing filter must satisfactorily pass integrity-testing after use.

7.5.3.1 Two-Filter Sterilization (Double Filtration)

In double filtration, the filter train is considered to be a sterilizing unit, and all sterilizing filters within the
train must satisfactorily pass integrity-testing after use.

##### 7.5.3.2 Pre-Filtration

For prefiltration, requirements for integrity-testing must be determined by the end user in an overall
assessment during process design. Depending on the purpose of the filter, integrity-testing (correlated to
complete bacterial retention) may not always be necessary.

##### 7.5.3.3 Redundant Filtration

The primary filter (generally the farthest downstream) must be integrity-tested post-use. The secondary
(redundant) sterilizing filter may not require post-use integrity-testing unless the primary sterilizing filter
fails. In that case, the redundant filter must satisfactorily pass post-use integrity-testing and the reason for
the failure of the primary filter should be investigated including confirmation of the sterile boundary. If the
sterilizing-filtration process is redundant and registered as having PUPSIT, both filters should undergo
PUPSIT for them to be considered comparable.

Performing PUPSIT on both filters in a redundant filtration configuration can be quite complex. Each filter
must be tested individually after sufficient wetting; a single test cannot typically be used to test both filters
simultaneously. Precautions should be taken to maintain the sterility of the fluid pathway between the two
filters, as that region becomes critical for product sterility should the downstream filter fail, and the
upstream filter is relied upon for sterility. Controls can include the use of additional sterilizing filters to vent
the integrity-test gas from the upstream filter and introduce the test gas for integrity-testing the downstream
filter. To test the downstream filter, there must be a valve or other closure between it and the upstream filter.
In this type of setup, the integrity-test process-method development should include a risk assessment to
ensure that the effects of wetting, or nonintegrity of the product and vent filters, does not interfere with the
filter integrity-test result (52, 53). Further details on these considerations were discussed in PDA’s Points to
Consider for Implementation of Pre-Use Post-Sterilization Integrity Testing (PUPSIT).

### 7.6 Failure Analysis/Troubleshooting

If a sterilizing filter fails an integrity test, it could be damaged, but there may be other causes for the failure
that include incorrect assembly (incomplete sealing) and incomplete wetting (see Section 7.7.1). Due to the
physical mechanisms of filter integrity-testing, “false failures” may occur, and controlled retesting with
defined actions may be permitted. When procedures are followed and appropriately justified, an ultimate

passing result can be treated as a valid result even if initial tests resulted in reported failures. Filter-failure
investigations and retest procedures should be documented.

To distinguish between filter damage and possible wetting or other problems, the following verification
steps may be taken to determine that the:

• Appropriate integrity test has been selected
• Correct test parameters are being used
• Correct wetting fluid and wetting procedure are being used
• No leaks in the test system
• Filter assembly temperature has remained stable and within specification during testing (e.g.,
adiabatic effect*) (54)
• Equipment has been properly calibrated (55)
• Test setup is properly assembled and functions properly
• Correct filter has been installed

*Note: Adiabatic effects can influence the test result if temperature is not held constant. To overcome this,
extended stabilization and test times may be required for these systems.

After verifying the above, troubleshooting steps (including re-wetting and re-testing) can be performed to
rule out possible false failure causes. Example steps in a troubleshooting procedure include:

• Rewet the filter according to the specifications and repeat the test (see Figure 7.6-1, Step 1).

If the filter integrity-test fails again, the following step may be employed:

• Apply more aggressive wetting conditions by increasing the flush volume/time, increasing the
pressure differential, and/or applying back pressure (see Figure 7.6-1, Step 2).

If the filter-integrity test fails again, the following steps may be employed:

• Perform the integrity test in a lower surface-tension reference fluid to assess filter wettability
changes independent of filter integrity (see Figure 7.6-1, Step 3).
• If the filter fails using the reference fluid, the filter fails the test.

If the filter passes the integrity test at any point during this failure analysis, it can be considered integral and
capable of yielding a sterile effluent. Figure 7.6-1 provides an example of a decision tree that may be used
to evaluate integrity-test failures. The total number of test repetitions allowed should be defined and
documented, and all actions should be proceduralized. When the total number of test repetitions allowed is
exceeded, investigations should be initiated and documented.

*[Figure 7.6-1 Example Integrity-Test Failure Analysis Decision Tree]*

#### 7.6.1 Insufficient Wetting Failure Analysis

Filter integrity-test failures are often caused by insufficient wetting of the filter membrane matrix.
Incomplete wetting may be due to either inadequate flushing to wet out all pores, adsorption of hydrophobic
contaminants, or other formulation components that can change the surface-wetting characteristics of the
filter membrane. A change in the wetting characteristics may affect integrity-test performance. For example,
leachables from upstream materials may be adsorbed into the filter membrane, impacting its wetting
properties and resulting in an integrity-test failure (56).

To obtain an appropriate integrity-test result, the filter’s porous structure must be completely wetted, as the
physics of integrity-test measurement rely on either gas flow through the wetting liquid layer or
displacement of the wetting fluid from the largest structure. Wetting of the filter membrane can be
influenced by:

• Membrane polymer: Some polymers are easier to wet than others, depending on the critical
surface tension of the membrane material
• Pore size: The smaller the pore size, the more difficult the pores are to wet
• Wetting fluid: Some wetting fluids may interact unfavorably with the polymeric matrix
• Product residues or contaminants: Product residues or contaminants can alter the
hydrophilicity of the membrane polymer and repel the wetting fluid or lower the surface tension
• Pressure conditions: Manufacturer’s pressure recommendations should be followed to
completely wet the membrane
• Temperature conditions: Temperature influences the surface tension of the wetting fluid

In addition to the above, there may be process- and application-specific factors that could affect integrity
tests that are not covered by the manufacturer’s description of use. The troubleshooting steps described in
Section 7.6 and the decision tree provided in Figure 7.6-1 may be useful to evaluate integrity-test failures.
Additional troubleshooting information is provided in Section 10.3.

## 8.0 Sterilization of Filters

A key element of a successful sterilizing filtration process is the sterility of the filtration assembly,
especially on the filtrate side. Proper sterilization of filters involves applying the right physicochemical
conditions, and with careful attention, this process can be highly effective while preserving the integrity of
the filter membranes and components. By following the manufacturer’s recommendations for sterilization,
the risk of thermal, mechanical, or chemical damage to the filters can be minimized. The sterilization
process should be appropriately qualified to ensure that there is no variation during the cycle and that it
achieves the respective sterility goal and does not cause harm to the filtration device. In instances when the
sterilization process is not automated, a routine integrity test of the filter after sterilization may be
performed. An integrity test after the sterilization process can confirm that the filter was not damaged during
sterilization.

### 8.1 Steam Sterilization

Steam under pressure is widely recognized as one of the most effective sterilization methods, typically
carried out in an autoclave or in situ as SIP. Steam sterilization cycles are required to be properly validated
and performed to ensure the entire filter and membrane matrix is sterilized. The steam sterilization cycles
are often automated and well controlled within the end-user site to assure maintaining the validated state.
Validation studies typically include integrity-testing the filters post-sterilization and the use of biological
indicators (BI). BI’s may be placed in the filter core or embedded into the pleat packs. These studies play a
critical role in confirming that the cycle achieves a 10-6 sterility assurance level and that the filters are
integral.

Steam sterilization parameters should be considered carefully when designing a sterilization process for any
filter. Refer to the filter manufacturer’s literature for additional information regarding temperature and
pressure limitations together with the maximum allowable sterilization cycles.

#### 8.1.1 Autoclave Sterilization

Most sterilizing filters are qualified for steam sterilization by their manufacturers to at least 121°C and, in
some cases, up to 130 – 134°C. Temperatures higher than this may make many of the plastics used for filter
construction unstable and may affect the physical integrity of the filter or increase the level of extractables.

Filter assembly preparation for autoclave sterilization is critical. Sterilized filter components should be
protected with a suitable microbial barrier to avoid recontamination after sterilization; however, the barrier
must allow air to pass from the filter and steam enter the filter during sterilization. It is critical to ensure that
filter inlets and outlets are left open to avoid excessive differential pressures during sterilization. Wrapped
articles should be covered with only enough wrapping material to protect critical surfaces while allowing
free transfer of saturated steam and air through the material. Use of sterilization tape should be minimal. The

weight of any attached fittings and hoses should be supported to avoid potentially deforming of capsule
filter inlet and/or outlet at high temperatures. Hoses should not be kinked or closed to allow the free flow of
steam and air. The filter user should refer to the manufacturer’s specifications when developing an autoclave
sterilization cycle for the filter assembly. Slow exhaust (e.g., liquid) cycles may be considered for filter
sterilization to avoid excessive pressure differentials across the filter during the cool-down phase of the
cycle. Filters should be removed promptly after the sterilization cycle to avoid potential oxidative damage
from heated air in the chamber.

One of the major difficulties encountered in autoclave sterilization is air removal. Air can be effectively
removed at the initiation of the sterilization cycle by applying a series of vacuum and steam purge cycles.
Large filter assemblies may require adjustments to the sterilization parameters, especially the prevacuum
phase, to optimize air removal and steam penetration (57). During the sterilization cycle, the filter assembly
should be oriented to allow condensates to drain. If the filter is integrity-tested immediately poststerilization,
it does not have to be dry.

#### 8.1.2 Sterilize-in-Place

The SIP method is limited to filters in housings that can withstand steam pressures of 15–30 psig (1–2 bar).
Disposable filter capsules with polypropylene or polyester housings should not be subjected to in-situ steam
under pressure, except for high-temperature polymers, such as polyetherimide.

To ensure optimal performance during the sterilization process, it is important to monitor pressure
differentials by installing pressure gauges both upstream and downstream of the filter (58). Adhering to the
differential pressure limits set by the filter manufacturer for each specific housing or assembly is critical,
especially at elevated temperatures. High differential pressure may occur due to restricted drainage or
blocked steam flow but, with proper practices, this can be effectively avoided.

To protect wetted filters, steam should be introduced gently in forward flow at low pressure. This approach
allows the filters to heat up gradually, ensuring that any liquid in the membrane matrix is evaporated before
steam flow begins. An effective way to facilitate this is by opening the upstream vent and housing drain
before the steaming process. This allows steam to efficiently heat the filter, ensuring a smooth transition to
sterilization. Once downstream pressure increase is observed, upstream steam pressure can be increased to
target the sterilizing pressure by partially closing the vent and drain valves. Alternatively, the system can be
designed to introduce steam from both sides of the filter to avoid excessive steam-pressure differentials.

During the cool-down phase of an SIP process, it is critical that air or other suitable gas maintain a positive
pressure across the filter. Excessive reverse pressure differential can arise if the upstream side of the filter is
cooled more rapidly than the filter core. Gas-assisted cooling is preferred over liquid cooling, because the
latter may generate thermal shock and damage the filter (58, 59).

### 8.2 Irradiation Sterilization

Common irradiation sterilization processes are gamma radiation and X-ray. Gamma and X-ray irradiation
sterilization can be validated using a bioburden and dosimetry approach. Follow current International
Organization for Standardization (ISO) standards such as ISO-11137: Sterilization of Health Care ProductsRadiation
(60).

Some polymers used in filter manufacturing have limited resistance to sterilizing irradiation. Filters may be
constructed of radiation-resistant materials or polymers formulated with antioxidant additives designed to

protect the polymer from excessive radiation-induced degradation. Irradiation sterilization, as with all
sterilization methods, requires validation to establish sterility and stability.

Irradiation sterilization has several advantages, such as a high sterility-assurance level, no residual gas-or
chemical-sterilization components, dry filters, and minimal interference by packaging components with the
sterilization process. Disadvantages include potential lack of filter compatibility to high-dose and limitedfilter
shelf life (most irradiated filters are not validated to withstand a second sterilization cycle involving
irradiation or steam). Steam sterilization of previously irradiated filters may increase extractables and
leachables and could lead to loss of filter integrity, which could be confirmed by an integrity test.

### 8.3 Gas Sterilization

The most common sterilization gas is ethylene oxide, which may be used at 100% or diluted in a carrier gas.
In addition to the increased environmental impact from using ethylene oxide as a sterilant, there may be
safety factors such as the formation of ethylene chlorohydrin and ethylene glycol reaction products and
ethylene oxide that may remain in the filter matrix. For successful filter sterilization by ethylene oxide, the
filters should be dry and wrapped in a manner that allows for the free entry of water vapor and gas into the
filter matrix. Following sterilization, the package also should permit the removal of residual gas and other
undesirable byproducts. Due to the difficulty of ensuring gas penetration into and out of the filter membrane,
this method of sterilization is typically not used for pleated filters but only for very small, encapsulated discstyle
filters.

Parameters influencing gas sterilization are preconditioning factors, gas concentration, relative humidity,
temperature, and time. Since there is no established correlation between lethality and the interrelationship
between the sterilization parameters, destruction of a suitable biological indicator is the preferred method for
validation and process monitoring. Spores of Bacillus atrophaeus have been established as the indicator of
choice for this sterilization method.

### 8.4 Resterilization of Filters

Many sterilizing filters are designed to withstand multiple autoclave or in situ SIP cycles, either to
demonstrate robustness or to meet filter-user resterilization requirements. Multiple gamma-irradiation
sterilization cycles are generally not applicable due to cumulative dosage effects. Autoclave resterilization
of previously radiation-sterilized filters may also not be possible. Suitability of resterilization processes
should be confirmed with the filter manufacturer.

Where the resterilization of sterilizing filters is elected, the filter user should ensure that the resterilization
process and the number of resterilization cycles does not adversely affect the filter or the product.
Resterilization, including sterilization conditions, number of sterilization cycles and cumulative sterilization
times should be validated.

Sterilizing filters should be routinely discarded after the processing of a single lot. In instances where
repeated use can be justified, however, the sterilizing-filter validation including integrity-testing, bacterial
retention studies, and cleaning should incorporate the maximum number of lots to be processed.