# PDA Technical Report No. 33 (Revised 2026): Evaluation, Validation, and Implementation of Alternative and Rapid Microbiological Methods

## 1.0 Introduction

Rapid Microbiological Methods (TR 33) is intended to provide guidance for the successful evaluation,
validation, and implementation of alternative/rapid microbiological methods (AMM/RMMs) used in the
pharmaceutical, biotechnology, advanced therapy medicinal products (ATMPs), medical devices, and
related industries. The use of these methods is aligned with the expectations for improving product and
process quality, contamination control, and the rapid release of medically necessary drugs and devices.
Applications may include, but are not limited to, sterility testing, microbiological examination of nonsterile
products (enumeration and test for specified microorganisms), antimicrobial effectiveness testing,
microbiological monitoring of cleanrooms and other controlled environments, analysis of pharmaceutical
grade water, microbial characterization and identification, and microbiological in-process control testing.
The intended audience of TR 33 includes microbiologists and related individuals who are responsible for the
validation and utilization of microbiological test methods in the microbiology testing laboratory,
manufacturing environment, or other relevant testing settings. This technical report may also be of interest
to suppliers of testing equipment, microbiology managers and supervisors, validation specialists, quality
control (QC), compounders, and quality assurance personnel responsible for approving product release and
validation protocols, manufacturing personnel, individuals who work on global compendial initiatives, and
regulatory agencies. Additionally, Section 9.0 (Appendix 1) through Section 11.0 (Appendix 3) provides
useful information to support statistical analysis of data from AMM/RMM validation and comparability
studies.

### 1.1 Purpose & Scope

Microbiological testing plays an ever-increasing role in pharmaceutical and related industry laboratories. In
response to this, a variety of alternative and rapid methodologies have emerged in recent years that automate
conventional microbiological methods (CMM), make use of surrogate markers, or are based on wholly new
technologies. These AMM/RMMs can offer significant improvements in terms of speed, accuracy,
precision, and/or specificity, as compared with conventional microbiology test methodologies.
Most of the microbial testing performed today continues to rely on centuries-old CMMs that are based on
the recovery and growth of microorganisms using solid or liquid microbiological growth media. This is true,
in part, because these methods can be appropriate for their intended use and have a long history of
application in both industrial and clinical settings. However, they are often limited by slow microbial growth
rates, the unintended selectivity of microbiological cultures, and the inherent variability of microorganisms
in their response to growth-based methods. Despite the limitations of CMMs, alternative, more rapid, and
potentially superior microbiological methods have not been universally adopted within the pharmaceutical,
biotechnology, ATMP, medical device, and related industries. This seemingly continues to be due in part to

a lack of understanding regarding the steps needed to demonstrate their equivalence or comparability to
CMMs that would be acceptable to a firm’s internal quality expectations as well as regulatory agency
reviewers and inspectors. The original PDA TR 33 was published in 2002, and its first revision was released
in 2013. Based on the industry, compendial, and regulatory developments since the 2013 revision, including
the need for the rapid release of personalized medicines, such as ATMPs, sterile-compounded
pharmaceutical preparations, radiopharmaceuticals, and the rapid release of therapeutic drug products
needed in public health emergencies, the task force members believe that this revision of TR 33 is timely
and will provide additional guidance to assist with the evaluation, validation and implementation of
AMM/RMMs. While this document focuses on the manufacture of drug products, the validation approaches
and principles defined herein can be translated to other product categories (e.g., consumer goods) where
these AMM/RMMs may be applied.
Considerable guidance can be found regarding the validation of chemical methods, for example, U.S.
Pharmacopeia (USP) General Chapter ⟨1225⟩ Validation of Compendial Methods, International Conference
on Harmonisation (ICH) Quality Guideline Q2(R2): Validation of Analytical Methods, and U.S. Food and
Drug Administration (FDA) Guidance for Industry: Analytical Procedures and Methods Validation for
Drugs and Biologics (1-3). These publications provide very specific instruction regarding the demonstration
of alternative analytical chemistry methods and their equivalence to conventional chemical methods.
Chapters introduced by the global compendia, including USP General Chapter ⟨1223⟩ Validation of
Alternative Microbiological Methods, European Pharmacopoeia (Eur. Ph.) Chapter 5.1.6 Alternative
Methods for Control of Microbiological Quality, and Japanese Pharmacopoeia (JP) General Information
G4-6-170: Rapid Microbial Methods, provide guidance on the steps needed to validate an AMM/RMM (4-
6). Due to the differences in recommended validation strategies within each guidance document and the
potential variability in validation expectations across regulatory agencies, additional guidance that provides
an understandable and holistic approach to the qualification and implementation of AMM/RMMs is
desirable.
This technical report was developed as a collaborative effort among microbiologists and expert consultants
who have practical experience validating and implementing AMM/RMMs within the pharmaceutical,
biopharmaceutical, and medical device industries, AMM/RMM suppliers, and regulatory agency
representatives. By providing updated and agreed-upon performance standards and industry best practices,
the task force believes the validation and implementation of AMM/RMMs will be greatly accelerated.

## 10.0 Appendix 2: Validation of Alternative and Rapid

Microbiological Methods: Statistical Analysis-Quantitative
Methods
As mentioned at the beginning of Section 9.0 (Appendix 1), that section and Section 10.0 (Appendix 2)
provide several acceptable statistical analyses for the validation of alternative qualitative and quantitative
microbiological methods, respectively, while Section 11.0 (Appendix 3) focuses on additional
considerations for non-CFU AMM/RMMs. The statistical analyses recommended in the body of PDA
Rapid Microbiological Methods will be restated with example data to illustrate how the analyses can be
used. Although the example data is artificial, the data is based on real validation experiments previously
conducted by the authors. While these methods are presented as examples, the stakeholder is responsible for
selecting the most appropriate statistical analyses to use based on the data to be analyzed and the validation
criteria being assessed.
Section 10.0 (Appendix 2) contains many formulas, Table 10.0-1 provides a key of all the symbols used in
the formulas and their meaning.
Note: The notation log will be used for the natural logarithm in Section 10.0 (Appendix 2).

**Table 10.0-1 Nomenclature for Symbols Used in Section 10.0 (Appendix 2)**

Symbol
Meaning
Δ
The non-inferiority margin that is selected a priori to do a non-inferiority test. In some other
texts the notation 𝛿𝛿 is used.
Φ
The standard normal distribution function.
𝜆𝜆
The mean number of microorganisms or the bacterial density in a set of test samples or in a
suspension. We also use 𝜆𝜆 for a spiked level of microorganisms in an accuracy, linearity, or
precision experiment. In some settings we may use an index to illustrate the purpose of the
concentration level, e.g., 𝜆𝜆LoQ is the concentration at which the microbiological method
produces an average count at the upper tail for blank samples.
𝜃𝜃
The parameter used to quantify the accuracy (often in terms of recovery) of the
microbiological method. 𝜃𝜃𝐴𝐴 and 𝜃𝜃𝐶𝐶 are sometimes used as accuracy for the AMM/RMM and
CMM against the spiked concentration level, while 𝜃𝜃𝐴𝐴 can also be the accuracy of the
AMM/RMM against the CMM.

Symbol
Meaning
𝑛𝑛
The number of samples tested typically for a single concentration with the microbiological
method. 𝑛𝑛𝐴𝐴 and 𝑛𝑛𝐶𝐶 are the number of samples tested with the AMM/RMM and CMM,
respectively. 𝑛𝑛 can play the role of all samples tested, i.e., 𝑛𝑛= 𝑛𝑛𝐴𝐴+ 𝑛𝑛𝐶𝐶 or represent 𝑛𝑛𝐴𝐴 or 𝑛𝑛𝐶𝐶
if we only do an analysis for a single microbiological method.
𝑚𝑚
The number of runs in a precision experiment (per microbiological method).
𝑦𝑦𝑖𝑖
A count for test sample 𝑖𝑖 with the microbiological method. In some cases, the index 𝑖𝑖 is
eliminated to make notations clearer, but it still represents a count for a test sample. In other
cases, multiple indices may be used to indicate test samples for different subgroups, e.g., 𝑦𝑦𝑖𝑖𝑖𝑖 is
the count of test sample 𝑗𝑗 for group (e.g., run) 𝑖𝑖.
𝑦𝑦ത
The mean count for a set of test samples at the same concentration level for the
microbiological method, i.e., 𝑦𝑦ത= ∑
(𝑦𝑦𝑖𝑖/𝑛𝑛
𝑛𝑛
𝑖𝑖=1
). The means 𝑦𝑦ത𝐴𝐴 and 𝑦𝑦ത𝐶𝐶 are the mean counts for
test samples tested with the AMM/RMM and CMM, respectively.
𝑟𝑟𝑖𝑖
The recovery for test sample 𝑖𝑖, where the recovery is equal to the observed count 𝑦𝑦𝑖𝑖 for the
sample divided by the spiked concentration 𝜆𝜆 for the sample.
𝑟𝑟̅log
The mean value of the (natural) log-transformed recoveries, i.e., 𝑟𝑟̅log = ∑
log(𝑟𝑟𝑖𝑖) /𝑛𝑛
𝑛𝑛
𝑖𝑖=1
 and
with 𝑛𝑛 the number of samples tested.
𝑧𝑧𝑖𝑖
Used as latent variable in a generalized linear mixed effects model for group 𝑖𝑖 (e.g., run in a
precision experiment).
𝛽𝛽0
The intercept in a (linear) concentration-recovery curve and the slope in a (linear or log-linear)
concentration-response curve.
𝛽𝛽1
The slope in a concentration-recovery curve, but plays the role of intercept in the non-linear
Mitscherlich function.
𝛽𝛽2
The “slope” in the non-linear Mitscherlich function, i.e., the coefficient of the power of the
concentration level.
𝛽𝛽3
The power parameter in the non-linear Mitscherlich function.
𝛼𝛼
The intercept in a (linear) concentration-response curve or in a Poisson regression analysis. 𝛼𝛼𝐴𝐴
and 𝛼𝛼𝐶𝐶 are the intercepts in the (linear) concentration-response curve obtained with the
AMM/RMM and CMM, respectively.
𝛽𝛽
The slope in a (linear) concentration-response curve or in a Poisson regression analysis. 𝛽𝛽𝐴𝐴
and 𝛽𝛽𝐶𝐶 are the slopes in the linear concentration-response curve obtained with the
AMM/RMM and CMM, respectively.
𝛾𝛾
The coefficient for a quadratic concentration-response curve.
𝜀𝜀
The residual in a regression equation. It represents the unexplained variability from the
regression equation that was fitted through the observed data (counts or recoveries). It is
typically assumed that the residual follows a normal distribution with a variance that may
depend on the concentration level.
𝜇𝜇
The notation for a mean count in the ANOVA approach for precision.

Symbol
Meaning
𝜎𝜎2
A variance component and indicates the variation in counts. It is used for the variance of the
residual and for variation sources in an ANOVA. We may use indices to indicate for what part
of variation the variance belongs. For instance, it could represent a variance for the residuals
at a specific concentration level, e.g., 𝜎𝜎0
2 is the residual variance for blank samples, or it could
represent the variance within (𝜎𝜎𝑊𝑊
2 ) and between runs (𝜎𝜎𝐵𝐵
2).
𝜏𝜏2
A variance component used to quantify the variability of the latent variable in a generalized
linear mixed effects model that quantifies the between run variability in the logarithmic scale
of a precision experiment.
𝜂𝜂2
The variance of the estimator for the total variability calculated from a one-way random
effects ANOVA. 𝜂𝜂𝐴𝐴
2 and 𝜂𝜂𝐶𝐶
2 are the variances for AMM/RMM and CMM, respectively.
𝑚𝑚(𝜆𝜆)
The concentration-response curve for the microbiological method in (spiked) concentration
level 𝜆𝜆. 𝑚𝑚𝐴𝐴(𝜆𝜆) and 𝑚𝑚𝐶𝐶(𝜆𝜆) are the concentration-response curves for the AMM/RMM and
CMM, respectively.
𝜏𝜏(𝜆𝜆)
The standard deviation of the log-transformed estimated concentration-response curve for
the microbiological method at concentration level 𝜆𝜆. 𝜏𝜏𝐴𝐴(𝜆𝜆) and 𝜏𝜏𝐶𝐶(𝜆𝜆) are the standard
deviations for the log-transformed estimated concentration-response curves for the
AMM/RMM and CMM, respectively.
𝑆𝑆𝑆𝑆
The abbreviation of standard error and represents the standard deviation of an estimate of a
parameter. In some cases, an index is used to indicate the parameter of interest, e.g., 𝑆𝑆𝑆𝑆𝛼𝛼 the
standard deviation of the estimate of the intercept 𝛼𝛼 in a regression equation.
𝐿𝐿𝐿𝐿𝐿𝐿
The lower confidence limit. Often there will be an index 𝑋𝑋 attached to it, i.e., 𝐿𝐿𝐿𝐿𝐿𝐿𝑋𝑋, to indicate
for what (validation) parameter or statistic the confidence limit is calculated.
𝑈𝑈𝑈𝑈𝑈𝑈
The upper confidence limit. Often there will be an index 𝑋𝑋 attached to it, i.e., 𝑈𝑈𝑈𝑈𝑈𝑈𝑋𝑋, to
indicate for what (validation) parameter or statistic the confidence limit is calculated.
𝑈𝑈𝑈𝑈
The abbreviation for upper quantile and represents a value in the upper tail of the distribution
of observations, in particular the upper quantile for the distribution of counts of blank test
samples.
𝑀𝑀𝑀𝑀
The abbreviation of mean squares used in ANOVA. We may use indices to identify for which
factor the mean squares is calculated, e.g., 𝑀𝑀𝑀𝑀𝑊𝑊 and 𝑀𝑀𝑀𝑀𝐵𝐵 are the mean squares within and
between the runs of a one-way ANOVA.
𝑅𝑅𝑅𝑅𝑅𝑅
The abbreviation of relative standard deviation for enumeration of a microbiological method.
We will use an index to indicate what relative standard deviation we are referring to, e.g.,
𝑅𝑅𝑅𝑅𝑅𝑅𝑅𝑅 and 𝑅𝑅𝑅𝑅𝑅𝑅𝐼𝐼𝐼𝐼 are the relative standard deviations for repeatability and intermediate
precision of a microbiological method. To be able to indicate the measures of precision for
AMM/RMM or CMM, we may write 𝑅𝑅𝑅𝑅𝑅𝑅𝑅𝑅
𝐴𝐴 or 𝑅𝑅𝑅𝑅𝑅𝑅𝑅𝑅
𝐶𝐶 for repeatability and 𝑅𝑅𝑅𝑅𝑅𝑅𝐼𝐼𝐼𝐼
𝐴𝐴 or 𝑅𝑅𝑅𝑅𝑅𝑅𝐼𝐼𝐼𝐼
𝐶𝐶 for
intermediate precision. In case we want to express the relative standard deviation in
percentages we use 𝑅𝑅𝑅𝑅𝑅𝑅(%).

### 10.1 Accuracy of Quantitative Microbiological Methods

When the quantitative or enumeration data of an AMM/RMM is analyzed, different ways of investigating
the accuracy of the AMM/RMM exist. The three different approaches discussed in this section are typically
related to the type of data-analytic assumptions one is willing to make.
The first assumption is related to the spiked concentration levels used in the accuracy experiment. An
important question about the spiked concentration levels is whether they can be used as a known and precise
concentration level, like that done for analytical measurement systems. If the spiked concentration levels are
considered precise, the recovery of the microbiological method(s) could be investigated at each
concentration level with respect to the spiked concentration levels (see Section 10.1.1). The recovery is here
defined as the ratio between the observed count and the spiked concentration level. This approach is typical
for analytical measurement systems, and also suitable for microbiological methods. However, in case the
spiked concentration levels are considered less precise, a comparison in counts between the two
microbiological methods may be more appropriate (also Section 10.1.1).
The second assumption is related to the count distribution for the replicated results. Often, it is appropriate
to assume that these counts are from a Poisson distribution (see Section 10.1.1). Indeed, if samples from a
larger suspension were collected and the microorganisms are randomly distributed throughout the full
suspension, the number of organisms in the test samples may be considered Poisson-distributed (8).
However, in practice, the replicated counts may sometimes show more variation than can be expected from
the Poisson distribution (e.g., when microorganisms are clustered in the suspension). For Poisson data, the
mean should be approximately equal to the variance. When more variation is present, this feature is referred
to as overdispersion. In such cases, the use of a Poisson distribution should be avoided and an overdispersed
Poisson distribution should be used on the counts directly, like the negative binomial distribution or,
alternatively, a normal distribution typically on the logarithmically transformed counts should be used (see
Section 10.1.1).
The logarithmic transformation on the counts is beneficial to correct for the skewness in the counts and
make the transformed counts more normal. Counts may often show positive skewness, in particular at lower
concentration levels where the tail of the distribution of the counts is longer on the right side of the
distribution than on the left side of the distribution. At higher concentration levels, replicated counts (at the
same concentration level) often show more symmetry in the distribution of the counts. Figure 10.1-1
provides examples of two histograms with five hundred (500) replicated counts spiked at concentration
levels 10 CFU and 50 CFU, respectively. The right tail of the histogram at 10 CFU (left histogram) is larger
than the left tail, while the histogram at 50 CFU (right histogram) does not show this skewness.

*[Figure 10.1-1 Visualization of Skewness for Counts at 10 CFU (left) and 50 CFU (right)]*

The third and final assumption is related to how the count data from all spiked concentrations could be
analyzed simultaneously. In some cases, it may be beneficial to build a regression equation between the
counts and the spiked concentrations to establish accuracy. Such an approach is also necessary for the
validation parameter linearity. An advantage of using regression models is that they can determine the level
of accuracy at concentration levels other than the spiked concentrations levels used in the experiment.
Moreover, the regression models can be used to determine the set of concentration levels for which non-
inferiority is appropriate between the two microbiological methods (see Section 10.2). However, this benefit
would only be useful when the spiked levels are considered known and precise.
Some of the proposed analyses can be demonstrated by using the data of an accuracy experiment provided
in Table 10.1-1. The experiment consists of six concentration levels (5, 25, 50, 100, 150, 250 CFU) for a
specific microorganism for both the AMM/RMM and CMM. At each spiked concentration, five replicates
were considered. Table 10.1-1 also contains the mean count and the variance in counts for each
concentration level and microbiological method.

**Table 10.1-1 Counts for a Specific Microorganism for the Alternative/Rapid Microbiological**

Method and the Conventional Method at Different Concentration Levels
Replicate
AMM/RMM
CMM
Mean
4.8
19.8
42.2
76.2
121.6
195.0
5.8
21.8
44.8
86.6
127.0

### 201.4 Variance

4.7
14.2
44.2
32.7
103.3
388.0
2.2
6.7
39.7
151.3
135.0
29.3

#### 10.1.1 Comparability of the Alternative/Rapid Microbiological Method for Each

Concentration Against the Spiked Concentrations
Section 10.1.1 will demonstrate the normal and the Poisson distribution approach for accuracy of the
AMM/RMM against the spiked concentration levels. These approaches make sense when the spiked
concentrations have been determined reliably. Non-inferiority of the accuracy of the AMM/RMM is
determined by investigating the recoveries. The recovery results are the observed counts divided by the
spiked level at which the count was obtained and then multiplied by 100% to calculate the so-called
“observed recoveries.” The ideal outcome of the accuracy experiment is to obtain 100% recovery for each
sample.

##### 10.1.1.1 Using the Normal Distribution Approach

The normal distribution approach makes sense when either the recoveries or the logarithmically transformed
recoveries follow a normal distribution. The mean recovery per spiked concentration, together with its 90%
confidence intervals (calculated directly from the replicated recoveries at the spiked concentration or
through the inverse logarithm of the logarithmically transformed recoveries), is then established using the
normal distribution. To establish non-inferiority at a spiked concentration, the lower 95% confidence limit
should remain above the non-inferiority margin (e.g., 70%). The approach is illustrated here, in Section
10.1.1.1, on the logarithmically transformed recoveries. A standard fixed-effects ANOVA approach, where
the recoveries from multiple spiked concentrations are used simultaneously, is not recommended for the
accuracy of quantitative microbiological methods, although it is commonly used for analytical measurement
systems. The reason is that the standard fixed-effects, one-way ANOVA approach assumes that the within-
concentration variability across all spiked concentration levels is constant, that is, homoscedastic within-
concentration variances, an aspect that is typically violated for microbiological methods. Microbiological

methods need to accommodate the presence of what is called heteroscedasticity—the within-concentration
variance of the recoveries becomes smaller when the spiked concentration is increasing.
Using the normal distribution per spiked concentration may be appropriate when the recoveries or
logarithmically transformed recoveries follow a normal distribution; when the counts (on which the
recoveries are calculated) within each spiked concentration level shows overdispersion; and when the counts
are non-zero. When assessing counts, it is often expected that some right skewness may be present (more
variability to the right than to the left), and the normality for the recoveries may not hold. Therefore, using
the normal distribution approach on the logarithmically transformed recoveries is recommended. Due to the
presence of heteroscedasticity, the confidence interval per spiked concentration level is best calculated using
the variability per concentration level. This analysis can be easily done using any general-purpose statistical
software package. Following this, the calculated 90% confidence intervals in the log scale must be
transformed back to the original scale, though this back-transformation to the original scale may need to be
conducted manually. Although software packages can easily provide the results, the formulae are provided
here:
The mean recovery for one of the spiked concentrations is obtained by:
𝜃𝜃𝐴𝐴= exp൛𝑟𝑟̅logൟ= exp ቊ෍
ቈlog(𝑟𝑟𝑖𝑖)
𝑛𝑛𝐴𝐴
቉
𝑛𝑛𝐴𝐴
𝑖𝑖=1
ቋ
Where:
𝑟𝑟𝑖𝑖
=
the recovery (i.e., the count divided by the spiked concentration level)
𝑟𝑟̅log
=  mean of the logarithmically transformed recoveries
𝑛𝑛𝐴𝐴
=  number of counts for the specific spiked concentration of the AMM/RMM
The lower 95% confidence limit is obtained by:
𝐿𝐿𝐿𝐿𝐿𝐿= 𝜃𝜃𝐴𝐴∙exp ൜𝑡𝑡𝑛𝑛𝐴𝐴−1
−1 (0.95) ∙
𝑠𝑠log
√𝑛𝑛𝐴𝐴
ൠ,
with 𝑠𝑠log the standard deviation on the log transformed recoveries defined by its variance:
𝑠𝑠log
= ෍
൥
൫log(𝑟𝑟𝑖𝑖) −𝑟𝑟̅log൯
(𝑛𝑛𝐴𝐴−1)
𝑛𝑛𝐴𝐴
𝑖𝑖=1

and with 𝑡𝑡𝑛𝑛−1
−1 (0.95) the 95% upper quantile of the 𝑡𝑡-distribution with 𝑛𝑛𝐴𝐴−1 degrees of freedom. See the
constants 𝐶𝐶𝑚𝑚 in Table 9.2.5-4, where the number of species m in Table 9.2.5-4 plays the role of 𝑛𝑛𝐴𝐴. In case
sample size 𝑛𝑛𝐴𝐴 is large, the value 𝑡𝑡𝑛𝑛𝐴𝐴−1
−1
(0.95) is approximately equal to 1.645.
The results of the approach with the normal distribution on the logarithmically transformed recoveries are
presented in Table 10.1.1.1-1 under the column heading “Normal Distribution.” The results show that non-
inferiority (when comparing the observed counts to the spiked or expected counts) for a non-inferiority
margin of 70% is achieved for the concentration levels 50, 100, 150, and 250 CFUs. Although the mean
recovery is above 70% for the lower two concentrations (5 and 25 CFU), the amount of variability in
relation to the number of replicates is not small enough. In this instance, if more test samples had been
tested at these two lower concentrations, non-inferiority may have been achieved as well, but with the

current data collected, inferiority at 70% recovery cannot be rejected. Conversely, when more replicates are
conducted, the mean recovery may change as well, and it would not be certain that non-inferiority can be
reached at those lower concentrations.

**Table 10.1.1.1-1 Comparability of the Alternative/Rapid Microbiological Method on Recovery**

(%) per Concentration Level Using Different Data Analytic Approaches
Spike
Normal Distribution
One-Way ANOVA
Poisson Distribution
Mean %
Recovery
LCL
Mean %
Recovery
LCL
Mean %
Recovery
LCL
88.8
58.7
88.8
75.3
96.0
68.6
77.9
64.1
77.9
66.1
79.2
67.1
83.6
72.0
83.6
70.9
84.4
75.4
76.0
70.7
76.0
64.5
76.2
70.0
80.8
74.8
80.8
68.5
81.1
75.8
77.7
70.2
77.7
65.8
78.0
74.0
Table 10.1.1.1-1 also contains the results from a standard fixed-effects, one-way ANOVA analysis on the
logarithmically transformed recoveries, where the variability within concentration is pooled, to show that
such an analysis approach is less appropriate. For the one-way ANOVA approach, the non-inferiority is
achieved at 5 CFU and 50 CFU, but not at the largest three concentrations where the normal distribution
approach showed non-inferiority. The pooled variance for the within-concentration variability in the
ANOVA approach is too small for the lower concentrations and too large for the higher concentrations,
making the results from the one-way ANOVA analysis unreliable.

##### 10.1.1.2 Using the Poisson Distribution Approach

An alternative approach, which would make use of the Poisson distribution, is to first calculate the mean
counts and a lower 95% confidence limit for the mean counts using the Poisson distribution, and then
changing these values to recoveries by dividing the mean count and its lower 95% confidence limit by the
spiked concentration levels. The asymptotic or approximate lower 95% lower confidence limit on the mean
count that makes use of the Poisson distribution is equal to:
𝐿𝐿𝐿𝐿𝐿𝐿= 𝑦𝑦ത𝐴𝐴∙exp ቐ−1.645 ∙ඨ
(𝑛𝑛𝐴𝐴∙𝑦𝑦ത𝐴𝐴)ቑ
Where:
𝑦𝑦ത𝐴𝐴
=
mean count at a single concentration
𝑛𝑛𝐴𝐴
=
number of counts for the AMM/RMM at the same concentration

To determine recoveries with the Poisson approach, the mean count 𝑦𝑦ത𝐴𝐴 and the 𝐿𝐿𝐿𝐿𝐿𝐿 are both divided by the
spiked concentration level.
This analysis can easily be programmed with MS Excel but can also be done using any general-purpose
statistical software where a Poisson regression analysis is available. When using statistical software, the
counts of the AMM/RMM are the dependent variable, and the spiked concentration levels are the
independent variable that should be accounted for in the analysis as the categorical variable. The default link
function, which is the logarithmic link function, should be used. Statistical software requires a procedure
that can fit a generalized linear model. In SAS®, this is done with the procedure GENMOD, but in Minitab
the operation is accomplished via the “Stat > Regression > Poisson Regression > Fit Poisson Model”
Function. Note that the confidence limits are approximate or asymptotic and not exact confidence limits.*
*Note: For data analysts experienced in Poisson regression, the recoveries could also be obtained directly
from the Poisson regression analysis by including what is called an “offset” parameter. If the logarithmically
transformed spiked concentration level is chosen as the offset, the mean counts are expressed as a ratio of
the spiked concentration level, which are then the mean recoveries.
The output of a Poisson analysis as described above is provided in Table 10.1.1.2-1. It provides an intercept
which represents the expected count at (in this case) the highest concentration level, but on the logarithmic
scale. Transforming this back to the original scale, an expected count of 195 is obtained, which is the
average count provided in Table 10.1.1-1 for the 250 CFU concentration for the AMM/RMM. The other
coefficients represent the difference in expected counts between the highest concentration and the other
concentrations in the logarithmic scale. Thus, the difference in counts between the concentrations of 5 and
250 CFUs is -3.7044 in the log scale, which means that the mean count at 5 CFU is equal to 2.46% of the
mean count in the 250 CFU concentration. This can also be determined from Table 10.1.1-1, because 2.46%
is equal to 100% × 4.8/195. The p-value for this difference (which is <0.001) indicates that the equality in
the mean count between the two spiked concentrations is rejected at the significance level of 𝛼𝛼= 0.05.

**Table 10.1.1.2-1 Output of Poisson Analysis for all Concentration Levels**

Effect
Estimate
SE
95% CI
Chi-Square
p-Value
Intercept
5.2730
0.0320
(5.2102 ,5.3358)
27109.4
<0.001
Conc. 5
-3.7044
0.2066
(-4.1093, -3.2994)
321.43
<0.001
Conc. 25
-2.2873
0.1055
(-2.4941, -2.0806)
470.21
<0.001
Conc. 50
-1.5306
0.0759
(-1.6794, -1.3818)
406.36
<0.001
Conc. 100
-0.9396
0.0604
(-1.0581, -0.8212)
241.88
<0.001
Conc. 150
-0.4723
0.0517
(-0.5735, -0.3710)
83.52
<0.001
Conc. 250
0.0000
0.0000
(0.0000, 0.0000)
-
<0.001
The recovery estimates from this Poisson analysis can be calculated with general-purpose statistical
software, but the instructions will depend on the package used. For instance, in SAS®, the option

“LSMEANS” may be used with the procedure instructed to use exponentiated means with a significance
level of 0.1. On the other hand, in Minitab, after the Poisson regression analysis was conducted, the Predict
option from the Poisson regression analysis must first be used to obtain predicted counts and lower 95%
confidence limits at each spiked concentration level. Then these predicted values and lower limits must be
divided by the spiked concentration level. The results are presented in Table 10.1.1-1.
When comparing the results from the normal and Poisson distribution approaches, the mean recoveries
deviate from the normal distribution approach (and the fixed-effects, one-way ANOVA approach) on the
logarithmically transformed recoveries because the Poisson distribution is based on the arithmetic mean of
the recoveries, while the normal distribution is based on the geometric mean of the observed recoveries.
Nevertheless, the lower confidence limits for the normal distribution and the Poisson distribution are
relatively close, and they lead to the same conclusion on non-inferiority. Using the results from Table
10.1.1-1, non-inferiority at the margin of 70% is achieved for concentrations of 50, 100, 150, and 250 CFUs,
but not for 5 CFU and 25 CFU, because the LCL is lower than 70%.

##### 10.1.1.3 Lack-of-Fit Analyses

As discussed in Section 10.1.1.1, the one-way ANOVA method is not reliable, and either the Poisson
distribution or the normal distribution approach should be considered for non-inferiority testing. While it
may not be easy to decide between these two analyses, the Poisson distribution would be preferred over the
normal distribution approach when the number of microorganisms in the test samples follow the Poisson
distribution. But often there may be violations (e.g., clustering of microorganisms), and these violations
would typically increase the variability, so the confidence limits from the Poisson distribution will then be
too narrow. Thus, when the Poisson distribution is violated, due to overdispersion, it is better to use an
alternative distribution than the Poisson distribution, and the normal distribution approach may be a suitable
alternative.
Demonstrating that the distribution of the counts violates the Poisson distribution is not straightforward.
Alternatively, checking the residuals for the normal distribution on the recoveries or the log-transformed
recoveries is not recommended due to the heterogeneity in variability across spiked concentrations.
Moreover, an evaluation of normality per concentration is not appropriate either due to the small number of
replicates.
One way of investigating the violation of the Poisson distribution is to evaluate overdispersion. This lack-of-
fit test may be done qualitatively, by investigating the ratio of the variance/mean per concentration. This
ratio should be approximately one (1) when no overdispersion is present, while the presence of
overdispersion would make this ratio larger than one. Table 10.1.1-1 also shows the variances per
concentration, and the only concentration that is questionable is the highest concentration for the
AMM/RMM, since the ratio is around the value of two (2). This larger variation is most likely due to the
outlying value of 163 counts for replicate #5. Thus, taking all of the concentrations into consideration, this
qualitative analysis does not indicate strong evidence for overdispersion.
A more formal analysis is to rerun the Poisson regression analysis with a negative binomial distribution. The
negative binomial distribution can be viewed as a Poisson distribution with additional variability; it
estimates an additional overdispersion parameter. Thus, comparing these two regression models on their fit-
to-the-count data investigates whether a violation of the Poisson distribution is related to overdispersion.
The two regression models can be compared using Akaike’s corrected information criterion (AICC).

simplicity of the model, and it is typically useful in comparing different statistical models. The AICC value
on its own does not provide relevant information rather it is typically provided by the general-purpose
software in the output of the Poisson and negative-binomial regression analyses. Thus, for statistical
software programs with the capability of performing both a Poisson and negative-binomial regression
analysis (like SAS®), the results of the AMM/RMM in Table 10.1.1-1 shows an AICC of 208.2 for the
Poisson regression analysis and 211.6 for the negative-binomial regression analysis. Since the Poisson
regression analysis has a smaller AICC, the Poisson model is considered more appropriate than the
negative-binomial.
Some statistical programs cannot extend the Poisson distribution to the negative-binomial distribution in the
regression analysis for counts, but they may provide generic tests for the lack-of-fit of the Poisson
distribution, like the deviance goodness-of-fit test or the Pearson chi-square test. The deviance test compares
the “selected model” to the data against the “saturated Poisson model” (when a Poisson distribution is used).
The saturated Poisson model for the current data is the model in which it is assumed that the count at each
concentration comes from the Poisson distribution. The Pearson goodness-of-fit test investigates how well
the predicted counts resemble the observed counts. These goodness-of-fit tests come with a p-value. For the
AMM/RMM counts in Table 10.1.1-1, the p-value of the deviance test is equal to 0.452 and, for the
Pearson’s goodness-of-fit test, the p-value is equal to 0.459. The results show that a violation of the Poisson
distribution was not demonstrated at a significance level of 𝛼𝛼= 0.05.

##### 10.1.1.4 Sample Size Considerations

An appropriate number of replicates or sample size for each concentration can be determined when the
logarithmically transformed counts follow the normal distribution with a variance that is equal to the mean.
The sample size depends on the concentration level, and it is typically larger when the concentration is
lower. Table 10.1.1.4-1 shows the sample sizes for different concentration levels under different truths (i.e.,
the true recovery rate) when the non-inferiority margin is equal to 70% (for a significance level of 𝛼𝛼= 0.05
and a power of 1− 𝛽𝛽= 0.8). Here the truth is determined by the true recovery being 100%, 90%, or 80%.
The lower the true recovery of the AMM/RMM, the more samples must be determined to demonstrate it is
away from the 70% margin. Never using less than three replicates is recommended, so the lowest sample
size has been set to three (3).

**Table 10.1.1.4-1 Sample Sizes for Non-Inferiority per Concentration at a Non-Inferiority**

Margin of 70% Using the Normal Distribution
True
Recovery
Spiked Concentration Level
100%
90%
80%

To calculate the values in Table 10.1.1.4-1 or to calculate other settings, the smallest sample size 𝑛𝑛𝐴𝐴 (>2)
that provides a value of 0.8 for the following probability is the sample size that can be used:
Power = 1 − Φ
⎝
⎛Φ−1(0.95) + log(∆) − log(𝜃𝜃)
ට𝜆𝜆−1 + (𝜃𝜃𝜃𝜃)−1
𝑛𝑛𝐴𝐴
⎠
⎞
Where:
Ф
=
cumulative standard normal distribution function
Ф-1
=
quantile of the standard normal distribution function
𝑛𝑛𝐴𝐴
=
number of test samples
θ
=  true recovery (not expressed in percentages)
λ
=  spiked concentration level
Δ
=  non-inferiority margin (e.g., 0.7)

#### 10.1.2 Comparability of the Conventional Microbiological Method per Concentration

Against the Spike Concentrations
When a Poisson distribution (and normal distribution) approach is used for accuracy, the analysis on the
recoveries of the AMM/RMM with respect to the spiked concentration levels in Section 10.1.1.
demonstrates that inferiority is not rejected for the concentrations of 5 CFU and 25 CFU. However, the
CMM also shows somewhat lower recoveries compared to what has been considered the true spiked
concentration level, except for the lowest concentration level. Hypothetically, we expect the recovery for the
CMM to be 100% for each spiked concentration level when using the conventional/compendial method. In
practice, it is understood there will always be some variability in microbiological testing, and it may be
appropriate to investigate the accuracy of the CMM against the spiked concentration levels.
Using the Poisson distribution on the counts of the CMM, the mean recoveries with their lower 95%
confidence limits are presented in Table 10.1.2-1. For the CMM, inferiority is rejected for all concentrations
at the non-inferiority margin of 70%, but the estimated recoveries are still lower than 100% (when compared
with the spike levels) for the concentrations 25 CFU and beyond. Testing the traditional null hypothesis
𝐻𝐻0: Recovery = 100% for the CMM on each spiked concentration level separately using the Poisson
regression analysis, shows that the null hypothesis is rejected for the three concentration levels 100, 150,
and 250 CFUs, see the column “p-Value*” in Table 10.1.2-1.

*Note: To obtain this p-value, the following p-value could be programmed (into MS Excel, for instance)
using the following formula:
𝑝𝑝=
⎩
⎪
⎪
⎪
⎨
⎪
⎪
⎪
⎧
2 ∗
⎝
⎜
⎛1 −Φ
⎝
⎛log ቀ𝑦𝑦ത𝐶𝐶
𝜆𝜆ቁ
ට
(𝑛𝑛𝐶𝐶𝑦𝑦ത𝐶𝐶)⎠
⎞
⎠
⎟
⎞     if     𝑦𝑦ത𝐶𝐶> 𝜆𝜆
2 ∗Φ
⎝
⎛log ቀ𝑦𝑦ത𝐶𝐶
𝜆𝜆ቁ
ට
(𝑛𝑛𝐶𝐶𝑦𝑦ത𝐶𝐶)⎠
⎞                    if     𝑦𝑦ത𝐶𝐶≤𝜆𝜆

Where:
𝑦𝑦ത𝐶𝐶
=
mean count of the CMM at the spiked concentration
𝜆𝜆

=
spiked concentration level
𝑛𝑛𝐶𝐶
=
number of replicates

**Table 10.1.2-1 Non-Inferiority of the Conventional Method on Recovery per Concentration**

Level Using the Poisson Distribution
Spike
Mean % Recovery
LCL
p-Value
116.0
85.5
0.424
87.2
74.5
0.153
89.6
80.3
0.100
86.6
80.0
0.003
84.7
79.3
<0.001
80.6
76.5
<0.001
Alternatively, these p-values may be obtained from the Poisson regression analysis where the
logarithmically transformed concentration is used as an offset parameter and where an LSMEANS
statement is used to obtain the predicted recoveries for each spiked concentration (this is possible with SAS®
but not with Minitab). Using this offset parameter normalizes the counts to rates expressed as ratios of the
spiked concentration.
When both the CMM and the AMM/RMM show lower recoveries than 100%, it may be a sign that the
spiked concentrations are not very reliable (i.e., there is too much variability). Thus, it may be better to
compare the AMM/RMM against the CMM to see if the AMM/RMM is non-inferior to the CMM when it
comes to enumeration. Clearly, for accuracy, it would be best to compare the AMM/RMM against the
CMM, but when the CMM shows a recovery of 100% for each spiked concentration level, a comparison of
the AMM/RMM against the spiked concentration levels could be more powerful since only the variability in
counts of the AMM/RMM are incorporated in the non-inferiority test.

#### 10.1.3 Comparability of the Alternative/Rapid Microbiological Method with Respect to

the Conventional Method per Concentration
A comparison can be conducted using a Poisson regression analysis again using the logarithmic link
function, where the variables “method” and “concentration” are included as categorical variables and where
the interaction between method and concentration level is considered. The inclusion of the interaction term
makes it possible to investigate differences between the two methods for each spiked concentration
separately. Differences between the mean counts of the AMM/RMM and CMM per concentration can only
be obtained with general-purpose statistical software that can calculate least-squares means (as already
applied in Section 10.1.1 for Poisson regression). SAS® and [R] have this option, but Minitab does not have
this option for Poisson regression. When the logarithmic link function is applied, differences in means
between the AMM/RMM and CMM calculated with the least-squares means are determined in the
logarithmic scale and they must be exponentiated. These exponentiated mean differences can then be
viewed as a recovery of the AMM/RMM compared to the CMM (instead of a recovery against the spiked
concentrations, as previously described for each method in Section 10.1.2). Table 10.1.3-1 presents the
recoveries of the AMM/RMM against the CMM and the lower 95% confidence limit. Although they were
obtained with the Poisson regression analysis of the counts of AMM/RMM and CMM, the recoveries are
just the ratios of the two means of the two microbiological methods multiplied by 100%. For example, using
the data in Table 10.1-1, the recovery of 82.8% for concentration 5 CFU is obtained by multiplying the ratio
4.8/5.8 by 100%. The calculation of the lower 95% confidence limit is more difficult, but can be calculated
by the following expression:
൬𝑥𝑥̅𝐴𝐴
𝑥𝑥̅𝐶𝐶
൰∙exp ቐ−1.645 ∙ඨ
(𝑛𝑛𝐴𝐴∙𝑥𝑥̅𝐴𝐴) +
(𝑛𝑛𝐶𝐶∙𝑥𝑥̅𝐶𝐶)ቑ
Where:
𝑥𝑥̅𝐴𝐴
=
average count for the AMM/RMM
𝑥𝑥̅𝐶𝐶
=
average count for the CMM
𝑛𝑛𝐴𝐴
=
number of samples tested with AMM/RMM
𝑛𝑛𝐶𝐶
=
number of samples tested with CMM
The results show that the null hypothesis of inferiority of the AMM/RMM compared to the CMM is rejected
for all spiked concentrations in the experiment, when a non-inferiority margin of 70% is being used, except
for the spiked concentration at 5 CFU.
Looking at the recoveries of AMM/RMM versus CMM in Table 10.1.3-1, all the values are close to each
other (around 90%) which may suggest that the recovery is constant across the spiked concentrations and a
pooled recovery can also be obtained. Pooling has the advantage that the power for the non-inferiority test
can be increased, because all counts are now used to calculate one recovery value. The lack of sample size
for non-inferiority at the lower spiked concentrations is compensated for by the other concentrations, if it
can be assumed that the recovery is constant across spiked concentrations (see Table 10.1.1-2). However,
pooling may have a disadvantage in that it can mask inferior results for one (1) concentration when all of the
other concentrations non-inferior results (similar to the discussion of pooling accuracy from multiple
microorganisms in Section 9.0. The lower confidence limit at the lower spiked concentration may just
indicate that the recovery is much lower than the non-inferiority margin, and pooling may be considered as
“testing into compliance.” Thus, pooling should not be conducted automatically and should be substantiated
by microbiological arguments and additional statistical analysis.

**Table 10.1.3-1 Non-Inferiority of Alternative/Rapid Microbiological Method versus the**

Conventional Method per Concentration Level Using the Poisson Distribution
Spike
Mean % Recovery
LCL
82.8
52.6
90.8
72.3
94.2
80.5
88.0
78.4
95.8
87.2
96.8
89.9
To demonstrate the estimation of the pooled recovery, a Poisson regression analysis can be used again,
where concentration and method can be used in the analysis as categorical variables, but now not
incorporating the interaction term. The interaction term makes the recoveries different across the spiked
concentration levels, but now the goal is to obtain a single-recovery estimate. The output of this Poisson
analysis is provided in Table 10.2.3-2.
Using the results from the output, the pooled percent recovery is then estimated at:
94.3% (= 100 · exp (-0.0587)) with a 95% lower confidence limit (or the lower boundary of
the 90% confidence interval) equal to 89.9% (= 100 · exp (-0.1066)).
Thus, when the recovery of the AMM/RMM compared to the CMM is assumed to be homogeneous across
spiked concentration levels, inferiority is rejected for all concentrations levels between 5 CFU and 250 CFU
at the non-inferiority margin of 70%. Thus, an investigation of constant accuracy across the concentration
levels may be beneficial to achieve a wider range of concentrations for which accuracy would be satisfied.
Note that the p-value of 0.0434 in the output of the Poisson analysis demonstrates that the AMM/RMM
does enumerate fewer microorganisms than the CMM (the null hypothesis of equal means is rejected at
significance level 0.05), but the accuracy is still far above the non-inferiority margin.

**Table 10.1.3-2 Poisson Analysis Output**

Effect
Estimate
SE
90% CI
Chi-Square
p-Value
Intercept
5.3182
0.0265
(5.2746, 5.3618)
40193.0
<0.001
Method: AMM/RMM
-0.0587
0.0291
(-0.1066, -0.0109)
4.08
0.0434
Method: CMM
(0.0000, 0.0000)
-
-
Conc. 5
-3.6216
0.1392
(-3.8505, -3.3926)
677.03
<0.001
Conc. 25
-2.2534
0.0729
(-2.374, -2.1344)
956.66
<0.001
Conc. 50
-1.5168
0.0529
(-1.6036, -1.4294)
820.37
<0.001
Conc. 100
-0.8899
0.0416
(-0.9584, -0.8214)
456.96
<0.001
Conc. 150
-0.4666
0.0362
(-0.5261. -0.4071)
166.30
<0.001
Conc. 250
0.0000
0.0000
(0.0000, 0.0000)
-
-
Checking the assumption of a constant difference between the AMM/RMM and CMM statistically, the
AICC can be used to determine which Poisson regression model describes the data best, that is, the Poisson
model with a recovery per spiked concentration or the Poisson model with a constant recovery across spiked
concentrations. The AICC value for the Poisson model with a constant recovery across the spiked
concentrations is equal to 400.0, while the AICC for the Poisson model with a recovery estimate per spiked
concentration is 412.8. Thus, the AICC (smaller is better) suggests that the recovery is constant across the
concentration levels. If no other substantiated knowledge contradicts this result, the pooled analysis is
appropriate to use, and a calculation per concentration is not necessary. Then, non-inferiority can be claimed
for all concentrations levels, including the 5 CFU spike.

### 10.2 Linearity and Accuracy

For analytical measurement systems, linearity is an important validation parameter, because the analytical
measurement system makes use of a reference sample in routine analysis to determine the concentration
value of an unknown sample. The reference and unknown sample are being tested in one analytical run and,
for each run, a run-specific single-point calibration line is created that goes through the origin and through
the response of the reference sample (the green line and dot in Figure 10.2-1). Since the true concentration
value of the reference sample is known (𝑥𝑥𝑅𝑅), the observed concentration value of the unknown sample is
obtained by the concentration of the calibration line (𝑥𝑥𝑈𝑈) that matches the value of the line to the response of
the unknown sample (the red arrows and dot in Figure 10.2-1). To be able to use such a procedure in
routine analysis for analytical measurement systems, it is imperative that the concentration-response curve is
linear and goes through the origin. Thus, for single-point calibration models for analytical measurement
systems what is needed is proportionality.

*[Figure 10.2-1 Visualization of the Estimated Concentration for an Unknown Sample Using a]*

Linear Calibration Line for the Reference Sample in Analytical Measurement Systems
In microbiology, linearity has a different purpose, and should support the validation parameter accuracy as
conducted in Section 10.1. If accuracy is achieved at each concentration level that has been tested in an
accuracy experiment (Sections 10.1.1, 10.1.2, and 10.1.3), that accuracy only applies for the tested
concentration levels and cannot automatically be guaranteed (and may fail) at non-tested concentration
levels within the full interval. In order to extend the accuracy at specific concentration levels to all non-
tested concentration levels within the spiked interval, a linear or, more precisely, a monotonic concentration-
recovery curve is required. This operation is a smooth concentration curve that is nondecreasing or
nonincreasing over the interval of interest where the recovery is defined as the mean count of the
AMM/RMM divided by the true concentration level (often the spiked concentration level or a precise
estimate of the concentration level with the CMM) at which the mean count is observed. A linear or
monotonic concentration-recovery curve guarantees that the worst bias or lack of accuracy is attained at the
two outer concentration levels in the experiment (the green dots and green line in Figure 10.2-2). The ideal
recovery for the AMM/RMM is 100%, or more if non-CFU signals are generated in the AMM/RMM.
Therefore, the worst accuracy for the green recovery results in Figure 10.2-2 occurs at the last (or sixth)
spiked concentration, as it is the lowest recovery across the range of concentration levels in the interval of
the experiment (the green dots and green line in Figure 10.2-2).

*[Figure 10.2-2 Visualization of Results from a Linear Concentration Response Curve (Green) and]*

Results from a Non-linear Concentration Response Curve (Blue) Expressed in the Spiked
Concentration and its Consequence for Accuracy
The blue dots in Figure 10.2-2, on the other hand, show that accuracy may potentially hold for each spiked
concentration level in the experiment separately. In this case, the blue dots (the mean recoveries) are all
away from the non-inferiority margin of 70%, even though some results are still close to this boundary.
Following the expected recovery of the blue nonlinear concentration-recovery curve in Figure 10.2-2,
however, the accuracy would most likely fail at specific untested concentration levels between the fourth
and fifth spiked concentration levels. Indeed, the expected recovery reaches below the non-inferiority
margin of 70%. Thus, without linearity or monotonicity of the concentration-recovery curve, there is no
guarantee that accuracy holds across the full range of spiked concentration levels even if it has been
demonstrated that non-inferiority holds at all the spiked concentration levels in the accuracy experiment.
To determine linearity for the concentration-recovery curve, the following mathematical formula is used:
𝔼𝔼(𝑦𝑦|𝜆𝜆)
𝜆𝜆
 = 𝛽𝛽0 + 𝛽𝛽1𝜆𝜆
Where:
𝐸𝐸(𝑦𝑦|𝜆𝜆)
=
expected concentration of the AMM/RMM of an arbitrary test sample that
                     is tested at the true concentration level 𝜆𝜆
𝜆𝜆

=
true concentration level
𝔼𝔼(𝑦𝑦|𝜆𝜆)/𝜆𝜆 =  would represent the recovery (not expressed in percentages)
𝛽𝛽0

=
intercept of the linear concentration-recovery curve
𝛽𝛽1

=
slope of the linear concentration-recovery curve

The expected concentration 𝔼𝔼(𝑦𝑦|𝜆𝜆) would be estimated with the mean counts at the spiked concentration
level observed in the experiment, and the true concentration level would either be estimated by a precise
estimate from the CMM* or taken by the spiked concentration level. If a stricter assumption is made and it is
assumed that the slope 𝛽𝛽1 is equal to zero, the concentration-recovery curve becomes a horizontal line, and
the intercept represents the expected recovery for all concentration levels. This was demonstrated in Section
10.1.3 when the recovery of the AMM/RMM against the CMM was constant. Under this stricter
assumption, the concentration-response curve for the AMM/RMM is then proportional to the true
concentration level 𝜆𝜆, that is, 𝔼𝔼(𝑦𝑦|𝜆𝜆) = 𝛽𝛽0𝜆𝜆 as was discussed regarding the single-point calibration model
of an analytical measurement system. Thus, if proportionality can be shown for the concentration-response
curve, this demonstrates a more defined linearity needed to support that accuracy has been demonstrated
across the full interval of spike levels.
*Note: In many linearity experiments, the number of replicates taken at each concentration for the CMM is
often too small to be able to obtain a precise estimate of the true concentration (too much variability), and a
regression analysis where the mean counts of the CMM are used as independent variables and the mean
counts of the AMM/RMM are considered the dependent variable may lead to incorrect estimates of the
intercept and slope of the regression line.
In microbiology, however, it is common to demonstrate a linear concentration-response curve, that is,
𝔼𝔼(𝑦𝑦|𝜆𝜆) = 𝛼𝛼+ 𝛽𝛽0𝜆𝜆, where the mean counts of the AMM/RMM are modeled as a function of the true
concentration. Unfortunately, this concentration-response curve does not lead to a linear concentration-
recovery curve, since the concentration-recovery curve becomes 𝔼𝔼(𝑦𝑦|𝜆𝜆)/𝜆𝜆= 𝛽𝛽0 + 𝛼𝛼/𝜆𝜆 which is no longer
a linear function of the true concentration 𝜆𝜆. Demonstrating a linear concentration-response curve is still
appropriate, however, because the concentration-recovery function remains monotonic (i.e., it is a non-
increasing function when 𝛼𝛼 is positive), which is necessary for the concentration-recovery curve to support
the validation parameter accuracy. Additionally, demonstrating a log-linear concentration-response curve
(i.e., log(𝔼𝔼(𝑦𝑦|𝜆𝜆)) = 𝛼𝛼+ 𝛽𝛽0log(𝜆𝜆) with logthe natural logarithm) also leads to a monotonic concentration-
recovery curve: 𝔼𝔼(𝑦𝑦|𝜆𝜆)/𝜆𝜆= exp{𝛼𝛼} ∙𝜆𝜆𝛽𝛽0−1.
Thus, when it can be shown that the concentration response curve is linear or even log-linear, there is no
need to evaluate the concentration-recovery curve due to the explanation given here. However, when other
forms of concentration response curves, which are discussed in the text above, are identified, the
concentration-recovery curve may need to be studied directly to be able to support the validation parameter
accuracy (see Section 10.2.3).
Using the data from Table 10.1-1 to illustrate the evaluation of concentration-response and concentration-
recovery curves, visualizing the mean counts against the spiked concentration levels in Figure 10.2-3A and

*[Figure 10.2-3B will help evaluate the possible choices in curves. The mean counts have been linearly]*

connected without building a regression equation at this point. Qualitatively, the concentration-response
curves (top two figures) show what would likely be a linear function of the spiked concentration level, but
the concentration-recovery curves may deviate from linearity, mostly because the results at the lowest
concentration level seem to be somewhat higher than what can be expected from linearity of the other
concentrations. However, the variation in the replicated recoveries at the lowest concentration level is also
relatively large, which makes this determination difficult. Finally, it can also be seen that the variability in
the replicated counts is nonconstant across the spiked concentrations levels (heteroscedasticity), and this
should be addressed when an appropriate regression equation is being constructed from the observed data.

*[Figure 10.2-3A Visualization of the Mean Counts with Respect to the Spiked Concentration]*

Levels

*[Figure 10.2-3B Visualization of the Mean Counts with Respect to the Spiked Concentration]*

Levels

#### 10.2.1 Weighted Linear Regression Analysis on the Counts

To create a concentration-response curve, it must first be assumed that the counts can be approximately
modelled by the following linear regression equation:
𝑦𝑦= 𝛼𝛼+ 𝛽𝛽𝛽𝛽+ 𝜀𝜀
Where:
𝑦𝑦
=  a count that is observed at spiked concentration level 𝜆𝜆
𝛼𝛼
=
intercept of the line
𝛽𝛽
=  slope of the regression line
𝜆𝜆

=  spiked concentration level
𝜀𝜀
=  residual having a normal distribution with mean zero and variance 𝜎𝜎2(𝜆𝜆)
Here, it is assumed that the variance in the replicated counts at spiked concentration level 𝜆𝜆 also depends on
the spiked concentration (as seen from the data). If the residual variance varies with the concentration, the
regression analysis should weight the observed value with the inverse variance. This type of analyses is
programmed in any general-purpose software package.
Table 10.2.1-1 shows the estimates of the intercept and slope with a 95% confidence interval, if this
weighted linear regression analysis is applied to the counts of the AMM/RMM and CMM separately.

**Table 10.2.1-1 Estimated Intercept and Slope Found with Weighted Linear Regression Analysis**

Parameter
AMM/RMM
CMM
Intercept α (95% Confidence Interval)
0.829 (-0.975, 2.634)
1.922 (0.721, 3.122)
Slope β (95% Confidence Interval)
0.778 (0.740, 0.816)
0.803 (0.783, 0.822)
Based on the estimated results, it follows that the intercept of the regression line for the AMM/RMM is not
statistically different from zero (0) (the 95% confidence interval contains the value zero (0)). If linearity is
satisfied for the AMM/RMM, that is, no better relations describe the data, the AMM/RMM satisfies
proportionality, implying a constant concentration-recovery curve with a recovery close to 77.8% (i.e., the
slope multiplied with 100, for every concentration (see Section 10.2 and Section 10.2.2). On the other hand,
the 95% confidence interval for the intercept of the CMM positively indicates that the intercept deviates
from zero (since the number zero (0) is not contained in the 95% confidence interval), implying that the
CMM has a nonzero background enumeration level of 1.922 CFUs for blank samples if linearity holds true.
In other words, based on the estimated intercept, the CMM would generate false positives when test samples
do not contain microorganisms.
To investigate the linearity, the explained variation (𝑅𝑅2) with the fitted regression line is equal to 98.4 for
the AMM/RMM and 99.6 for the CMM. These values can be obtained from the output of general-purpose
software packages when the weighted linear regression analyses are performed. These high values for the
𝑅𝑅2 are often considered as evidence for satisfying linearity, since there seems hardly any variation left that
could be explained by possible nonlinearity. While there is some truth in this, a high 𝑅𝑅2 can also be

achieved when a wide range of concentrations is used and linearity is violated. A more formal way of
investigating linearity is to test for a deviation from linearity, where a quadratic term for concentration level
is included by using the regression equation 𝑦𝑦= 𝛼𝛼+ 𝛽𝛽𝛽𝛽+ 𝛾𝛾𝜆𝜆2 + 𝜀𝜀, and then testing whether the coefficient
𝛾𝛾 is equal to zero. When this extended regression model is applied, the p-values of 0.821 and 0.189 for the
AMM/RMM and CMM, respectively, can be obtained, indicating that there is no evidence for nonlinearity
for both microbiological methods. Thus, the conclusion is that both microbiological methods satisfy
linearity.
The conclusion of linearity for the AMM/RMM with the attained non-inferiority of accuracy for
concentration levels 50, 100, 150, and 250 CFU with the normal distribution in Table 10.1.1-1 implies that
non-inferiority is attained for any concentration level between 50 and 250 CFU.

#### 10.2.2 Poisson Regression Analysis on the Counts

An alternative analysis on the count data that would also deal with the heteroscedasticity is Poisson
regression. Instead of assuming normality for the counts, the counts are assumed to be Poisson-distributed.
Furthermore, Poisson regression typically uses a logarithmic link function, which would guarantee that the
intercept can never become negative. This is different in a weighted linear regression analysis, where the
intercept can become negative. Additionally, Poisson regression does not require weights, since the Poisson-
distribution dictates that the variance in the replicates equal the mean of the replicates. (Poisson regression
analysis is available in many general-purpose statistical software packages.)
In Poisson regression (with the default log-link function), the concentration-response curve is assumed to
take the following form:
𝔼𝔼(𝑦𝑦|𝜆𝜆) = exp{𝛼𝛼+ 𝛽𝛽∙𝜓𝜓(𝜆𝜆)}
Where:
𝔼𝔼(𝑦𝑦|𝜆𝜆)  =  expected concentration of the AMM/RMM of an arbitrary test sample that is
       tested at the true concentration level 𝜆𝜆
𝜆𝜆

=  spiked concentration level
𝜓𝜓(𝜆𝜆)
=
transformed concentration level
𝛼𝛼
=
intercept
𝛽𝛽
=  slope
For validation of microbiological methods, the two typical transformations are the logarithmic
transformation (𝜓𝜓(𝜆𝜆) = log(𝜆𝜆)) and no transformation (i.e., the identity function 𝜓𝜓(𝜆𝜆) = 𝜆𝜆). For the
logarithmic transformation, the concentration-response curve is forced through the origin (when the slope
β > 0), implying no false-positive rate or background noise. Moreover, when the slope is close to one
(β ≈ 1), the value 100% · exp{α} represents the recovery of the microbiological method with respect to all
spiked concentration levels. When the slope is larger than one (β > 1), the microbiological method has
difficulty in enumerating microorganisms at a lower concentration, but it improves the enumeration when
concentrations are getting higher. When the slope is less than one (β < 1), the microbiological method has
more difficulty in enumerating microorganism at higher concentration, often due to saturation problems. If
the identity function is taken, the value exp{α} represents the mean count or background noise at blank

samples, which is always positive, although this does not guarantee a more sensitive enumeration at the
lower concentration.
Fitting the Poisson regression model to the data of Table 10.1-1 for both microbiological methods
separately, using the logarithm of the concentration level (i.e., 𝜓𝜓(𝜆𝜆) = log(𝜆𝜆)), leads to the estimates of the
parameters and their 95% confidence intervals shown in Table 10.2.2-1.

**Table 10.2.2-1 Estimates of the Parameters and 95% Confidence Intervals Using the Poisson**

Regression Model
Parameter
AMM/RMM
CMM
Intercept α (95% Confidence Interval)
-0.0999 (-0.3898, 0.1901)
0.1386 (-0.1358, 0.4131)
Slope β (95% Confidence Interval)
0.9732 (0.9152, 1.0312)
0.9368 (0.8817, 0.9919)
Both microbiological methods show a slope that is less than one, indicating some saturation at higher
concentration levels. The CMM has a slope that deviates from one, since one is not contained in the 95%
confidence interval. However, the slope for AMM/RMM cannot be demonstrated to be different from one,
since the value one is contained in the 95% confidence interval, indicating that the AMM/RMM may satisfy
proportionality. Assuming the assumption of proportionality holds, the recovery of the AMM/RMM against
the spiked concentration levels is approximately equal to 90.5% (= 100 · exp (-0.0999)) for all concentration
levels within 5 to 250 CFUs, although a better estimate is obtained when the slope is fixed to the value one
in the Poisson regression analysis.

#### 10.2.3 Comparability on Accuracy of Alternative/Rapid Microbiological Methods Against

Conventional Methods Using Concentration-Response Curves
The analyses of accuracy in Section 10.1 treated the spiked concentration levels as a categorical variable,
while the spiked concentration levels were treated as a continuous variable for the linearity assessment in
Section 10.2.1 and Section 10.2.2. The two analyses on accuracy and linearity together can then be used to
make a statement about the accuracy for concentration levels other than those tested in the experiment. An
alternative approach is to model accuracy as a function of the concentration level and to establish a 90%
confidence interval at each concentration that can be compared with the non-inferiority margin. Section
10.2.3 discusses the data analysis approach that models the concentration-response curves for the
AMM/RMM and CMM separately and then uses these curves to calculate the accuracy of the AMM/RMM
with respect to the CMM.
Note: This type of data analysis is rather technical and may require the help of a statistician to be able to
program it in a programmable statistical software package such as SAS®, R, or Python; the software
TriMSA has already implemented such an analysis. To aid readers, Section 10.3.3 provides some formulae
that could be implemented in their preferred software package using the data shown in Table 10.2.3-1.

**Table 10.2.3-1 Counts of a Specific Microorganism for the Alternative/Rapid Microbiological**

Method and Conventional Method at Different Concentration Levels
Observation
AMM/RMM
CMM
Mean
5.6
30.2
48.0
73.4
103.6
192.0
2.6
20.4
34.2
73.2
100.4
215.2
The data from Table 10.2.3-1 will be used to illustrate this approach of calculating accuracy through
concentration-response curves. It is assumed that the counts for both the AMM/RMM and CMM are either
normally or otherwise Poisson-distributed. The counts have been visualized in Figure 10.2.3-1, where the
mean counts per spiked concentration are connected. The figure shows that the concentration-response
curve is nonlinear in spiked concentration.

*[Figure 10.2.3-1 Visualization of the Counts per Concentration and Connecting the Mean]*

Counts

For both microbiological methods, the Mitscherlich function is appropriate to use to extend the
concentration-response curves to nonlinear relationships in spiked concentrations:
𝑚𝑚(𝜆𝜆) ≡𝔼𝔼(𝑦𝑦|𝜆𝜆) = 𝛽𝛽1 + 𝛽𝛽2exp{𝛽𝛽3 log(𝜆𝜆)}
Where:
𝔼𝔼(𝑦𝑦|𝜆𝜆)  =  expected concentration
𝜆𝜆
=
concentration level
𝛽𝛽1
=
intercept
𝛽𝛽2
=  slope
𝛽𝛽3
=
power parameter
The Mitscherlich function is a so-called nonlinear regression model and requires specific regression analysis
tools to estimate this function. It is relatively flexible in modeling concentration-response curves and has
broad applicability. When the intercept is zero (𝛽𝛽1 = 0), the Mitscherlich function becomes log-linear:
log൫𝔼𝔼(𝑦𝑦|𝜆𝜆)൯= log(𝛽𝛽2) + 𝛽𝛽3 log(𝜆𝜆)
When the power parameter is equal to one (𝛽𝛽3 = 1), the Mitscherlich function becomes a linear function in
the concentration 𝜆𝜆:
𝔼𝔼(𝑦𝑦|𝜆𝜆) = 𝛽𝛽1 + 𝛽𝛽2𝜆𝜆
Finally, when both the intercept is zero and the power parameter is equal to one, the relation between the
mean count and concentration level becomes proportional. Thus, under certain conditions, the nonlinear
Mitscherlich function becomes a (log-) linear function, and it can also take the shape of a proportional linear
model.
When the counts are Poisson-distributed, a nonlinear Poisson regression analysis must be applied. Most
general-purpose statistical software cannot manage the nonlinear aspect, and specialized software is
required. The Mitscherlich function with Poisson-distributed counts can be run in SAS®, R, and TriMSA. If
the counts are assumed to be normally distributed, the Mitscherlich function should be estimated with a
weighted nonlinear regression analysis. The weights are needed to address the heteroscedasticity in the
counts across concentrations (which is not needed with a Poisson regression analysis), and the nonlinearity
is needed to fit the Mitscherlich function. Such regression analysis is available in SAS®, R, and Minitab.
While the results of both regression analyses can be obtained, calculating the accuracy of the AMM/RMM
against CMM is even more complicated with the weighted nonlinear regression analysis than with the
nonlinear Poisson regression analysis, because a model for the variance of the counts across the spiked
concentrations must be determined. In the Poisson analysis, this variance function is determined by the
Poisson-distribution. This technical report illustrates the accuracy for the nonlinear Poisson regression
analysis in Section 10.2.3.1 and the weighted nonlinear regression analysis in Section 10.2.3.2.

##### 10.2.3.1 Using Nonlinear Poisson Regression Analysis

Fitting the Mitscherlich function to the data in Table 10.2.3-1 for both microbiological methods separately,
results in the estimates of the parameters of the Mitscherlich function and its 95% confidence intervals
shown in Table 10.2.3.1-1.

**Table 10.2.3.1-1 Results Using Nonlinear Poisson Regression Analysis**

Parameter
AMM/RMM
CMM
Intercept β1 (95% Confidence Interval)
0.5780 (-0.37396, 4.8957)
0.7096 (-1.6797, 3.0989)
Slope β2 (95% Confidence Interval)
1.4908 (0.6423, 2.3393)
0.4150 (0.1952, 0.6348)
Power β3 (95% Confidence Interval)
0.8671 (0.7611, 0.9731)
1.1217 (1.0213, 1.2222)
The fitted Mitscherlich functions have been plotted to the observed counts in Figure 10.2.3.1-1.

*[Figure 10.2.3.1-1 Visualization of the Estimated Mitscherlich Functions with Respect to the]*

Observed Counts
The two microbiological methods show a different concentration-response curve. The CMM has some
difficulty enumerating microorganisms at lower concentrations but improves when the concentration
increases. This can be seen from a slope less than one and a power parameter larger than one. The
AMM/RMM shows an opposite pattern, where enumeration is good at lower concentrations but worsens
when concentrations increase. This pattern reflects a slope larger than one and a power parameter smaller
than one.
Both power parameter estimates deviate from one significantly (the value one does not fall in the 95%
confidence interval), but the intercepts may be equal to zero, which may suggest a log-linear model. This
model can be fitted with the same procedure, by setting the intercept to zero and locking this as the value so
that it will no longer be estimated and, therefore, remains equal to zero. The estimated parameters for the
log-linear model are shown in Table 10.2.3.1-2.

**Table 10.2.3.1-2 Estimated Parameters**

Parameter
AMM/RMM
CMM
Intercept β1
Slope β2 (95% Confidence Interval)
1.5924 (1.1470, 2.0378)
0.4693 (0.3125, 0.6262)
Power β3 (95% Confidence Interval)
0.8552 (0.7986, 0.9118)
1.0991 (1.0329, 1.1653)
By comparing Akaike’s corrected information criterion for the log-linear and the Mitscherlich function for
both microbiological methods separately, the log-linear model appears to be a better fit (AMM/RMM:
Mitscherlich 224.8 versus log-linear 222.4; CMM: Mitscherlich 208.9 versus log-linear 206.8). Thus, using
the log-linear concentration-response curves can be continued.
To determine non-inferiority in enumeration between the AMM/RMM and CMM, the recovery or ratio of
the two estimated concentration-response curves can be calculated for each concentration in the
experimental range [5, 250]: 𝑚𝑚ෝA(𝜆𝜆)/𝑚𝑚ෝC(𝜆𝜆). For this ratio, a lower 95% confidence limit can be calculated
and then compared to the lower limit with the non-inferiority margin.
The lower 95% confidence limit is best calculated in the logarithmic scale:
ቈ𝑚𝑚ෝ𝐴𝐴(𝜆𝜆)
𝑚𝑚ෝ𝐶𝐶(𝜆𝜆)቉∙exp ቊ−1.645ට𝜏𝜏̂𝐴𝐴
2(𝜆𝜆) + 𝜏𝜏̂𝐶𝐶
2(𝜆𝜆)ቋ,
with 𝜏𝜏𝐴𝐴
2(𝜆𝜆) = VAR(log൫𝑚𝑚ෝ𝐴𝐴(𝜆𝜆)൯) and 𝜏𝜏𝐶𝐶
2(𝜆𝜆) = VAR(log൫𝑚𝑚ෝ𝐶𝐶(𝜆𝜆)൯) the variance of the estimated log
transformed Mitscherlich function of the AMM/RMM and CMM, respectively.
The variance of the estimated logarithmically transformed Mitscherlich function is quite elaborative and can
be found in Heidari et al. (2022) (16). For the log-linear model, the variance 𝜏𝜏2(𝜆𝜆) is somewhat less
elaborate and is equal to:
𝜏𝜏2(𝜆𝜆) = 𝑉𝑉𝑉𝑉𝑉𝑉൫log൫𝛽𝛽̂2൯൯+ [log(𝜆𝜆)]2𝑉𝑉𝑉𝑉𝑉𝑉൫𝛽𝛽̂3൯+ 2 log(𝜆𝜆) 𝐶𝐶𝐶𝐶𝐶𝐶൫log൫𝛽𝛽̂2൯, 𝛽𝛽̂3൯.
To obtain this variance, it is easier to model the slope parameter in the log scale (as is provided in TriMSA).
The estimated recovery (solid line) and the lower 95% confidence limit (dotted line) is shown in Figure
10.2.3.1-2 (left figure). The procedure NLMIXED in SAS® for the analysis and the visualization was used
for Figure 10.2.3.1-2, but TriMSA can provide the same results. The data show that the AMM/RMM is
non-inferior to the CMM (at non-inferiority margin of 70%), but the recovery of the AMM/RMM is much
better at the lower end of the concentration range than at the upper range. This is due to the enumeration
pattern seen from the two microbiological methods separately. Finally, the lower 95% confidence limit at
250 CFU is estimated at 82.7%, so non-inferiority would not have been rejected at 80% non-inferiority
margin either.

*[Figure 10.2.3.1-2 Visualization of the Estimated Recovery for the Log-Linear Concentration]*

Response Curves of the Microbiological Methods
This model-based analysis for accuracy could sometimes help reduce variation compared to a per
concentration analysis and, therefore, can be more efficient than the analyses between the AMM/RMM and
CMM with concentration used as categorical variable. The data in Table 10.1-1 is used to illustrate this. The
analysis in Section 10.1.2 with the results presented in Table 10.1.3-1 shows that non-inferiority between
AMM/RMM and CMM occurs at 25 CFU for the first time. However, since proportionality for both the
AMM/RMM and CMM on the concentration-response curves was demonstrated, consistent accuracy across
the full range of 5 to 250 CFU was also demonstrated. Therefore, non-inferiority could be extended across
the full experimental range. But if proportionality did not hold for at least one of the microbiological
methods, non-inferiority below 25 CFU could not be claimed (see Table 10.1.3-1). If the log-linear models
were the appropriate models for the concentration-response curves and the model-based approach for
accuracy is applied, it would show that non-inferiority would begin from 8.4 CFU (see Figure 10.2.3.1-2),
which is below the 25 CFU.

##### 10.2.3.2 Using Weighted Nonlinear Regression Analysis

Using the data in Table 10.2.3-1 for both microbiological methods separately and using weighted nonlinear
regression the estimated results of the parameters of the Mitscherlich function and its 95% confidence
intervals are shown in Table 10.2.3.2-1.

**Table 10.2.3.2-1 Estimates of Parameters Using Weighted Nonlinear Regression**

Parameter
AMM/RMM
CMM
Intercept β1 (95% Confidence Interval)
0.0270 (-5.1512, 5.2052)
0.2723 (-1.7477, 2.2923)
Slope β2 (95% Confidence Interval)
1.6468 (0.3034, 2.9938)
0.4686 (0.2295, 0.7078)
Power β3 (95% Confidence Interval)
0.8371 (0.6783, 0.9958)
1.1065 (1.0130, 1.2001)
Here, the weights have been selected equal to one over the variance of the counts for each spiked
concentration, the same as was done for weighted linear regression in Section 10.2.1. Figure 10.2.3-4
provides a visualization of the data and the fitted Mitscherlich function.

*[Figure 10.2.3-4 Visualization of the Estimated Mitscherlich Functions Using Weighted Non-]*

Linear Regression with Respect to the Observed Counts
The coefficients are rather different from the coefficients estimated by the nonlinear Poisson regression,
particularly for the intercept and slope, but the conclusion about the enumeration patterns do not change.
The CMM still has more enumeration issues at lower concentration levels, while the AMM/RMM has more
enumeration issues at higher concentration levels. Also, the conclusions that the intercept may be equal to
zero and that the power parameters deviate from one are the same as with the nonlinear Poisson regression
analysis.
Furthermore, the predicted curves are not so different from the nonlinear Poisson regression analysis in
Figure 10.2.3-2, even though the coefficients of the Mitscherlich function are somewhat different.
However, visually, the nonlinear Poisson regression analysis seems to fit slightly better than the weighted
nonlinear regression analysis and, therefore, may be preferred over the weighted nonlinear regression.

### 10.3 Limit of Quantitation

Determining the concentration of a specific chemical component with analytical measurement systems is
always affected by random errors, even if the chemical component is not present in the sample. Only
measurements that exceed a specific threshold, that is, the limit of quantitation (LoQ), can be considered a
reliable quantification of the concentration. For analytical measurement systems, the LoQ is often
established in two steps. In the first step, an upper quantile for the noise of a blank sample is calculated.
Then, in the second step, the upper quantile is interpolated on the concentration-response curve to determine
the concentration level that would provide, on average, a result above the noise of a blank sample. The LoQ
is often quantified during a linearity experiment for the measurement system where the upper quantile is
calculated from the unexplained variability of the concentration-response curve and the normal or log-
normal distribution. For the analytical measurement methods, the LoQ is often set at 10 standard deviations
away from zero when the normal distribution is used; but for count data, this seems excessive due to the
skewness of the distribution of the counts at lower concentration levels. Instead, an upper quantile at the
level of 0.001 has been chosen. Figure 10.3-1 shows the calculation approach.

*[Figure 10.3-1 A Determination of the LoQ for Analytical Measurement Systems]*

This calculation approach applied to analytical measurements makes sense for microbiological methods if
the method generates background noise or false positives for blank samples. This approach will be
illustrated in Section 10.3.1. If the microbiological method does not produce any positive counts for blank
samples, the LoQ cannot be calculated using the analytical measurement method, because there is no noise
present at blank samples. An alternative approach is suggested in Section 10.3.2.

#### 10.3.1 Microbiological Methods with Positive Counts at Blank Samples

The data in Table 10.1-1 of the AMM/RMM will be used to illustrate the calculation approach used for
analytical methods and follows the weighted regression analysis that was applied in Section 10.2.1. Most of
the analysis can be done with general-purpose statistical software, but will likely also require some
additional manual calculations. The coefficients for the linear concentration-response curves were estimated
at 𝛼𝛼= 0.829 (intercept) and 𝛽𝛽= 0.778 (slope). The standard error of the intercept was determined as 𝑆𝑆𝑆𝑆𝛼𝛼=
 0.881, which can be found from the regression analysis output that was described, but not reported in
Section 10.2.1. The residual variance 𝜎𝜎2, which can normally be found under the “Mean Squared” or
“Adjusted Mean Squared Error” function (depending on the software package being used), for the residual
error in the ANOVA table produced by the weighted regression analysis, was estimated at 𝜎𝜎ො2 = 0.946. This
residual variance is a “corrected variance” which is corrected for the weights used in the regression analysis.
To get the variance around the concentration-response curve at each level of the concentrations, the
estimated residual variance of 0.946 should be multiplied with the sample variance that was calculated at
each of the concentrations.
To obtain the variance for an individual count at a blank sample, the sample variance for blank samples
must be known; but a blank concentration was not included in this experiment (nor was it required) and,
therefore, an observed sample variance is not provided. Therefore, to predict the variance at concentration
level zero, a (standard) linear regression analysis must be conducted on the sample standard deviations
calculated for the six concentrations (see Table 10.1-1). The linear regression analysis on the sample
standard deviations leads to an intercept of 1.590 and a slope of 0.067, which is obtainable with any general-
purpose statistical software package. This estimated intercept is the predicted sample standard deviation for
the counts at blank samples. The value needs to be squared (2.5281 = 1.590 · 1.590) to get a variance and
multiplied with the residual variance 𝜎𝜎ො2 = 0.946 from the weighted regression analysis manually to obtain
the final variance at the zero concentration for the AMM/RMM:
𝜎𝜎ො0
2 = 2.5281 ∙0.946 = 2.3916.
To obtain the total variability at a zero concentration, also taking into account the uncertainty in estimating
the intercept of the concentration-response curve, the squared uncertainty (𝑆𝑆𝑆𝑆𝛼𝛼2 = 0.8812 or 0.7762) of the
estimated intercept 0.829 must be added to the variance 𝜎𝜎ො0
2:
𝑆𝑆𝑆𝑆𝛼𝛼2 + 𝜎𝜎ො0
2 = 3.1677.
By taking the square root of this variance 3.1677, the standard deviation is then 1.7798. The upper quantile
is then determined at three times the standard deviation (approximately at the significance level of 0.1%)
away from the intercept 0.829 (upwards). Thus, the upper quantile (represented as the vertical axis in Figure
10.3-1) is then calculated at:
𝑈𝑈𝑈𝑈= 0.829 + 3 ∙1.7798 = 6.168.
Translating this upper quantile to a concentration level (as illustrated in Figure 10.1.1-2) using the weighted
regression line 0.829 + 0.778λ from Section 10.2.1, gives an estimated LoQ equal to:
𝜆𝜆LoQ =
[6.168 −0.829]
0.778
= 6.863
represented at the horizontal axis in Figure 10.3-1.

Thus, contaminated samples with a concentration level ≥ 6.86 CFU most likely will not produce typical
counts at blank samples when background noise is present in the AMM/RMM (for blank samples),
indicating that 6.86 CFU is the LoQ and that the sample cannot be confused with a blank sample.

#### 10.3.2 Microbiological Methods with Zero Counts at Blank Samples

When the blank sample does not generate any signal for the AMM/RMM, an approach can be used that is
aligned with the calculation of the detection limit for qualitative microbiological methods. Assuming that
the concentration-response curve for the AMM/RMM is given by:
𝑚𝑚𝐴𝐴(𝜆𝜆),
where 𝜆𝜆 is the concentration level and 𝑚𝑚𝐴𝐴(0) = 0, the concentration level LoQ = 𝜆𝜆LoQ may be found for
which it is (highly) likely to obtain enumerations that are away from zero (the result at a blank sample). In
this way, a zero result would not be obtained when the test sample contains more than the LoQ, and the test
sample is no longer believed to be sterile. In mathematical terms, the LoQ is defined by:
min
𝜆𝜆𝑃𝑃൫𝑌𝑌> 0ห𝑚𝑚𝐴𝐴(𝜆𝜆)൯≥1 −𝛼𝛼,
with 1− 𝛼𝛼 being the level of certainty to be chosen.
In other words, the search is for the minimal concentration that does not produce zero counts with a
predefined confidence level of 1 − 𝛼𝛼. As discussed for qualitative methods, the LoD was selected with a
confidence level equal to 0.95 (or 95%). Taking a confidence level of 99.9% for the LoQ, as selected in
Section 10.3.1, there would be only 0.1% risk of producing a result that would fit with a result of a blank
sample. The Poisson regression analysis of the data in Table 10.2.3-1 for the AMM/RMM in Section 10.2.3
has been used to illustrate this approach.
The Poisson regression analysis described in Section 10.2.3 demonstrated that the log-linear concentration-
response curve was an appropriate curve that described the relationship. This relationship forces the
concentration-response curve through the origin, indicating a zero mean for blank samples (and no noise or
signal expected at blank samples). The coefficients were estimated at slope 𝛽𝛽2 = 1.5924 and power 𝛽𝛽3 =
 0.8552 (see Section 10.2 for the notation and formulation of the log-linear concentration-response curve),
leading to the concentration-response curve equal to:
𝑚𝑚A(𝜆𝜆) = 1.5924 ∙𝜆𝜆0.8552
The probability of obtaining a zero count when the mean value of the Poisson distribution is 𝑚𝑚A(𝜆𝜆) is equal
to exp{−𝑚𝑚A(𝜆𝜆)}. With some simple algebra, the maximum value 𝜆𝜆LoQ can be obtained that would give
exp{−𝑚𝑚A൫𝜆𝜆LoQ൯} ≤ 0.001. This value is:
𝜆𝜆LoQ = exp ൞
log ൬−log(0.001)
1.5924
൰
0.8552ൢ
= 5.56
Thus, for concentration levels ≥ 5.56 CFU, it is unlikely to obtain zero enumerations, indicating that test
samples will not be confused with blank test samples in routine practice. Note that this value is not so
different from the estimated LoQ with weighted linear regression, but the value in Section 10.3.1 is higher
due, at least in part, to the expected positive mean signal at blank samples.

### 10.4 Precision

For the validation of analytical measurement systems, precision is quantified by two measures: a relative
standard deviation for repeatability and a relative standard deviation for intermediate precision.
Repeatability quantifies within run variability (i.e., variability in enumerations under identical
circumstances), and intermediate precision quantifies the sum of within and between run variability (i.e.,
variation in enumerations under routine varying conditions).
The analytical run is determined by factors that can change (e.g., analysts, test days, different instruments)
every time a new set of enumerations is collected. The standard data-analytic approach to calculate these
two relative standard deviations for the measures of precision is analysis of variance (ANOVA). For the
estimation of the measures of precision, ANOVA does not make any distributional assumptions, but it often
requires normality assumptions if additional features (e.g., confidence intervals, hypothesis testing for run
variability) are being used with ANOVA. For validation of microbiological methods, it is common to follow
the experimental setup of analytical measurement systems and apply ANOVA to quantify the within and
between run variability. This approach is demonstrated in Section 10.4.1 using the data from Table 10.4-1.
The run structure of the precision experiment is formed by the combinations of analysts and days (thus eight
(8) runs in total).

**Table 10.4-1 Precision Experiment for the Alternative/Rapid Microbiological Method Using**

Multiple Runs and Replicates
Replicate
Analyst 1
Analyst 2
Day 1
Day 2
Day 3
Day 4
Day 1
Day 2
Day 3
Day 4
Although ANOVA can quantify variability within and between runs without making any distributional
assumptions, there are considerations when the counts would follow a Poisson distribution. The Poisson
distribution has only one parameter 𝜆𝜆 that quantifies both the mean value and the variance of the counts, and
this fixes the value for the relative standard deviation to 100%/√𝜆𝜆 (when replicated counts are collected at
the same concentration). This value of relative standard deviation of the Poisson distribution is depicted in
Figure 10.4-1, which shows that the relative standard deviation becomes small only when the mean value
gets large. The relative standard deviation is never smaller than 10% for mean counts below 100 CFU. Thus,
for mean counts less than 100 CFU, repeatability that is (much) less than 10% is not expected to be found
when the counts follow a Poisson distribution and replicates are collected from different samples.

*[Figure 10.4-1 Visualization of the Relative Standard Deviation of a Poisson Distribution]*

In case the counts within runs (i.e., multiple enumerations from the same diluted suspension) follow a
Poisson distribution, the relative standard deviation can be estimated by using the mean value of the counts
instead of using ANOVA, which would estimate a separate variance parameter. In such situations, where the
counts within runs follow a Poisson distribution, it would be better to analyze the precision experiment with
a generalized linear mixed-effects model (GLMM) using the Poisson distribution. The repeatability is then
determined by the estimated Poisson distribution, while the run-to-run variability is separately modeled with
a latent variable that varies with the runs. This approach is illustrated in Section 10.4.2.
In the validation experiment for precision represented in Table 10.4-1, samples have been created at
approximately the same spiked level for each day and each analyst. Precision experiments are often
conducted this way, but typically at two or more spiked levels, to be able to quantify the precision at
different microbial concentrations. At each spiked level, the data could be analyzed as demonstrated here,
but there would also be options to analyze the full data simultaneously with ANOVA and GLMM.
The choice between ANOVA and GLMM depends mostly on a violation of using the Poisson distribution.
If it appears that the counts at each run follow a Poisson distribution, the GLMM is preferred; however,
when the variances of the counts within runs deviates (either larger or smaller) from the mean counts, the
ANOVA approach may be preferred over the GLMM approach based on Poisson. This is similar to the
approach for calculating accuracy at each concentration, where the choice was between a Poisson or a
normal distribution (see Section 10.1.1 and Section 10.1.3).

#### 10.4.1 Analysis of Variance for Precision

The ANOVA approach calculates the mean squares for within and between runs, denoted here by 𝑀𝑀𝑀𝑀𝑊𝑊 and
𝑀𝑀𝑀𝑀𝐵𝐵, respectively. Any general-purpose statistical software package can determine these statistics from the
data presented in Table 10.4-1. The mean square for the within-run variability (𝑀𝑀𝑀𝑀𝑊𝑊) is a direct estimate of

the variance component (𝜎𝜎𝑊𝑊
2 ) for the replicates within each run (as was used for linearity and the LoQ from
the weighted linear regression analysis). The assumption is that this variance is the same for each run
produced with the microbiological method. The mean square for the between-run variability (𝑀𝑀𝑀𝑀𝐵𝐵) is an
estimate of:
𝑛𝑛𝑛𝑛𝐵𝐵
2 + 𝜎𝜎𝑊𝑊
Where:
𝜎𝜎𝐵𝐵
=  variance component for the between-run variability
𝜎𝜎𝑊𝑊
=  variance component for the within-run variability
 n
=  number of replicates in each run
When the number of replicates vary from run-to-run, the 𝑀𝑀𝑀𝑀𝐵𝐵 estimates:
𝑐𝑐∙𝜎𝜎𝐵𝐵
2 + 𝜎𝜎𝑊𝑊
Where:
c

 =  a function of the different sample sizes in the runs (17).
Furthermore, if the software package has the option to choose a random effects model, the two variance
components will be estimated directly.
The two measures of precision, repeatability and intermediate precision, are now defined by:
Repeatability: 𝑅𝑅𝑅𝑅𝑅𝑅𝑅𝑅(%) = 100% ∙
𝜎𝜎𝑊𝑊
𝜇𝜇
Intermediate Precision: 𝑅𝑅𝑅𝑅𝑅𝑅𝐼𝐼𝐼𝐼(%) = 100% ∙
ට𝜎𝜎B
2+𝜎𝜎W
𝜇𝜇

with 𝜇𝜇 estimated by the average value of the counts.
Repeatability and intermediate precision are divided by the mean 𝜇𝜇 to obtain a measure of precision as a
percentage of the average value. These measures of precision are typically not provided by standard
software packages and should be calculated manually when the two variance components of 𝜎𝜎𝑊𝑊
2 and 𝜎𝜎𝐵𝐵
have been determined.
Sometimes, it is better to analyze the precision experiment on the logarithm of the counts, when the
distribution in the replicated counts within a run show skewness, as counts often show positive skewness
(see Section 10.1).
If the skewness suggests transforming the counts to the logarithmic scale, the measures of precision for the
counts itself are estimated in the following way:
Repeatability: 𝑅𝑅𝑅𝑅𝑅𝑅𝑅𝑅(%) = 100% ∙ඥexp{𝜎𝜎𝑊𝑊
2 } −1
Intermediate Precision: 𝑅𝑅𝑅𝑅𝑅𝑅𝐼𝐼𝐼𝐼(%) = 100% ∙ඥexp{𝜎𝜎𝑊𝑊
2 + 𝜎𝜎𝐵𝐵
2} −1
This calculation assumes that the logarithmically transformed counts are approximately normally
distributed. The advantage is that the mean value of the counts no longer plays a role in the calculation of
the measures of precision. However, to compare these measures of precision with what can be expected

from a Poisson distribution, the mean count is still required to be able to determine the relative standard
deviation depicted in Figure 10.4-1.

##### 10.4.1.1 Analysis of the Counts

Using the count data from Table 10.4-1, the mean value is estimated at 68.375 CFUs and the mean squares
(rounded to two decimals) are determined at 𝑀𝑀𝑀𝑀𝐵𝐵= 86.21 and 𝑀𝑀𝑀𝑀𝑊𝑊= 38.00. The variance component for
the between-run variability is then equal to 𝜎𝜎𝐵𝐵
2 = 12.0536 (not using rounded mean squares). This results in
the following values for the measures of precision:
𝑅𝑅𝑅𝑅𝑅𝑅𝑅𝑅(%) = 9.02%
𝑅𝑅𝑅𝑅𝑅𝑅𝐼𝐼𝐼𝐼(%) = 10.35%

##### 10.4.1.2 Analysis of the Log Counts

Using the logarithmically transformed count data from the data in Table 10.4-1, the mean value is estimated
at 4.2199, which translates into a median count of 68.03 (= exp {4.2199}). The mean squares are estimated
at 𝑀𝑀𝑀𝑀𝐵𝐵= 0.018993 and 𝑀𝑀𝑀𝑀𝑊𝑊= 0.008339 using a general-purpose statistical software package. The
variance component for the between-run variability is then estimated at 𝜎𝜎ො𝐵𝐵
2 = 0.002664. This results in the
following values for the measures of precision:
𝑅𝑅𝑅𝑅𝑅𝑅𝑅𝑅(%) = 9.15%
𝑅𝑅𝑅𝑅𝑅𝑅𝐼𝐼𝐼𝐼(%) = 10.52%
These measures of precision are very close to the measures of precision calculated from the counts directly.
To make a choice between the precision measurement, the residuals of the ANOVA model could be
evaluated (see Figure 10.4.1.2-1; most statistical software packages can generate this type of probability
plot of the residuals as an output of the calculations). The probability plots show that both analyses (on
counts and logarithmically transformed counts) would make sense, but the plot from the counts seems
slightly closer to normality than the plot from the log counts (i.e., the data points appear visually closer to
the lines), which is a marginal difference. Thus, based on this small distinction, the measures of precision
calculated from the counts would be reported.

*[Figure 10.4.1.2-1 Probability Plot of the Residuals (Analysis of the Counts (left); Analysis of the]*

Log Counts (right))

#### 10.4.2 Generalized Linear Mixed Effects Model

Assuming the counts in Table 10.4-1 within a run would follow the Poisson distribution, a generalized
linear mixed effects analysis could be used. In such a model, it is assumed that there exists a latent variable
𝑧𝑧𝑖𝑖 for run 𝑖𝑖 that affects the mean count in the run. The expected count given this latent variable 𝑧𝑧𝑖𝑖 is then
formulated as:
𝔼𝔼൫𝑦𝑦𝑖𝑖𝑖𝑖ห𝑧𝑧𝑖𝑖൯= exp{𝛼𝛼+ 𝑧𝑧𝑖𝑖}
Where:
𝜆𝜆𝛼𝛼
=
𝑒𝑒𝑒𝑒𝑒𝑒{𝛼𝛼}: the median count over all possible runs for the spike level used in the
              precision experiment
𝑧𝑧𝑖𝑖
=
latent variable for run i often assumed normally distributed with zero mean and
              variance 𝜏𝜏2
𝛼𝛼
=
intercept
The variance 𝜏𝜏2 for the latent variable 𝑧𝑧𝑖𝑖 would represent the variability between the runs in the logarithmic
scale.
Based on this Poisson model, the measures of precision for the counts in their original scale can be
calculated as follows:
Repeatability: 𝑅𝑅𝑅𝑅𝑅𝑅𝑅𝑅(%) = 100% ∙exp ቄ
−𝛼𝛼
2 ቅ
Intermediate Precision: 𝑅𝑅𝑅𝑅𝑅𝑅𝐼𝐼𝐼𝐼(%) = 100% ∙ቂexp ቄ−𝛼𝛼−
𝜏𝜏2
2 ቅ+ exp{𝜏𝜏2} −1ቃ
Fitting the GLMM may not be common in all general-purpose statistical software packages, but it could be
determined with [R] and SAS®. In SAS®, the analysis can be determined by the procedure GLIMMIX. Such
packages provide the estimates for 𝛼𝛼 and 𝜏𝜏2, from which the measures of precision can be manually
determined (by using the formulas above). The TriMSA software provides these measures of precision
directly in the output of the analysis.
The GLMM analysis on the data of Table 10.4-1, gives an estimate of 𝛼𝛼 that is equal to 4.2248 and an
estimate of 𝜏𝜏2 equal to 0.000378. In case the variance component 𝜏𝜏2 is equal to zero, the intermediate
precision becomes equal to the repeatability, but here the intermediate precision is slightly larger than the
repeatability. Thus, the two measures of precision are now (manually) estimated at:
Repeatability: 𝑅𝑅𝑅𝑅𝑅𝑅𝑅𝑅(%) = 12.09%
Intermediate Precision: 𝑅𝑅𝑅𝑅𝑅𝑅𝐼𝐼𝐼𝐼(%) = 12.25%
These values are slightly larger than the calculations from ANOVA, because the Poisson distribution fixes
the repeatability to 100%/√λ, with 𝜆𝜆 as the median value. Thus, the repeatability is now exactly equal to the
relative standard deviation of the Poisson distribution for an average of 𝜆𝜆= 68.36 (= exp{4.2248}), since a
Poisson distribution was assumed for the replicated counts conditionally on the executed run. Thus, the
repeatability is what we can be expected from Poisson distribution, and the intermediate precision is only
slightly higher than the repeatability. Overall, the measures of precision are satisfactory.

#### 10.4.3 Comparing Precision of the Alternative/Rapid Microbiological Method with the

Conventional Method
In addition to the data collection for the AMM/RMM in Table 10.4-1, precision data was also collected for
the CMM so the AMM/RMM could be compared with the CMM. It is assumed here that the data was
collected on other days and possibly with analysts other than those for the AMM/RMM. This means that the
runs for the CMM are runs other than those for the AMM/RMM. The data for the CMM are presented in

**Table 10.4.3-1.**

**Table 10.4.3-1 Precision Experiment for the CMM Using Multiple Runs and Replicates**

Replicates
Analyst 1
Analyst 2
Day 1
Day 2
Day 3
Day 4
Day 1
Day 2
Day 3
Day 4
It should be noted that comparing precision measures between the AMM/RMM and CMM often requires an
unrealistic large number of test samples. Table 10.4.3-2 shows the sample size per microbiological method
(i.e., replicated counts when all data is collected within a single run) for traditional hypothesis-testing,
assuming a specific ratio between the variance components 𝜎𝜎A
2/𝜎𝜎C
2 (type 1 error rate is 0.05 and the power is
0.80). Table 10.4.3-2 clearly shows that an increase in the variance of less than 50% from the CMM to the
AMM/RMM is difficult to conduct for each species separately. Thus, most of the time, traditional
hypothesis-testing would show that there is no difference in variance components. On the other hand, non-
inferiority testing would typically lead to a wide confidence interval that would hardly ever satisfy a non-
inferiority margins of 0.7 when the variance of the CMM is compared to the variance of the AMM/RMM
or, alternatively, margins of 1.3 if the variance of the AMM/RMM is divided by the variance of the CMM.
It is therefore recommended to either accept less strict non-inferiority margins on the ratio of variances or to
compare the two microbiological methods more qualitatively. A non-inferiority margin of 2 on the ratio
𝜎𝜎A
2/𝜎𝜎C
2 (or 0.5 on the ratio 𝜎𝜎C
2/𝜎𝜎A
2) may be considered reasonable, since it leads to a non-inferiority margin
of approximately 0.7 on the ratio of precisions 𝜎𝜎C/𝜎𝜎A and seems practical considering the information in

**Table 10.4.3-2.**

**Table 10.4.3-2 Minimum Sample Size for Two Variances**

Ratio Variances
Sample Size
1.25
1.50
1.75
2.00
2.25
2.50
It is common to compare the precision estimates of the AMM/RMM and CMM in a ratio where the
precision of the CMM is put in the denominator. This means that a non-inferiority margin becomes a value
above one, like 1.3, instead of a value below one, like 0.7, which has been used for other validation
parameters so far. Indeed, when the precision of the AMM/RMM gets too large, the AMM/RMM may be
considered inferior to the CMM and the ratio 𝜎𝜎A/𝜎𝜎C becomes too far beyond one. It is important to realize
that 0.7 and 1.3 are not the same non-inferiority margins in case the ratio is reversed and the precision of the
AMM/RMM is put in the denominator. A non-inferiority margin of 1.3 on the ratio 𝜎𝜎A/𝜎𝜎C would lead to a
non-inferiority margin of 0.769 (=1/1.3) on the ratio 𝜎𝜎C/𝜎𝜎A. Finally, putting a non-inferiority margin on the
ratio of the precisions is not the same as putting a non-inferiority margin on the ratio of the variances (i.e.,
the ratio of squared precisions) as discussed in previous paragraph. Indeed, a non-inferiority margin of 1.3
on the ratio 𝜎𝜎A/𝜎𝜎C is the same as putting a non-inferiority margin of 1.69 on the ratio 𝜎𝜎A
2/𝜎𝜎C
2 or 0.592 on the
ratio 𝜎𝜎C
2/𝜎𝜎A
2.
The approach to compare the precision of the AMM/RMM with the precision of the CMM again depends
on the distributional assumptions. If it is assumed that the counts per run are Poisson-distributed, the
repeatability is determined by the mean count exp{𝛼𝛼}. Comparing this parameter between the AMM/RMM
and CMM is then better done in an accuracy experiment as discussed in Section 10.1. Thus, for the GLMM
approach, it would not make sense to compare the repeatability between the microbiological methods if an
accuracy study is also conducted. The only comparison between the AMM/RMM and the CMM that would
possibly make sense is the comparison of the parameter 𝜏𝜏2 that describes the between-run variability.
However, a difference in 𝜏𝜏2 between the two microbiological methods may not have a strong effect on the
ratio of the intermediate precision, since it also contains the within-run variability. To illustrate this, the ratio
100% ∙𝑅𝑅𝑅𝑅𝑅𝑅𝐼𝐼𝐼𝐼
A (%)/𝑅𝑅𝑅𝑅𝑅𝑅𝐼𝐼𝐼𝐼
C (%) of the two intermediate precisions for the microbiological methods can be
visualized as a function of the ratio 100% ∙𝜏𝜏A/𝜏𝜏C for different values of the mean count exp{𝛼𝛼}. Here, it is
assumed that both microbiological methods have the same mean count (or repeatability). Figure 10.4-1
shows that when the standard deviation 𝜏𝜏A of the AMM/RMM is twice as large as the standard deviation 𝜏𝜏C
of the CMM (and the variance is thus four times larger), the intermediate precision of the AMM/RMM is
only 31% (or much less) larger than the intermediate precision of the CMM for enumerations less than 90
CFU. When the repeatability is large, the repeatability dominates the intermediate precision, and a strong
difference in variance components (as a factor 4, as noted previously) is not picked up. Thus, to understand

the differences between the two microbiological methods when the Poisson distribution is used, comparing
the two standard deviations 𝜏𝜏A and 𝜏𝜏C from the GLMM analysis is recommended.
If the replicates within the runs of the precision experiment do not demonstrate a Poisson distribution, the
counts or the log counts with the ANOVA can be modelled, assuming that the counts follow a normal
distribution. The decision not to use the Poisson distribution is mainly driven by a violation of the relation
between the mean and the variance of the replicated counts within runs (see also Section 10.1.3). When the
variances for the runs deviate from the means of the runs, an alternative distribution to the Poisson
distribution should be used. This evaluation is not always easy to conduct due to the relatively small number
of replicates per run, and it may be necessary to do it qualitatively. If the Poisson distribution is rejected and
the normal distribution describes either the counts or log counts properly for each microbiological method,
which can be evaluated through a residuals plot (Figure 10.4-2) after conducting an ANOVA, the ANOVA
approach can be used to compare both the repeatability and the intermediate precision.

##### 10.4.3.1 ANOVA Method on the Counts

To compare the measures of precision for AMM/RMM with CMM, the values for repeatability and
intermediate precision for the two methods separately can be calculated as described in Section 10.4.1
(using counts). The calculation of the two ratios 𝑅𝑅𝑅𝑅𝑅𝑅𝑅𝑅
A(%)/𝑅𝑅𝑅𝑅𝑅𝑅𝑅𝑅
C(%) and 𝑅𝑅𝑅𝑅𝑅𝑅𝐼𝐼𝐼𝐼
A (%)/𝑅𝑅𝑅𝑅𝑅𝑅𝐼𝐼𝐼𝐼
C (%) are then
straightforward to calculate.
Applying the ANOVA approach to the count data in Table 10.4.3-1 for the CMM results in a mean square
𝑀𝑀𝑀𝑀𝐵𝐵= 64.375 and 𝑀𝑀𝑀𝑀𝑊𝑊= 157.125. The variance component for the between-run variability is then
estimated at 𝜎𝜎ො𝐵𝐵
2 = 23.19. The mean count was determined at 69.81. Thus, the measures of precision for the
CMM are now estimated at 𝑅𝑅𝑅𝑅𝑅𝑅𝑅𝑅
𝐶𝐶(%) = 11.49% and 𝑅𝑅𝑅𝑅𝑅𝑅𝐼𝐼𝐼𝐼
𝐶𝐶(%) = 13.40%. Comparing the measures of
precision of the AMM/RMM with the measures of precision of the CMM, leads to the following ratios
(expressed in percentages):
Ratio for Repeatability: 100% ∙
𝑅𝑅𝑅𝑅𝑅𝑅𝑅𝑅
A(%)
𝑅𝑅𝑅𝑅𝑅𝑅𝑅𝑅
C(%) = 78.45
Ratio for Intermediate Precision: 100% ∙
𝑅𝑅𝑅𝑅𝑅𝑅𝐼𝐼𝐼𝐼
A (%)
𝑅𝑅𝑅𝑅𝑅𝑅𝐼𝐼𝐼𝐼
C (%) = 77.20
Clearly, these ratios show that the estimated precision of the AMM/RMM is less than the estimated
precision of the CMM. To better understand this ratio, it is recommended to calculate an upper 95%
confidence limit for these two ratios using the logarithmic scale. Unfortunately, confidence intervals on
ratios of variance components are mathematically not straightforward, particularly for the intermediate
precision.
The variance of a mean square 𝑀𝑀𝑀𝑀 in a random effects ANOVA model can be estimated by:
2𝑀𝑀𝑀𝑀2
𝑑𝑑𝑑𝑑
with 𝑑𝑑𝑑𝑑 as the degrees of freedom in the ANOVA table for the specific mean square.

The degrees of freedom of the within-run mean square 𝑚𝑚(𝑛𝑛−1) is equal to the number of runs (𝑚𝑚)
multiplied with the number of degrees of freedom of (𝑛𝑛−1) for the 𝑛𝑛 replicated counts in one run. The
asymptotic variance of the logarithmically transformed standard deviation for the within-run variability 0.5 ∙
log(𝑀𝑀𝑀𝑀𝑊𝑊) is then equal to [2𝑚𝑚(𝑛𝑛−1)]−1. Hence, the asymptotic upper 95% confidence limit for the ratio
𝑅𝑅𝑅𝑅𝑅𝑅𝑅𝑅
A(%)/𝑅𝑅𝑅𝑅𝑅𝑅𝑅𝑅
C(%) is then determined by:
𝑈𝑈𝑈𝑈𝑈𝑈𝑅𝑅= ቈ𝑅𝑅𝑅𝑅𝑅𝑅𝑅𝑅
𝐴𝐴(%)
𝑅𝑅𝑅𝑅𝑅𝑅𝑅𝑅
𝐶𝐶(%)቉exp ቊ
1.645
ඥ𝑚𝑚(𝑛𝑛−1)
ቋ,
where the uncertainty in the mean count was not taken into account.
For the example data in Table 10.4-1 and Table 10.4.3-1, the degrees of freedom is equal to 24 (= 8 · (4 –
1)) for the within-run mean square for both microbiological methods. The upper 95% confidence limit for
the ratio of repeatability is now determined by:
𝑈𝑈𝑈𝑈𝑈𝑈𝑅𝑅= 109.7%
The estimate for the sum of the two variance components 𝜎𝜎𝐵𝐵
2 + 𝜎𝜎𝑊𝑊
2 is equal to [𝑀𝑀𝑀𝑀𝐵𝐵+ (𝑛𝑛−1)𝑀𝑀𝑀𝑀𝑊𝑊]/𝑛𝑛.
The estimated variance of this estimator is equal to:
൤𝑀𝑀𝑀𝑀𝐵𝐵
𝑑𝑑𝑑𝑑𝐵𝐵+ (𝑛𝑛−1)2𝑀𝑀𝑀𝑀𝑊𝑊
𝑑𝑑𝑑𝑑𝑊𝑊
𝑛𝑛2

because the two mean squares are independent for balanced data (i.e., the same number of replicates per
run).
The degrees of freedom for the mean square between-runs equal the number of runs minus one (𝑑𝑑𝑑𝑑𝐵𝐵= 𝑚𝑚−
1). The variance of the total variability of within- and between-runs, 0.5 ∙log([𝑀𝑀𝑀𝑀𝐵𝐵+ (𝑛𝑛−1)𝑀𝑀𝑀𝑀𝑊𝑊]/𝑛𝑛), is
then approximately equal to:
𝜂𝜂2 = 0.5
൤𝑀𝑀𝑀𝑀𝐵𝐵
𝑑𝑑𝑑𝑑𝐵𝐵+ (𝑛𝑛−1)2𝑀𝑀𝑀𝑀𝑊𝑊
𝑑𝑑𝑑𝑑𝑊𝑊
[𝑀𝑀𝑀𝑀𝐵𝐵+ (𝑛𝑛−1)𝑀𝑀𝑀𝑀𝑊𝑊]2
The upper 95% confidence limit for the ratio 𝑅𝑅𝑅𝑅𝑅𝑅𝐼𝐼𝐼𝐼
A (%)/𝑅𝑅𝑅𝑅𝑅𝑅𝐼𝐼𝐼𝐼
C (%) is now determined by:
𝑈𝑈𝑈𝑈𝑈𝑈𝐼𝐼𝐼𝐼= ቈ𝑅𝑅𝑅𝑅𝑅𝑅𝐼𝐼𝐼𝐼
A (%)
𝑅𝑅𝑅𝑅𝑅𝑅𝐼𝐼𝐼𝐼
C (%)቉exp ቊ1.645ට𝜂𝜂A
2 + 𝜂𝜂C
2ቋ
Applying these formulas to the observed results, the upper 95% confidence limit for the ratio of intermediate
precisions becomes equal to 𝑈𝑈𝑈𝑈𝑈𝑈𝐼𝐼𝐼𝐼= 107.6%.
The formulas for the upper 95% control limits of the ratio of repeatability and intermediate precision for the
two microbiological methods can be programmed in Excel. The only input that is needed for each
microbiological method is the mean, the two mean squares, and their degrees of freedom.
The upper 95% confidence limits for the ratios of both the repeatability and the intermediate precision are
less than the non-inferiority limit of 141% (= 100%√2) assuming a non-inferiority margin of 2 for the

corresponding variances. Thus, the precision measures of the AMM/RMM is non-inferior to the precision of
the CMM when a non-inferiority margin (e.g., 2) is used on the variance for the relative standard deviations.

##### 10.4.3.2 GLMM Poisson Approach

Assuming that the counts within the runs are Poisson-distributed and the runs add additional variation to the
counts, the same analysis can be used for the CMM as was done for the AMM/RMM. The estimates and
standard error for the parameters in the Poisson model for both the AMM/RMM and CMM are shown in

**Table 10.4.3.2-1.**

**Table 10.4.3.2-1 Estimates and Standard Error for the Poisson Model**

Method
𝛼𝛼 (𝑆𝑆𝑆𝑆𝛼𝛼)
𝜏𝜏2 (𝑆𝑆𝑆𝑆𝜏𝜏2)
AMM/RMM
4.2248 (0.02248)
0.000378 (0.002022)
CMM
4.2441 (0.02960)
0.003408 (0.003468)
As mentioned earlier, the ratio of the two variance components 𝜏𝜏A
2 and 𝜏𝜏C
2 for the between-run variability of
the two microbiological methods should be investigated. The estimator of the variance component will be
approximated with a chi-square distribution and then using the F-distribution to calculate an upper
confidence limit on the ratio of the variance components. This upper limit can then be used to determine
non-inferiority if a non-inferiority margin, say 2, is prescribed for the precision experiment.
To approximate the estimators of the variance component with a chi-square distribution, only the degrees of
freedom need to be estimated. Making use of the Satterthwaite approach (an approach that is used for t-tests
with unequal variances as well), the formula for the degrees of freedom for the estimator 𝜏𝜏̂2 for the variance
component 𝜏𝜏2 is given by:
𝑑𝑑𝑑𝑑= 2𝜏𝜏̂4
𝑆𝑆𝑆𝑆𝜏𝜏ො2
2 ,
with 𝑆𝑆𝑆𝑆𝜏𝜏ො2 the standard error of the estimator 𝜏𝜏̂2.
In practice, such degrees of freedom can sometimes become small when variance components are relatively
small, so degrees of freedom will not be accepted less than the degrees of freedom for the between-run
variability, which is defined by the number of runs minus one (similar to ANOVA).

To first determine an upper 95% confidence limit on the ratio of the two variance components 𝜏𝜏𝐴𝐴
2/𝜏𝜏𝐶𝐶
2, the
upper 95% confidence limit is given by:
𝑈𝑈𝑈𝑈𝑈𝑈VC = ቆ𝜏𝜏𝐴𝐴
𝜏𝜏𝐶𝐶
2ቇ𝐹𝐹𝑑𝑑𝑑𝑑A,𝑑𝑑𝑑𝑑C
−1
(0.95)
Where:
𝜏𝜏𝐴𝐴
=
between-run variance component for AMM/RMM
𝜏𝜏𝐶𝐶
=  between-run variance component for CMM
𝑑𝑑𝑑𝑑A
=  degrees of freedom for AMM/RMM
𝑑𝑑𝑑𝑑C
=  degrees of freedom for CMM
𝐹𝐹𝑑𝑑𝑑𝑑𝐴𝐴,𝑑𝑑𝑑𝑑𝐶𝐶
−1
 =  quantile function of the F-distribution with 𝑑𝑑𝑑𝑑1and 𝑑𝑑𝑑𝑑2 degrees of freedom
Using the result from the analyses, a ratio of the two variance components is obtained that is equal to
𝜏𝜏𝐴𝐴
2/𝜏𝜏𝐶𝐶
2 = 0.1109. The degrees of freedom for the AMM/RMM and CMM, based on Satterthwaite approach,
are determined at 0.07 and 1.93, respectively, but the number of runs for each microbiological method was
set at eight (8). Thus, the degrees of freedom for calculation of the upper 95% confidence limit on the ratio
of the estimated variance components will be equal to seven (7). The upper limit 𝑈𝑈𝑈𝑈𝑈𝑈VC is then determined
at 0.4200. By taking the square root, the ratio of standard deviations 𝜏𝜏A/𝜏𝜏C, expressed in percentages, is
equal to 33.3%, and the corresponding upper 95% confidence limit on the ratio of standard deviations (also
expressed in percentages) is then equal to 64.8%. This upper limit is lower than a non-inferiority margin of
141% (corresponding to a factor of 2 for the variance components), making the AMM/RMM non-inferior
on the between-run variability (i.e., intermediate precision) compared to CMM.

## 11.0 Appendix 3: Validation of Alternative and Rapid

Microbiological Methods: Additional Statistical Analysis-
Non-CFU Signals
Several AMM/RMMs detect or enumerate microorganisms that are not based on the principle of growth,
e.g., they may measure molecules such as nicotinamide adenine dinucleotide plus hydrogen (NADH) or
riboflavin or other cellular targets that are indicative of viable cells. Thus, such AMM/RMMs can detect or
quantify microorganisms regardless of whether they can be cultured on or in conventional growth media or
if they are non-culturable, due to stress, injury, being in a dormant state and/or other physiological
conditions. This results in a reported signal that is not a CFU, but rather, some other designation based on
the scientific principle of the AMM/RMM. For example, biofluorescent particle counters (BFPCs) will
report the recovery of microorganisms in terms of an autofluorescent unit. Additionally, some non-CFU
methods operate continuously, generating significantly more data points than a single, growth-based result.
Accordingly, it may be more complicated to compare the results from non-CFU AMM/RMMs with the
results from CFU-based methods (18).
As just stated, a non-CFU method may report non-culturable signals in addition to what would be expected
to be reported in a CFU-based method (i.e., culturable signals). Indeed, in its simplest statistical form, the
total number of microorganisms 𝑋𝑋M in a sample can be conceptually defined as a sum of two components,
i.e., 𝑋𝑋M = 𝑋𝑋CFU + 𝑋𝑋NCFU, with 𝑋𝑋CFU being the number of viable and culturable microorganisms present in
the test sample and 𝑋𝑋NCFU the viable and non-culturable number of microorganisms in the test sample. The
CMM, which relies on microorganism growth, would only respond to the 𝑋𝑋CFU component and does not
signal anything from the 𝑋𝑋NCFU component. For quantitative methods it is expected that the CMM will
produce a number that is at most equal to 𝑋𝑋CFU, because the CMM quantifies microorganisms in terms of
CFU’s and not in the actual number of microorganisms that may be present in the test sample. Alternatively,
the AMM/RMM with a non-CFU signal would typically respond to both components 𝑋𝑋CFU and 𝑋𝑋NCFU in
the sample.
Based on this statistical formulation of the non-CFU signal and assuming that the AMM/RMM and CMM
perform equivalent to the 𝑋𝑋CFU component, it may be expected that the non-CFU AMM/RMM is more
sensitive than the CMM in detecting and enumerating microorganisms. However, this assumption may not
always be true, as this will depend on a number of factors, e.g., the scientific principle of the AMM/RMM
and its resulting detection signal, and the physiological state of the microorganisms being detected. In this
case, the non-CFU method may report similar recoveries as the CFU-based method. Thus, the AMM/RMM
can be expected to perform at least identical to, or alternatively, superior to, the CMM, even if the
AMM/RMM is performing slightly worse than the CMM solely on the 𝑋𝑋CFU component. Here, the
additional signal of the AMM/RMM for the 𝑋𝑋NCFU component would add to the signal of the 𝑋𝑋CFU
component. Therefore, demonstrating non-inferiority of the AMM/RMM to the CMM only on the total

number of microorganisms 𝑋𝑋M in a validation study could imply that the AMM/RMM is inferior to the
CMM on the 𝑋𝑋𝐶𝐶𝐶𝐶𝐶𝐶 component. On the other hand, if the validation experiments can generate test samples
that only or mostly contains the 𝑋𝑋CFU component, the non-inferiority analyses discussed in Section 9.0
(Appendix 1) and Section 10.0 (Appendix 2) may be applicable, since a comparison between the
AMM/RMM and CMM is then a direct comparison on the CFU signal. However, it may not be possible to
construct such an experiment with 100% certainty since there will always be some level of non-culturable
cells in a microbial challenge suspension, even under the best conditions. Therefore, using a non-inferiority
statistical test when comparing a non-CFU-based method with a CFU-based method may not be appropriate,
hence a statistical test based on a superiority model may be more appropriate.
An additional element to the issue of generating more presence tests or enumerations than the CMM which
also plays a role in the validation of the AMM/RMM with a non-CFU unit, is the method’s performance on
blank samples (i.e., the test sample is free of viable microorganisms). Some AMM/RMMs may detect or
quantify non-viable microorganisms or non-microbial particles (𝑋𝑋NM) in addition to viable microorganism
(𝑋𝑋CFU and 𝑋𝑋NCFU) and respond to the total number of particles (𝑋𝑋P = 𝑋𝑋NM + 𝑋𝑋M = 𝑋𝑋NM + 𝑋𝑋CFU + 𝑋𝑋NCFU)
in the test sample. The AMM/RMM could then produce signals for test samples that are free of viable
microorganisms resulting in a false positive rate for blank samples with qualitative microbiological methods
or a false positive count or background signal for quantitative microbiological methods. When the
AMM/RMM detects or quantifies non-viable microorganisms or non-microbial particles, a comparison with
the CMM becomes more difficult since it is unclear how much of the signal for the non-viable
microorganisms or non-microbial particles 𝑋𝑋NM is dominating the signal from the 𝑋𝑋CFU and 𝑋𝑋NCFU
components. It is for this reason that an understanding of the false positive rate is well understood before
performing comparative testing against the CMM, which is described in the method suitability section of
this technical report. For example, non-CFU AMM/RMMs that detect non-viable cells or non-microbial
particles may or may not be suitable for use, depending on the extent of the recovery and whether the false
positives or background noise can be subtracted from the true viable recovery counts under routine use.
Section 11.0 contains many formulas; Table 11.0-1 provides a key of all the symbols used in the formulas
and their meaning.

**Table 11.0-1 Nomenclature for Symbols Used in Section 11.0 (Appendix 3)**

Symbol
Meaning
𝑋𝑋
The number of microorganisms in a test sample. We use different indices to indicate the
number of microorganisms for different signals. 𝑋𝑋CFU is the number of viable and culturable
microorganisms, 𝑋𝑋NCFU is the number of viable and non-culturable microorganisms, 𝑋𝑋𝑀𝑀=
𝑋𝑋CFU + 𝑋𝑋NCFU is the number of viable microorganisms. We are also using 𝑋𝑋NM the number
of non-viable microorganisms and/or non-microbial particles and 𝑋𝑋P = 𝑋𝑋NM + 𝑋𝑋𝑀𝑀 the total
number of particles.

𝜋𝜋(𝑋𝑋)
The probability of a positive result on a test sample containing 𝑋𝑋 microorganisms. 𝜋𝜋𝐴𝐴(𝑋𝑋)
and 𝜋𝜋𝐶𝐶(𝑋𝑋) are these probabilities for the AMM/RMM and CMM, respectively.
Note: The notation 𝜋𝜋𝐴𝐴(𝑋𝑋CFU) and 𝜋𝜋𝐶𝐶(𝑋𝑋CFU) may also be used for the AMM/RMM and
CMM when the test sample contains 𝑋𝑋CFU viable and culturable microorganisms or
𝜋𝜋𝐴𝐴(𝑋𝑋NCFU) and 𝜋𝜋𝐶𝐶(𝑋𝑋NCFU) for viable and non-culturable microorganisms.

Symbol
Meaning
𝑦𝑦ത
The mean count for a set of test samples at the same concentration level for the
microbiological method, i.e., 𝑦𝑦ത= ∑
(𝑦𝑦𝑖𝑖/𝑛𝑛
𝑛𝑛
𝑖𝑖=1
). The means 𝑦𝑦ത𝐴𝐴 and 𝑦𝑦ത𝐶𝐶 are the mean counts for
test samples tested with the AMM/RMM and CMM, respectively.
𝜆𝜆
The mean number of microorganisms or the bacterial density in a set of test samples or in a
suspension. Here we make a distinction in the bacterial density 𝜆𝜆CFU for viable and
culturable microorganisms and the bacterial density 𝜆𝜆NCFU for viable and non-culturable
microorganisms. We will also u 𝜆𝜆M = 𝜆𝜆CFU + 𝜆𝜆NCFU.
𝜇𝜇
The mean count of a set of test samples for the microbiological method (which may deviate
from the true mean number 𝜆𝜆). We will use notations 𝜇𝜇𝐴𝐴
𝑘𝑘 and 𝜇𝜇𝐶𝐶
𝑘𝑘 for the mean counts of
AMM/RMM and CMM, respectively, on spiked concentration 𝑘𝑘 (to avoid indicating the
spiked level 𝜆𝜆𝑘𝑘 of microorganisms).
𝑝𝑝
The proportion of independent test samples that were tested positively for the presence of
viable microorganisms with the microbiological method, also called the positive rate. 𝑝𝑝𝐴𝐴 and
𝑝𝑝𝐶𝐶 are the positive rates for the AMM/RMM and the CMM, respectively. When the test
samples are only blank samples, the positive rate is referred to as the false positive rate. We
also use the notations 𝑝𝑝𝐴𝐴
0 and 𝑝𝑝𝐶𝐶
0 for the observed positive rates of blank samples with the
AMM/RMM and CMM, respectively, and 𝑝𝑝𝐴𝐴
+ and 𝑝𝑝𝐶𝐶
+ for the observed positive rates of
spiked samples with the AMM/RMM and CMM, respectively.
𝑞𝑞
The ratio of the mean number of viable and non-culturable and viable and culturable
microorganisms: 𝑞𝑞= 𝜆𝜆NCFU/𝜆𝜆CFU.
𝜃𝜃
The detection proportion for the microbiological method, which indicates the probability
for a positive test for test samples with exactly one microorganism present in the test
sample. 𝜃𝜃𝐴𝐴 and 𝜃𝜃𝐶𝐶 indicate the detection proportions for the AMM/RMM and CMM,
respectively.
𝜂𝜂
The false positive rate for the microbiological method, which indicates the probability for a
presence test for blank test samples. 𝜂𝜂𝐴𝐴 and 𝜂𝜂𝐶𝐶 indicate the detection proportions for the
AMM/RMM and CMM, respectively.
𝜉𝜉
The estimator for 𝜃𝜃𝜃𝜃 in a set of spiked test samples with a mean number of microorganisms
𝜆𝜆 present in the test samples obtained with the microbiological method having a detection
proportion 𝜃𝜃. 𝜉𝜉𝐴𝐴 and 𝜉𝜉𝐶𝐶 indicate the estimators for the AMM/RMM and CMM,
respectively.
𝜏𝜏2
The approximated variance of the estimator 𝜉𝜉. 𝜏𝜏𝐴𝐴
2 and 𝜏𝜏𝐶𝐶
2 are the variances for the
estimators 𝜉𝜉𝐴𝐴 and 𝜉𝜉𝐶𝐶, respectively.
𝑚𝑚(𝜆𝜆)
The concentration-response curve for the microbiological method in (spiked) concentration
level 𝜆𝜆. 𝑚𝑚𝐴𝐴(𝜆𝜆) and 𝑚𝑚𝐶𝐶(𝜆𝜆) are the concentration-response curves for the AMM/RMM and
CMM, respectively.
𝜏𝜏(𝜆𝜆)
The standard deviation of the log-transformed estimated concentration-response curve for
the microbiological method at concentration level 𝜆𝜆. 𝜏𝜏𝐴𝐴(𝜆𝜆) and 𝜏𝜏𝐶𝐶(𝜆𝜆) are the standard
deviations for the log-transformed estimated concentration-response curves for the
AMM/RMM and CMM, respectively.

Symbol
Meaning
𝑅𝑅
The ratio of a statistic for the AMM/RMM and CMM and is viewed as a measure for
accuracy or recovery. The ratio 𝑅𝑅pr is the ratio of positive rates 𝑝𝑝𝐴𝐴/𝑝𝑝𝐶𝐶. 𝑅𝑅gMPN is the ratio of
detection proportions 𝜃𝜃𝐴𝐴/𝜃𝜃𝐶𝐶 when the microbiological methods do not have false positive
rates and 𝑅𝑅M is the ratio of detection proportions 𝜃𝜃𝐴𝐴/𝜃𝜃𝐶𝐶 when the microbiological methods
do have false positive rates.
𝑛𝑛
The number of independent test samples. We may use 𝑛𝑛𝐴𝐴 and 𝑛𝑛𝐶𝐶 for the number of test
samples tested with the AMM/RMM and CMM, respectively. Additionally, we may use 𝑛𝑛𝐴𝐴
and 𝑛𝑛𝐶𝐶
0 for the number of blank test samples tested with the AMM/RMM and CMM,
respectively, and use 𝑛𝑛𝐴𝐴
+ and 𝑛𝑛𝐶𝐶
+ for the number of spiked test samples tested with the
AMM/RMM and CMM, respectively.
𝑃𝑃AGREE
The probability that the AMM/RMM and CMM agree on the decision of presence/absence
of microorganisms in the test sample.
𝑈𝑈
The upper limit for contamination of test samples with the microbiological method. 𝑈𝑈𝐴𝐴 and
𝑈𝑈𝐶𝐶 are the upper limits for test samples for the AMM/RMM and CMM, respectively.

### 11.1 Qualitative Microbiological Methods with Non-CFU Signals

This section will discuss two situations for non-CFU AMM/RMM methods, methods that have no or hardly
any false positives, and methods that produce a relevant level of false positives. This distinction is made
because false positives will improperly affect positive rates.

#### 11.1.1 Limit of Detection when the Non-CFU Alternative/Rapid Microbiological

Methods Does Not (or Hardly) Detects False Positives
In this example, a superiority analysis will be conducted using data presented in Table 11.1.1-1 to illustrate
an experiment with a single organism. The positive rates (with exact 95% confidence intervals) are given
by:
AMM/RMM: 𝑝𝑝𝐴𝐴= 0.933[0.779; 0.992]
CMM: 𝑝𝑝𝐶𝐶= 0.767 [0.577; 0.901]
The observed positive rate for the AMM/RMM is clearly larger than the positive rate for the CMM, which is
expected because the non-CFU AMM/RMM responds to both the 𝑋𝑋CFU and 𝑋𝑋NCFU components and the
CMM only responds to the 𝑋𝑋CFU component.

**Table 11.1.1-1 Presence/Absence of 30 Samples for a Single Microorganism per**

Microbiological Method
Method
Test Result
Presence
Absence
Total
AMM/RMM
CMM
Total
Testing the traditional null hypothesis 𝐻𝐻0: 𝑝𝑝𝐴𝐴= 𝑝𝑝𝐶𝐶 can be done with Pearson’s chi-square test or Fisher’s
exact test as discussed in Section 9.0 (Appendix 1). However, these two test statistics do not reject the null-
hypothesis for the data in Table 11.1.1-1 at the significance level of 0.05, because the p-values are
determined at 0.071 and 0.145, respectively (not shown here but can be obtained following the guidance in
Section 9.0 (Appendix 1). These statistics test the null-hypothesis against the alternative hypothesis
𝐻𝐻1:𝑝𝑝𝐴𝐴≠𝑝𝑝𝐶𝐶 (e.g., the recovery of the AMM/RMM is statistically inferior or superior to the recovery of the
CMM). The alternative hypothesis demonstrating that the AMM/RMM is statistically superior in detecting
microorganisms (i.e., a greater microbial recovery rate) than the CMM: 𝐻𝐻1:𝑝𝑝𝐴𝐴> 𝑝𝑝𝐶𝐶 is more relevant for
non-CFU AMM/RMM methods. This superiority hypothesis can be better evaluated by calculating the ratio
𝑅𝑅pr = 𝑝𝑝𝐴𝐴/𝑝𝑝𝐶𝐶 of the positive rates and using an appropriate lower 95% confidence limit on this ratio, similar
to the non-inferiority analysis in Section 9.0 (Appendix 1). If the Farrington and Manning confidence limit
is used, a ratio of 𝑅𝑅pr = 1.217 with a lower 95% confidence limit equal to 1.018 is obtained. This implies
that the hypothesis of superiority has been demonstrated, i.e., 𝐻𝐻0:𝑝𝑝𝐴𝐴= 𝑝𝑝𝐶𝐶 is rejected in favor of 𝐻𝐻1: 𝑝𝑝𝐴𝐴>
𝑝𝑝𝐶𝐶 superiority, since the value one (1) is below the lower 95% confidence limit.
For a non-inferiority analysis, as described earlier in Section 9.2.2, it was suggested to use the gMPN when
the positive rates were high, because the ratio of positive rates would converge to one when the spiked
concentration level increases, and the lower 95% confidence limit would easily become above a non-
inferiority margin of, for example, 0.70, irrespective of how inferior the AMM/RMM is against the CMM.
For superiority testing this is less of a concern, since superiority would require a lower 95% confidence limit
above the value one (1) and this is not so easy to determine if the true positive rate of the AMM/RMM is
equal to or less than the true positive rate of the CMM.
Nevertheless, the gMPN which can be used here as well and applied to the data in Table 11.1.1-1, estimates
the ratio of detection proportions 𝑅𝑅gMPN = 𝜃𝜃𝐴𝐴/𝜃𝜃𝐶𝐶 equal to 𝑅𝑅gMPN = 1.861 with a lower 95% confidence
limit of 1.064. Here the formula from Section 9.2.3 was used. Thus, the gMPN shows that the null-
hypothesis of equal detection proportions 𝐻𝐻0:𝜃𝜃𝐴𝐴= 𝜃𝜃𝐶𝐶 is rejected in favor of superiority 𝐻𝐻1: 𝜃𝜃𝐴𝐴> 𝜃𝜃𝐶𝐶,
indicating that the AMM/RMM detects test samples with a single microorganism better than the CMM. It is
appropriate to note that the calculated ratio of 1.861 actually represents a ratio of (1 + 𝑞𝑞)(𝜃𝜃𝐴𝐴/𝜃𝜃𝐶𝐶), with 𝑞𝑞=
𝜆𝜆NCFU/𝜆𝜆CFU, 𝜆𝜆CFU the mean number of viable and culturable microorganisms and 𝜆𝜆NCFU the mean number
of viable and non-culturable microorganisms present in the test samples. Thus, the real ratio of detection
proportions 𝜃𝜃𝐴𝐴/𝜃𝜃𝐶𝐶, which would investigate the detection of viable and culturable microorganisms, may not
be superior 𝜃𝜃𝐴𝐴/𝜃𝜃𝐶𝐶< 1. However, if the samples in the experiment contain a ratio 𝑞𝑞= 𝜆𝜆NCFU/𝜆𝜆CFU of non-

culturable and culturable microorganisms that is natural for routine sampling, then the AMM/RMM detects
better than the CMM, due to a performance on detecting non-culturable microorganisms.
Thus, both the approach on positive rates and the gMPN approach show that the AMM/RMM detects
microorganisms better than the CMM.

#### 11.1.2 Limit of Detection When the Non-CFU Alternative/Rapid Microbiological

Method Demonstrates a Relevant False Positive Rate
In this situation it is assumed that the AMM/RMM will also detects non-viable signals from blank samples
(e.g., false positives or background noise). Clearly, this would not be an ideal situation, but it may still be
desirable to know whether the AMM/RMM detects viable microorganisms as good as or better than the
CMM. A direct comparison of the microbiological methods on spiked material alone may provide an
incorrect conclusion, since the false positive rate masks or increase the true positive rate. In such situations,
it may be helpful to combine data from test results of blank samples with data from spiked samples. To
illustrate a statistical approach for such an experiment, it will be assumed that the following data has been
collected (Table 11.1.2-1). The same data used in Table 11.1.1-1 was also used for Table 11.1.2-1 for the
spiked samples. The statistical approach can be programmed in Excel from the formulae provided in
Section 11.1.2.

**Table 11.1.2-1 Testing of 30 Blank Samples and Spiked Samples on Both the Alternative/Rapid**

Microbiological Method on Absence/Presence for a Single Microorganism
Method
Test Results: Blank Samples
Test Results: Spiked Samples
Presence
Absence
Total
Presence
Absence
Total
AMM/RMM
CMM
Total
A statistical model that may describe the positive rate 𝑝𝑝𝐴𝐴 for the AMM/RMM, and extends the gMPN
approach, is described by 𝑝𝑝𝐴𝐴= 1 −(1 −𝜂𝜂𝐴𝐴)exp{−𝜃𝜃𝐴𝐴𝜆𝜆}, with 𝜃𝜃𝐴𝐴 the detection proportion, 𝜂𝜂𝐴𝐴 the false
positive rate, and 𝜆𝜆 the spiked concentration level (9). In case no microorganisms are present in the test
samples, the positive rate 𝑝𝑝𝐴𝐴 become equal to 𝜂𝜂𝐴𝐴 and when the false positive rate 𝜂𝜂𝐴𝐴= 0, the model reduces
to the gMPN approach discussed in Section 9.2.3. For the CMM, a similar model could be assumed but
with different parameters 𝜂𝜂𝐶𝐶 and 𝜃𝜃𝐶𝐶, where the false positive rate could be equal to zero (𝜂𝜂𝐶𝐶= 0).

To understand whether the non-CFU AMM/RMM detects microorganisms better than the CMM testing the
null-hypothesis 𝐻𝐻0:𝜃𝜃𝐴𝐴= 𝜃𝜃𝐶𝐶 against the superiority alternative hypothesis 𝐻𝐻1: 𝜃𝜃𝐴𝐴> 𝜃𝜃𝐶𝐶 may be performed,
irrespective of how the false positive rates 𝜂𝜂𝐴𝐴 and 𝜂𝜂𝐶𝐶 compare to each other. The ratio 𝑅𝑅M = 𝜃𝜃𝐴𝐴/𝜃𝜃𝐶𝐶 can
now be estimated by:
𝑅𝑅𝑀𝑀𝑀𝑀=ൣlog൫1 −𝑝𝑝𝐴𝐴
0൯−log൫1 −𝑝𝑝𝐶𝐶
[log(1 −𝑝𝑝𝐴𝐴
+) −log(1 −𝑝𝑝𝐶𝐶
+)]
Where:
𝑝𝑝𝐴𝐴
=
positive rate for blank samples with AMM/RMM
𝑝𝑝𝐶𝐶
=
positive rate for blank samples with CMM
𝑝𝑝𝐴𝐴
+
=
positive rate for spiked samples with AMM/RMM
𝑝𝑝𝐶𝐶
+
=
positive rate for spiked samples with CMM
Calculating these positive rates with their exact 95% confidence intervals from the data in Table 11.1.2-1,
results in the data seen in Table 11.1.2-2.

**Table 11.1.2-2 Positive Rates with Exact 95% Confidence Intervals**

Method
Test Results: Blank Samples
Test Results: Spiked
Samples
AMM/RMM
0.133 (0.038; 0.307)
0.900 (0.735; 0.979)
CMM
0 [0.000; 0.116)
0.700 (0.506; 0.853)
Using the positive rates, the ratio of detection proportions can be determined, using the formula for 𝑅𝑅𝑀𝑀
above. The ratio of detection proportions then becomes 𝑅𝑅MP = 1.763. Note that this ratio is lower than the
ratio RgMPN = 1.861 calculated with the gMPN method on the data of Table 11.1.2-1 in Section 11.1.1,
because the false positive rates for the AMM/RMM is subtracted in some form from the positives obtained
at the spiked ratio to compensate for the masking of false positives obtained at the spiked samples. Similar
to the analysis of the data without false positives, the ratio represents (1 + 𝑞𝑞)(𝜃𝜃𝐴𝐴/𝜃𝜃𝐶𝐶), again with 𝑞𝑞=
𝜆𝜆NCFU/𝜆𝜆CFU,  𝜆𝜆CFU the mean number of viable and culturable microorganisms and 𝜆𝜆NCFU the mean number
of viable and non-culturable microorganisms present in the test samples.

A lower 95% confidence limit on the ratio 𝑅𝑅M can then be calculated by:
𝐿𝐿𝐿𝐿𝐿𝐿𝑀𝑀= 𝑅𝑅𝑀𝑀∙exp ቐ−1.645ඨ𝜏𝜏𝐴𝐴
𝜉𝜉𝐴𝐴
2 + 𝜏𝜏𝐶𝐶
𝜉𝜉𝐶𝐶
2ቑ
Where:
𝜉𝜉𝐴𝐴         =   log൫1 −𝑝𝑝𝐴𝐴
0൯−log(1 −𝑝𝑝𝐴𝐴
+)
𝜉𝜉𝐶𝐶         =   log൫1 −𝑝𝑝𝐶𝐶
0൯−log(1 −𝑝𝑝𝐶𝐶
+)
𝜏𝜏𝐴𝐴
2         =   𝑝𝑝𝐴𝐴
0/(𝑛𝑛𝐴𝐴
0(1 −𝑝𝑝𝐴𝐴
0)) + 𝑝𝑝𝐴𝐴
+/(𝑛𝑛𝐴𝐴
+(1 −𝑝𝑝𝐴𝐴
+))
𝜏𝜏𝐶𝐶
2         =   𝑝𝑝𝐶𝐶
0/(𝑛𝑛𝐶𝐶
0(1 −𝑝𝑝𝐶𝐶
0)) + 𝑝𝑝𝐶𝐶
+/(𝑛𝑛𝐶𝐶
+(1 −𝑝𝑝𝐶𝐶
+))
𝑛𝑛𝐴𝐴
=  number of test samples for the AMM/RMM at the blank samples
𝑛𝑛𝐴𝐴
+
=  number of test samples for the AMM/RMM at the spiked samples
𝑛𝑛𝐶𝐶
=
number of test samples for the CMM at the blank samples
𝑛𝑛𝐶𝐶
+
=
number of test samples for the CMM at the spiked samples
The lower 95% confidence limit, using the data in Table 11.1.2-1, is then determined by 𝐿𝐿𝐿𝐿𝐿𝐿MP = 0.989.
Based on this lower 95% confidence limit, it can no longer be concluded that the non-CFU AMM/RMM
detects microorganisms better than the CMM.
However, it could be concluded that the non-CFU AMM/RMM is non-inferior to the CMM when detecting
microorganisms at a non-inferiority margin of 0.7 (or at even higher values), but this does not mean that the
AMM/RMM is non-inferior on detecting culturable microorganisms (i.e., detecting the 𝑋𝑋CFU part of the test
sample), since the test samples may have contained several 𝑋𝑋NCFU components and the AMM/RMM could
be inferior on the CFU part of the test samples. This issue may also be the case when the lower 95%
confidence limit is above the value one (1) (demonstrating superiority), but this may be less likely since the
non-CFU AMM/RMM should be more sensitive than the CMM. Finally, showing non-inferiority with an
estimate of the ratio of detection proportion above the value one (1) may still provide enough evidence that
the non-CFU AMM/RMM is sensitive enough.

#### 11.1.3 Discussion on Fit for Purpose

Superiority in detecting microorganisms with the non-CFU AMM/RMM compared to the CMM may create
challenges in making GMP decisions in daily practice when a positive result of the non-CFU AMM/RMM
is being compared with the established CFU-based acceptance levels for microbial recoveries. Such a
positive result may be indicated in four situations. First, the sample may only contain viable and culturable
microorganisms (𝑋𝑋CFU) and the non-CFU AMM/RMM would be expected to detect these. This outcome
would most likely be confirmed by the CMM and the use of AMM/RMM or CMM would typically not
result in a different decision (i.e., decision equivalence).
Second, a positive test in the AMM/RMM is due to the presence of only viable but non-culturable
microorganisms (𝑋𝑋NCFU). The CMM would most likely not confirm the presence of these microorganisms,
indicating a possible difference in decision making (i.e., non-equivalent decision making). In this case, the

non-CFU AMM/RMM would be correct in detecting these microorganisms, which would not be detected in
the CMM as they would not be expected to produce a growth-based signal.
Third, a positive test in the AMM/RMM is due to the presence of both viable and culturable and viable but
non-culturable microorganisms (𝑋𝑋CFU + 𝑋𝑋NCFU). The CMM may not confirm the presence of the culturable
organisms if the culturable signal 𝑋𝑋CFU is far below the LoD, also indicating a possible difference in
decision making (i.e., non-equivalent decision making), since the AMM/RMM would be expected to detect
when culturable and non-culturable organisms are beyond the LoD. Here, the non-CFU AMM/RMM would
be correct in detecting all of these microorganisms, but would not be detected in the CMM due to a too
small culturable signal.
The fourth situation is that the non-CFU AMM/RMM provided a false positive and no viable
microorganisms are actually present, in which case the CMM would most likely not confirm the presence of
microorganisms either (i.e., again non-equivalent decision making). However, as previously discussed, care
must be taken if false positives are detected in the AMM/RMM, as decisions should only be made based on
the presence of viable cells and not non-viable cells or non-microbial particles. Accordingly, superiority of
the non-CFU AMM/RMM in this case may lead to non-equivalent and more importantly, inappropriate
decisions on the presence of supposed microorganisms in the test sample.
How well the non-CFU AMM/RMM and CMM agree in their decision-making on the same set of samples
is not so easy to determine, because the agreement between the AMM/RMM and CMM would depend on
many factors (e.g., the number of microorganisms in the sample, the LoD of the microbiological methods,
the false positive rates, the ratio of culturable and non-culturable microorganisms, and the dependency
between 𝑋𝑋CFU and 𝑋𝑋NCFU). However, for specific settings and under certain conditions, the degree of
agreement between the AMM/RMM and CMM could be determined. Note that agreement is defined here as
the expected probability of obtaining the same decision on the set of test samples.
In the scenario that a test sample does not contain microorganisms, the agreement is equal to: 𝑃𝑃AGREE =
𝑝𝑝𝐴𝐴
0𝑝𝑝𝐶𝐶
0 + (1 −𝑝𝑝𝐴𝐴
0)(1 −𝑝𝑝𝐶𝐶
0). For the data in Table 11.1.2-1, the agreement (expressed in percentages) is
equal to 86.7%, indicating decision equivalence between the AMM/RMM and CMM for blank samples.
Note that good or strong agreement levels are 80% or more for both inter-rater agreement and questionnaire
reliability (19, 20).
For settings with samples containing only viable but non-culturable microorganisms, agreement between the
AMM/RMM and CMM is determined by the probability:
𝑃𝑃𝐴𝐴𝐴𝐴𝐴𝐴𝐴𝐴𝐴𝐴= 𝜋𝜋𝐴𝐴(𝑋𝑋NCFU)𝑝𝑝𝐶𝐶
0 + ൫1 −𝜋𝜋𝐴𝐴(𝑋𝑋NCFU)൯൫1 −𝑝𝑝𝐶𝐶
with 𝜋𝜋𝐴𝐴(𝑋𝑋NCFU) the probability of a presence result of the AMM/RMM for a sample containing 𝑋𝑋NCFU
microorganisms. When the number 𝑋𝑋NCFU in a sample is large enough, the AMM/RMM is likely to detect
this and the agreement 𝑃𝑃AGREE drops or converges to the false positive rate 𝑃𝑃AGREE = 𝑝𝑝𝐶𝐶
0 of the CMM,
implying a very low agreement and emphasizing the arguments above that superiority induced by non-CFU
AMM/RMM-detectable cellular targets (other than culturable microorganisms) causes disagreement in
decisions on samples without culturable microorganisms.

Finally, for samples containing both viable and culturable, and viable but non-culturable microorganisms
(𝑋𝑋MP = 𝑋𝑋CFU + 𝑋𝑋NCFU), the agreement is given by:
𝑃𝑃AGREE = 𝜋𝜋𝐴𝐴(𝑋𝑋NCFU + 𝑋𝑋CFU)𝜋𝜋𝐶𝐶(𝑋𝑋CFU) + (1 −𝜋𝜋𝐴𝐴(𝑋𝑋NCFU + 𝑋𝑋CFU))(1 −𝜋𝜋𝐶𝐶(𝑋𝑋CFU))
with 𝜋𝜋𝐴𝐴(𝑋𝑋CFU + 𝑋𝑋NCFU) the probability of a presence result of the AMM/RMM for a sample containing
𝑋𝑋CFU + 𝑋𝑋NCFU microorganisms and with 𝜋𝜋𝐶𝐶(𝑋𝑋CFU) the probability of a presence result of the CMM for a
sample containing 𝑋𝑋CFU culturable microorganisms. Clearly, when the non-CFU AMM/RMM is superior to
the CMM and the number of viable and culturable microorganisms is above the LoD of the CMM, the
agreement would be at least 𝑃𝑃AGREE = 90%. This indicates that decision equivalence between the
AMM/RMM and CMM is attained when the number of culturable microorganisms is above the LoD of the
CMM. On the other hand, the agreement could also become substantially lower than 90%, particularly when
𝜋𝜋𝐴𝐴(𝑋𝑋NCFU + 𝑋𝑋CFU) ≈1 and 𝜋𝜋𝐶𝐶(𝑋𝑋CFU) ≈0 (the culturable signals are below the LoD); the agreement
would then be close to zero again.
To obtain an agreement level for sample from routine practice, there is a need to balance the three
different levels of agreement as just described above, since these situations could possibly occur in
different frequencies. The expected agreement for the statistical models that were used for the data in

**Table 11.1.1-1 and Table 11.1.2-1 have been calculated, under the assumption that the two components**

𝑋𝑋CFU and 𝑋𝑋NCFU are Poisson distributed and that they would enter the samples independently. The
formula for agreement is then provided by:
𝑃𝑃𝐴𝐴𝐴𝐴𝐴𝐴𝐴𝐴𝐴𝐴= 1 −൫1 −𝑝𝑝𝐴𝐴
0൯exp{−𝜆𝜆MP𝜃𝜃𝐴𝐴} −൫1 −𝑝𝑝𝐶𝐶
0൯exp{−𝜆𝜆CFU𝜃𝜃𝐶𝐶}
+2(1 −𝑝𝑝𝐴𝐴
0)(1 −𝑝𝑝𝐶𝐶
0)exp{−𝜆𝜆𝑀𝑀𝜃𝜃𝐴𝐴−𝜆𝜆𝐶𝐶𝐶𝐶𝐶𝐶(1 −𝜃𝜃𝐴𝐴)𝜃𝜃𝐶𝐶}

Where:
𝜃𝜃𝐶𝐶
=
detection proportion of the CMM
𝜃𝜃𝐴𝐴
=
detection proportion of the AMM/RMM
𝑝𝑝𝐶𝐶
=  false positive rates of the CMM
𝑝𝑝𝐴𝐴
=  false positive rates of the AMM/RMM
𝜆𝜆CFU
=  mean number of viable and culturable microorganisms
𝜆𝜆𝑀𝑀
=  mean number of viable microorganisms (given by the sum of culturable and
       non-culturable viable microorganisms, 𝜆𝜆CFU + 𝜆𝜆NCFU) present in the samples
For overdispersed numbers of microorganisms and dependent components 𝑋𝑋CFU and 𝑋𝑋NCFU, extension of
the agreement probability is needed. Figure 11.1.3-1 shows a few examples of the level of agreement
between the AMM/RMM and CMM as function of 𝜆𝜆CFU: i.e., the mean number of viable and culturable
microorganisms in the samples.

*[Figure 11.1.3-1 Agreement (%) Between the Alternative/Rapid Microbiological Method and]*

the Conventional Microbiological Method as a Function of the Mean Number of Viable and
Culturable Microorganisms
When there is hardly any contamination (e.g., below a mean of 0.5 CFU/sample) or there is substantial
contamination (e.g., above a mean of 3 CFU/sample), agreement between the non-CFU AMM/RMM and
the CMM is considered high: i.e., more than 80% agreement. However, for some practical settings,
agreement can drop substantially below 80%, particularly when the mean level of contamination in practice
is in the range of 0.5 to 3 CFU/sample. When one (or both) of the detection proportions 𝜃𝜃𝐶𝐶 and 𝜃𝜃𝐴𝐴 is low
(red and black lines), the level of agreement is immediately reduced compared to agreement for
microbiological methods with higher values of detection proportions (green and blue lines). Note that these
detection proportions are directly related to the LoD of the microbiological methods. Additionally, higher
ratios between the two components 𝑋𝑋NCFU and 𝑋𝑋CFU affects the agreement negatively (green versus blue
and red versus black). Thus, depending on the detection performance of the non-CFU AMM/RMM and the
ratio 𝑞𝑞= 𝜆𝜆NCFU/𝜆𝜆CFU of non-culturable and culturable viable microorganisms, decision equivalence may or
may not be attained across the full range of microorganism levels.

### 11.2 Quantitative Microbiological Methods with Non-CFU Signals

The statistical methods described in Section 10.0 (Appendix 2) are all applicable to AMM/RMMs with non-
CFU signals when it is known that the AMM/RMM enumerates test samples with almost only culturable
microorganisms. In case these conditions are not satisfied, it can be expected that AMM/RMMs would
enumerate more than CMMs when confronted with the same samples, similar to the discussion on
qualitative microbiological methods. Thus, for these situations it would be fair to test for superiority of the
AMM/RMM against the CMM. Section 11.2 will discuss some examples of how a non-CFU AMM/RMM

can be compared with a CMM when it is expected that the AMM/RMM would enumerate both culturable
and non-culturable microorganisms.

#### 11.2.1 Accuracy

Section 11.2.1 will analyze data of an accuracy experiment, where the number of microorganisms has been
enumerated at different spiked concentration levels (Table 11.2.1-1). Note that both methods tested
different samples from the same spiked suspension. The data is visualized in Figure 11.2.1-1.

**Table 11.2.1-1 Counts for a Specific Microorganism for the Alternative/Rapid Microbiological**

Method and Conventional Method at Different Concentration Levels
Replicate
Non-CFU AMM/RMM
CMM
Mean
3.5
5.7
9.2
14.3
33.3
63.0
1.3
3.2
7.8
13.5
27.2

## 56.0 Variance

5.9
2.7
19.4
7.1
58.7
48.8
1.1
3.8
3.8
5.9
45.0
47.2

*[Figure 11.2.1-1 Visualization of the Enumerations of the Alternative/Rapid Microbiological]*

Method and the Conventional Method for an Accuracy Experiment
Calculating the ratio or recovery of the mean counts of the non-CFU AMM/RMM with the mean counts of
the CMM with their lower 95% confidence limit, using a Poisson distribution (as already demonstrated in
Section 10.2.3), shows that superiority of the non-CFU AMM/RMM against the CMM cannot be
demonstrated on all spiked concentration levels (see Table 11.2.1-2). For three spiked concentration levels,
the lower 95% confidence limit is below the value one (1) (or 100% when percentages for the recovery are
used).

**Table 11.2.1-2 Recoveries of the Alternative/Rapid Microbiological Method versus**

Conventional Method per Concentration Level Using the Poisson Distribution
Spike
Mean % Recovery
LCL
262.5
132.5
179.0
111.7
117.0
84.4
106.2
82.3
122.7
103.2
112.5
99.5

On the other hand, the mean values of the AMM/RMM at the different spiked concentration levels are all
consistently above the mean values of the CMM. Under the null-hypothesis that the mean counts between
the two microbiological methods are equal at each spiked concentration level, i.e., 𝐻𝐻0:𝜇𝜇𝐴𝐴
𝑘𝑘= 𝜇𝜇𝐶𝐶
𝑘𝑘, 𝑘𝑘= 1, 2,
…, 6 (with 𝜇𝜇𝐴𝐴
𝑘𝑘 and 𝜇𝜇𝐶𝐶
𝑘𝑘 the mean counts at spiked concentration level 𝑘𝑘 for the AMM/RMM and CMM,
respectively), the probability that this consistent ordering of means occurs is only equal to 0.016 (one-sided
testing). This p-value is obtained with the sign test (i.e., using the Binomial distribution). An alternative
statistical test procedure, which is often seen as a more powerful test than the sign test, is the stratified
Wilcoxon ranked sign test (see chapter 6 in reference) or the Van Elteren test, where the spiked
concentration level is treated as a stratification variable (21, 22). The Van Elteren test provides a value of
21.65 for the test statistic and a p-value of 0.002. Unfortunately, not all general-purpose statistical software
packages have implemented the stratified Wilcoxon ranked sign test or the Van Elteren test, but the result
presented here is obtained with procedure NPAR1WAY of SAS.
Although the comparison of mean counts per spiked concentration level could not demonstrate superiority
in enumeration, the sign test and Van Elteren test indicate that enumeration with the AMM/RMM is on
average systematically or consistently higher than the CMM, implying that the AMM/RMM is superior to
the CMM on those spiked concentration levels. Note that there was no assumption made on the distribution
of the counts, which is often preferred over test statistics which require additional assumptions. However, an
alternative analysis is to use a Poisson regression analysis with the identify link function, where it is
assumed that the expected mean counts is a straight line of the spiked concentration level. For the non-CFU
AMM/RMM and the CMM it would then be assumed that:
AMM/RMM: 𝔼𝔼(𝑦𝑦|𝜆𝜆M) = 𝛼𝛼𝐴𝐴+ 𝛽𝛽෨𝐴𝐴(𝜆𝜆CFU + 𝜆𝜆NCFU) = 𝛼𝛼𝐴𝐴+ 𝛽𝛽෨𝐴𝐴(1 + 𝑞𝑞)𝜆𝜆CFU ≡𝛼𝛼𝐴𝐴+ 𝛽𝛽𝐴𝐴𝜆𝜆CFU
                             ≡𝑚𝑚𝐴𝐴(𝜆𝜆CFU)
CMM: 𝔼𝔼(𝑦𝑦|𝜆𝜆M) = 𝛼𝛼𝐶𝐶+ 𝛽𝛽𝐶𝐶𝜆𝜆CFU ≡𝑚𝑚𝐶𝐶(𝜆𝜆CFU)
Where:
𝔼𝔼(𝑦𝑦|𝜆𝜆M) =    expected count of a quantitative microbiological method of an arbitrary test
sample that is tested at the true concentration level 𝜆𝜆M = 𝜆𝜆CFU + 𝜆𝜆NCFU of
viable microorganisms
𝜆𝜆CFU
=  true concentration level of viable and culturable microorganisms
𝜆𝜆NCFU  =  true concentration level of viable but non-culturable microorganisms
𝛼𝛼𝐴𝐴
=  intercept of the linear concentration-response curve of the AMM/RMM
𝛼𝛼𝐶𝐶
=
intercept of the linear concentration-response curve of the CMM
𝛽𝛽𝐴𝐴
=
slope of the linear concentration-response curve of the AMM/RMM
𝛽𝛽𝐶𝐶
=  slope of the linear concentration-response curve of the CMM
𝑞𝑞
=
the ratio 𝜆𝜆NCFU/𝜆𝜆CFU when 𝜆𝜆CFU > 0 (as defined in Section 11.1.1 and 11.1.2)
Estimating the parameters of the linear concentration-response curves for both microbiological methods lead
to the following estimates with their 95% confidence intervals shown in Table 11.2.1-3.

**Table 11.2.1-3 Estimated Parameters of the Linear Concentration-Response Curve**

Method
Intercept
Slope
AMM/RMM
1.517 (0.338, 2.696)
0.952 (0.863, 1.041)
CMM
-0.280 (-1.176, 0.617)
0.878 (0.797, 0.960)
Both the intercept and the slope of the AMM/RMM are higher than the intercept and slope of the CMM,
indicating better enumeration across the range of spiked concentration levels and the difference in
enumeration increases with higher spiked concentration levels. To determine superiority using the Poisson
regression models, we can calculate the difference between the AMM/RMM and CMM and then calculate a
lower 95% confidence interval on this difference (similar to what was described in Section 10.2.3). The
difference between AMM/RMM and CMM has been calculated in this instance, and not the ratio, because a
difference fits better with the additive relation 𝛼𝛼+ 𝛽𝛽𝛽𝛽, while a ratio fits better with the multiplicative
relation 𝛼𝛼𝜆𝜆𝛽𝛽 used in earlier analyses (where the default log link function was used).
The lower 95% confidence limit on the difference is now defined by:
𝑚𝑚ෝ𝐴𝐴(𝜆𝜆) −𝑚𝑚ෝ𝐶𝐶(𝜆𝜆) −1.645ට𝜏𝜏̂𝐴𝐴
2(𝜆𝜆) + 𝜏𝜏̂𝐶𝐶
2(𝜆𝜆)
Where:
𝜏𝜏̂𝐴𝐴
2(𝜆𝜆)
=
estimated variance of the estimated mean count of the AMM/RMM
𝜏𝜏̂𝐶𝐶
2(𝜆𝜆)
=
estimated variance of the estimated mean count of the CMM
The variance of the estimated mean count is defined by:
𝜏𝜏2(𝜆𝜆) = VAR(𝛼𝛼ො) + 𝜆𝜆CFU
VAR൫𝛽𝛽̂൯+ 2𝜆𝜆CFUCOV൫𝛼𝛼ො, 𝛽𝛽̂൯

*[Figure 11.2.1-2 shows the estimated mean difference between the two microbiological methods with the]*

lower 95% confidence limit. It demonstrates that the mean difference between the non-CFU AMM/RMM
and CMM increases with spiked concentration level, as we already mentioned, and that the lower 95%
confidence limit stays above the value “0” across the full range of spiked concentration levels. This last
result implies that the AMM/RMM is superior to the CMM in enumerating microorganisms across the range
of 2 to 64 CFUs.
In Figure 11.2.1-2 the left graph is a visualization of the mean difference in enumerations between the non-
CFU AMM/RMM and CMM with a lower 95% confidence limit as function of the spiked concentration.
The right graph is a prediction of CFUs based on the average count of the non-CFU AMM/RMM together
with the observed counts of the CMM and 95% prediction limits (which is explained in Section 11.2.2).

*[Figure 11.2.1-2 Estimated Mean Difference Between the Two Methods with Lower 95%]*

Confidence Limit

#### 11.2.2 Predicting the Counts of the Conventional Method Based on the Non-CFU

Alternative/Rapid Microbiological Method Signal
Based on the linear relations, the mean count of the CMM as function of the mean count of the AMM/RMM
may be predicted, assuming that the ratio of viable and culturable microorganisms with respect to the non-
culturable microorganisms is the same in practice as in the validation experiment. The prediction equation
for the range of spiked concentration levels 2 to 64 CFU’s is equal to:
𝛼𝛼ො𝐶𝐶−ቆ𝛽𝛽̂𝐶𝐶
𝛽𝛽̂𝐴𝐴
ቇ𝛼𝛼ො𝐴𝐴+ ቆ𝛽𝛽̂𝐶𝐶
𝛽𝛽̂𝐴𝐴
ቇ𝑦𝑦ത𝐴𝐴,
with 𝑦𝑦ത𝐴𝐴 an average count of multiple samples for the non-CFU AMM/RMM. Based on the estimates from
the previous Poisson regression models, we obtain the following equation:
−1.679 + 0.923𝑦𝑦ത𝐴𝐴
This prediction is visualized in Figure 11.2.1-2 on the right-hand side, together with the observed counts of
the CMM. Note that this Poisson regression model could also be directly obtained by considering the counts
of the CMM as Poisson distributed and considering the average counts of the non-CFU AMM/RMM as
independent variable.
Based on the Poisson distribution, 95% prediction intervals can be calculated. Such intervals would indicate
a range of individual counts around the prediction function that would be obtained for the CMM with 95%
confidence given the average value of the non-CFU AMM/RMM.

The limits of the prediction interval can be approximated by using:
−1.679 + 0.923 𝑦𝑦ത𝐴𝐴± 2ඥ−1.679 + 0.923 𝑦𝑦ത𝐴𝐴
but at lower average values of the non-CFU AMM/RMM, the approximation may not be as accurate and it
would be better to use the quantile of the Poisson distribution.
The 95% prediction interval is depicted in Figure 11.2.1-2 as well. It has a stepwise shape, since the Poisson
distribution is a discrete distribution, resulting in integer values for the prediction limits. Thus, when the
average number of microorganisms with the non-CFU AMM/RMM is equal to 6, the expected average
number of CFUs in the test samples is equal to 3.86 CFU. Furthermore, 95% of the test samples will have a
CFU value that is within the lower 97.5% prediction limit of 1 and an upper 97.5% prediction limit of 8
CFU.

#### 11.2.3 Translating a CFU Upper Limit to an Upper Limit for the Non-CFU

Alternative/Rapid Microbiological Method
To determine the most likely range of possible counts for the AMM/RMM, conditionally on a given test
result of the CMM for the same sample, would be ideal. With this information, a CFU upper limit with the
CMM could be translated to an upper limit for the non-CFU AMM/RMM. This would guarantee decision
equivalence when using the results from the non-CFU AMM/RMM compared to the CMM. However, such
conditional probabilities can only be conducted by making (potentially) untestable and strict assumptions.
Indeed, when the CMM obtains a specific count for a sample, the AMM/RMM can potentially enumerate
any unlimited value, because the signal for viable but non-culturable microorganisms in the sample is not
determined by the results of the CMM. Thus, how the viable culturable signal is related to the viable but
non-culturable signal needs to be known, which often is not the case. Additionally, how well the two
microbiological methods enumerate microorganisms also needs to be known, which is not so trivial either.
For instance, a count of one CFU with the CMM, does not mean that the sample contains one
microorganism or even one CFU because the CMM may be imperfect and could miss enumerating viable
culturable microorganisms. Finally, to connect an observed count for a sample from the AMM/RMM given
the result of the CMM on the same sample, samples with both microbiological methods in the validation
study would need to be tested, which is in most situations not possible (i.e., the same test sample replicate
must be analyzed in both methods; independent replicates from a test sample composite would not work).
Therefore, the only practical manner that can be considered when translating a CFU upper limit to an upper
limit for signals from the non-CFU AMM/RMM is to apply the approach from Section 11.2.2 and:
1. predict results for AMM/RMM based on an average number of the CMM
2. understand how the probability of enumeration within the upper limit for the CMM and
AMM/RMM align to arrive at decision equivalence. This is not the same as providing the range of
counts for the AMM/RMM given the CMM has produced a single count of a test sample, but it is a
good alternative for this conditional probability.

Assuming that the ratio of the non-culturable signal and culturable signal in routine practice is the same as in
the validation experiment, the prediction equation for the average count of the AMM/RMM given an
average count of the CMM is given by:
𝛼𝛼ො𝐴𝐴−ቆ𝛽𝛽̂𝐴𝐴
𝛽𝛽̂𝐴𝐴
ቇ𝛼𝛼ො𝐶𝐶+ ቆ𝛽𝛽̂𝐴𝐴
𝛽𝛽̂𝐴𝐴
ቇ𝑦𝑦ത𝐶𝐶= 1.213 + 1.084𝑦𝑦ത𝐶𝐶
with 𝑦𝑦ത𝐶𝐶 a given average count. Now the same approach can be used as in the previous section, since the
equation can be used to translate the upper limit for the CFU signal to an upper limit for the signal of the
non-CFU AMM/RMM when the average results from many test samples are used. Thus, when the upper
limit for the CFU is equal to 1 for the average of many test samples, the upper limit for the non-CFU
AMM/RMM becomes 2.297 (= 1.213 + 1.084 · 1) for an average of many samples with the non-CFU
AMM/RMM. Or if the upper limit on CFU is 5, the upper limit for the non-CFU AMM/RMM becomes
6.633 (= 1.213 + 1.084 · 5), again when averages can be used. Thus, the calibration equation easily
translates the CFU upper limit to an upper limit for non-CFU microbiological methods.
It is less easy to translate the CFU upper limit to a non-CFU signal when a decision must be made on a
single enumeration. The probability of enumeration below the upper limit for the CMM to the probability of
enumeration below the translated upper limit for the non-CFU AMM/RMM should then be mapped. If the
upper limit for a single count with the CMM is 1, it needs to be decided if the upper limit for the non-CFU
AMM/RMM is going to be equal to 2 (rounding the value 2.297 down) or 3 (rounding the value 2.297 up),
because a value of 2.297 cannot be used as an upper limit for a single count. Similarly, if the upper limit for
the CMM is 5, it needs to be decided if 6 or 7 is used as the upper limit for the AMM/RMM (rounding 6.633
down or up). In more general terms, if the upper limit for the CMM is 𝑈𝑈𝐶𝐶, it needs to be determined if the
upper limit for non-CFU AMM/RMM is equal to the largest integer 𝑈𝑈𝐴𝐴 below the calibration equation 1.213
+ 1.084𝑈𝑈CMM or the lowest integer 𝑈𝑈𝐴𝐴+ 1 value above the calibration equation 1.213 + 1.084𝑈𝑈C.
To make this choice, both the probability that the CMM tests below the upper limit 𝑈𝑈𝐶𝐶 and the non-CFU
AMM/RMM tests below the upper limit 𝑈𝑈𝐴𝐴 or below the alternative upper limit 𝑈𝑈𝐴𝐴 + 1 given a specific
average contamination needs to be calculated. This can be done for any level of contamination prior to
comparing the probability curves. Figure 11.2.3-1A and Figure 11.2.3-1B below shows the probability
curves for 𝑈𝑈𝐶𝐶 equal to 1, 5, 10, and 100 assuming that the calibration model is given by 1.213 + 1.084𝑦𝑦ത𝐶𝐶.
The dotted line in Figure 11.2.3-1A and Figure 11.2.3-1B is the probability that the CMM tests below the
upper limit 𝑈𝑈𝐶𝐶. The ideal case is that the probability curve for the AMM/RMM to test below the translated
upper limit (either 𝑈𝑈𝐴𝐴 or 𝑈𝑈𝐴𝐴 + 1) would fall exactly on top of the probability curve for the CMM.

*[Figure 11.2.3-1A Probability Curves for the Alternative/Rapid Microbiological Methods for]*

Testing a Single Sample Below the Translated Upper Confidence Limit (U_CMM = 1 (left);
U_CMM = 5 (right))

*[Figure 11.2.3-1B Probability Curves for the Alternative/Rapid Microbiological Methods for]*

Testing a Single Sample Below the Translated Upper Confidence Limit (U_CMM = 10 (left);
U_CMM = 100 (right))

For the highest CFU upper limit (𝑈𝑈𝐶𝐶 = 100) it can be seen that the two probability curves for the non-CFU
AMM/RMM testing below 𝑈𝑈𝐴𝐴 = 109 or 𝑈𝑈𝐴𝐴 = 110 are both very close to the probability curve that the CMM
tests below 𝑈𝑈𝐶𝐶 = 100, but using the upper limit of 𝑈𝑈𝐴𝐴 = 110 for the non-CFU AMM/RMM seems slightly
closer to the probability curve of the CMM testing below 𝑈𝑈𝐶𝐶 = 100. This means that there is decision
equivalence between a CMM and non-CFU AMM/RMM. The probability of testing a single test sample
below 100 with the CMM is almost identical to the probability of testing within 110 with the non-CFU
AMM/RMM.
When the CFU upper limit is 𝑈𝑈𝐶𝐶 = 10, it is better to choose an upper limit for the non-CFU AMM/RMM of
𝑈𝑈𝐴𝐴 = 12, a value below the calibration of 12.053 (= 1.213 + 1.084 · 10) for the non-CFU AMM/RMM than
an upper limit of 13, which is just above the calibration value of 12.053.
For a CFU upper limit of 𝑈𝑈𝐶𝐶 = 5 with the CMM, it would be better to round the calibration value of 6.633
up to 7 to obtain the best, or more conservative, decision equivalence. Using an upper limit of 7 for the non-
CFU AMM/RMM provide reasonably similar acceptance probabilities.
When the CFU upper limit for a single enumeration is equal to 𝑈𝑈𝐶𝐶 = 1, the two probability curves for the
non-CFU AMM/RMM using either an upper limit of 2 or 3, do not resemble the probability curve of the
CMM with upper limit of 𝑈𝑈𝐶𝐶 = 1 (the two colored curves are away from the dotted curve in the top left
figure in Figure 11.2.3-1). This implies that there is most likely going to be a lack of decision equivalence
between the non-CFU AMM/RMM (with either upper limit 2 or 3) and the CMM (with upper limit 1) in
making decisions against the upper limit.
If an upper limit of 2 with the AMM/RMM (red probability curve) is used, it can be seen from the Figure
11.2.3-1 that when the probability of the CMM testing below the upper limit of one is high (say 90% on the
horizontal axis), the probability of testing below the upper limit of 2 with the non-CFU AMM/RMM
remains low (around 60%). This indicates that the non-CFU AMM/RMM will more likely obtain a single
count at the upper limit of 2 or higher, while the CMM will hardly ever obtain a count at the upper limit of
one or higher when testing the same set of samples. This means that samples that would be within the upper
limit with the CMM may not be within the upper limit for the non-CFU AMM/RMM and the sponsor may
unnecessary test too frequently above the upper limit of 2. When the upper limit of 3 is used with the non-
CFU AMM/RMM, an opposite issue occurs. When it is likely that the CMM would provide test results at
the upper limit of one or higher, the non-CFU AMM/RMM will not likely detect single counts at the upper
limit of 3 or higher. Indeed, if the probability of testing below the upper limit with the CMM on the
horizontal axis is, for example, 20%, the probability that the CMM will enumerate at the upper limit of 1 or
higher is 80%. The probability that the non-CFU AMM/RMM will test at three or higher is only 50%, and
much less likely to detect values outside the upper limit. Thus, translating the upper limit of one for the
CMM to an upper limit for the non-CFU (either two or three) would most likely not result in decision
equivalence. If a choice has to be made, the sponsor needs to choose between too frequent incorrect single
counts beyond the upper limit of 2 or too frequent incorrect single counts within the upper limit of 3 with the
non-CFU AMM/RMM.

## 2.0 Glossary

Definitions have been provided to help clarify
the concepts discussed in this document. While
some definitions used vary among companies,
geographic location, etc., the definitions
described below are consistently used within this
technical report document. Where a definition is
based on another published source, the source is
cited.

Accuracy
A Closeness of the test results or measurement
response obtained by the AMM/RMM to a
known value obtained by the CMM or a
reference material appropriate for the method, to
be demonstrated across the dynamic
(operational) range of the method. Accuracy is
usually evaluated in quantitative methods.
Activation
Incubation of sample to be tested (typically) in
liquid-nutrient media in order to (re)activate the
metabolism of the viable microorganisms
(contaminants), including spores that may be
present in the sample. Proliferation of the viable
microorganisms (contaminants) that may be
present in the sample should be avoided because
it may overestimate the cell number when
conducting microbial enumeration.
Note: Also known as Activation Phase or
Activation Step.
Alternative or Rapid Microbiological Methods
(AMM/RMM)
Methods that differ from the CMM (e.g., USP
General Notice 6.30). These AMM/RMMs use
technology that differs in measurement end
points, automation, and software for managing
testing processes and analyzing the resulting
quantitative, qualitative, and microbial
identification data. Such AMM/RMMs must
undergo full validation and demonstrate
comparable results to the CMMs within
acceptable limits, established on a case-by-case
basis.
Note: Within TR 33, the terms "alternative
method," "rapid microbiological method," and
"rapid method," are addressed as
interchangeable terms and are represented by the
acronym “AMM/RMM”.
Analytical Quality by Design (AQbD)
Approach that aims to ensure the quality of a
product by employing statistical, analytical, and
risk-management methodology in the design,
development, and manufacturing of medicines.
Artificial Intelligence (AI)
A scientific discipline established at the
intersection of computer science, applied
mathematics, and engineering, and dedicated to
the development of systems capable of
performing tasks traditionally requiring human
intelligence. From a functional perspective, AI
can be defined as the simulation or
approximation of human intelligence in
machines. AI encompasses machine-driven
learning, reasoning, and perception, and is
widely used across various industries, including
finance and life sciences.

Automation
The use of technology to improve the efficiency,
accuracy, and reproducibility of processes. By
replacing manual work with automation, it
increases productivity, reduces errors, and
ensures more consistent results, while also
speeding up turnaround times.
Biomarker
A measurable characteristic or molecule that
indicates the presence, activity, or identity of
microorganisms in a specific environment or
sample.
Colony-Forming Unit (CFU)
One or more viable microorganisms that
produce a visible, discrete growth entity on a
semisolid, agar-based microbiological medium
and under conditions of incubation and is used
as the basis for quantitative enumeration (e.g.,
CFU/g or mL).
Comparability
Demonstration that the qualitative or
quantitative detection of microorganisms, related
analyte, or measurement response in the
AMM/RMM is equivalent, non-inferior or not
statistically different than the detection of
microorganisms in the existing test method,
depending on the statistical method used to
compare the data.
Conventional Microbiological Method (CMM)
A classical or traditional growth-based method,
such as enumeration on an agar plate or
detection in a liquid broth when incubated for a
specified time and temperature. These methods
are used in USP 〈51〉, 〈60〉, 〈61〉, 〈62〉, 〈63〉, and
〈71〉 which are harmonized with the Japanese
Pharmacopoeia (JP) and European
Pharmacopeia (EP) pharmacopeial procedures.
Note: Throughout this document the term
“conventional” is used and is understood to
mean compendial, classic, existing, or
traditional.

Equivalence
When the test results from two procedures are
sufficiently similar for their intended purpose;
demonstrating equivalence necessitates a
predefined criterion for the level of similarity
required. This evaluation generally involves a
comparability testing study that produces
comparative data, the test results of which are
then subjected to statistical analysis.
Exclusivity
The capacity of an assay to differentiate a non-
target microorganism from a target
microorganisms.
False Negative
A test result that is incorrectly determined as
negative (e.g., the absence of a viable microbial
detection result when viable microorganisms are
present).
False Positive
A test result that is incorrectly determined as
positive (e.g., a viable microbial detection result
when viable microorganisms are not present).
In-Line Measurements
Measurements taken within the process stream
by placing measuring devices, typically sensors,
directly in contact with or into the process
stream. No portions of the material are therefore
removed from the process stream.
Measurements must also be nondetrimental to
the product. Measurements can be obtained in
real time or close to real time.
Independent Samples (Determinations)
Samples selected from the same population or
different populations that have no effect on one
another, that is, no correlation exists between the
samples.
Inclusivity
The ability of an assay to detect a target
microorganism.

Intermediate Precision
Use of the AMM/RMM applied to different
sample preparations tested in the same
laboratory under conditions of maximum
variability (e.g., different analysts, different
reagents, different equipment (if available)
and/or testing on different days).
Installation Qualification (IQ)
Provides documented evidence that the
equipment is received as designed and specified,
that it is properly and safely installed with the
correct utilities in the selected environment, and
that the environment is suitable for the operation
and use of the equipment.
Laboratory Information Management System
(LIMS)
Software-based solution with features that
support a modern laboratory’s operations by
managing data related to sample experiments
and instruments.
Limit of Detection (LoD)
The lowest concentration of microorganisms,
related analyte, or measurement response in a
test sample that can be reliably detected, but not
necessarily quantified, under defined
experimental conditions.
Note: Can be referred to as sensitivity.
Limit of Quantification (LoQ)
The lowest number of microorganisms, related
analyte, or measurement response in a test
sample that can be enumerated with acceptable
accuracy and precision under defined
experimental conditions.
Linearity
The ability to produce results that are
proportional to the concentration of
microorganisms present, related analyte, or
measurement response in the sample within a
given range.
Machine Learning (ML)
A specialized branch of artificial intelligence
(AI) that utilizes algorithms and statistical
models to process data, generate insights, make
predictions, and provide recommendations
within complex datasets. In the pharmaceutical
industry, ML identifies patterns, trends, and
anomalies within complex datasets derived from
drug discovery, clinical trials, manufacturing,
regulatory compliance, pharmacovigilance, and
patient outcomes.
Method Suitability
Demonstration of a lack of enhancement or
inhibition by the product on the signal generated
by the method.
Microbial Identification
The identification of a microbial isolate to genus
or species level.
Next-Generation Sequencing (NGS)
A group of technologies that allows thousands to
billions of DNA fragments to be simultaneously
and independently sequenced.
Note: Also known as high-throughput or massive
parallel sequencing.
Non-Inferiority
The hypothesis-testing framework used to
demonstrate empirically that the AMM/RMM is
not unacceptably worse on a specific feature
(e.g., detection or decision-making) than the
CMM by using a pre-specified non-inferiority
margin.
On-Line Measurements
Sensor-based measurements made under real-
time conditions by diverting a portion of the
material from the process stream directly into a
measuring device and the results are made
available after a minimal time delay.
Depending on the nature of the test, for example,
whether or not it is detrimental to the product,
the diverted portion may be returned to the
process stream; otherwise, it is discarded.
Note: Also referred to as “real-time
measurements.”

Operational Qualification (OQ)
Provides documented verification that the
equipment, as installed in the selected
environment, performs effectively and
reproducibly as intended throughout the
anticipated or representative operational ranges,
defined limits and tolerances. The OQ is also the
focal point for the majority of the computer
system, software and security validation
activities.
Performance Qualification (PQ)
Provides documented evidence that the
instrumentation, as installed, (and the method if
applicable) consistently performs in accordance
with predetermined criteria and thereby yields
correct and appropriate results.
Precision
The degree of agreement among individual test
results as demonstrated by repeatability,
intermediate precision (ruggedness) or
reproducibility.
Primary Validation
Validation usually performed by the supplier,
typically in the absence of a test sample,
demonstrating that the system or technology is
adequate in detecting the intended target.
Process Analytical Technology (PAT)
A system that allows for the design, analysis,
and control of manufacturing through real-time
QC and performance attribute measurements.
Qualification
A generic term defining the activity of
confirming the successful achievement of
defined prerequisites required for validation.
Note: In TR 33, this term is applied to the
training of personnel and the commissioning of
process equipment. (See IQ, OQ, PQ.)
Quality
The degree to which a product, system, or
process consistently fulfills established
requirements and is suitable for its intended use.
Quality by Design (QbD)
Framework enabling the attainment of the
desired state; a systematic approach to
development that begins with predefined
objectives and emphasizes product and process
understanding and process control based on
sound science and quality risk management.
Quality Risk Management (QRM)
A systematic process for the assessment, control,
communication, and review of risks to the
quality of the drug product across the product
lifecycle.
Range
The interval between the upper and lower levels
of microorganisms, related analyte, or
measurement response that have been
demonstrated to be determined with accuracy,
precision, and linearity.
Repeatability
Degree of agreement among individual test
results when the procedure is applied repeatedly
to multiple samplings under the same operating
conditions.
Reproducibility
The precision among multiple laboratories (i.e.,
collaborative studies, usually applied to
standardization of methodology).
Risk
The combination of the probability of the
occurrence of harm and the severity of that
harm.
Risk Assessment
A systematic process of organizing information
to support a risk decision to be made within a
risk management process. It consists of the
identification of hazards and the analysis and
evaluation of risks associated with exposure to
those hazards.

Robustness
A method’s capacity to remain unaffected by
small but deliberate variations in method
parameters while providing an indication of its
reliability during normal usage.
Ruggedness
The degree of intermediate precision or
reproducibility of test results obtained by
assessing the same samples under a variety of
normal test conditions.
Severity
A measure of the possible consequences of a
hazard.
Specificity
The ability of an analytical procedure to
accurately measure or detect the required range
of microorganisms that may be present in the
sample under test.
Superiority
The ability to outperform the conventional or
existing method in terms of detection (i.e.,
presence or absence of the targeted
microorganisms) or enumeration (i.e., microbial
count of viable microorganisms) including a
reduced time to results.
Note: The superiority may be so obvious that a
statistical comparison would not be necessary.
Time to Result (TTR)
Time required to complete testing and obtain a
result that can be used to support a conclusion
regarding potential contamination of the sample
test.
Validation
Demonstrating and documenting that the
instrumentation as installed (and the method if
applicable) functions effectively and is
appropriate for its intended purpose. Formal
validations are conducted prospectively
following a written plan that includes justifiable
acceptance criteria for the validation procedures.
Verification
Verification involves applying the required
analytical performance characteristics outlined
in the primary method validation to obtain
reliable data for specific sample types,
environments, or equipment, rather than
duplicating the validation process.

### 2.1 Abbreviations

ANOVA Analysis of Variance
AMM*
Alternative Microbiological Method
ATMP
Advanced Therapy Medicinal Products
ATP

Adenosine Triphosphate
BFPC
Biofluorescent Particle Counters
CFU

Colony-Forming Units
CMM
Conventional Microbiological Method
EM

Environmental Monitoring
FT-IR
Fourier-Transform Infrared
Spectroscopy
GMP
Good Manufacturing Practice
gMPN
Generalized Most Probable Number
IQ

Installation Qualification
LIMS
Laboratory Information Management
System
LoD

Limit of Detection
LoQ

Limit of Quantification
MALDI-  Matrix-Assisted Laser
TOF MS Desorption/Ionization Time-of-Flight
Mass Spectrometry
MPL
Most Probable Limit
MPN
Most Probable Number
NADH
Nicotinamide Adenine Dinucleotide
plus Hydrogen
NAT

Nucleic Acid Amplification
Techniques
OOT
Out-of-Trend
OQ

Operational Qualification
POC

Proof of Concept
PCR

Polymerase Chain Reaction
PQ

Performance Qualification
QC

Quality Control
QRM
Quality Risk Management
RMM*
Rapid Microbiological Method
TTR

Time to Result
UV

Ultraviolet
VBNC
Viable but Nonculturable

*Note: In this document, the abbreviation AMM/RMM is used to indicate that both AMMs and RMMs are
being discussed.

## 3.0 Conventional Microbiology and the Move Toward

Alternative/Rapid Microbiological Methods
For decades, conventional techniques such as culture-based methods and microscopy have been used in
pharmaceutical microbiological QC laboratories to assess the quality of pharmaceutical products. Many of
these methods are still an essential component of regulatory guidance documents (e.g., pharmacopeias).
However, technological advancements have ushered in a new era where AMM/RMMs, using alternative
readout-technologies and molecular biology tools, are revolutionizing the way microbiologists assess the
quality of pharmaceutical products. Section 3.0 provides an overview of what aspects should be considered
when implementing AMM/RMMs.

### 3.1 Conventional Microbiological Methods

Conventional pharmaceutical microbiology methods are comparatively simple growth-based techniques
encompassing little technology and are limited in their scope of detection. These methods for the detection,
enumeration, or identification of bacteria, yeast, and mold are applicable to sterility testing, antimicrobial or
preservative effectiveness testing, environmental monitoring (EM), in-process control and/or raw material(s)
bioburden monitoring, finished product enumeration and specified organisms, presence/absence testing
including aseptic process simulation, bioburden testing of pharmaceutical-grade water and gases, and
microbial identification. Biopharmaceutical production processes based on the use of cell cultures also
require the industry to test for the presence of other adventitious microbiological agents such as viruses and
mycoplasma in cell sources (cell banks), production-cell cultures, in-process samples, or finished products.
Each of these growth-based techniques have primarily relied on basic microbiological media for culturing
(e.g., bioburden, presence/absence testing relying on trypticase soy broth/agar for aerobic bacteria,
Sabouraud’s dextrose broth/agar for fungal growth, and fluid thioglycolate medium for anaerobic
microorganisms, and Haylfick, Frey or Friis media for mycoplasma detection). These media have provided
the basis for qualitative and quantitative microbial assays for microbial safety and quality product release,
validation of in-process microbial tests, and sterilization validation for pharmaceuticals and medical devices
in the 20th century. The accuracy and precision of these CMM are affected by the distribution of
microorganisms in the test samples, cellular arrangement, available sample volume, the method itself
including the media (supplier and/or quality of individual components), and the ability of microorganism
growth.
Although the growth of microbial cells on agar surfaces or in liquid media provides the laboratory with
critical information about the amount and type of organisms that may be present in a sample under
evaluation, the time to result (TTR) is usually longer than desired. Days may elapse before microbial
colonies are visually detected and, in many cases, confluent growth on agar plates prevents individual
organisms from being isolated, necessitating their subculture onto additional agar media, delaying the TTR
even further. This delay may hamper the industry in making timely forward-processing or good

manufacturing practice (GMP) release decisions, in timely investigations of events, and in support of
confirming that manufacturing processes are in a microbiological state of control.
Additionally, environmental factors can affect the ability of microorganisms to replicate when cultured on
microbiological media. These factors include stress due to nutrient deprivation or exposure to sublethal
concentrations of antimicrobial agents such as preservatives, disinfectants, heat, or decontaminating gases.
Furthermore, certain pharmaceutical manufacturing processes can impact microorganisms. As a result of
any of these stressors, the physiologically injured microorganisms might not replicate when cultured on
microbiological media, because the media and/or incubation parameters may not be optimal for the
resuscitation and subsequent proliferation of organisms that may be present. The inability of stressed
microorganisms, or even nonstressed microorganisms, to grow in microbiological media has also been
termed viable but nonculturable (VBNC). Additionally, when microorganisms experience unfavorable
growth conditions, it can induce some cells into dormancy, and these cells will not grow. VBNC and
dormancy states are further discussed in the public literature (7, 8).
For these reasons, and to mitigate the limitations of CMMs as outlined in Section 3.0, the QC
microbiological laboratory should look toward developing innovative approaches for the collection,
detection, quantification, and identification of microorganisms to take advantage of emerging technologies.
From a quality risk management (QRM) perspective, the pharmaceutical/biopharmaceutical industry can
benefit from implementing AMM/RMM testing to:
•
Improve TTR for time-sensitive products (e.g., ATMPs, compounded drugs, nuclear medicine
products, short-shelf-life or immediate-medical-need products, response to public health
emergencies)
•
Design and continuously improve robust processes that prevent contamination
•
Ensure that a state of microbial control is maintained
•
Develop strategies with earlier detection of contamination for faster investigation resolutions
•
Monitor manufacturing environments, utilities, or processes to detect adverse microbiological
trends or contamination in real time to avoid processing at risk
•
Improve data integrity
•
Evaluate appropriate sampling points for process improvement
Quality risk management principles are recommended by a number of quality and regulatory industry guides
that have a direct impact on microbiological monitoring and control, for example, the European
Commission’s Annex 1: Manufacture of Sterile Medicinal Products, EudraLex-Volume4-EU Guidelines for
Good Manufacturing Practice for Medicinal Products for Human and Veterinary Use (2022) (EU GMP
Annex 1) (9). Other examples are FDA’s Pharmaceutical cGMPs for the 21st Century—A Risk-Based
Approach and Guidance for Industry: Process Analytical Technology, A Framework for Innovative
Pharmaceutical Development, Manufacture, and Quality Assurance, which implies that using a scientific
framework to find ways of mitigating risk while facilitating continuous improvement and innovation in
pharmaceutical manufacturing is a key public health objective (10, 11). Implementation of AMM/RMM, as
described in USP General Chapter ⟨1071⟩ Rapid Microbial Tests for Release of Sterile Short-Life Products:
A Risk-Based Approach, supports the medical and quality needs of time-critical patient therapies (12).
These initiatives further promote the use of the latest scientific advances in manufacturing and technology,
and this can apply to the implementation of AMM/RMMs and testing strategies.

### 3.2 Introduction to Alternative/Rapid Microbiological Methods

AMM/RMMs are based on a wide variety of scientific principles and can be used for a number of testing
applications (13). Technologies can detect the presence of diverse types of microorganisms or a specific
microbial species (qualitative), enumerate the number of microorganisms present in a sample (quantitative),
or identify microbial cultures to the genus, species, and strain levels. The manner in which microorganisms
are detected, quantified, or identified will depend on the specific technology, procedures, and/or
instrumentation employed. Additionally, a number of these methods are considered to be more sensitive,
accurate, precise, and reproducible, with improved data integrity, when compared with conventional,
growth-based methods. Some methods are fully or semiautomated, offer increased sample throughput and
less analyst hands-on time, provide significantly reduced TTR (e.g., from days to hours or minutes) and, for
a few technologies, afford results in real-time. A more thorough review of technology platforms and the
science behind these methods is provided in Section 4.0.

### 3.3 Regulatory Perspectives

AMM/RMMs have been understood, accepted, and encouraged by regulatory authorities in numerous
regions across the globe (14). Various regulatory agencies, including the United States, Europe, and Japan,
have developed written guidance on the validation and implementation of AMM/RMM. Regulators will
generally accept a change in testing procedure if the change has been proven to be comparable to, superior
to, and/or noninferior to the CMMs currently in place. While TR 33 contains recommendations for the
validation studies to demonstrate acceptability of the AMM/RMM, the final decision on acceptance may be
made by the affected regulatory agencies, for example, if the CMM is incorporated in a previously approved
regulatory dossier. However, there are also instances where a formal regulatory submission may not be
necessary, but validation would be expected and may be assessed during site inspection, especially for test
samples that would not necessarily require a formal submission (e.g., in-process, raw material, water, EM
samples) (15). In order to develop an appropriate strategy for the validation and implementation of these
methods, it is important to fully understand the current regulatory expectations and specific details of the
associated product dossier. Therefore, it is highly recommended that an open dialogue between the
interested parties (i.e., the firm intending to implement the AMM/RMM and the relevant regulatory
authority) be initiated early in the planning process. This dialogue can include discussions about the
proposed method, impacted products, validation approach, and acceptance criteria, as well as regulatory
submission requirements. Additionally, in current practice, this dialogue has been very helpful and has
enabled the potential AMM/RMM users to move forward with greater assurance that they will be successful
in gaining regulatory approval, when required.
A variety of different perspectives exist on AMM/RMM validation and submission strategies, depending on
the regulatory body with which a firm’s products are registered, and/or which local inspectorate is
responsible for conducting GMP audits at a firm’s manufacturing facilities. Sections 3.3.1–3.3.5 summarize
the most current regulatory expectations for validation, submission, and implementation; however, it is
always recommended to monitor any regulatory updates or changes in this area, as appropriate.
Note: If and when a new technology becomes a conventional test, prior approval may not be required for
the test. Firms should follow the directions in the conventional pharmacopeial chapters to demonstrate a
test’s suitability for use.

#### 3.3.1 United States

The FDA has been accepting AMM/RMMs for several years, and this position is echoed in a variety of
guidance documents and quality initiatives. For example, FDA’s Guidance for Industry: Sterile Drug
Products Produced by Aseptic Processing – Current Good Manufacturing Practice recommends the use of
rapid genotypic methods for microbial identification, as these methods have been shown to be more accurate
and precise than biochemical and phenotypic techniques. The guidance also states that these methods are
especially valuable for investigations into significant microbiological adverse events, such as sterility test
failures and contaminated media fills. In addition, it confirms that other suitable microbiological tests (e.g.,
AMM/RMMs) can be considered for EM, in-process control testing, and finished-product release testing
after it has been demonstrated that these new methods are comparable or better than CMM (16).
In 2012, FDA's Center for Biologics Evaluation and Research amended 21 CFR 610.12 General Biological
Products Standards: Sterility, to allow the use of new sterility test methods that yield accurate and reliable
test results (17). In 2020, the Center published the Guidance for Industry: Chemistry, Manufacturing, and
Control (CMC) Information for Human Gene Therapy Investigational New Drug Applications (INDs),
where alternate sterility tests may be acceptable for certain types of products administered fresh or with
limited hold time between final formulation and patient administration (18).
A separate FDA initiative known as the Strategic Plan for Regulatory Science (2011), calls for the
development of sensitive, rapid, and high-throughput methods to detect, identify, and enumerate microbial
contaminants and validate their utility in assessing product sterility (19).
The FDA has multiple pathways to facilitate formal meetings for drug products under the Prescription Drug
User Fee Act (PDUFA), Generic Drug User Fee Act (GDUFA), Medical Device User Fee Act (MDUFA),
or Biosimilar User Fee Act (BsUFA) (20-23). Another pathway is Type-C meetings which are commonly
used for pre-submission alignment or marketed product changes related to ARMM to de-risk the validation
strategy and obtain written feedback. INitial Targeted Engagement for Regulatory Advice on Center for
Biologics Evaluation and Research/Center for Drug Evaluation and Research (CBER/CDER) ProducTs
(INTERACT) meetings are appropriate for pre-IND stage discussions on ARMM/RMM. To facilitate an
effective meeting, include a clear statement of intent, a list of specific questions, an assessment of
product/patient risk, a proposed validation strategy and a feasibility data set. One notable limitation of these
meeting pathways is that they must be related to an application. Another useful pathway that exists in FDA
for truly novel methods is the Emerging Technology Program, which is a collaborative program between the
Agency and industry representatives to facilitate discussion of potential regulatory issues prior to
implementation of a new technology (24).
Finally, the Agency recognizes that examining the suitability of an AMM/RMM may necessitate the use of
the technology on production equipment and processes. The Guidance for Industry PAT - A Framework for
Innovative Pharmaceutical Development, Manufacturing, and Quality Assurance provides advice to
stakeholders on this topic, including that such activities can take place without prior notification to the
Agency, that data collected using experimental tools should be considered as research data, and that studies
conducted in production facilities be managed under the facility’s quality system (11).
The FDA suggests that USP ⟨1223⟩, Ph. Eur. Chapter 5.1.6, or PDA TR 33, be used as primary resources for
the selection, validation, and implementation of AMM/RMMs (11). Additionally, many firms have
successfully used the FDA Comparability Protocol (CP) as a means to manage the validation plan.
Submitting a FDA CP for pre-approval review is another avenue to gather FDA feedback on a post-approval

change, though this pathway does not allow for discussion so it is useful when changing to a well-known
ARMM/RMM method with a straightforward validation plan. Briefly, the CP is a regulatory submission
(typically, a prior approval supplement) that contains a validation protocol for the AMM/RMM. The CP
describes the proposed validation studies and the acceptance criteria to be met to demonstrate that the
alternate method is acceptable. Once the CP has been approved, the applicant can use the protocol in the CP
to validate the AMM/RMM for its intended use. The CP can be particularly useful for changes of a
repetitive nature, such as the use of an AMM/RMM for multiple products or processes. Moreover, because
the CP is reviewed by the FDA, the agency feedback can inform any required changes to the validation plan
or approach prior to execution and therefore eliminating potential re-work. For more information on CPs,
the guidance “Comparability Protocols for Post approval Changes to the Chemistry, Manufacturing, and
Controls Information in an NDA, ANDA, or BLA (2022)” may be referenced (25).

#### 3.3.2 Europe

Like their U.S. counterparts, European regulators have supported the validation and implementation of
AMM/RMM technologies; however, there are subtle differences with respect to validation expectations and
submission requirements.
Commission Regulation (EC) 1234/2008 went into effect in 2010 and applies to variations to a Marketing
Authorization granted in a Mutual Recognition/Decentralized Procedure and to Community or Centralized
Authorizations. In 2023, (EC) 2023/1182 went into effect, and the impact of this along with the issuance of
ICH Q12 introduces a number of features aimed at reducing the workload for both competent authorities
and applicants. One of the most important changes relating to AMM/RMMs makes it now possible to group
variations under the same Marketing Authorization such that they can all be assessed at the same time.
Furthermore, it is possible to combine the same variations or group of variations from different Marketing
Authorizations and have all of these assessed at the same time under what is called a “Work Sharing
Process” or “Common Assessment.” This could be the case for a single AMM/RMM technology being used
for multiple products (26).
Next, there is an opportunity for scientific dialog with regulators through the European Medicines Agency
(EMA) Scientific Advice and Protocol Assistance procedure. Here, a firm may ask for advice on its
validation and implementation strategies. The Scientific Advice working party includes representatives from
all European Union (EU) member states, and a written report is provided with the results of the advice
process (27). For novel AMM/RMM technologies, EMA's Innovation Task Force (ITF) offers free, early
informal dialogue to help identify the appropriate regulatory pathway and data requirements. For
AMM/RMMs with broad applicability across multiple products, firms may also consider EMA's
Qualification Advice procedure, which can even result in formal qualification of the methodology for
industry-wide regulatory use.
Based on EC 1234/2008, the Commission published Guidelines on the Details of the Various Categories of
Variations…to the Terms of Marketing Authorizations for Medicinal Products for Human Use and
Veterinary Medicinal Products that implements the “post-approval change management protocol
(PACMP)” (28). This voluntary process, which is very similar to FDA’s CP, provides a strategy for
managing the review of proposed validation plans prior to the start of testing (29).
In this two-step process, a change management testing protocol is first submitted as a Type 2 Variation. The
protocol should include the overall testing strategy, such as the planned studies, acceptance criteria, and
methods. Prior to submitting the PACMP, a firm may also discuss their testing strategies with the EMA

under the scientific advice procedure. Once the protocol is approved, the submitting company will perform
the testing as specified in the protocol.
The second step of the PACMP process involves submitting the resulting data, assuming it has met the
protocol’s acceptance criteria. The decision to submit as a Type 1A or Type 1B variation is determined at
the time of protocol review and approval. If the data is submitted under a Type 1A variation, the company
can immediately implement the AMM/RMM; a Type 1B variation, on the other hand, requires a 30-day
waiting period while the data is reviewed. These strategies are very similar to the FDA's Changes Being
Effected-0 (CBE-0) and Changes Being Effected-30 (CBE-30) reduced reporting policies.
Chapter 5.1.6 of the European Pharmacopeia (Ph. Eur.) addresses the validation of AMM/RMMs (5). Like
TR 33, Ph. Eur. 5.1.6 provides a framework for the development of an appropriate validation plan, which
can then be included in the PACMP as the basis for the studies that will be performed. Ph. Eur. 2.6.27 also
provides good information as that chapter describes how AMM/RMMs can be used to demonstrate the
quality of cell-based products (30).
The EMA recently extended the competencies of the process analytical technology (PAT) team, which is
currently responsible for quality-by-design matters, to also cover all matters related to AMM/RMMs.
Additionally, the 2022 revision to the EU GMP Annex 1 recommends that the use of rapid microbial testing
and monitoring systems should be considered to increase the protection of the product from potential
extraneous sources of particulate and microbial contamination such as personnel, materials and the
surrounding environment, and assist in the rapid detection of potential contaminants in the environment and
product
As with all post-approval changes, discussing this with the EMA, relevant competent authorities, and/or the
local inspectorate early in the implementation planning phase is recommended. This is especially relevant if
a formal Type variation change may not be required, which will depend on the AMM/RMM’s intended
application, such as an in-process microbiology test that is not in a marketing authorization.

#### 3.3.3 Japan

The Japanese Pharmaceuticals and Medical Devices Agency (PMDA) evaluates AMM/RMMs that will be
used for product release, such as rapid sterility testing, but is generally accepting of such methods provided
that they give results that are comparable to or better than CMMs. In Japan, when AMM/RMMs intended
for use in product release decisions (product disposition)—such as rapid sterility testing—are employed, the
relevant test method may be used in lieu of compendial testing for batch release, within the scope approved
through an application for marketing authorization (or an application for a partial change to the approved
matters) submitted to the regulatory authority.
However, if these methods are shown to give comparable or better results than CMMs, they are generally
accepted by the PMDA.
In the Japanese Pharmacopoeia (18th Edition), information on these topics is listed in the category G4
Microorganism and GZ Others in the General Information category, including “Rapid Determination of
Bacterial Count by Fluorescent Staining” <G4-8-152>, “Rapid Identification of Microorganisms by Genetic
Analysis” <G4-7-160>, “Microbial Rapid Test Method” <G4-6-170>, “Alternative Methods for Endotoxin
Testing and Measurement Reagent Using Recombinant Proteins” <G4-4-180>, and “Quality Control of
Pharmaceutical Water” <GZ-2-172> (6).

#### 3.3.4 Rest of World

The implementation of AMM/RMMs has been successful in non-U.S. and non-European regions,
particularly in Japan, Australia, India, and China, but also in Mexico, Brazil, Central/South America and the
Asia-Pacific region. As with U.S. and European agencies, it is recommended that an open dialogue with the
affected regulators be initiated early in the implementation process. Because some of these agencies may not
be familiar with the proposed technologies, having the vendor involved may also be recommended. Where
some rest-of-the-world (ROW) countries may follow USP ⟨1223⟩ and/or Ph. Eur. Chapter 5.1.6, other
countries may only follow their own local pharmacopeias. In either case, TR 33 can serve as a framework
for discussion of the planned validation and implementation plans, and provides the following information
regarding guidance given by authorities in these specific regions:
•
The Australian Therapeutic Goods Administration utilizes relevant sections of Ph. Eur. 5.1.6, USP
⟨1223⟩, the British Pharmacopoeia, ISO 17025, and TR 33 when working with companies wishing
to validate and implement AMM/RMM technologies (31, 32).
•
The Chinese Pharmacopoeia includes “Chapter 9201: Guidelines for the Validation of Alternative
Microbial Detection Methods for Pharmaceuticals,” which, in general, allows AMM/RMMs to be
used for final product testing where CMMs cannot meet QC requirements. Validation of
AMM/RMMs is required, and the AMM/RMMs for final-product testing should give results that
are comparable to or better than the CMM. Parallel testing can be performed to evaluate the
comparability. Special considerations for the validation of AMM/RMMs are, for example,
validation of each method parameter in the presence of the product, and validation of
reproducibility in different labs, if possible. CMMs are used for post-market surveillance testing
(33).
•
The Indian Pharmacopoeia general chapter, “Approach to Alternative Microbiological Methods,”
which was finalized in October 2025, describes methods that can be used as alternatives to
conventional qualitative, quantitative, or identification tests. This chapter shares many scientific
principles with USP ⟨1223⟩, Ph. Eur. 5.1.6, and TR 33 (34).  ̶

In October 2023, the Indian Pharmacopoeia Commission officially joined the
Pharmacopeial Discussion Group established in 1989 by the European Directorate for the
Quality of Medicines and HealthCare, the United States Pharmacopeial Convention, and
the Japanese Pharmacopoeia of the Ministry of Health, Labour and Welfare to harmonize
pharmacopeial standards (excipient monographs and selected general chapters) in three
major regions of the world. Their goal is to enhance global pharmaceutical standards,
regulatory compliance, and international recognition of Indian pharmaceutical products.

#### 3.3.5 Multi-Regional Regulatory Strategies for Alternative/Rapid Microbiological

Methods
Companies that want to utilize an AMM/RMM for a product that is marketed in multiple countries require
approval from each country’s regulatory authority. It is possible, however, that one regulatory authority may
not approve the AMM/RMM, even though another regulatory authority has approved it. In this case, the
company may need to establish an alternative product testing strategy for the country in which the
AMM/RMM cannot be used, which may include using the CMM for that particular product (i.e., “dual
testing strategy”). However, such dual testing strategies may introduce operational and compliance burdens
including, parallel data trending, specification alignment, increased resource utilization, and potential
challenges in product disposition decision-making. These implications should be considered during
implementation planning and regulatory strategy development.

As stated in the USP “General Notice 6.30 Alternative and Harmonized Methods and Procedures,” if it
appears there is a difference between the AMM/RMM and the CMM, or if there is a dispute as to whether a
drug product complies with the monograph specifications, then the CMM is considered the referee test (35).

### 3.4 Business and Quality Considerations for Implementing Alternative/

Rapid Microbiological Methods
The industry can benefit from the application of modern process analytical tools including AMM/RMMs.
The implementation of these technologies can provide a more in-depth understanding of their manufacturing
processes in terms of microbial QC. As such, an opportunity exists to enhance process control, reduce
variability, and increase manufacturing capacity and efficiencies.
To aid in the evaluation of which particular AMM/RMMs are appropriate for specific applications, firms
should consider the business and economic, quality and regulatory, and technical considerations of the
proposed method(s).
The business or cost requirements when implementing AMM/RMMs should be well understood. These
considerations may have a significant impact on the decision to validate and implement new technologies
for routine use. From a business impact perspective, a number of potential benefits may be achieved,
including, but not limited to:
•
Faster finished-product release times to reduce backlogs and inventory
•
Reduction in risks associated with microbial control and current GMP decisions concerning
forward- or continuous-processing of contaminated material that can have an impact on the
acceptance and/or overall quality of the batch
•
Elimination or reduction of offline assays by replacement with at-line, on-line, or in-line assays
•
Increases in laboratory automation and reductions in manual testing, sample handling, and/or data
management/data integrity, thereby reducing overhead and/or headcount for sampling and testing
•
Faster response to contamination events or microbial data deviations, and the initiation of
investigations
•
Reduced repeat testing, lot rejection, reprocessing, and rework
•
Reduction in plant downtime and investigations
•
Reduced raw material, in-process and finished-goods inventory holdings
Many of these business considerations, in terms of potential cost savings and/or cost avoidances, may be
analyzed using an appropriate financial or economic model, and the resulting information may be used to
support, from an economic standpoint, the implementation of a new technology. However, the financial
results of conducting such an exercise should not solely be used to make a final decision on whether or not
to implement the technology. Rather, they should be considered in addition to all of the other relevant
factors, including the quality and technical benefits, when implementing the technology.
There are a variety of financial models that can be used to assess whether an AMM/RMM will provide cost
savings or cost avoidance when implemented. These include return-on-investment (ROI), Net Present Value
and Payback Period, among others. For example, ROI is the ratio of money gained or lost on an investment
relative to the amount of money invested. In this case, the investment is the implementation of an
AMM/RMM. The Payback Period is the time required for the return on an investment to "repay" the sum of
the original investment. A company’s financial organization can assist in determining the most appropriate
model to use depending on the technology, its applications, and other financial factors. In all cases, the
operating costs associated with the CMM and the AMM/RMMs are identified, as well as the potential cost

savings/cost avoidances and the investment costs for validation and implementation of the AMM/RMM.
These values are then used in the relevant financial model to calculate the potential financial benefit. In
addition, soft savings, such as improvements in quality due to the use of the AMM/RMM, must be taken
into consideration.
Examples of operating costs may include, but are not limited to, the following:
•
Cost per test (e.g., consumables)
•
Labor time and labor costs
•
Equipment depreciation, calibration, qualification, and maintenance
•
Laboratory overhead
•
Data management, access, and storage
•
Software updates and/or ongoing licensing/subscription fees
•
Additional or dual testing (e.g., if the AMM/RMM is not approved in all countries)
Examples of investment costs may include, but are not limited to, the following:
•
Capital costs for the new technology
•
Installation costs, including laboratory modifications if necessary
•
Costs for integration with electronic data management systems (e.g., laboratory information
management system (LIMS))
•
Training
•
Validation
•
Method transfer activities
•
Regulatory filings and associated costs, where applicable
Finally, examples of potential cost savings/cost avoidances may include, but are not limited to the
following:
•
Better monitoring and control of the overall microbial quality of a manufacturing process and its
associated product, thereby reducing risk to the patient
•
Early identification of contamination in multistage processing, allowing process intervention to
prevent manufacturing loss
•
Greater understanding of manufacturing variability, enhancement of process knowledge, and
contribution to continuous process and product improvement
•
More accurate, sensitive, and reproducible monitoring, as well as enhanced trending of
microbiological data
•
Fewer transcription errors and improved documentation and traceability as a result of increased
automation and data integrity
Additional information on how to develop a financial assessment may be found in the public literature (36).

### 3.5 Risk Analysis

The concepts of QRM and Analytical Quality by Design (AQbD) are useful to the discussion of evaluation,
validation, and implementation of AMM/RMMs. The ICH defines risk for pharmaceuticals for human use
as “the combination of the probability of occurrence of harm and the severity of that harm” (37). With an
analytical method, risk is associated with categories like sample collection, sample preparation, test
reagents, instrumentation, test environment, and personnel factors (38). These variables can be ranked
according to the severity of the consequences on the analytical results, the probability of failure occurrence,
and the difficulty of failure detection. Based on these rankings, risks are mitigated.

Two primary principles of QRM stated in ICH Q9(R1) are that the:
•
Evaluation of the risk to quality should be based on scientific knowledge and ultimately linked to
the protection of the patient
•
Level of effort, formality, and documentation of the QRM process should be commensurate with
the level of risk
An industry white paper thoroughly detailed how various AQbD tools contribute to developing robust
analytical methods, whose validation status are continuously confirmed during a product lifecycle (39).
As quality by design (QbD) in pharmaceutical product development is more familiar than its application in
assay development (i.e., AQbD), a useful comparison of the two processes is provided in Table 3.5-1.

**Table 3.5-1 Comparison of the Steps Taken in the Quality by Design and Analytical Quality by**

Design Processes (40)
Quality by Design (QbD)
Analytical Quality by Design (AQbD)
Define quality target product profile
Define analytical target product profile
Establish critical quality product attributes
Establish critical quality method attributes
Conduct a risk assessment
Conduct a risk assessment
Establish the process space design
Establish the method operable design region
Develop a process control strategy
Develop a method control strategy
Implement lifecycle management
Implement lifecycle management
A QbD has been successfully applied to chemical assays and its principles can be adapted to
microbiological methods through the AQbD framework (41). The six AQbD process steps in Table 3.5-1
are discussed more fully with examples relevant to modern microbiological methods here:
The steps are defined as:
1. Definition of the Analytical Target Profile with AMM/RMMs
Analytical target profile is a concept developed in analytical chemistry but is also applicable to
microbiological methods. Microbiological methods are broadly classified as methods for microbial
detection (e.g., sterility testing), microbial enumeration (e.g., microbial plate counts), limit tests (e.g.,
tests for specified or objectionable microorganisms), and microbial characterization and identification.
The analytical targets of the conventional growth-based microbiological methods are viable
microorganisms with the capability of growing in microbiological culture media, forming colonies on a
plate or turbidity in a broth, that are detected and/or enumerated by visual inspection. With
AMM/RMMs the analytical targets vary widely with the technology, the results are captured
electronically, and they are often not comparable to the CMM based on the colony-forming unit (CFU)
or turbidity. For example, the analytical target for bacteria and fungi in a bioluminescence method
would be adenosine triphosphate (ATP) present in viable cells. The ATP content of microorganisms
varies by the type, species, and growth-phase of the organism. Other targets include rRNA base
sequences, respired CO2, autofluorescence, vital stained nucleic acid, immunological reactions,
enzymatic activity, and biomarkers.

2. Establish Critical Quality Method Attributes
Critical quality attributes (CQAs) are typically viewed as physical, chemical, or biological attributes that
define the quality of a drug product. A major transition from microbiological attributes based on growth
to the physicochemical attributes is occurring. CQAs for analytical methods, which can be called critical
quality method attributes, address both method attributes and method parameters rather than product
attributes. For example, a polymerase chain reaction (PCR) amplification sterility test method based on
a nucleic acid base sequence, like 16S rRNA, depends on multiple operating parameters including
nucleic acid extraction and capture, primer and probe reagents, target sequence, thermocycler
performance, signal capture, and data reporting. Accordingly, these critical quality method attributes
should be considered when validating this type of AMM/RMM.
3. Risk Management
A risk assessment is defined in the ICH Q9(R1) guideline as the identification of hazards and the
analysis and evaluation of risks associated with exposure to those hazards. A risk assessment is an
analytical component of the overall risk management process. Risk management is defined in the ICH
Q9(R1) guideline as a systematic process for the assessment, control, communication, and review of
risk to quality across the product lifecycle. Examples of risks that may be relevant to an AMM/RMM
include false negative, false positive, and non-equivalent results. The greatest risk to a patient is a false
negative result (i.e., a negative result when microorganisms are present in the test sample), which the
industry must work to avoid. A false positive (i.e., a positive result when no viable microorganisms are
present in the test sample), is a business risk; a good product could be rejected, which could affect the
supply to the patient. In addition, the frequent lack of equivalency of a modern AMM/RMM to the
CMM due to different signals makes the statistical comparison of the comparability difficult and
complicates and delays the method validation and acceptance of AMM/RMM by the competent
authorities.
4. Method Operable Design Region
Method operable design region is used to select the operational region for a routine analytical method,
so critical method parameters and analyte sensitivity must be considered. For example, with a
mycoplasma PCR screening method, the specificity of the targeted base sequence (method parameter)
and a limit of detection (LoD) of 10 CFU/mL (analyte sensitivity) comparable to the growth-based
CMM should be viewed as critical (42).
5. Method Control Strategy
The inclusion of negative and positive controls in an assay run is common with AMM/RMMs. They
type of controls used will be specific to the technology or scientific principle of the method. Controls
are useful in monitoring the performance of the assay.
6. Lifecycle Management
The current regulatory expectation is to assess the performance of an analytical method, make an
improvement to the assay (if required), use change control to evaluate method changes and, if
necessary, revalidate the method throughout the lifecycle from product introduction to product
cancellation (43).
Generally, when a change is proposed, the potential risks associated with these changes should be identified;
this is also the case when implementing an AMM/RMM. Therefore, a risk assessment should be performed
prior to the start of any validation and implementation activities.

Identified risks may vary and may include:
•
Inability to demonstrate equivalence in results between CMMs and AMM/RMMs
•
Global regulatory acceptance
•
Product sample requirements for evaluation
•
Alternative signal to the conventional microbial growth-based result
•
Potential for false-positive or false-negative results
•
Computer system capabilities and securities
•
Supplier issues
Risks may vary depending on the technology and the methodology it replaces, the nature of the
measurements taken (qualitative, quantitative, or identification), the unit of measure (e.g., as compared with
conventional microbiology measurements, such as the CFU or turbidity as an indicator for growth), and the
particular product or process attribute being evaluated.
The risk assessment may be carried out by comparing the differences between each process step of the
conventional method. See Gordon’s Validation of Milliflex® Quantum for Bioburden Testing of
Pharmaceutical Product, which provides additional guidance (44).
Risk analysis model tools, such as the Failure Modes and Effects Analysis (FMEA) or Hazard Analysis and
Critical Control Points (HACCP), may be used to effectively decide which AMM/RMM to implement, to
assist in the justification of technology implementation, or to better understand the impact of
implementation on the product and the business. Additional information on these two methods of risk
analysis as well as other risk analysis methods is available in PDA Technical Report No. 44: Quality Risk
Management for Aseptic Processes and in World Health Organization Annex 7: Application of Hazard
Analysis and Critical Control Point (HACCP) Methodology to Pharmaceuticals (45, 46).

### 3.6 Automation of Conventional Methods

Manual laboratory procedures can be automated, for example, Gram-staining, colony-counting, determining
the inhibition zone, performing an antibiotics assay, or general sample preparation, such as dissolution or
dilution of samples. Such automated and integrated systems offer many advantages to laboratories with very
high sample throughput and recurring workflows (e.g., reduced sample-handling and variability from
manual-handling). Whether they are worthwhile in individual cases can only be assessed on the basis of
detailed cost-benefit evaluation (see Section 3.4).
Following this strategy, it is important to determine how the introduction of automation impacts the
equipment qualification and method validation requirements (35). For example, there are a variety of
methods available to detect the presence of viable cells. These methods may have applications in different
tests (e.g., bioburden testing, sterility tests) but may not, in fact, replace critical aspects of the test entirely.
When using imaging systems to detect and count the colonies, which in the narrower sense do not differ
from the conventional pharmacopeial procedures (e.g., using membrane-filtration method, similar media,
incubation temperature/conditions and time), it is probably sufficient to assess the accuracy and precision of
the colony-counting system as part of the equipment qualification. It is advisable to carry out a risk
assessment and to assess the possible effects on the validity of the determined colony number. It is probably
not necessary to revalidate the automated colony-counting method in full, but a comparison of the accuracy
and precision of the colony number determined by the automated colony-counter and the colony number
determined by laboratory staff is advisable. The article “Systematic Approach for the Evaluation,
Validation, and Implementation of Automated Colony Counting Systems” in the PDA Journal of

Pharmaceutical Science and Technology describes an equipment qualification for an automated colony-
counting system that detects microcolonies based on their intrinsic autofluorescence and while allowing the
incubation time to be reduced by 50% (47).

*[Figure 3.6-1 is a flow chart for an automated colony-counting system to decide whether a performance]*

qualification (PQ) is sufficient (automation of an CMM) or if additional aspects should be assessed as part
of a method validation (if changes to the CMM are introduced) (48).

*[Figure 3.6-1 Flow Chart for Equipment Qualification of Automated Colony-Counters and]*

Method Validation
The result of the decision process (see Figure 3.6-1) was that an extended equipment qualification should be
performed if a shortened incubation time compared to the CMM is to be used.
In contrast, a colony-counter using the CMM with an incubation time described in guidance documents
would merely compare the machine versus the visual count of the colonies. There is no need to establish the
incubation time.

#### 3.6.1 Performance Qualification

During the extended PQ, the accuracy and precision of the colony-counting device should be compared to
the visual count on the same plate, rather than an assessment of the entire microbial analytical performance
(47, 49). If the expected use of an automated colony-counting device is used to reduce the TTR, it is
important to collect data before (e.g., development studies) or during the PQ to help determine the TTR.

#### 3.6.2 Time to Result

The example for determining a TTR is based on risk assessments and on internal test methods for testing,
for example, product or water samples (47). Testing of product samples was carried out according to
pharmacopeial requirements with an incubation time of 3-5 days on tryptic soy agar. On the other hand,
water samples based on the company's in-house flora, which includes slow-growing microorganisms, were
incubated on Reasoner's 2A (R2A) agar with a prolonged incubation time of 7-8 days. These internal test
methods were used as the basis for the experiments to define the sample-specific TTR.

The TTR may be defined as the time it takes for the automated colony-counting system to accurately count
the slowest-growing organism on the solid media reaching a predefined recovery of the visual count of the
same agar plate for the maximum incubation time described for the conventional readout (i.e., 5 days for
testing of product samples, or 7-8 days for testing of water samples) (47, 49). The TTR may also be
determined by statistically comparing microbial counts of relevant sampling sites (e.g., point-of-use water)
between the automated colony counter and the CMM. In this case, the TTR in the automated colony-counter
should demonstrate a statistical noninferior result as compared to the CMM. Applying the TTR, an
assessment is needed as to whether the automated colony-counting system is “comparable” (Ph. Eur.) or
“non-inferior” (USP) to the conventional visual colony-counting method with respect to the validation
parameters, accuracy, and precision (see Section 3.6.1).

#### 3.6.3 Method Suitability Test

Before routine testing can occur, method suitability must be demonstrated (30, 50). Method suitability
demonstrates the recovery of microorganisms in the presence of the product to be tested.
Other modifications (e.g., different media types, different incubation temperatures) may require a method
validation. The extent of this method validation should be defined based on a risk assessment (see Section
3.5).

### 3.7 Method Variability in Microbiology and Alternative/Rapid

Microbiological Methods
Microbiological methods are subject to varying degrees of detection, and this is predominantly observed
with methods that rely on the growth of microorganisms. Variability can be associated with media selection,
incubation time, incubation temperature, incubation conditions (e.g., humidity, oxygen tension),
intrusiveness of the sampling method, presence or absence of antimicrobial substances, or the actual method
being used. Furthermore, microbial growth will be impacted by the physiological state of organisms
intended to be detected, especially if the organisms are stressed, injured, dormant, or are VBNC.

#### 3.7.1 Considerations for Detection and Enumeration Approaches

Method variability in CMM analysis is well documented and should be considered in assuring the microbial
quality of a product (51). AMM/RMM approaches should be reviewed prior to validation as additional
factors can influence the accuracy and sensitivity of microbial analysis, from sample preparation to
detection, beyond those considered for CMMs. Reliable detection of microbial contamination at specified
levels is essential, including the presence or absence of microbes and single-cell detection for sterility, or the
definition of alert and action levels when used for process monitoring and control. An understanding of test
material characteristics (e.g., solubility, viscosity) is a prerequisite to reliable analysis of the material and
any required sample preparation steps to optimize the recovery and analysis of any microbes or associated
chemical signals (e.g., endotoxins). Often, the recovery and suitability of AMM/RMMs can be addressed in
the suitability of these materials in the pre-validation work with the supplier.
Key factors impacting the sensitivity and accuracy of AMM/RMMs include instrumentation limitations
(e.g., offline verification of an in-line measurement), variability in sample preparation methods (e.g.,
dilution and filtration), the nature of the analyte (e.g., viscosity, solubility, microbial distribution, competing
fluorescent chemistries, abiotic, and nonmicrobial biotic particles), the chosen test methodology (culture-
based, molecular, chemical, immunologic), microbial viability, presence of VBNCs.

Using appropriate calibration standards, such as microbial count standards and surrogate chemical or
particulate references as required by the measurement technology, for at-line and offline equipment is
recommended to ensure consistency. Additionally, the inherent diversity of microorganisms within samples
also adds to the variability. As the measurement field develops, there will be further challenges in ensuring
the reliable operation of in-line technologies, for both the ongoing operation and the qualification and
confirmation of detection within the process.
Sampling considerations for the incoming raw materials and in process samples are critical in ensuring
quality production as is the sample plan applied to finished production, as the distribution of
microorganisms can vary in unconventional materials, affecting detection accuracy. Statistical models like
Poisson distribution are often employed to interpret microbial counts on the assumption that the microbes
are uniformly dispersed within the test material. Alternative approaches for statistical models and
considerations for the microbial distribution in food-based materials have also been proposed (52, 53).
Consistent preparation of bacterial inoculums is challenging, especially at low counts, and errors can arise
during various stages of testing. While AMM/RMMs offer greater sensitivity than CMMs, they require
meticulous sample preparation to accommodate the sample matrix and contamination distribution during
validation and suitability testing.
Where the measured microbial indicator is dependent on microbial metabolic activity (e.g., ATP, metabolic
conversion of fluorescent indicators), additional activation or incubation procedures may be required so
stressed cells may recover or divide sufficiently for detection.
Unique validation strategies may be needed for AMM/RMMs, particularly with non-liquid samples and in
line detection technologies. Additional vendor support or in-process confirmation of microbial detection is
often crucial for end users in validating these technologies. A comprehensive understanding of method
variability, along with careful planning in sampling, preparation, and validation, is essential for ensuring
accurate detection and assessment of microbial contamination in various products.

#### 3.7.2 Considerations for Identification Approaches

Various AMM/RMM identification methods are available for characterizing microorganisms in
pharmaceutical products and raw materials. These serve as effective screening technologies to determine the
absence of specified microorganisms, thereby necessitating validation according to established guidelines.
Microbial characterization is crucial as it identifies potential impacts on products and production processes
that may not be covered in compendial monographs.
These approaches are similar to conventional phenotypic and biochemical approaches in that the
identification is calibrated to cultures of known identity. Qualification involves distinguishing between
microbial classification, which groups organisms based on similarities, and identification, which specifies
their genus or species. Identification methods include phenotypic approaches, such as colony morphology,
Matrix-Assisted Laser Desorption/Ionization Time-of-Flight mass spectrometry (MALDI-TOF MS), and
genotypic techniques like 16S rRNA sequencing. While considered the most-used reference methods, both
may struggle to differentiate closely related species (e.g., Bacillus spp. or Burkholderia spp.), so require
additional methods for accurate identification (e.g., multilocus sequencing technology). With the further
development of next-generation sequencing, allowing whole-genome sequencing, and the use of spectral
profiling (e.g., FT-IR, Raman) approaches, similar comparative qualification to reference cultures can be
conducted.

New identification methods should be verified, focusing on accuracy and reproducibility (repeatability),
either against CMMs through parallel testing (e.g., USP ⟨1113⟩ Microbial characterization, identification,
and strain typing (54)), using known standard QC cultures, or agreement with reference laboratory results,
with a goal of achieving over 90% accuracy and repeatability, defined as follows (55):
•
Accuracy % = (Number of correct results/Total number of results) · 100
•
Reproducibility (Repeatability) % = (Number of correct results in agreement/Total number of
results) · 100
The Ph. Eur. 5.1.6 booklet provides an example of a validation approach for the 16S rDNA sequencing. The
verification tests should include the assessment of (56):
•
Accuracy (Acceptance criterion: Microorganisms are identified correctly to species level and
above the pre-defined reporting level for sequence homology)
•
Specificity (Acceptance criterion: the results of the specificity test using mixed cultures (quantified
and titred based on CFU or using an analytical method to standardise the DNA titre) lead to valid
identifications. These results must clearly demonstrate that the analysis of mixed cultures does not
result in false identifications)
•
Robustness (Acceptance criterion: Microorganisms are identified correctly to species level, with a
pre-defined percentage match between the database and the test strains)
Where referential databases are used for identification, the profiles of all organisms may not be present due
to the maturity of the identification technology, its use across industry, and its associated database. For
known and culturable microorganisms, the databases can be updated for accuracy and completeness, ideally
with multiple users verifying the accuracy of the input data as misidentifications can pose significant risks.
Those techniques that offer the detection of VBNC (e.g., microscopy and Raman, Cytometry) and are
unable to refer to a cultured sample are limited to detection and enumeration, as the recovery of sufficient
genetic material can limit the use of genotypic approaches for the confirmation of microbial identity.
For both culture and VBNC-sourced material, the purity of any observed or recovered organisms can be a
problem as the sample may be composed of a mixture of microbes, and the method may bias the
identification to the organism (e.g., efficiency of DNA extraction) (5).
Successful qualification hinges on a thorough comprehension of the system's capabilities, its limitations, and
the implications of the results, enabling end users to make informed decisions when interpreting
identification outcomes and managing any risk assessment for material dispensation.
For certain AMM/RMMs, the testing process may be destructive or may not permit recovery of a viable
isolate for subsequent microbial identification. In such cases, firms may evaluate alternative strategies for
the identification of contaminants, such as duplicate or parallel sampling.

### 3.8 Method Choice

Advances in specific measurement technologies are enabling the use of AMM/RMMs for targeted release
and monitoring. These include technologies such as viability-based fluorescent staining and flow cytometry,
which have enabled microbial detection at the single-cell level while certain hybrid platforms further
integrate these with techniques like microscopy or spectral analysis to characterize individual targeted cells.
Other AMM/RMMs also offer distinct advantages. For example, ATP bioluminescence provides nearly
instantaneous results for general hygiene or biomass monitoring and estimations, while nucleic acid

amplification techniques (NAT)/PCR deliver high taxonomic specificity and the ability to detect non-
culturable microorganisms (57). In many cases, quantification and viability can be obtained in hours, with
TTR dependent on the technology, its use, and sample preparation (often culture/enrichment). There are
several in-line approaches, but a majority of these techniques apply to the at-line or off-line analysis of
samples. Whether the full use of the method’s capability is used for measurement purposes is at the
discretion of the user, with the expectation that the scientific justification and validation of the selected
measurement parameter is carried out. For example, the use of quantitative methods capable of enumerating
viable particles in a sample for nonsterile applications can equally be applied to its use as a qualitative
measure for the presence or absence of viable cells in sterile manufacture.
The development and use of AMM/RMMs for in-line or on-line measurement, to either monitor the sterility
or the maintenance of sterile/hygienic manufacturing conditions, is currently limited to the quantification of
biofluorescent particles which may consist of one or more cells, usually against an inert/transparent
background chemistry (i.e., air or water). Additional processing and suitability considerations are often
required for these technologies to be applied to more chemically complex matrices.
For AMM/RMMs, the TTR is defined by the time of detection for the most challenging organisms within
the system (see Section 3.6.2). Unlike CMMs where TTR is traditionally based on fixed incubation periods
for recovery (e.g., five days for products or seven to eight days for water), TTR for AMM/RMMs is
determined by validation experiments. This involves demonstrating that the AMM/RMM provides a
comparable or non-inferior level of detection within a shorter timeframe.

#### 3.8.1 Categorizing Technologies

For the methods described in Sections 4.2 and 4.3, the aim is to detect or quantify the presence of even a
single viable organism present in the process or test sample, with the potential to identify this organism
where required (see Section 4.4). As a single technique may employ a combination of technologies (e.g.,
microscopy, activation, metabolized dyes) or targeted analytical techniques (e.g., FT-IR), each technology
description has been categorized under the types of data output achieved: qualitative (presence/absence),
quantitative (accurate enumeration), and identification, as defined in Ph. Eur. 5.1.6. This categorization does
not imply that these methods cannot be used interchangeably across categories; for example, a method
capable of single-cell discrimination and quantification can also serve for use as a presence/absence test,
such as solid-phase cytometry.
Qualitative technologies will detect the presence of microorganisms (e.g., sterility test), the presence of a
specific type of microorganism (e.g., specified organisms, E. coli or Mycoplasma), or related biomolecule
(e.g., pyrogens), which can be semiquantitative by reference to relevant calibration curves (e.g., the
monocyte activation test (MAT) for pyrogen detection (58).
Quantitative technologies enumerate the number of microorganisms present in a test sample. The
pharmacopeial microbial enumeration test is an example of a conventional growth-based method. In
contrast, certain AMM/RMM technologies, such as solid-phase cytometry, provide enumeration to the
single-cell level using cell- or viability-based staining approaches.
Identification technologies can identify microbes to the genus, species, subspecies, or strain levels generally
requiring culture, with some systems capable of identification at the single-cell level (e.g., Confocal Raman
spectroscopy). Some of these methods are fully automated strategies of conventional growth-based
biochemical and carbohydrate methods, while others rely on novel scientific principles similar to chemical
or analytical methods.

## 4.0 Technology Review

Compendial microbiological techniques are still widely and appropriately used to assess the sterility and
microbiological quality of finished products and their associated processes (see Section 3.1). The move to
biologically derived therapies, parametric release, and improved detection capability has led to a range of
AMM/RMMs. With improvements in optics, digital imaging, and molecular/genetic, localized thermal,
chemical, and electrophoretic techniques for measuring the presence, identity, and viability of microbes, a
range of technologies have emerged or matured since the 2013 TR 33 revision. New technologies are now
capable of either directly measuring a single cell, its activation, or alternatively, the early stages of cell
division, active metabolism, or the presence of microbial by-products.
While technology dependent, AMM/RMMs may offer the promise of improved sensitivity, accuracy,
automation, objectivity, precision, operational and data integrity, improved operational efficiency, and
potentially shorter time to result. These new methods have not only increased the need for the modern
industrial microbiologist to embrace digital, optical, and statistical expertise relative to interpretation and
validation, but also include additional considerations in suitability testing and appropriate sample
preparation of both biological and chemical samples for these new metrics.
The scope of use of AMM/RMMs can span in-line, on-line, at-line, and off-line use with data being either
directly related to the release specification, for example, presence or absence of viable organisms for sterility
or, for process monitoring purposes, rendering of viable cell levels in nonsterile applications or the
verification of an aberrant result off-line.
More conventional, growth-dependent techniques have also benefited from these developments through
either improved methods for detecting the conventional end point (e.g., the digital detection of microcolony
formation) or by combining alternative technologies to increase method sensitivity and data integrity or to
decrease TTR and analyst subjectivity (see Section 3.8). The application of automation has also benefited
AMM/RMMs in a similar way to more conventional approaches, reducing errors in the procedure,
improving the statistical robustness of the generated data, and increasing testing capacity while reducing the
variability associated with direct handling of the samples in the laboratory (see Section 3.6).
The selection, validation, and use of AMM/RMMs is very process- and product-dependent and, ultimately,
focused on providing the best assessment of product quality to minimize the risk of use for the safety of the
patient or consumer. See Section 4.1 for more information on sample effect considerations. Given the
different product forms, processes, specifications (nonsterile, sterile), and controls used in pharmaceutical,
medical device, and cell-and-gene-therapy manufacturing, the contents of Section 4.0 can only be
informative and guiding, not specific to product type or categories. Beyond the quality and safety
requirements, the use of AMM/RMMs will be decided based on the release specification and a balance of
improved risk management, production efficiency, validation cost, implementation, and regulatory
compliance (59).
Section 4.0 introduces the technical principles and considerations for adopting these AMM/RMMs.

### 4.1 Sample Effect Considerations

For the validation and suitability qualification of any new method, or its application to the test product,
additional consideration of what might affect the accuracy, sensitivity, and LoD for these new technologies
is required as they are likely to differ from those used for conventional (growth-based) methods. The
primary analytes for these methods range from particulate evaluation, fluorescence, spectral analysis of
chemistry, and optical assessment and can often be combined in current AMM/RMMs (e.g., optic for
counting and fluorescence for viability).
The impact of sample effects on AMM/RMMs needs to be evaluated, for example during method suitability
studies (see Section 5.3.2). These sample effects can include the presence of background ATP or
autofluorescence of particulates present in lab reagents, materials, or the sample matrix itself. Suppliers may
provide guidance for overcoming known interference with their technology. This consideration may also
require the evaluation of more conventional suitability criteria, such as the presence of any antimicrobials
that previously affected culture techniques and cell growth but may now interfere with microbial
metabolism and cell activation. Consideration of these factors and their impact on measurement will be
system-dependent and may require additional reagent and sample processing (e.g., filtration to remove
reagent particulates or the specific enrichment of any microbial content present relative to interfering
moieties). To ensure method robustness, specific negative and positive controls must be established to
mitigate these matrix effects, accompanied by explicit method suitability acceptance criteria that define
permissible false-positive thresholds and signal-to-noise ratios.

### 4.2 Qualitative Detection Principles and Approaches

The primary objective of qualitative detection methods is to identify the presence of contaminating
microorganisms that could render the material or product unusable.

#### 4.2.1 Microcalorimetry

Microcalorimetry offers a non-destructive, direct inoculation method for continuous measurement of heat
generated by metabolic activity. Microbial growth produces heat that can be detected by isothermal
microcalorimetry with very high sensitivity. The signal is measured directly in the system without additional
reagents. The sample is directly inoculated into a growth medium without additional manipulation and
loaded into a vial for measurement. Microbial growth is determined from changes in heat flow over time,
enabling earlier detection than turbidity-based methods. Continuous monitoring of heat production can
detect and, under controlled conditions, quantify microbial growth/activity.
Beyond the research environment where conditions can be tightly controlled to enable quantification by
comparison to reference growth curves-manufacturing-derived samples are most often assessed qualitatively
(presence/absence). Heat output and signal dynamics can vary depending on organism physiology, stress
state, and the sample matrix, making absolute quantification less reliable (60).

#### 4.2.2 Respiration-Based Detection

Microorganisms growing in liquid culture produce carbon dioxide (CO2), volatile organic compounds
(VOCs) and other respiratory gases, along with various metabolites. These products can be detected through
several methods, including monitoring specific analytes (e.g., pH), changes in pressure using transducers in
a sealed container, or by analyzing the concentration of gases in the headspace of sealed containers when

using culture tunable diode laser absorption spectroscopy (TDLAS), all of which indicate microbial growth
and a putative identification (e.g., indole) (61).
The amount of CO2 and other respiratory gases produced serve as a crucial indicator of organism viability.
Test samples are added to media bottles containing a liquid emulsion or silicone sensor. During microbial
growth, CO2 diffuses from the medium into the sensor, where it interacts with hydrogen ions, leading to a
decrease in pH and resulting in a color change of the sensor (e.g., from grey to yellow).
Additionally, respiratory gases can be sampled from the headspace and analyzed using gas sensors. The
detection rate of CO2 and respiratory gases is influenced by the initial concentration of microorganisms; a
higher initial concentration results in a faster detection response. Moreover, the distinct profiles of respirator
gages produced by different microorganisms serve as unique metabolic fingerprints, facilitating high-
resolution detection and early identification of specific microbial species (62).

#### 4.2.3 Electrochemical Measurement

Electrochemical methods measure changes in the electrical properties (conductivity) of microbiological
media due to microbial metabolism. Liquid-growth media comprise relatively large uncharged or weakly
charged molecules, and microorganisms growing in this media will break down the large molecules into
smaller, more highly charged components (e.g., proteins into amino acids, fats into fatty acids,
polysaccharides or sugars into lactic acid). These technologies can rapidly detect changes in measurable
electrical threshold during microbial growth by monitoring the movement of ions between electrodes
(conductance) or the storage of charge at the electrode surface (capacitance). This allows for faster detection
of growing microorganisms compared to turbidity observations.

#### 4.2.4 Single-Cell Detection/Method Development

Dielectrophoresis can be used as a selective separation method to capture microorganisms based on their
size and dielectric properties. A combination of microfluidics and microelectronics is used to capture
microorganisms followed by lab-on-a-chip quantification via optical or electrical sensing. The sample is
pumped through the microfluidic chip with a system of electrodes. The electrodes in the chip generate an
inhomogeneous electric field. As microorganisms enter the chip, the electric field selectively captures the
microorganisms on the electrodes based on their frequency-dependent polarizability, which is then observed
with a fluorescent microscope or measured via impedance changes.

#### 4.2.5 Attachment Detection Technologies

Surface-based detection technologies respond to changes in conductance/resistivity or near-surface optical
chemistry (e.g., guided mode resonance) due to microbial attachment and biofilm development (63).
Resistivity (ρ) is the inverse of conductivity (ρ = 1 / σ), which can be altered by inducing a small electrical
current in the sensor to measure the changes in the electrical properties of process-fluid chemistry at the
surface of a pipe. Microbial attachment, propagation, and the formation of extracellular matrix on the
surface of the sensor indicates the presence of microbes.
Guided-mode resonance is an optical technique that uses a sensor or grating responsive to changes in the
refractive index caused by a microbial attachment, providing qualitative data suited for process-monitoring
and early warnings.

#### 4.2.6 Adenosine Triphosphate Bioluminescence

ATP bioluminescence is the generation of light by a biological process. In the presence of the enzyme
luciferase and the substrate luciferin, ATP is enzymatically broken down to produce photons of light. An
instrument equipped with a photomultiplier tube can detect these photons. Because ATP is a key
intracellular energy source in all metabolically active cells and is rapidly degraded upon loss of viability,
measurement of ATP is a marker for viable organisms. To ensure analytical specificity, the method requires
the selective removal of non-microbial extracellular ATP from the sample matrix prior to microbial lysis.
Depending on the technology, some systems will detect the general presence of microorganisms by
measuring the total relative light units from the test sample, while other systems can detect ATP
bioluminescence from individual microcolonies following a shortened incubation period, thereby providing
a quantitative assessment of the number of microorganisms from the original sample under evaluation.
The sensitivity and TTR of the ATP bioluminescence assay may also be improved with a two-phase
reaction that begins by using an enzyme-catalyzed reaction to generate ATP to levels significantly higher
than what is naturally contained in the microorganism. In the presence of microorganisms, specific
microbial enzymes (adenylate kinase) can be used to convert the adenosine diphosphate (ADP) provided to
the reaction into ATP and adenosine monophosphate. The enzymes are not consumed by the reaction;
therefore, if ADP is present, ATP is continuously generated. The amplified ATP levels are then detected
using the typical ATP bioluminescence reaction initially described in the prior paragraph.

#### 4.2.7 Alternative Biomarkers for Sterility Testing

Existing definitions of biomarkers generally relate to the detection of host-related proteins and associated
analytes in the clinical settings (64). Specifically in clinical microbiology, the use of biomarkers for
detecting infectious diseases is becoming increasingly common. Notable examples of biomarkers for
identifying life-threatening sepsis and systemic infections include C-reactive protein, procalcitonin,
presepsin, interleukin-6, and CD64 (65).
In addition to the description provided regarding biomarkers in this section, researchers recently conducted a
study to explore microbial biomarkers for sterility testing. They compared the exometabolomic profiles of
uncontaminated and contaminated mesenchymal stromal cells and microbial culture supernatants using
liquid chromatography-mass spectrometry. The study found that metabolically derived nicotinic acid was
specifically present in bacterial-contaminated cell-therapy products with the ratio of nicotinic acid to
nicotinamide in laboratory-contaminated cultures after a 24-hour incubation proved to be a useful biomarker
for contamination in cell-therapy products (66). This study serves as a proof of concept (POC),
demonstrating the potential of novel biomarkers being suitable determinants of microbial contamination.

#### 4.2.8 Endotoxin Detection

The detection of bacterial endotoxins (i.e., lipopolysaccharide) has evolved with additional technologies
such as:
•
Cartridge- and microfluidic-based handheld systems that replicate quantitative, kinetic chromogenic
methods with results in as quickly as 15 minutes.
•
ELISA-based methods, where phage-derived protein binds lipopolysaccharide, in which the
complex can be washed to remove interfering conditions.
•
Recombinant Factor C/recombinant cascade reagent, in which synthetic but identical components in
the conventional Limulus amoebocyte lysate bacterial endotoxins assay. The sensitivity of the
Bacterial Endotoxin Test can be from 0.001 and 0.25 EU/mL.

#### 4.2.9 Alternative Pyrogen Testing Monocyte Activation Test

The MAT was developed as an in-vitro assay alternative to the in-vivo rabbit pyrogen test. The test utilizes
monocytic cell sources (e.g., whole blood or human peripheral blood mononuclear cells (PBMC),
mononuclear cell lines, or recombinant cell lines) which, in the presence of bacterial endotoxins and other
non-endotoxin pyrogens, will stimulate cytokine release, the latter of which can then be detected and
quantified in an ELISA assay (58).
Several microfluidic or rapid-readout approaches exist that replace traditional plate-based ELISA in MAT
workflows. Microfluidic immunoassay systems use cartridge-based nanochannels to perform automated
sandwich immunoassays for cytokines like IL-6 or IL-1β with much lower reagent volumes and faster read
times. Reporter-gene assays instead detect NF-kB activation in engineered monocytic cells using
luminescent or fluorescent reporters, providing earlier pathway-level detection without antibody assays.
Nucleic-acid–based MAT (NAT-MAT) measures cytokine mRNA induction using qPCR or digital PCR as
a rapid transcriptional readout of monocyte activation. Emerging microfluidic and single-cell platforms
further miniaturize these concepts, integrating immune stimulation and cytokine detection on chip to reduce
assay time and sample volume while enabling higher-throughput pyrogen screening.

### 4.3 Quantitative Measurement Principles and Approaches

The primary objective of quantitative methods is to detect and quantify the presence of contaminating
microorganisms, which can be used in risk assessments and may prohibit the use of the material or product.

#### 4.3.1 Imaging and Optics

Technologies using an ultra-high definition camera or three-dimensional (3-D) optical scanning can be used
to detect and quantify microcolonies. High-resolution images taken at frequent intervals (automated kinetic
counting) distinguishes growing colonies from debris by analyzing multiple images over time, and
according to kinetic counting suppliers (i.e., personal communication), this could lead to a potential
reduction of 50% less incubation time relative to human-based observation of colony growth. This approach
allows for precise quantification and standardization of counts, facilitating early notifications of limit
excursions, such as exceeding alert or action levels, as well as identifying out-of-specification results as
soon as they are detected. Additionally, 3-D optical scanning enables high-resolution detection of colony
formation and early identification of microcolonies.
Light scattering is a phenomenon in which the propagation of light is disturbed by its interaction with
particles. Instrumentation that utilizes Mie scatter (i.e., where the scattered light intensity is dependent upon
the particle size in a certain size range) and fluorescence detection can provide information about the size
and number of viable microorganisms in an air or water sample, with the increased use of machine learning
(ML) and algorithms used to interpret microbial presence.

#### 4.3.2 Fluorescent Probe Application

Viability-based technologies use metabolizable stains in combination with laser excitation for the detection
and quantification of microorganisms, without the need for cellular growth. Viability-staining and laser-
excitation can be used to detect and quantify single metabolizing cells and microcolonies. Using this
approach, organisms that are stressed, injured, fastidious, or considered VBNCs may now be detected when
these same organisms will not grow in or on conventional microbiological media. These types of

technologies can be used for a variety of applications (e.g., microscopy, solid-phase and flow cytometry)
that require the detection and enumeration of microorganisms, such as bioburden and microbial-limits
testing, EM, process-water analysis, and sterility testing.
While providing broader detection capabilities, the accuracy of these technologies is dependent on signal-to-
noise ratios and the specificity of the stain for the target metabolic activity. These platforms are applicable to
microscopy, solid-phase cytometry, and flow cytometry for tasks such as bioburden testing, environmental
monitoring, process-water analysis, and sterility testing, provided they are validated against compendial
methods for equivalent recovery.

#### 4.3.3 Autofluorescence

Cellular autofluorescence is a property of all viable cells due to the presence of ubiquitous fluorescent
biomolecules like NADH and riboflavin. Microbes emit autofluorescence when such endogenous
fluorophores are excited by certain wavelengths of light. For example, microbes can emit autofluorescence
in the yellow-green spectral region when illuminated with ultraviolet (UV) blue light due to the excitation of
biomolecules including flavins, riboflavins and flavoproteins. An AMM/RMM example where
autofluorescence is used is a digital imaging system that uses autofluorescence to enumerate micro-colonies.
In such a system, test samples may be filtered, and the membrane is placed onto an agar surface and
incubated. During this time, a light-emitting diode (LED) excites microcolonies to emit autofluorescence,
which are then quantitated using a charge-coupled device (CCD) imaging system. Incubation can continue
to allow for the recovery of larger colonies for subsequent analysis, such as microbial identification.
Additionally, metabolizable fluorochromes can enhance signals from metabolically active colonies,
improving method sensitivity.

#### 4.3.4 Flow Cytometry

Flow cytometry quantifies microbes as they pass the light source and detector in a defined flow path. In-line
execution can excite existing cell chemistry (e.g., amino acids, nicotinamide adenine dinucleotide plus
hydrogen (NADH), and riboflavins) often referred to as biofluorescent particle counters (BFPCs) or use a
microbe-specific fluorophore for direct staining or metabolic activation (67). The detection of the emitted
fluorescence provides confirmation of the presence and enumeration of a biological particle or microbe in
the flow. Given known flow rates, the number of fluorescent particles per volume can be estimated.
Fluorescence excitation is enabled using a laser or LED of a specific wavelength with detection of the
emitted light measured via a wavelength-specific detector (e.g., photo multiplier tube or CCD). For in-line
flow systems, the distance between the light source and detector is limited by the optics used and the
transparency of the carrier fluid. With cell-based chemistry, the discrimination of microbes relative to other
interferant biological materials present in the sample makes validation and a direct correlation to cell count
challenging for intended use (e.g., process monitoring or trending).
The use of a fluorescent probe, whether it is a direct stain or a metabolized stain, often limits the volume of
the test samples (in mL), and preincubation of the sample with the stain prior to measurement is necessary.
Additional sample-processing, such as filtration, may also be required to remove interfering fluorescent
substrates. The incubation of the sample with targeted stain, whether a direct (live/dead) stain or the use of a
nonfluorescent precursor that is enzymatically cleaved by a viability-indicator enzyme (e.g., esterase present
in an intact metabolizing cell) to fluorescently label the cell, improves the differentiation of microbes versus
other interferant materials. This differentiation can be further enhanced by equipment designed with narrow

channels, such as microfluidics, which reduce the light-path length and allow for the testing of a wider
variety of materials, including powders and opaque fluids.

#### 4.3.5 Solid-Phase Cytometry

Solid-phase cytometry relies on capturing microorganisms on a solid phase (e.g., a membrane filter) and
incubating the sample with either a direct (e.g., DNA-specific dyes) fluorophore, labelled antibodies, or
metabolite-sensitive fluorophores to indicate microbial presence. Microorganisms retained on a membrane
are exposed to an excitation light source (e.g., LED or laser) at a defined wavelength, inducing fluorescence
from viable cells or labeled particles. The emitted fluorescence is subsequently detected through an imaging
or scanning system, such as a CCD-based camera or a photomultiplier tube, or analyzed by artificial
intelligence (AI), enabling enumeration of viable microorganisms and/or total particles through image
analysis.
As with flow cytometry, extended contact and incubation times can be used to maximize the signal from
these fluorophores, track metabolic activity, enhance cellular recovery for slow-metabolizing or injured
cells, and further differentiation relative to nonfluorescent, inert particles present in the sample. Sample
considerations include the removal of interferant chemistries (e.g., fluorescent chemistry, excessive
particulates), which may obscure viable particles in the image, and the impact of fluid/carrier characteristics
on the technique (e.g., the filterability of the sample) (49, 68).

#### 4.3.6 Hybrid Quantitative Identification Platforms

Hybrid technologies now exist that combine spectroscopic and spatial signatures for the detection of
microorganisms using transformer-based multimodal spectral imaging. This platform enables label-free,
non-growth-based analysis of individual cells to the species level, providing both quantification and
identification simultaneously.

### 4.4 Identification Techniques, Principles, and Approaches

Microbial identification is determining the identity of a pure culture to genus, and preferably to species or
subspecies, if required, using phenotypic or genotypic methods. As all identification methods have
limitations due to their underlying technology and the defined scope and level of verification of the
databases using other methods, and as there is no compendial microbial identification method, there is no
reference method for comparative purposes. Hence, the validation frameworks described in USP ⟨1113⟩ and
Ph. Eur. 5.1.6 are appropriate for microbial identification validation. Performing a verification or fitness-for-
use approach as described in USP ⟨1113⟩ and Clinical Laboratory Standard Institute (CLSI) M52
Verification of Commercial Microbial Identification and Antimicrobial Susceptibility Testing Systems is
recommended (69).
This verification would involve identifying a number of laboratory cultures appropriate for intended use of
the instrument, followed by parallel identification of a consecutive number of in-house isolates using the
CMM and new AMM/RMM identification method. Any discrepant results would be resolved by an
independent testing laboratory and justified, based on the limitation of the technology and database, and
possible changes in microbial taxonomy.
Once identified, an organism can guide risk management regarding material disposition.

For most AMM/RMM approaches, identification often requires an additional laboratory processing step
once contamination using qualitative or quantitative techniques has been confirmed. Many identification
techniques require further activation, enrichment, and purification of the source contamination for accurate
identification.
The discrimination of the identification technique requires evaluation against a range of organisms related
and relevant to your process (70). Conventional biochemical identification techniques can still provide a
quick means of providing insight into the type of organism; however, the expansion from biochemical,
metabolism-based analysis to colorimetric, analytical-based (spectral analysis) and molecular approaches
has increased the speed and accuracy with which the specific identification of a microorganism can be
made. Beyond the techniques summarized in Sections 4.4.1–4.4.5, the application of well-developed
analytical techniques (e.g., Raman, FT-IR, GC-MS) and proteomic-based techniques (e.g., MALDI-TOF
MS) used in microbial identification are only limited by their ease of application, the simplicity of their
execution, and their relation to established databases similar to how DNA/RNA-based identification
techniques have developed.

#### 4.4.1 Hyperspectral Imaging

Hyperspectral scanning is an imaging technique that can be used as a presumptive identification approach
and can be combined with the enumeration of colonies/microcolonies immobilized on a surface (e.g., agar
plate/filter). This imaging technique uses a hyperspectral camera to detect color variations in the colonies
across wavelengths that can cover the visible and near infrared regions (400–1,000 nm).
This technique relies on comparison to a reference, such as an internal database, to confirm genus- and
species-level identifications. However, it may face limitations due to the availability and number of captured
wavelengths, especially where these wavelengths are fixed.

#### 4.4.2 Matrix-Assisted Laser Desorption/Ionization Time-of-Flight Mass Spectrometry

Mass spectrometry systems, such as the MALDI-TOF MS, are used for microbial identification. Detection
of specific microorganisms is an option, too, but the main application of MALDI-TOF MS is the
identification of microorganisms. MALDI-TOF MS is an analytical technique in which analytes are
separated and detected based on their mass-to-charge (m/z) ratio. Sample preparation typically involves one
of three methods:
•
Direct Transfer Method: A small amount of a pure culture is applied directly to a target plate,
followed by coating with a matrix solution (usually cinnamic acid). This method is recommended
for bacterial identification.
•
Extended Direct Transfer Method: Formic acid is added to the sample on the target plate prior
to coating with the matrix. This optimized procedure is recommended for the identification of
bacterial isolates.
•
Formic-Acid Extraction Method: The isolate to be analyzed is purified in several steps by the
addition of ethanol, formic acid, and acetonitrile before being applied to the target and coated with
matrix. This procedure is recommended for the analysis of molds and yeasts.
After sample preparations, the procedure for each method is the same; during the crystallization of the
matrix, the microorganism is embedded into the crystal structure. In the MALDI-TOF MS instrument, the
sample spot is hit with a pulsed beam from a solid-state laser under a high vacuum. This vaporizes the

matrix explosively and entrains the components of the microorganism (i.e., proteins) to establish the mass to
charge ratio of the components.
The high energy of the laser favors the formation of ions, which are then accelerated in an electric field due
to their charge. Subsequently, in a voltage-free field (i.e., flight tube), the separation of the analyte
components takes place depending on their mass. The mass-to-charge ratio of individual particles of the
microorganism determines the time of flight, that is, the time required for the particle to reach the detector
after evaporation. Characteristic mass spectra result from the determination of the time of flight. Thus, for
most bacteria, yeasts, or fungi—considering the fingerprint range between 4,000-12,000 Da—partly
species-specific spectra can be distinguished. An automated comparison of the spectra generated by
MALDI-TOF MS with a reference database is then carried out using software designed for this purpose.

#### 4.4.3 Fourier-Transform Infrared Spectroscopy

Fourier-transform infrared spectroscopy (FT-IR) is an analytical technique used to capture high-resolution
infrared spectra emitted or absorbed from a microbial cell. The sample is irradiated with infrared radiation,
and the resulting spectrum is a plot of the intensity of the transmitted or reflected light as a function of
wavelength. Comparing the microbial spectral profile to a database of known organisms allows for the
identification and characterization of the organism being examined and is applicable to bacteria, fungi, and
viruses.

#### 4.4.4 Raman Spectroscopy

Raman spectroscopy is an established analytical method based on the Raman-scattering properties of a
material under evaluation. When laser light interacts with the sample, molecules are excited, resulting in a
photon-energy shift related to molecular vibrations and rotations. The collection of the Raman-scattered
light results in a unique spectral fingerprint, which is characteristic of the composition and molecular
structure of a microorganism when immobilized on a surface (e.g., a filter). Comparative software and
curated reference databases facilitate accurate identification in less than 15 minutes.
Because this is a chemistry-based technique, additional considerations are required for sample analysis,
including selection of the appropriate immobilization background (e.g., Raman-negative filter/solid phase)
and the subsequent isolation and removal of interferant chemistry from the targeted organism. This is
important as these sample analysis considerations may impact the quality of the Raman spectrum.

#### 4.4.5 Nucleic Acid Amplification Techniques

NAT employ a variety of scientific principles including, but not limited to, DNA-based PCR (e.g., touch-
down PCR, real-time PCR, digital drop, and digital PCR), RNA-based reverse-transcriptase amplification,
16S rRNA typing, gene sequencing, and other novel techniques.
Many of these methods will detect the presence of a specific microorganism, such as an “objectionable” or
pharmacopoeia-specified organism, or can provide a microbial identification, in some instances, to the strain
or subspecies level. Additional methods can be used to estimate the number of viable microorganisms in a
sample based on the number of amplification cycles or copy numbers required to reach a baseline or
threshold level. Because there are many methods and systems based on NAT, it is not possible to cover all
the scientific principles in TR 33; therefore, a brief example of key methods is provided, and additional
information may be found in the literature and in online resources (36, 71-74).

It is important to distinguish microbial taxonomy from routine identification used in pharmaceutical
microbiology laboratories. While taxonomy focuses on phylogenetic classification based on conserved gene
regions (e.g., 16S rRNA or ITS), such sequence lengths may be insufficient to resolve closely related
species. As a result, higher-resolution technologies, including whole-genome sequencing, have increasingly
been adopted where greater discriminatory power is required (55).

##### 4.4.5.1 Polymerase Chain Reaction

In a conventional PCR reaction, DNA is extracted from microorganisms (e.g., from an isolated colony on an
agar plate) and heated to separate the double strands. DNA primers are then added that will bind to unique
target sequences on the template DNA. The primer is elongated when a heat-stable DNA polymerase and
nucleotide bases are added. The result is two new copies of the template DNA. This PCR process is then
repeated, resulting in millions of copies of the target DNA. After the amplification step, the amplified
nucleic acid targets must be analyzed using several techniques: amplicon detection/analysis in gel
electrophoresis, detection by hybridization techniques (e.g., fluorescent-in-situ-hybridization or microarray-
based techniques), or DNA-sequencing.
Real-time PCR uses unspecific nucleic-acid intercalating fluorescence dyes or target-specific probes
labelled to detect the amplified nucleic acid after each amplification cycle but also allows a quantification of
the target at timepoint t0. There are many different types of probes that bind to double-stranded DNA or to
specific sequences as they amplify and accumulate in the test system. The increase in fluorescent signals is
then detected. As an example, if a sample contains a DNA target sequence associated with a particular
microorganism, following PCR amplification of that target, the fluorescence signal from the probe will be
detected, and the system will provide a positive response for that microorganism. If the target is not present
in the original sample, then no amplification will occur, and no fluorescence will be detected (above the
threshold or background level). If the method uses real-time quantitative PCR, the DNA amplification
reaction is measured as it occurs. Typically, fully automated real-time PCR systems are used, which reduces
the hands-on time.
Digital PCR systems separate the sample to be tested into thousands of partitions using either nano well
plates (with 20,000 partitions of 45 μL, 28,000 partitions of 30 μL, or even 100,000 partitions of 15 μL) or
into droplets (digital droplet PCR). In these little partitions, the amplification using fluorescent probes takes
place. After the amplification step, the nano well plate partitions or the droplets will individually be assessed
for fluorescence. Partitions or droplets containing amplicons are detected by fluorescence and scored as
positive. Partitions or droplets without amplicons are scored negative. A Poisson statistical analysis of the
number of positive and negative partitions or droplets allows a quantitation of the target sequence.

##### 4.4.5.2 Reverse Transcriptase Polymerase Chain Reaction

Reverse transcriptase PCR (RT-PCR) uses RNA, instead of DNA, as a starting template for the PCR
reaction. In this process, RNA is extracted from the cell, and the enzyme reverse transcriptase will create a
complementary strand of copy DNA (cDNA). Ribonuclease H (RNase H) treatment will then remove the
original single strand of RNA. A second primer and DNA polymerase is then used to create double-stranded
cDNA, which will be used in the conventional PCR reaction previously described in Section 4.4.5.1. RT-
PCR has some advantages over conventional PCR, such as a lower risk of contamination from nonviable
cell DNA or residual DNA from the sample or work environment. RT-PCR is currently being used for the
detection of specific types of microorganisms, such as viable, proliferating microorganisms, as well as the
estimation of viable cell count.

##### 4.4.5.3 Gene-Sequencing

Gene-sequencing is used for the identification of a wide variety of microorganisms, including bacteria,
yeast, mold, and Mycoplasma. The scientific principle involves sequencing each nucleotide base of a
specific DNA target after PCR amplification. Typically, the first 500 base pairs (bp) of the 16S rRNA gene
are used for the identification of bacteria, although the entire, approximately 1,500 bp long 16S rRNA gene
has also been employed for greater accuracy. Sometimes, the 23S rDNA gene is sequenced to identify
bacteria. Fungi, yeast, and molds are identified using the D2 region of a large subunit ribosomal RNA gene
sequence. DNA is first extracted from a pure culture of cells and then amplified via PCR in four separate
reactions—one reaction for each of the four deoxynucleotide bases: adenine (A), thymine (T), guanine (G),
and cytosine (C). However, a mixture of these standard nucleotides and dideoxyribonucleotides (ddNTP)
are used, where the latter nucleotides lack a 3'-hydroxyl (-OH) group on their deoxyribose sugar.
When a ddNTP is randomly incorporated during the amplification reaction, elongation of the PCR primer is
terminated. This provides DNA fragments of varying lengths. Because each ddNTP is labelled with a
different fluorescent dye, a series of fluorescently labelled copies of the amplified sequence, each
terminating at a different base, is formed. These copies differ in molecular weight and can be separated and
detected (based on their fluorescence) during gel electrophoresis of the reaction mixes. By simultaneously
analyzing each of the four reaction mixes, representing the four deoxynucleotide bases, software within the
gene-sequencer will reconstruct the linear arrangement of these bases in the sequence being analyzed. The
resulting sequence is then compared with a library of known microorganism sequences and, if a sequence
match is found, a genus and species identification are provided.

##### 4.4.5.4 Next-Generation Sequencing

Next-generation-sequencing (NGS), also known as whole-genome-sequencing or high-throughput-
sequencing, are novel technologies in nucleic acid analysis. In contrast to previously known sequencing
methods, several hundred million fragments can be sequenced simultaneously in a sample and compared
against a known library. NGS involves integration of fluorescently tagged deoxyribonucleotide
triphosphates (dNTPs) into a DNA template strand during cycles of DNA synthesis. Fluorophore excitation
at the addition of each nucleotide is used to identify the nucleotides during each procedure.
While NGS offers increased resolution and broad detection capability, interpretation of results from
complex or mixed microbial populations may be challenging. Because NGS-based approaches sequence all
nucleic acids present in the sample including background flora, non-viable organisms, and host-derived
DNA, careful consideration must be given to data analysis strategies, relevance of detected organisms, and
alignment with the intended application.

## 5.0 The Validation Process

There are multiple definitions of validation within the pharmaceutical industry. For example, ICH Q2(R2)
states that “The objective of validation of an analytical procedure is to demonstrate that it is suitable for its
intended purpose” (2). In modern regulatory practice, validation is understood as a lifecycle activity that
extends beyond an initial validation study and includes continued assurance of method performance during
routine use.
The validation of AMM/RMM should therefore be conducted within this lifecycle framework. In addition to
demonstrating suitability for intended purpose, validation activities should ensure that the method,
equipment and instruments, associated software, supporting systems, and test procedures or process
workflows remain capable of consistently delivering reliable results throughout their operational life.
Accordingly, this technical report provides guidance on a holistic approach to the validation and
implementation of AMM/RMMs and their associated systems.
Many different approaches have been used successfully for the validation of AMM/RMM, many of which
have been accepted by regulatory authorities. While examples of specific validation strategies are provided
here in Section 5.0, it may be necessary to modify or customize these strategies to address a specific
technology, method, or application.
For the purposes of validation, AMM/RMM may be classified as qualitative (e.g., presence/absence assays)
or quantitative (e.g., enumeration assays), and the applicable validation criteria will differ accordingly.
However, minor differences exist among current guidance documents, USP ⟨1223⟩, and Ph. Eur. 5.1.6
including terminologies, procedures employed during the validation process, data interpretation, acceptance
criteria, and the use of statistics (56). Therefore, the purpose of this current version of TR 33 is to help
potential users of AMM/RMMs to appropriately select and understand the performance parameters
requiring validation for any new method. The goal is for one strategy to be acceptable in all geographic
regions, by all regulatory authorities and, most importantly, to be scientifically defendable and justified.
It is also strongly recommended that the appropriate regulatory agencies be contacted and involved early in
the decision-making process for both the validation activities and the implementation of an AMM/RMM
that will be used during the manufacture of pharmaceutical products.
Table 5.0-1 outlines the main validation activities and qualification deliverables and the portion of Section
5.0 where each is discussed.

**Table 5.0-1 Validation and Qualification Deliverables and Responsibilities**

Validation/Qualification Deliverables
Responsibility
TR 33
Section
Supplier
End User
Proof of Concept (POC) Studies
Execute upon
request of end user
Review and assess supplier’s primary
validation study
or
Execute
5.1.2 User Requirement Specifications (URS)
Support end user
Execute

#### 5.1.3 Supplier Audit, Business Case, and Risk

Assessment
Support end user
Execute
5.1.4 – 5.1.6
& 3.5
Design Qualification (DQ)
Execute
and
Support end user
Review and assess supplier URS/DQ
or
Execute, in case it does not exist for the
intended use

#### 5.1.7 Validation Master Plan and Associated

Documentation
N/A
Execute
5.1.8
5.2.1 – 5.2.2
Equipment IQ/OQ/PQ, including System
Integration and Computer System Validation
(CSV)
Execute IQ/OQ/PQ
and
Support system
integration and CSV
Review and assess IQ/OQ/PQ protocols, data
and reports1
and
Execute system integration and CSV
5.2.3 – 5.2.6

Validation/Qualification Deliverables
Responsibility
TR 33
Section
Supplier
End User
Primary Validation
Execute
Review and assess supplier primary validation
or
Execute, in case the method is other than the
one validated by the supplier or if no primary
validation exists
5.3 – 5.4
Evaluation of Validation Parameters in the
Absence of Product or a Test Sample
N/A
Execute

#### 5.3.1 Method Suitability Testing

N/A
Execute

#### 5.3.2 Comparability Testing in the Presence of

Product or a Test Sample
N/A
Execute

#### 5.3.3 Ongoing Maintenance and Periodic Reviews

Execute
maintenance
Introduce change control process and
maintenance program
5.4.14
1Based on the assessment, the end user may decide to perform additional studies

### 5.1 Pre-Validation Activities

A variety of activities may be successfully completed prior to initiating validation of the system, as some of
these tasks are critical to the subsequent validation activities required. Completion of these tasks can aid in
completing a successful validation and, hopefully, reduce the number of deviations and amount of retesting
that may become necessary during the validation activities.
Suppliers are responsible for providing end users a clear description of their technology, the scientific
principle for microbial detection, the intended applications for its use, the materials and equipment needed
for the test method, and expected data output or signal when detecting, counting, or identifying.
microorganisms. If an end user requires information on test-sample suitability prior to the start of validation
or the selection of an AMM/RMM, the end user can work with suppliers to perform feasibility or POC
studies to generate this information.

#### 5.1.1 Proof of Concept

The AMM/RMM selected for use should initially be evaluated to ensure confirmation of POC, feasibility, or
principle (i.e., assessing whether the method and accompanying system is compatible with the intended
product or sample matrix). This POC phase is most appropriate if the method supplier has no supporting
data on similar products, sample matrices, or types of microorganisms that the end user will routinely test;
therefore, POC testing, if required, should be conducted prior to making the final decision to purchase the
equipment or instrumentation. POC would also allow for mitigation of potential issues with the instruments
and method customization for the intended use. This activity can be conducted by the end user or the
supplier of the system or method. For example, the products or other sample matrices for evaluation during
POC testing and, when appropriate, the number and types of microorganisms chosen to challenge the new
method should be carefully selected in order to ensure that the method is compatible with the product matrix
of the sample(s) to be tested, and the resulting data provides a compelling indication that the validation of
the intended method and accompanying system will have a high probability of success.

#### 5.1.2 User Requirements Specifications

The URS is a key document that explicitly describes the characteristics of the method that will be required
for routine use. As such, the content of the URS may well determine the success or failure of the method
selection process. The specification is typically prepared by the end user; however, it is important to seek
input from other internal stakeholders, such as Regulatory Affairs, Quality, Information Technology, and
other relevant validation groups, as well as potential suppliers of the method. Many AMM/RMM suppliers
possess their own system specifications, often referred to as an External Specification or Supplier URS.
Careful review and comparison of the supplier’s URS and the end user’s URS may help identify criteria not
included in one or the other that may be critical performance characteristics to be considered during the
system selection process. This may include not only the microbiological aspects of the method and
accompanying system, but also throughput, automation, environmental requirements, supplier expectations
and communications, and computer system capabilities (e.g., LIMS interface, data management). In cases
where the end user requires a very specific workflow (e.g., based on sample matrices and/or applications),
the URS may serve as a starting point for additional performance characteristics that the end user and the
supplier may need to consider and/or develop.
The URS will also be the starting point for establishing the validation criteria that will be tested by the end
user. Therefore, the URS should describe the functions the method and accompanying system must be

capable of meeting that will be very specific to the end user’s needs and the materials to be assessed.
Essentially, the requirements specified in the URS will directly influence the entire strategy for validation
and acceptance criteria.

#### 5.1.3 Assessment of Supplier Capabilities/Supplier Audit

The ability of a potential supplier to meet the specified requirements (e.g., as outlined in the User
Requirements Specification (URS) is very important (see Section 5.1.3). Within the framework of the URS,
suppliers for AMM/RMM technologies should be scrutinized for their ability to provide high-quality
instrumentation, reagents and consumables, software, and technical support. Suppliers should have an
appropriate quality system in place for designing, manufacturing, testing, and releasing equipment, software,
reagents, and consumables throughout the technology lifecycle. Additionally, suppliers may provide
technical documentation, training, validation support, troubleshooting, calibration services, preventive
maintenance programs, and/or field service support. To ensure that the suppliers meet the user’s internal
quality requirements, as well as good practice guidelines, the end user should evaluate each supplier to
ensure their ability to meet these expectations. Supplier assessments or audits may be conducted through a
review of relevant documentation provided by the supplier and/or a physical audit at the supplier’s
manufacturing, design and development, and testing facilities.
Some of the assessment areas that should be the focus of an audit include, but are not limited to:
•
Quality assurance procedures and standards, including change control and ISO certification
•
Results from other audits (regulatory or other users)
•
Financial stability
•
Availability to provide instrumentation
•
Ability to provide an uninterrupted supply of reagents and other consumables
•
Ability to respond to field issues of a technical nature
•
Ability to provide equipment maintenance
•
Training and validation support and associated documentation
•
Supplier’s internal validation procedures and data
•
Management of software updates, including the impact on validation activities
Additional information that may support the justification of implementing the supplier’s technology may be
requested, such as peer-reviewed publications, user manuals, and other relevant documentation.
Some suppliers may also have submitted additional technology performance information to FDA in the
form of a Master File. The contents of the Master File are confidential and available only to the FDA.
Master Files typically include proprietary information specific to the technology or data from validation
studies. For example, certain types of validation studies, such as ruggedness and robustness, may be
performed by the supplier and included in a Master File. End users may request a letter of authorization
from the supplier to allow the FDA to reference the supplier’s Master File to supplement their own
submissions to the FDA, when appropriate (75). Other regulatory authorities, such as the EMA and other
agencies, may not have a Master File process in place for AMM/RMM method suppliers. In these cases, it
may be appropriate to obtain validation data directly from the suppliers and include those in the end user’s
validation package (75).

#### 5.1.4 Business Benefits or Return-on-Investment Considerations

Based on the POC evaluation and other pre-validation activities, a thorough analysis should be conducted to
determine the technical appropriateness of the AMM/RMM for its intended use. Additionally, a ROI
analysis may also be helpful to support or justify the business case for purchasing the equipment and its
subsequent validation and implementation for routine use (see Section 3.4). The final instrument selection
and purchase should, of course, take place before initiating validation.

#### 5.1.5 Risk Assessment and Validation Planning

In keeping with the principles of QRM, the first deliverable of any validation exercise should be a
documented risk assessment (see Section 3.5). Risk assessments should follow established QRM principles,
be structured and documented, and be commensurate with the intended use and impact of the AMM/RMM.
Critical method steps and parameters, technical and scientific risks on method performance, and the
resulting data should be considered in this assessment. The outcomes for the risk assessment should identify
critical functions and potential failure modes, which in turn can be used to define the scope and depth of
validation activities required.
The next phase is the development of an overall strategy, a validation plan. The end user is responsible for
ensuring that the validation plan is appropriate and correctly documented. Depending upon an end user’s
requirements, the validation plan may or may not include pre-validation activities (see Section 5.1).
When it is determined that the new method requires validation, then an approved validation plan should be
followed that will govern the process from beginning to end and will detail precisely what activities are
necessary to produce an appropriately validated system. Another key component of the validation plan is the
definition of system validation responsibilities, such as the identification of the individuals, organizations, or
departments responsible for performing, reviewing, and approving the work. The validation plan should also
specify how deviations from the approved testing strategy are handled, documented, reviewed, and
approved. There are also situations where validation responsibilities may fall on both the end user and the
supplier of the new method.

#### 5.1.6 Design Qualification

Design qualification (DQ) is the documented review and verification that the proposed design of the
equipment or system is suitable for its intended purpose, including meeting GMP compliance. Therefore,
the DQ is most critical if no commercial off-the-shelf equipment is available for the intended application
and must be specifically designed for that purpose. DQ would typically consider material, instrument, and
test specifications and capabilities and maintenance and cleaning possibilities. However, since most
AMM/RMM systems are commercial off-the-shelf equipment, the DQ serves to verify that the equipment
specifications will meet the requirements identified in the URS. The DQ may also take data from POC
testing into consideration, when appropriate. While this is termed “qualification” and is part of the
qualification process, the DQ activity typically occurs prior to the purchase and validation of the method and
accompanying system.
The DQ can be performed by the end user or the supplier; however, the end user is responsible for verifying
that the method and accompanying system meet the requirements specified in the URS. The methods for
accepting the DQ and an instrument’s suitability for use will be determined by the nature of the instrument,
the complexity of the proposed application, the complexity of the software used for instrument operation

and data analysis, and the prior history with the supplier. Supplier audits, review of documentation provided
by the supplier, and/or direct examination of the system can satisfy the DQ requirement.

#### 5.1.7 The Validation Master Plan

The Validation Master Plan should include a documented roadmap including development studies of all the
performance functions and requirements for the method and accompanying system, and identify what will
be tested to ensure that the method and accompanying system performs as specified in the URS. The
Validation Master Plan may include microbiological and performance characteristics such as system and
method functionality, configuration, input/outputs, environmental conditions, utilities, computer and
communication architecture, interfaces, data management, and security. The specific test scripts where each
performance function or requirement will be evaluated and verified against preestablished acceptance
criteria are usually contained within the relevant phases of the Validation Master Plan, namely, the IQ, OQ,
PQ, and Method Validation, including Method Suitability and Comparability sections. The Validation
Master Plan may be written by the end user, the supplier, or both parties and may also be incorporated into
other relevant documents depending on a company’s validation requirements or preferences.

### 5.2 Equipment and Software Qualification and Validation

The functionality of an AMM/RMM involves the entire system; therefore, prior to validating the
AMM/RMM, the testing equipment or instrumentation should be qualified, and the associated
software/computer system should be validated. For this process, an adaptation to the Analytical Equipment
Qualification Model may be used (76).
The steps described in Section 5.2 provide a useful framework that can be applied to the equipment
qualification and method validation of a complete system, that is, all the components of the new test method
including any instrumentation, software, firmware, and reagents. This will guide the end user through the
process steps involved both in the decision-making and the practical work required for implementing a new
AMM/RMM analytical instrument and associated method(s).
Note: The framework provided here reflects a highly detailed approach, and some end users may not
consider some of the deliverables a requirement for commercial off-the-shelf equipment (e.g., conducting a
design qualification). As such, the overall validation strategy for a particular method should be evaluated in
a risk assessment and documented in the validation plan (see Section 5.2.1).
Not all the activities in each section need to be carried out in serial order; as such, parallel path activities can
occur (e.g., combining the installation qualification (IQ) and operational qualification (OQ), if appropriate).
However, some activities should not begin until previous activities have been completed, for example, the
PQ should be initiated only after the OQ acceptance criteria have been met, and this phase of the validation
plan has been reviewed and approved.
Finally, it may not be possible to verify every feature associated with every piece of equipment. Therefore, a
decision should be made regarding the relevance of testing those features of the system (e.g., during the IQ
and OQ) that will not be used during the routine use of the new test method. One way to address this type of
concern is to obtain a certificate of conformance for those features within the instrument received from the
supplier of the system. Alternately, the validation plan should specifically exclude those features and the
reason they will not be tested. For example, a system may offer the option to document assay parameters via
a thermal printer or a regular printer. Depending on which option an end user decides to pursue, the other

may not be applicable and, therefore, not in scope for testing. Similarly, if a computer function will not be
used routinely, then that computer function may not need to be tested during computerized system
validation.

#### 5.2.1 Documentation of the Validation Protocol

The execution of the validation plan, test results, and verification that acceptance criteria have been met
must be adequately documented. Accordingly, relevant worksheets or checklists may be incorporated into
each of the validation plan phases (i.e., IQ, OQ, PQ).

#### 5.2.2 Documentation of the Working Procedure

Written procedures should be developed that specify the appropriate use of equipment or instrumentation,
method workflow, and other work instructions to allow for the proper and consistent execution of the
validation plan. These procedures may be captured in qualification protocols or standard operating
procedures, depending on the end user’s policies. Certain procedures may need to be in place and approved
for certain phases of the validation plan. The need for effective instructions is important so that personnel
can understand exactly how to perform the new test and operate and maintain the associated
instrumentation.
Additionally, the analysts who will conduct the validation and/or operate the system should be appropriately
qualified for these purposes. Therefore, training and developmental studies should be completed before the
validation activities begin; such training may be conducted in-house (usually during the initial
commissioning of the equipment) and/or at the supplier’s own training facility, when available.
Appropriate documentation of personnel training is important to verify compliance with regulatory
requirements.

#### 5.2.3 Computer System Validation and System Integration

For equipment or instruments that contain a computerized system, a computerized system validation must
be included during the equipment qualification. As per FDA Guidance for Industry and Food and Drug
Administrative Staff: Computer Software Assurance for Production and Quality System Software, software
validation is:
…confirmation by examination and provision of objective evidence that software
specifications conform to user needs and intended uses, and that the particular requirements
implemented through software can be consistently fulfilled (77).
System integration usually refers to information technology (IT), or computer systems, and involves
bringing together all of the component subsystems into a single operating system and ensuring that all of the
components of the system function appropriately. If the AMM/RMM technology requires connection to a
separate data management storage and retrieval system, such as a LIMS or similar platform, system
integration and validation between those various components may be required. In cases where the LIMS
supplier assumes responsibility for the interface, the instrument supplier may provide only the instrument
output in a predefined, documented format, while the LIMS supplier develops, configures, and validates the
interface logic independently.

#### 5.2.4 Equipment Installation Qualification

IQ studies should establish that the equipment is properly and safely installed with the correct utilities in an
appropriate laboratory or, in some cases, in a manufacturing environment. A significant part of IQ is a
verification that all new equipment was received and meets the design specifications for the equipment
ordered. Any exceptions to the original specifications should be documented, showing the corrected
specification and approvals. Also, it should note that an IQ is instrument-specific and portions of an IQ may
need to be repeated if the equipment is moved within the laboratory or to another user site. An exception to
this rule may be for instrumentation designed to be portable.
IQ studies should be performed in accordance with an approved protocol. Examples of the fundamental
types of information to be included in an IQ document include system descriptions, utility requirements,
operating environmental conditions, safety features, calibration requirements, software to be installed, and
supporting documentation (e.g., technical manuals, blueprints, drawings).
Computerized or microprocessor-controlled systems should also document important features such as dip-
switch settings, cabling connections, microprocessor chips used, computer configuration, any special
features of the equipment required, printer connections, buffers, files, and memory requirements. In
addition, the software required and its appropriate version numbers should be documented, including any
operating systems used by the computer.
The IQ may be carried out by the supplier during the initial installation or system integration of the
equipment and witnessed by the end user. However, depending on the extent of the supplier’s IQ, as
compared with receiving the end user’s validation requirements, a separate and more extensive IQ may also
be performed by the end user.

#### 5.2.5 Equipment Operational Qualification

The OQ verifies and documents that relevant system parts or functionalities (and, if applicable, associated
software) work within predetermined limits when operated in accordance with its operational procedures.
Typical OQ parameters may, for instance, be verification of specified heating or cooling rates and adequate
performance of probes, sensors, and optical systems or proper functioning of the user interface.
Furthermore, there is an expectation that any system that will be used to generate electronic records or
electronic signatures is appropriately validated for this use, for example, to generate records that are accurate
and reliable and can be appropriately maintained and accessed in compliance with the expectations in 21
CFR Part 11: Electronic Records; Electronic Signatures. Other examples of computer testing that may be
performed during the OQ include, but are not limited to, administrator control and operator access, user ID
and password setup, user and system lockout, data integrity, audit trails, report generation, system
integration, data transfer and server communication, data backup and recovery, database management and
integrity, and interference (radio frequency, electromagnetic or wireless). In addition to 21 CFR Part 11,
guidance and requirements regarding the validation of computer systems may be found in EU Annex 11:
Computerised Systems and ISPE Good Automated Manufacturing Practice (GAMP) (78-80).

#### 5.2.6 Equipment Performance Qualification

PQ provides documented confirmation that the equipment, as installed and operated in accordance with
operational procedures, consistently performs in accordance with predetermined criteria to yield appropriate

results. This may be demonstrated, for instance, through application of an experimental setup that may
encompass an appropriate selection and detection limit of test microorganisms.
Qualification can also be demonstrated by running assay controls depending on the technology (e.g., nucleic
acid standards such as exogenous and endogenous positive controls, no template, no amplification controls).
For the purposes of PQ, the assay controls may be considered representative samples of actual product
testing for the method. The parameters selected should be based on the method’s detection system and
suitability acceptance criteria. Normally, the supplier of the equipment will perform these types of studies to
generate “primary validation” data to demonstrate that the equipment is capable of detecting, enumerating,
and identifying microorganisms, depending on the intended application(s).
Microorganisms suspended in a suitable diluent are used during primary validation studies and are not actual
test samples or product, the latter of which are used during method suitability and comparability testing.
An end user may choose to perform additional testing to verify or supplement supplier-provided primary
validation data. It is the end user’s responsibility to determine when this type of additional testing is
warranted, for example, if an end user plans to use the method with different organisms of interest than the
supplier’s testing, if different incubation conditions (time/temperature) are desired, or if the end user’s
application is different from its original design or intended use (using a quantitative method as a
presence/absence method).

### 5.3 Primary Validation, Method Suitability, and Comparability Testing

The validation process for AMM/RMMs should result in documented evidence that the equipment or
instrumentation, as installed and operated in accordance with established sample preparation and workflow
procedures, consistently performs in accordance with predetermined criteria and thereby yields correct and
appropriate results.
Validation is performed in phases by both suppliers of AMM/RMM and stakeholders who will implement
the methods for routine use. These phases include primary validation by the supplier, method suitability in
the presence of the test sample, and comparability in the presence of the test sample. Each of these phases
are summarized in Sections 5.3.1-5.3.3.
Note: When a previously validated AMM/RMM is to be replaced by a new generation of the method or by
another AMM/RMM, which impacts the original validated state of the AMM/RMM or the previously
validated AMM/RMM’s comparability to the original CMM, then the new AMM/RMM to be implemented
must be validated against the CMM, not against the established AMM/RMM.

#### 5.3.1 Primary Validation

Primary validation is usually performed by the supplier, customarily in the absence of a test sample;
however, some suppliers may include common or universal test sample matrices to demonstrate test sample
suitability when introduced into the instrument or workflow. Suppliers should also provide the end user with
primary validation test data demonstrating the system and method that will detect, enumerate, and/or
identify microorganisms.
Primary validation should demonstrate that the workflow is adequate in obtaining the intended target to be
detected by the technology. This may include, for example, procedures for extracting cellular targets from
viable microorganisms, establishing minimum incubation times for enrichment steps, or activation

conditions for the uptake of viability stains. The use of surrogate targets, such as purified nucleic acids,
ATP, or standardized fluorescent beads, may also be used to demonstrate that the technology is capable of
detecting the intended target, as long as the target is appropriate for the technology.
The end user is responsible for reviewing and verifying the primary validation data to determine if the
information is sufficient to support the end user's validation plan.
Normally, the end user is not required to repeat a supplier's primary validation studies unless one or more of
the following apply:
•
Test method is employed differently than what is defined by the supplier
•
Equipment parameters are altered by the end user
•
Panel of organisms used by the supplier are not representative of the organisms relevant to the end
user's requirements
•
Supplier did not conduct any primary validation studies
In these instances, the end user would need to perform the primary validation using relevant microorganisms
and in the absence of product or actual test samples. End users may consider using surrogate analytes, as
appropriate for the technology, to demonstrate that alterations to the AMM/RMM still detect the intended
cellular target, as long as the method will continue to capture the target from viable cells for analysis.
When performing primary validation, the supplier should select the appropriate validation criteria to
evaluate (e.g., pertaining to a qualitative or quantitative method). However, because some AMM/RMM
applications may overlap (e.g., a method may offer both quantitative and qualitative capabilities), suppliers
should assess relevant validation criteria to demonstrate all of the intended applications.
For qualitative applications, the supplier should assess specificity (using an appropriate number of relevant
organisms), LoD, ruggedness (e.g., intermediate precision), and robustness.
For quantitative applications, the supplier should assess specificity (using an appropriate number of relevant
organisms), accuracy, repeatability (within-run variability), limit of quantification (LoQ), range, linearity,
ruggedness (e.g., intermediate precision), and robustness.
The supplier can also evaluate relevant validation criteria, in both the AMM/RMM and a CMM, which can
demonstrate, at a minimum, comparability. This information may provide the end user with a level of
confidence that the AMM/RMM will be an appropriate alternative to a CMM intended to be replaced by the
AMM/RMM.
For AMM/RMMs that rely on the growth of microorganisms, the supplier should establish minimum
incubation times when performing studies against the relevant validation criteria.

#### 5.3.2 Method Suitability

Method suitability testing is a product or test sample-specific validation that should be performed in the
presence of the test sample using the intended sample preparation steps and workflow for the AMM/RMM.
Each novel test sample or product formulation should be assessed for suitability (i.e., compatibility with the
workflow and instrumentation) unless otherwise justified via a risk assessment (e.g., when a prior study was
performed on a similar sample matrix, or a formulation with a higher concentration of a sample component,
such as an API). Where applicable, method suitability should account for product batch-to-batch variability.
The number of distinct batches evaluated should be scientifically justified, as differences in raw materials,
manufacturing conditions, or product age may influence microbial recovery, signal interference, or matrix

effects. In general, evaluation of three (3) independent batches is commonly considered appropriate, if
available, unless otherwise justified based on risk assessment and product knowledge.
Validated methods that are addressed in a compendial test chapter may necessitate specific method
suitability studies to be performed. End users should consult with the relevant pharmacopeias for additional
guidance and testing requirements.
Method suitability testing should be performed on a sample matrix prior to conducting intended use or
comparability studies using a relevant panel of microorganisms that have been chosen based on the type of
test being validated (e.g., compendial strains), frequency and type of previously recovered organisms from
the test sample (using the CMM), process, or the manufacturing environment or organisms that may present
a risk to product, process, and/or the patient). These studies demonstrate the suitability of the method to
detect and/or quantify microorganisms in the presence of the test sample.
A justification may be used to support not evaluating facility or environmental isolates or organisms
naturally occurring in the test sample if these are similar to compendial indicator organisms.
Alternatively, a separate method suitability study may not be required if the sample matrix is evaluated
during intended use or comparability testing, as long as a relevant panel of microorganisms is and the
concentration of the challenge organisms is within a numerical range usually used during method suitability
testing (e.g., less than 100 CFU, but not necessarily at the AMM/RMM's purported LoD or LoQ).
Method suitability testing should be performed during transfer of the method to a different facility to
demonstrate that the facility can perform the method appropriately. Additional method suitability studies
may be required, especially if local facility isolates pose a risk to the product, processes, or patient, and
those same isolates were not assessed by the initial test validation site. A risk assessment should be
performed to determine whether additional studies by the secondary facility are warranted (e.g., whether
local isolates not represented in the initial validation studies should be considered or to perform a limited
method suitability test to verify the method transfer was executed appropriately) (see Section 6.4).
Method suitability testing should demonstrate an absence of unacceptable enhancement of signals or
background noise (e.g., false positives) or the inhibition, masking, occlusion, or interference in detecting
viable microorganisms (e.g., false negatives). These studies are usually performed by the end user, but may
be contracted to an external party, such as the AMM/RMM supplier or a contract facility. For AMM/RMMs
that cannot be directly challenged by the end user (e.g., air-monitoring biofluorescent particle counters),
method suitability may be carried out under actual-use conditions, such as in a controlled environment
where the challenge levels are consistent, or by the supplier who has the capability of performing
standardized testing using a panel of microorganisms.
False-positive testing is performed in the presence of the test sample but in the absence of challenge
organisms.
False-negative testing is performed using a relevant panel of challenge organisms under actual-use
conditions.
Qualitative methods should demonstrate a positive response in the presence of challenge microorganisms.
Quantitative methods should recover at least 50% of the challenge microorganisms inoculated into the test
sample when compared with a control sample (e.g., a suitable diluent).

For AMM/RMMs that rely on the growth of microorganisms, the minimum incubation times established
during primary validation should be verified; otherwise, incubation times may need to be revised based on
the results obtained during method suitability or comparability testing (whichever incubation time is greater)
in the presence of the test sample.

#### 5.3.3 Comparability Testing in the Presence of the Test Sample

Comparability testing is usually performed by the end user in the presence of the test sample using the
AMM/RMM and the CMM. The intent of comparability testing is to demonstrate that the detection of
microorganisms in a qualitative method or the enumeration of recovered microorganisms in a quantitative
AMM/RMM is comparable, not statistically different than or superior to, the detection of microorganisms in
the CMM, depending on the statistical method used to compare the data (81). The validation criteria
assessed during comparability testing will be based on the AMM/RMM's application (e.g., LoD and
specificity for qualitative methods, accuracy, repeatability, LoQ and specificity for quantitative methods).
The choice of organisms used during comparability studies should be clearly justified by the end user and
based on a sound scientific rationale. This may be based on the frequency and type of previously recovered
organisms from the test sample (using the CMM), the type of test being validated (e.g., compendial strains
for pharmacopeial procedures monograph tests), environmental or facility isolates, organisms that are
relevant to challenging the AMM/RMM and the different workflows that may be required (e.g., different
media for growth-based methods), and/or organisms that may present a risk to the product, the process or
the patient.
A justification may be used to support not evaluating facility or environmental isolates or organisms
naturally occurring in the test sample, if these are similar to compendial indicator organisms.
It may be appropriate to justify reduced testing during comparability studies (e.g., when the availability of
test sample is limited). In this instance, the validation of an AMM/RMM to detect microorganisms in the
presence of the test sample would only require a comparison with the CMM at the detection limit of the
AMM/RMM in lieu of executing comparability studies covering all validation parameters. However, if
method suitability and full comparability tests are able to be performed on the test sample, this alternative
testing strategy would not be necessary.
Using an appropriate panel of microorganisms, an assessment against relevant validation criteria is
conducted in the presence of the test sample and only in the AMM/RMM. The selection of validation
criteria to be assessed can mirror what is performed during the primary validation for qualitative and
quantitative methods.
When a prior method-suitability test has been performed on the test sample using a relevant panel of
microorganisms, the end user may justify selecting a limited number of these same challenge organisms for
comparability studies (e.g., all the method-suitability test organisms do not need to be evaluated during
comparability studies). However, if a prior method-suitability test was never performed or the data
generated during comparability studies will also be used to support method suitability, the end user should
consider an appropriate panel of relevant microorganisms to support these studies.
The actual challenge level(s) for these studies are determined by the end user and may be based on the
intended test procedure or the required level of microorganism detection or recovery. For example, testing at
the AMM/RMM's purported LoD or LoQ may require a challenge level of 1–5 microbial cells or,
alternatively, a series of dilutions into the fractional range could be evaluated.

When the test sample is expected to contain naturally occurring bioburden, these organisms may also be
considered, given the target of the test.
Comparability testing for qualitative applications should be performed in the presence of the test sample and
should address specificity and LoD in the AMM/RMM and the method to which it is being compared.
Comparability testing for quantitative applications should be performed in the presence of the test sample
and should address specificity. The challenge concentration(s) employed should be relevant to the level of
microorganisms required to be recovered and quantified, which could be at or near the LoQ and/or at a
particular specification level.
For qualitative and quantitative applications, ruggedness (intermediate precision) may also be assessed.
Based on the AMM/RMM, however, depending on the type of product or test sample and the manufacturing
process, the results from ruggedness studies performed by the supplier during primary validation (in the
absence of product) may be used.
For AMM/RMMs that rely on the growth of microorganisms, the minimum incubation times established
during primary validation and/or method suitability testing should be verified; otherwise, incubation times
may need to be revised based on the results obtained during comparability testing (e.g., whichever
incubation time is greater).
When a test sample has successfully met the acceptance criteria for comparability, it may not be necessary
to repeat comparability testing for new samples that have a similar formulation or matrix. However, new test
samples that are fundamentally different in composition, may introduce background noise or interference, or
may affect the AMM/RMM to detect microorganisms may require comparability testing. An example may
be the difference between a human cell-based therapy versus an oligopeptide-based product.

#### 5.3.4 Unique Methods Requiring Additional or Modified Validation Strategies

The method validation testing strategies discussed in TR 33 primarily use standardized microbial cultures in
liquid suspension. The possibility exists, however, that some AMM/RMM detection systems may need to
consider different approaches, especially if a liquid suspension cannot physically be introduced into the
detection system for analysis. Technologies that use airborne, aerosol, or other nonliquid-based samples
may fall into this category. Therefore, expanding or adapting these validation strategies may be appropriate,
as long as the testing methods are scientifically justified. Because the end user may not possess the expertise
or specialized equipment to conduct such studies, the vendor may need to play a greater role in supporting
the end user during the validation of these types of technologies.

### 5.4 Recommendations for Conducting Validation Studies

Sections 5.4.1-5.4.11 provide recommendations for each of the validation criteria, including testing
procedures, acceptance criteria, and statistical analyses for quantitative and qualitative AMM/RMMs.
Validation testing may also be designed and executed where the data from one validation criteria study may
be used for several other validation criteria requirements. For example, the data derived during the test for
linearity may also be used for the test for accuracy.
Note: These recommendations are not all-inclusive, and suppliers and stakeholders may find alternative
strategies (e.g., revised, additional, or reduced testing based on risk assessments) that are also satisfactory

for use and accepted by regulators. In this instance, stakeholders are encouraged to discuss their validation
strategies with relevant regulatory authorities prior to initiating their proposed validation plan.

#### 5.4.1 Specificity

See the definition of specificity in Section 2.0.
Specificity is demonstrated when a relevant panel of microorganisms is used to challenge the AMM/RMM
during the assessment of other validation criteria (e.g., accuracy, repeatability, LoD, LoQ), and when
conducting method suitability and comparability testing. As such, there is no requirement to perform a
separate or dedicated specificity study.

##### 5.4.1.1 Specificity Testing Procedure

An AMM/RMM is generally expected to detect and/or enumerate a wide range of microorganisms unless
the AMM/RMM is specifically designed to detect a single target of interest (e.g., Staphylococcus aureus).
When selecting a panel of microorganisms, consideration should be given to the type of test being validated
(e.g., strains required for a CMM), limitations to the AMM/RMM under evaluation, the frequency and type
of organisms previously recovered from the test sample (using the CMM), the manufacturing process and
environment, and the organisms that may present a risk to the product quality, the process, or the patient.
Accordingly, microorganisms can include a variety of Gram-negative and Gram-positive rods, Gram-
positive sporulating bacteria, Gram-positive cocci, yeast, and mold.
For growth-based methods, the selection of organisms may need to demonstrate microbial detection in
different media and incubation conditions, based on the technology being assessed.
The concentration of microorganisms used will be dictated by the validation criteria being assessed.
For AMM/RMMs that will detect the presence/absence of specific target microorganisms, a relevant panel
should include the target microorganism and appropriate nontarget, unrelated, and closely related species to
demonstrate inclusivity and exclusivity, respectively.
An appropriate low concentration for inclusivity and an appropriate high concentration for exclusivity
testing must be used.
Organisms may be commercially sourced or established within the end user’s laboratory.
Pure cultures of a specific microorganism are generally utilized; however, if an AMM/RMM has
multiplexing or simultaneous detection capabilities, the use of mixed cultures may be considered to assess
this capability.
Specificity may also include demonstrating that nonviable cells are not detected by the AMM/RMM,
particularly for nongrowth-based technologies where detection of nonviable cells could be interpreted as a
false-positive result depending on the intended use. These types of studies may be most relevant during the
establishment of method suitability. End users should consider practical and appropriate procedures for
preparing nonviable cells (e.g., temperature treatment, exposure to biocidal agents).
The use of stressed organisms is not recommended, as there are no currently accepted global standards for
generating cultures in a stressed state.

##### 5.4.1.2 Specificity Statistical Analysis

The selection of appropriate statistical analyses will be dependent on the validation criteria the
microorganisms are being used to assess.

##### 5.4.1.3 Specificity Acceptance Criteria

Acceptance criteria will be based on the requirements of the validation criteria being evaluated.

#### 5.4.2 Accuracy

See the definition of accuracy in Section 2.0.

##### 5.4.2.1 Accuracy Testing Procedure

Separate dilutions of a relevant panel of microorganisms must be prepared within the practical range of the
quantitative test or to the enumeration levels required for the intended application. The number of separate
dilutions prepared should be justified. Examples of what may be considered include:
•
The end user’s microbial specifications, based on compendial requirements or internal acceptance
levels
•
The suppliers purported lower-to-upper quantitation range
•
A practical range as defined in published literature
•
If one dilution is used, it should be in the middle of the practical range of the test. If the range of the
test is different for specific organisms (e.g., bacteria versus fungi), then that dilution may be used
for each
•
If the practical range of the test is broad, more than one dilution should be considered
See Section 5.4.1 for examples of what relevant microorganisms should be considered.
An appropriate number of replicates per test organism should be used (e.g., a minimum of five (5) replicates
per organism) to meet the requirements for the intended data analysis and/or test power. See Section 9.0
(Appendix 1) through Section 11.0 (Appendix 3) for additional guidance.
A greater number of replicates or test runs may be used when combining accuracy with other validation tests
(e.g., precision, range, linearity). Accuracy may also be combined with ruggedness (intermediate precision)
by testing on different days, with different analysts, and/or using different instruments.
For each organism, the same number of cells or volume from each dilution into the AMM/RMM and the
CMM in parallel must be challenged. Parallel testing using the same suspension is preferable; however, if
parallel testing is not performed, the experiment and statistical analysis need to address the possible
differences in spikes across suspensions. Parallel testing may suggest a statistically “paired” analysis (e.g.,
paired t-test), because the samples tested with the AMM/RMM and CMM come from the same suspension,
but such statistical approaches only apply when the enumeration of both methods are conducted on the same
samples, not the same suspension.
The recovery count from each replicate must be determined and the mean recovery for each organism and in
each method calculated.

##### 5.4.2.2 Accuracy Statistical Analysis

A test to demonstrate equivalence, comparability, or statistical difference between the recovered counts in
both methods should be used, for example:
A two one-sided equivalence test (TOST) that uses a proper 90% confidence interval on the
difference in or ratio between the method’s expected values (or mean count) can
demonstrate statistical equivalence between the two methods, given a suitable equivalence
margin. However, if the AMM/RMM is more sensitive than the CMM and may generate
statistically higher counts, a noninferiority test that uses a proper one-sided 95% confidence
limit on the difference in or ratio between the expected values should be used. Depending
on the probability distribution assumption for the underlying enumerations, the following
approaches can be used when the AMM/RMM is compared to the CMM for one
microorganism using one concentration:
•
If the counts can be assumed to be Poisson- or Negative-Binomial-distributed, closed-form
asymptotic confidence limits can be used on the ratio of the expected values of the two methods
using Poisson or Negative-Binomial regression analysis (and the logarithmic link function).
•
If no parametric distribution can be assumed (on the original or transformed count data), then
nonparametric confidence limits can be considered (e.g., those that are developed for comparing
differences in medians), but nonparametric approaches usually have poorer power and require a
larger number of replicates than parametric approaches.
•
Making use of confidence limits based on regression-modeling approaches (linear regression or
nonlinear modeling approaches (Poisson regression)) for the estimation of concentration-response
curves when multiple concentrations are considered simultaneously may also be considered.
•
If mean values are considered and a normal distribution can be assumed, approximately (possibly
after suitable transformation) normal or conventional confidence limits can be used for TOST
(either from a dependent- or independent-samples t-test for paired or independent samples,
respectively). However, it is important to confirm that the number of test runs is of adequate size to
ensure the results are representative of the true condition of the data populations and, hence, will
provide more accurate or reliable test results.
The data from different challenge-organism replicate tests may need to be pooled to achieve the desired test
power. If this is done, the results from individual challenge organisms should be reviewed to determine
whether the pooled results are acceptable (e.g., the results for a specific organism are not masked by pooling
all of the replicates across multiple-challenge organisms). Accordingly, a justification for the statistical
method used (e.g., pooling versus individual organism analyses) should be performed.
See Section 9.0 (Appendix 1) through Section 11.0 (Appendix 3) for additional guidance on the selection of
an appropriate statistical analysis method based on the desired test power and number of replicates.

##### 5.4.2.3 Accuracy Acceptance Criteria

Specific acceptance criteria will depend on the statistical method used to compare the data from the two
methods. For example, the mean recovery obtained in the AMM/RMM should be noninferior to, or
comparable to, the mean recovery obtained in the CMM. If the ratio in the expected counts is being
compared between the two methods, a comparability margin of 0.7 is often considered. It is common to
denote this as Δ = 0.3, but this value is not the comparability margin itself, it is one minus the comparability
margin. In case of equivalence, Δ = 0.3 means that the 90% confidence interval on the ratio of expected
counts falls within the interval [1 – Δ, 1 + Δ] = [0.7, 1.3].

See Section 9.0 (Appendix 1) through Section 11.0 (Appendix 3) for additional guidance on acceptance
criteria based on the statistical method used.

#### 5.4.3 Repeatability

See the definition of repeatability in Section 2.0.
The repeatability (or within-run variability) of an AMM/RMM is the degree of agreement among individual
test results when the procedure is applied repeatedly to multiple samplings of the same suspension of
microorganisms. Repeatability is usually evaluated in quantitative methods.

##### 5.4.3.1 Repeatability Testing Procedure

Repeatability (also known as within-run variability) testing is performed on a set of samples collected from
the same suspension (replicates) by a single analyst using the same equipment in the same laboratory.
Intermediate precision (also known as ruggedness) is performed on a set of samples under different
conditions that would naturally vary during routine use of the AMM/RMM method (e.g., multiple
suspensions, analysts, days, different instruments). Section 5.4.3.1 focuses on repeatability while Section
5.4.8 will address intermediate precision (ruggedness).
At least one dilution should be prepared of a relevant panel of microorganisms within the practical range of
the quantitative test or what enumeration levels are required for the intended application. The number of
separate dilutions prepared should be justified. Examples of what may be considered include:
•
The end user’s microbial specifications, based on compendial requirements or internal acceptance
levels.
•
The suppliers purported lower-to-upper quantitation range.
•
A practical range as defined in published literature.
•
If one dilution is used, this should be in the middle of the practical range of the test. If the range of
the test is different for specific organisms (e.g., bacteria versus fungi), then a particular dilution may
be used for each.
•
If the practical range of the test is large, then more than one dilution should be considered.
See Section 5.4.1 for examples of what relevant microorganisms should be considered.
An appropriate number of replicates per test organism should be used, but no fewer than five (5) replicates
per organism (in alignment with analytical assays), to meet the requirements for the intended data analysis
and/or test power. A relevant number of replicates or test runs may be used when combining repeatability
with other validation tests, for example, accuracy, range, or linearity). See Section 9.0 (Appendix 1) through
Section 11.0 (Appendix 3) for additional guidance.
Repeatability may preferably be combined with ruggedness (intermediate precision) by testing on different
days with different analysts and/or using different instruments.
For each organism, the same number of cells or volume from each dilution into the AMM/RMM should be
challenged and the CMM should be challenged in parallel. Parallel testing using the same suspension is
preferable; however, each aliquot from the same suspension will represent an independent sample. If the
same aliquot can be analyzed in both methods, then these would be treated as dependent samples. The
manner in which aliquots are used will dictate the appropriate statistical test to utilize, as described in
Section 5.4.3.2.

##### 5.4.3.2 Repeatability Statistical Analysis

Repeatability is best expressed in terms of a relative standard deviation (%) or coefficient of variation per
suspension, either with respect to the spiked level or with respect to the mean count, together with an
approximate 95% confidence interval for variances using, for instance, the chi-square distribution (not
addressing the uncertainty in the denominator). Repeatability is best calculated for mean counts larger than 5
CFU. Due to the variability in counts between test samples as a result of the sampling of test samples, the
repeatability is expected to be at least in the range of the reciprocal of the square root of the mean count. A
McKay approximation may possibly be used when the distribution of the counts is approximately normal
(82).
A comparison with the CMM can be conducted by demonstrating equal variance between the recovered
counts in both methods. To demonstrate superiority of the AMM/RMM compared to the CMM, Levene’s
test (preferably Brown and Forsythe’s version using medians instead of means) can be applied (83). When a
comparability analysis is desired, an upper 95% confidence limit can be applied on the difference in the
logarithmically transformed variances (e.g., AMM/RMM less than CMM).
Depending on the statistical test used, the data from different challenge-organism replicate tests could
possibly be pooled to achieve the desired test power. If this is done, the results from individual challenge
organisms should be reviewed to determine whether pooling is acceptable (e.g., the results for a specific
organism are not masked by the pooling all of the replicates across multiple-challenge organisms).
Accordingly, a justification for the statistical method used (e.g., pooling versus individual organism
analyses) should be documented.
See Section 9.0 (Appendix 1) through Section 11.0 (Appendix 3) for additional guidance on the selection of
an appropriate statistical analysis method based on the desired test power and number of replicates.
Note: For the lower concentration of organisms used during these studies (e.g., <10 CFU), the repeatability
is anticipated to be lower due to the relatively higher variability in counts at these levels. However, this
would be expected in both the AMM/RMM and the CMM.

##### 5.4.3.3 Repeatability Acceptance Criteria

Specific acceptance criteria will depend on the statistical method used to compare the data from the two
methods. For example, the variance obtained in the AMM/RMM should not be statistically different, is
noninferior to, or is comparable to the variance obtained in the CMM. A comparability margin of 0.5 on the
ratio (CMM/AMM) or 0.693 in the natural-log scale on relative standard deviations is common practice.
See Section 9.0 (Appendix 1) through Section 11.0 (Appendix 3) for additional guidance on acceptance
criteria based on the statistical method used.

#### 5.4.4 Limit of Detection

See the definition of LoD in Section 2.0.
The LoD is usually evaluated through qualitative or presence/absence methods.

##### 5.4.4.1 Limit of Detection Testing Procedure

The intent of the LoD validation criterion is to establish the lowest level at which positive samples are
detected (commonly at 95% probability (i.e., LoD95)) for the AMM/RMM and the CMM, and to

demonstrate the AMM/RMM LoD is comparable from the CMM LoD. The LoD may also be used to justify
the challenge level of target organisms during inclusivity testing.
A relevant panel of microorganisms is used when performing LoD studies. See Section 5.4.1 on specificity
for examples of what relevant microorganisms should be considered.
The LoD95 should be established as follows:
1. An LoD established by a single point (e.g., the lowest level detected, such as a single CFU) has
limited utility because the certainty aspect (e.g., a 95% confidence level) may not be precisely
determined. Modeling approaches based on empirical data, such as probit analysis, allow the
calculation of an LoD at a desired level of certainty (e.g., 95%) and is recommended when
establishing the LoD for an AMM/RMM.
2. For each microorganism, a series of serial dilutions into the fractional range should be prepared,
with the first dilution having a microbial concentration expected to give all positive results. The
dilutions should include a level that represents the purported LoD from the AMM/RMM supplier.
For example, dilutions of 10, 1, and 0.1 CFU, or 5, 0.5, and 0.05 CFU, or 2, 1.2, 0.7, 0.4, and 0.25
CFUs may be considered. For precise estimation of the LoD, it is better to use five concentrations.
3. For an appropriate test power, each dilution should be composed of at least 20 to 40 replicates. Data
from multiple challenge organisms can be pooled to reduce the replicates per dilution when the
statistical analysis approach incorporates the different microorganisms.
4. The same number of cells or volume from each prepared suspension should be challenged into the
AMM/RMM and the CMM in parallel. If parallel testing cannot be performed (i.e., different
suspensions used in each method), then differences in spiked levels between the suspensions should
be accounted for during the subsequent analyses.
5. The number of positive and negative detection-events must be determined for each microorganism
replicate in the AMM/RMM and in the CMM.
6. If the fraction of positive replicates equals 1 or 0 for two dilution concentrations, other appropriate
dilution levels should be selected.
The AMM/RMM LoD should be compared to the CMM LoD as follows:
1. The data generated when establishing the LoD95 can be used to compare the LoD in the
AMM/RMM and in the CMM.
2. Comparisons of LoDs between methods can be conducted for a single suspension when the
challenge level can be chosen, such that the same (or similar) number of positives and negatives are
present in both methods. The stakeholder should choose an appropriate challenge level for the
intended application, and the data of multiple organisms may be pooled in the analysis.
3. A most probable number (MPN) method may also be used if the number of replicates and the
dilution concentration used are consistent with the requirements in the FDA MPN tables (84). The
stakeholder should determine the number of replicates per dilution concentration that is practical to
perform the analysis. Most importantly, the number of MPN runs should be sufficient to adequately
apply the intended statistical analysis. Calculate the MPN and the upper and lower 95% confidence
intervals for each challenge organism and for each method. Refer to the FDA MPN table relevant to
the number of replicates used and instructions for selecting dilutions for the calculations. Dilutions
other than those prescribed in the FDA method may also be considered, although the FDA tables
should not be used to calculate the final MPN (e.g., using spike levels of 4, 2, 1 CFU rather than the
FDA-recommended 10-fold dilutions, such as 10, 1, 0.1 CFU).

4. Parallel testing using the same suspension is preferable; however, if parallel testing is not
performed, a statistical analysis must be used that could address the potential differences in spiked
levels between suspensions and multiple suspensions for each method.

##### 5.4.4.2 Limit of Detection Statistical Analysis

When determining the LoD95 in each method, a probit/logit analysis is performed using the positive and
negative results for the dilution levels assessed. This may also be performed using natural logarithms of the
dilution levels.
The data from all microorganism dilutions and replicates are used to achieve the desired test power, but
pooling data from multiple organisms requires a specialized analysis approach. However, the results from
individual challenge organisms should be reviewed to determine whether the pooled results are acceptable
(e.g., the results for a specific organism are not masked by pooling all the replicates across multiple
challenge organisms). Poolability can be evaluated with hypothesis tests, outlier tests, or goodness-of-fit
measures (see Section 9.0 (Appendix 1)).
If the model fit is sufficient according to the chi-square goodness-of-fit test, the analyte concentration at
which the estimated positive rate equals 95% is the estimated mean number of organisms in the test samples
that provides a positive result with 95% confidence. The LoD95, which is the exact lowest number of
organisms that leads to a detection probability of 95%, is typically below this estimated mean number of
organisms. If the model fit is insufficient, additional replicates or dilutions must be analyzed.
The method of Most Probable Limit (MPL) can be used when the AMM/RMM is expected to provide a
LoD of one or two CFUs to demonstrate an almost-perfect method of detection, implying that a direct
comparison with the CMM is not needed.
When comparing the AMM/RMM and the CMM LoDs, and depending on the statistical test used, the data
from different challenge organisms replicate tests may need to be pooled to achieve the desired test power.
If this is done, the results from individual challenge organisms should be reviewed to determine whether the
pooled results are acceptable (e.g., the results for a specific organism are not masked by pooling all of the
replicates across multiple-challenge organisms). Accordingly, a justification for the statistical method used
(e.g., pooling versus individual organism analyses) should be presented.
Two statistical approaches provide a reliable comparison: one which uses the well-known standard MPN
approach repeatedly (i.e., multiple executions of the MPN experiment with possibly adapted spike levels for
the three dilutions), while a generalized MPN (gMPN) approach can be used for a single dilution. Both
approaches are suitable to incorporate or pool data from multiple microorganisms.
If an MPN approach is used for a single microorganism, it is suggested to calculate confidence limits on the
mean difference in the repeated log-transformed MPNs to demonstrate comparability between the methods
(similar to accuracy for quantitative methods). In case multiple microorganisms are being pooled, the
repeated log-transformed MPNs per microorganism are being used in a two-way fixed-effects analysis of
variance (ANOVA) model to estimate the mean differences in MPNs across microorganisms between both
methods.
An alternative, more-specialized analysis approach exists, referred to as the gMPN approach, that can
compare the detection proportions (i.e., the probability of detecting samples with exactly one
microorganism) between the two microbiological methods for individual microorganisms and for pooled
data from multiple microorganisms. When the total number of test samples is identical, the gMPN approach,

which uses a single dilution, is more powerful than the MPN approach, but the MPN approach is more
robust to spiking errors due to the use of multiple dilutions. The gMPN approach is a less straightforward
analysis than the MPN approach.
See Section 9.0 (Appendix 1) through Section 11.0 (Appendix 3) for additional guidance on the selection of
an appropriate statistical analysis method based on the desired test power and number of replicates.

##### 5.4.4.3 Limit of Detection Acceptance Criteria

The LoD95 values for each method should be reported.
When comparing the LoDs, specific acceptance criteria will depend on the statistical method used to
compare the data from the two methods. For the comparison of MPNs and detection proportions, a
comparability margin of 0.7, commonly denoted as Δ = 0.3, is common practice. This value is not the
comparability margin itself, it is one (1) minus the comparability margin. In case of equivalence, Δ = 0.3
means that the 90% confidence interval on the ratio of expected counts falls within the interval
[1 – Δ, 1 + Δ] = [0.7, 1.3].
See Section 9.0 (Appendix 1) through Section 11.0 (Appendix 3) for additional guidance on acceptance
criteria based on the statistical method utilized.

#### 5.4.5 Limit of Quantification

See the definition of LoQ in Section 2.0.
LoQ is usually evaluated using quantitative methods.

##### 5.4.5.1 Limit of Quantification Testing Procedure

LoQ can be determined from the accuracy or linearity studies.
Several serial dilutions, for which one should be close to the purported LoQ, should be prepared across the
desired range of the assay in order to ensure that microorganisms are enumerated close to the true
quantification limit.
An appropriate panel of microorganisms should be utilized, similar to what would be used during accuracy
testing. Ideally, the organisms selected would be expected to be quantified by the AMM/RMM at very low
concentrations.
The number of replicates used per dilution should be appropriate to reduce the potential for variability at
very low challenge concentrations.
Alternatively, the concentration of microorganisms used can also be defined differently, for example, in a
certificate of analysis from a supplier for commercially prepared microbial challenges, as long as these are
very accurate at low concentrations.
The procedures used during accuracy or linearity studies can be followed for reporting recovered
microorganisms. If recovered counts are less than the challenge concentration, the recovered counts should
be reported as less than the dilution level and not used to calculate the true LoQ (e.g., if the lowest dilution
is expected to contain 10 CFU, any count recovered that is less than 10 should be reported as “<10”).

##### 5.4.5.2 Limit of Quantification Statistical Analysis

The lowest concentration in the practical range of the assay that meets the acceptance criteria for accuracy
and/or linearity is considered to be the quantitation limit of the method.
Data analysis may be based on the fact that microorganisms in an inoculation suspension approximately
follow a Poisson distribution.
The most appropriate concentration-response curve (possibly linear or proportional to the spikes) using
Poisson (or linear) regression should be determined, and the lowest concentration level for which the 99%
lower confidence limit is above zero on all higher concentrations should be calculated.
This lowest level is considered the LoQ if accuracy (and possibly repeatability) has been demonstrated at
this concentration or lower. If not, the LoQ becomes the lowest concentration at which accuracy has been
demonstrated.

##### 5.4.5.3 Limit of Quantification Acceptance Criteria

There is no acceptance criterion for LoQ testing, unless a certain level for the LoQ is required for the
purpose of the AMM/RMM. In that case, the estimated LoQ in the AMM/RMM should be at or below the
target or intended LoQ.

#### 5.4.6 Linearity

See the definition of linearity in Section 2.0.
Linearity is usually evaluated using quantitative methods.

##### 5.4.6.1 Linearity Testing Procedure

Linearity is a parameter that must be evaluated in relation to accuracy, in particular when accuracy is
conducted at several concentrations separately (without assuming a concentration-response curve).
Satisfying linearity would then guarantee that accuracy also holds for each concentration in between any
two concentrations for which accuracy was demonstrated.
When accuracy is evaluated using concentration-response curves, the test for linearity is less important and
may even be unnecessary.
To be able to investigate linearity, a minimum of three concentrations (across the range of the method) is
required, but more concentrations are preferred.
Linearity can be visualized by examining either the actual counts obtained in the AMM/RMM or by
examining the relative counts with respect to the (true) amount of microorganisms in the dilution (e.g., using
the spiked concentration level or the expected or mean counts of the CMM). When performed properly, both
approaches would lead to the same conclusions on linearity.

##### 5.4.6.2 Linearity of the Actual Counts Obtained in the Alternative/Rapid Microbiological

Method
The expected or mean counts of the AMM/RMM is a straight line in the number of microorganisms with a
nonzero slope. The ideal linear function is a straight line through the origin, in which case linearity is

referred to as proportionality. Under proportionality, the slope represents the recovery of the AMM/RMM
across the investigated range of concentration levels.

##### 5.4.6.3 Linearity of the Relative Counts of Alternative/Rapid Microbiological Method

The relative counts of the AMM/RMM (e.g., calculated from the dilutions using an initial spiked
concentration) is a straight line. The ideal straight line is a horizontal line with a slope equal to zero, since
the average relative count over all spiked concentrations is an estimate for the recovery of the AMM/RMM.

##### 5.4.6.4 Linearity Statistical Analysis

Linearity of the actual counts or the relative count of the AMM/RMM is best evaluated with an appropriate
regression analysis (e.g., standard linear regression, weighted linear regression, Poisson regression),
considering the following options:
•
Use the p-value of the slope to test that the slope is nonzero. A nonzero slope means that the
response (counts or relative counts) is dependent on the number of microorganisms. For a
regression analysis of the AMM/RMM counts, a nonzero slope is required while, for a regression
analysis of the relative counts, a zero slope is preferable.
•
Use the p-value of the intercept to test that the intercept is nonzero. For a regression analysis of the
AMM/RMM counts, an intercept that is not distinguishable from zero supports proportionality (i.e.,
the slope then represents the mean recovery). For a regression analysis of the relative counts (or
recoveries), the intercept represents the estimated mean recovery (where the slope should not differ
significantly from zero) and should be significantly different from zero.
•
Apply a goodness-of-fit test to evaluate the appropriateness of linearity by comparing the regression
line with a more extensive model. For instance, add a quadratic term to the regression analysis or
compare the regression line with the saturated model (a model that estimates the mean at each
spiked concentration). The goodness-of-fit test should not be statistically significant.
•
The R2 value is only an indirect measure of linearity. The larger the R2 value, the less likely
linearity is violated, but it is no guarantee that linearity is true since it also depends on the range of
spike levels being tested.
Transformation of the counts (e.g., log 10) and/or the concentration level may be a suitable approach for the
purpose of demonstrating linearity, but the interpretation of the parameters of the regression line will
change.
The use of more complex statistical analyses, where the counts of the AMM/RMM and CMM are jointly
analyzed, are also appropriate. See Section 10.0 (Appendix 2) for additional information.

##### 5.4.6.5 Linearity Acceptance Criteria

The criteria on the model parameters are described within the statistical analysis (nonzero intercept and
slope), and the acceptance criteria depend on what type of outcome (absolute counts, relative counts, or
transformation) is being studied. A lack-of-fit of the regression line requires a deeper investigation of
accuracy. For a regression analysis of the AMM/RMM counts as a function of the number of
microorganisms (e.g., the concentration level or the expected or mean counts of the CMM), it is
recommended to also require a high R2 value (at least 90%) to show that the AMM/RMM can appropriately
predict the number of microorganisms in a dilution appropriately.

#### 5.4.7 Range

See the definition of range in Section 2.0.
Range is usually evaluated using quantitative methods.

##### 5.4.7.1 Range Testing Procedure

Suppliers and stakeholders can use the same data generated during accuracy, repeatability, and linearity
studies, as long as the concentrations tested are consistent with the intended range of the assay.

##### 5.4.7.2 Range Statistical Analysis

There is no statistical analysis associated with demonstrating range.

##### 5.4.7.3 Range Acceptance Criteria

The information that accuracy, repeatability, and linearity are demonstrated within the intended range of the
assay should be reported.

#### 5.4.8 Ruggedness

See the definition of ruggedness in Section 2.0.
Test conditions to be examined in a ruggedness study include the use of different analysts, different
instruments, different lots of reagent, or on different days. When performing a ruggedness study,
intermediate precision is performed within the same laboratory, and reproducibility is performed between
laboratories. Ruggedness can also be considered the intrinsic resistance to the influences exerted by
operational and environmental variables on the results of the method. Ruggedness is usually evaluated using
both quantitative and qualitative methods.
Ruggedness is usually performed by the supplier, and the data may be accepted by the end user to support
the validation program and regulatory submissions. The end user should perform a risk assessment of the
supplier’s data to identify any ruggedness gaps for their intended use of the AMM/RMM and determine if
additional studies are needed. Ruggedness testing may need to be repeated by the end user if there are
modifications to the instrument or workflow made by the end user that could render testing by the supplier
obsolete.

##### 5.4.8.1 Ruggedness Testing Procedure

Ruggedness is performed on a set of samples that would naturally vary with routine practice, including, but
possibly not limited to different analysts, instruments, lots of reagents, and days.
There is no need to repeat all challenge organisms for ruggedness; it should be performed using the most
relevant challenge organisms that are most difficult to enumerate.
Concentrations should be considered similarly as done with repeatability (see Section 5.4.3).
For a comparison of ruggedness with the CMM, it is preferred that both microbiological methods enumerate
samples from the same suspension, and the results are used for a comparability test.

The appropriate number of runs and replicates per run should be calculated to meet the requirements for the
intended data analysis and/or test power, but it should never be below the six runs and three replicates per
run.
Data can be pooled from different microorganisms when the variability in detection or enumerations is
(almost) independent of the type of microorganisms.
If the variety of testing conditions are already included during the testing of certain other validation
parameters, such as accuracy, then a separate ruggedness study may not be needed if the ruggedness can be
appropriately determined from the data of this other validation parameter.

##### 5.4.8.2 Ruggedness Statistical Analysis

For the estimation of ruggedness for quantitative methods, for each microorganism, concentration level, and
microbiological method (when both microbiological methods are included in the study), the random effects
ANOVA (where run is the random factor) is used in case the expected counts (or concentration levels) are
above five (5) CFUs.
From the ANOVA, collect the variance components of the within and between-run variability and the mean
counts. Calculate the ruggedness or intermediate precision as a relative standard deviation (expressed in
percentages) and conduct the following steps:
1. Add up the two variance components.
2. Take the square root of the sum of variance components.
3. Divide the square root by the mean count.
4. Multiply by 100%.
5. Calculate a 95% confidence interval on the sum of the variance components using the Satterthwaite
approach; take the square root, divide by the mean count, and multiply by 100%.
6. In case a comparison with the quantitative CMM is needed, use the ruggedness or intermediate
precision estimates and their standard errors to calculate a 95% lower confidence limit on the ratio
of the estimates (CMM divided by the AMM/RMM) per microorganism and concentration level.
This may be evaluated, possibly in the logarithmic scale.
For the estimation of ruggedness for qualitative methods, demonstrate that the detection of microorganisms
under the different conditions is independent of or almost unaffected by these different conditions. Logistic
regression approaches should be used for each microorganism and concentration level to demonstrate that a
lack-of-effect of these conditions exists (although a combined analysis of microorganisms and
concentrations is allowed).
Demonstrating the lack-of-effect can be done for the AMM/RMM separately using comparability or
conventional hypothesis testing approaches on the coefficients of the logistic regression.
Demonstrating the lack-of-effect in comparison to the CMM should demonstrate that comparability with the
CMM is independent of the testing conditions, that is, it should demonstrate that there are no interaction
effects present.
More sophisticated statistical analyses (such as a generalized linear mixed model) may be applied as an
alternative to ANOVA (when counts are less than 5 CFU or when normality of the counts are violated) or
logistic regression to estimate ruggedness and conduct comparability between the AMM/RMM and CMM.

##### 5.4.8.3 Ruggedness Acceptance Criteria

Absolute criteria on ruggedness depends on the purpose of the method. For quantitative methods, the set of
criteria in Table 5.4.8.3-1 may be useful for the estimate of ruggedness.

**Table 5.4.8.3-1 Relative Standard Deviation for CFU Ranges**

Mean Count Range (CFU)
Relative Standard Deviation
5 – 9
45%
10 – 16
35%
17 – 45
25%
46 – 100
15%
101 – 400
10%
For a comparison of two quantitative microbiological methods, a comparability margin of 0.5 on the ratio of
CMM/AMM or 0.693 in the natural-log scale on the relative standard deviations is common practice. For
qualitative methods, a comparability margin of 0.7 on the detection probability is common practice.

#### 5.4.9 Robustness

See the definition of robustness in Section 2.0.
Robustness is usually performed by the supplier, and the data may be accepted by the end user to support
the validation program and regulatory submissions. The end user should perform a risk assessment of the
supplier’s data to identify any robustness gaps in their intended use of the AMM/RMM and determine if
additional studies are needed. Robustness may need to be repeated by the end user if there are modifications
made to the instrument or workflow that could render testing by the supplier obsolete. Robustness is usually
evaluated using both quantitative and qualitative methods (see Section 9.0 (Appendix 1) through Section
11.0 (Appendix 3)).

##### 5.4.9.1 Robustness Testing Procedure

The supplier should determine the impact of variations on critical method and system parameters. These
may include, but are not limited to, reagent concentrations/volume, environmental conditions (e.g.,
temperature, humidity), instrument operational limits, physical conditions (e.g., vibration), extraction
methods (where applicable), sample volumes, and incubation parameters. This information provides an
indication of the limitations of the test method and associated instrumentation.
A suspension of relevant microorganisms should be prepared, and the recovery (detection or enumeration,
depending on the test method) should be evaluated against relevant validation criteria (e.g., accuracy,
repeatability, LoD, LoQ, linearity) after changes to critical parameters have been made.
For qualitative methods, the supplier can perform LoD testing; for quantitative methods, the supplier can
perform accuracy and precision testing. The supplier can also perform a study for a specific robustness
evaluation without having to do a full validation criteria experiment. For example, recovery counts would be

within 70% or with no statistical difference in accuracy but with the critical parameter in question; if not,
then the final parameter should be used for full accuracy studies.

##### 5.4.9.2 Robustness Statistical Analysis

Similar statistical analyses and data evaluation approaches for validation criteria (e.g., accuracy,
repeatability, LoD, LoQ, linearity) may be applied when assessing robustness.

##### 5.4.9.3 Robustness Acceptance Criteria

Acceptance criteria for validation criteria (e.g., accuracy, repeatability, LoD, LoQ, linearity) may be applied
when assessing robustness. Other criteria may be used; for example, for nucleic acid amplification
technologies, demonstrating the threshold cycle or crossing point values are within acceptable ranges. For
each test condition, a range should be demonstrated within which the AMM/RMM operates in a robust
manner. The results should be used to define adequate precautions or limitations when the method is used
routinely.

#### 5.4.10 Method Suitability

See the definition of method suitability in Section 2.0.
To demonstrate that an AMM/RMM is compatible with specific product formulation or a sample matrix that
will be routinely assayed, each material should be evaluated for suitability. The potential to produce
interfering or abnormal results, such as false positives or false negatives needs to be understood. This may
also include evaluating whether cellular debris, dead microorganisms, or other viable entities, such as
mammalian cell cultures, have any impact on the ability of the AMM/RMM and accompanying system to
operate as it is intended. Accordingly, method suitability is evaluated in both quantitative and qualitative
methods.
Although it is possible that certain classes of materials will produce similar results, the end user is
responsible for ensuring that all test samples will be compatible with the new method (see Section 9.0
(Appendix 1) through Section 11.0 (Appendix 3).

##### 5.4.10.1 Method Suitability Testing Procedure

The test sample should be the same as what would be used during routine testing. In some cases, the
stakeholder may consider using the most challenging matrices, in terms of formulation, potency, and/or
quantity required for testing, to avoid having to repeat method suitability for similar formulations that would
not require analysis (e.g., same product classes, matrix with the same formulation composition but using a
smaller quantity, similar formulations with the exception of a lower concentration of API or excipient).
Note: The end-user should determine any impact that final packaging may have on the assay prior to
performing any product grouping approach. For example, modifying final package material may impact the
number of background particles detected in some non-growth-based AMM/RMMs.
The test sample should undergo the same specific workflow for the AMM/RMM under evaluation (e.g.,
nucleic acid extraction and amplification steps, organism capture, sample concentration, addition of
reagents).
The number of distinct test samples or product batches used to demonstrate method suitability should be
justified; for example, three (3) separate batches are commonly used, if available.

•
False-positive testing: Challenge the test sample, which does not contain any challenge
microorganisms, into the AMM/RMM using the same amount of material and workflow the
stakeholder intends to use for routine testing. A negative control in the absence of the test sample
should also be challenged in the AMM/RMM.
•
False-negative testing: Using a relevant panel of microorganisms (e.g., similar to what was used
for other validation criteria-testing, including specificity), inoculate <100 CFU into the same
amount of material the stakeholder intends to use for routine testing. If the workflow or sample
preparation steps could affect the viability of microorganisms during these studies, the stakeholder
should inoculate the test sample prior to performing these steps. A positive control in the absence of
the test sample, but with microorganisms, should also be challenged in the AMM/RMM. Surrogate
markers specific to the AMM/RMM may also be added to the test samples; however, the
stakeholder should demonstrate that these markers would be obtained from viable organisms during
sample preparation or when using the intended method workflow and be used at a concentration
that would correlate with a <100 CFU viable cell concentration. Although a <100 CFU challenge is
specified, this does not necessarily mean the challenge should be at the LoD or LoQ level.
Stakeholders who perform validation for the intended-use studies (i.e., where microorganisms are
challenged in actual test samples and assessed against validation criteria but not compared with the CMM),
method suitability will need to be demonstrated in support of these studies.
For organism-specific detection methods, the test sample should be spiked with the intended target organism
(or surrogate target material) for inclusivity testing. The test sample should be spiked with nontarget or
closely related target organisms (or surrogate target material) for exclusivity testing.
Additional studies to assess potential interfering materials may also need to be considered. For example,
certain AMM/RMMs that rely on the detection of microorganisms via biofluorescence may illicit a false-
positive response in the presence of extrinsic particles, disinfectants, or other substances that could fluoresce
in the AMM/RMM instrument. When applicable, the stakeholder should identify these types of substances
and challenge the AMM/RMM to determine the potential for false-positive detection events. Similarly, if
dead cells could illicit a positive detection event in the AMM/RMM, stakeholders may want to consider
challenging the AMM/RMM with dead or recently killed cells to understand whether the resulting signals
could be interpreted as a false-positive event.

##### 5.4.10.2 Method Suitability Statistical Analysis

There is no statistical analysis associated with demonstrating method suitability.

##### 5.4.10.3 Method Suitability Acceptance Criteria

There should be no false positives unless the stakeholder determines some level of positives (or background
interference) is acceptable for routine use. For example, a baseline measurement in the presence of the test
sample (but no microorganisms) may be determined. The baseline measurement may then be used to
determine when a true-positive detection event is observed (e.g., when the result is above an acceptable
signal-to-noise ratio).
To minimize the occurrence of false negatives, the detection of microorganisms in the presence of the test
sample, based on a predefined positive threshold, should be observed for qualitative methods. Similarly, at
least a 50% recovery (or a factor of 2) for AMM/RMMs that can be directly and quantitatively compared
with the positive control (organisms or surrogate material in the absence of the test sample) should be
observed. For quantitative AMM/RMM signals that cannot be directly compared with a CMM (e.g., plate

count), alternative strategies may be considered. For additional guidance, see comparability testing in
Section 5.4.11.1.
Inclusivity testing should show a positive detection event in the presence of the target organism; exclusivity
testing should show a negative detection event in the presence of nontarget or closely related organisms.
If potentially interfering materials are shown to provide a false-positive response, the stakeholder should
ensure these are absent during routine testing of the sample. Alternatively, strategies for minimizing
exposure of the AMM/RMM to interfering materials should be considered. For example, when an
AMM/RMM is used for EM and certain disinfectants are known to cause a false-positive event, sampling
should commence only after the disinfection activity has ended and residual disinfectant has been cleared
from the sampling area.

#### 5.4.11 Comparability

See the definition of comparability in Section 2.0.
The signal from a growth-based CMM will usually be reported as a CFU on solid agar or on a membrane
and as visual turbidity in liquid media. Examples of methods that produce a signal other than the CFU or
turbidity are fluorescent units from a viability-staining and laser-excitation method, relative light units or
microcolony detection counts from ATP measurements, a positive response from a nucleic acid
amplification technique, or intrinsic, autofluorescent bioparticle counts. While many AMM/RMMs analyze
individual samples at one time, resulting in a single-data signal, other methods have the capability to
produce large amounts of data over a longer sampling period, even under continuous sampling conditions.
As such, the manner in which comparability testing is performed will depend on a number of factors,
including whether the signals from the AMM/RMM and the CMM can be directly or indirectly compared.
For example, AMM/RMMs that produce a CFU signal can be directly compared with conventional CFU-
based methods using similar validation criteria as that used during primary validation. However,
AMM/RMMs that produce a non-CFU signal may or may not be directly compared with a CFU, and this
may be reflected in the manner in which the data is obtained, the samples analyzed in both methods, and
other factors. Section 5.4.11 provides guidance on options for comparing the same or different signals and
addressing the need to separate out nonmicrobiological detection events such as true false positives.
Ideally, test samples should not cause interference, false-positive or false-negative outcomes. This can be
assessed during method suitability studies, preferably prior to conducting comparability testing (see Section
5.4.10).
When the AMM/RMM and CMM use the same microorganism-related signal, comparability should
typically focus on noninferiority using similar validation criteria as that used during primary validation.
When the AMM/RMM produces a non-CFU signal and the CMM produces a CFU, comparability should
focus on noninferiority or superiority, as it is commonly accepted that non-CFU or nongrowth-based signals
can provide greater recovery or detection events due to the ability to recovery stressed, injured, or VBNC
organisms. This aligns with the decision-equivalence concept described in USP ⟨1223⟩.

##### 5.4.11.1 Comparability Testing Procedure

The amount of test sample used and the number of independent determinations for comparability studies
should be justified and explained. For example, at least three (3) lots of product, if available, or a practical

number of tests performed over some period of time may be considered. When a statistical analysis is
performed on the resulting data, the number of independent determinations should be adequate for the
intended analysis (e.g., to meet a certain test power). Depending on the type of study, the test plan should
consider what has already been performed during prior studies (e.g., primary validation) to potentially
reduce the amount of testing and test material required to demonstrate comparability.
If a consistent level of natural bioburden is present in the test sample, then the methods should be directly
challenged with the test samples. If the samples are not expected to contain microorganisms, however, or if
the natural bioburden is not consistent or adequately controlled, laboratory studies using inoculated
challenge organisms, similar to validation criteria-testing in absence of the test sample, may be performed.
When using challenge organisms, an adequate panel and concentration of relevant strains appropriate for the
AMM/RMM being evaluated should be selected. For example, growth-based AMM/RMMs should consider
the use of slow-growing microorganisms and/or strains specific to testing the required media employed in
the AMM/RMM procedure; nongrowth-based methods may consider more difficult types of organisms to
detect, such as spores. If there is a low availability of test sample, the end user may justify performing
comparability testing with a limited number of organism strains. Alternatively, the end user may justify
using a similar sample matrix to test all of the relevant challenge organisms.
Alternative challenge material may be considered when viable microorganisms would not provide a set of
results that can be compared with the AMM/RMM. Examples may include purified nucleic acid, cellular
components such as ATP, or standardized biofluorescent beads. When alternative challenge material is used,
it must be appropriate for the AMM/RMM under evaluation.
Some AMM/RMMs may produce data representative of multiple or continuous sampling events, making it
more challenging to compare the data with a CMM that produces only a single test-sample result. For these
reasons, the stakeholder may not be able to numerically correlate non-CFU signals to the CFU. The goal is
then to determine ranges of CFU signals for the CMM for given levels of non-CFU signals. Section 5.4.11.2
provides guidance on how to demonstrate comparability and how to make a quality decision about the test
sample in this regard.

##### 5.4.11.2 Comparability Statistical Analysis

Statistical analyses should be commensurate with the intent of the study and the expected results
(comparability, equivalence, or superiority). If the AMM/RMM is using a non-CFU signal, it could be
necessary to obtain either a prediction model from non-CFU-to-CFU signals or otherwise obtain an upper
limit on the CFU signal, given the non-CFU signal.

##### 5.4.11.2.1 Comparability of Qualitative Methods

Because the data will always be presented as a positive or negative result, the data from different methods
can be directly compared, regardless of the detection-event signal. As such, comparability may be
demonstrated in similar ways LoD and specificity are assessed in the absence of test sample (i.e., using an
appropriate conventional hypothesis or a comparability statistical test).

##### 5.4.11.2.2 Comparability of Quantitative Methods

When individual test samples can be evaluated in the AMM/RMM and numerical values are obtained in
each method, comparability can be conducted using similar testing procedures and statistical analyses to
those for accuracy, repeatability, and specificity during primary validation or validation-for-intended-use to

demonstrate comparability or superiority, depending on the comparison of signals (85). Obtaining a
prediction model using some form of regression analysis to be able to predict CFU-signals from non-CFU
signals or to obtain a natural range of CFU signals may be beneficial (see Section 9.0 (Appendix 1) through
Section 11.0 (Appendix 3). A prediction model requires a specific study with different CFU concentrations
and multiple samples per concentration.
For AMM/RMMs that do not analyze individual samples but operate continuously or cannot be challenged
with known microorganisms (i.e., using artificially inoculated test samples), other strategies for
demonstrating comparability to a CMM can be employed. Examples of this include BFPCs which are used
for environmental or water monitoring. For AMM/RMM such as these, the following options may be
considered:
•
Initial studies using only the AMM/RMM may help to define the normal or expected baseline levels
for the AMM/RMM in the presence of the test sample or the test environment. The environmental
conditions of the area under investigation should be well defined and be expected to represent
routine operations. Activities that are not considered routine when monitoring should be identified
and excluded from baseline studies. Excursions from baseline levels may help define what an out-
of-expectation (OOE) result is in the AMM/RMM. This is done by calculating the upper control
limits for the normal signals (e.g., two or three times the acceptable signal-to-noise ratio, as
described in ICH Q2(R2) and USP ⟨1225⟩).
•
Parallel testing of the test sample or in the test environment with the CMM and the AMM/RMM
could be performed; this is most meaningful with quantitative methods when the microbiological
methods are testing separate samples. The stakeholder should determine an appropriate number of
test samples or a predefined testing period to obtain meaningful data (e.g., nonzero detection events
or numerical values) to determine comparability. When non-CFU continuous-monitoring methods
are compared with conventional growth-based episodic or single-sample methods, the number of
test runs for the CMM may need to be increased. For example, a new active air sampler may need
to be initiated when a prior sampler has finished its sampling; alternatively, a new agar plate is
added to a slit-to-agar sampler to simulate “continuous” conventional sampling.
•
In instances where positive detection events are not expected or observed (e.g., Grade A
environments), comparability studies may need to be evaluated where microbial recovery is
expected (e.g., lower-classified cleanroom environments). The main goal is to determine the
distribution or range of CFUs for the CMM based on the results of the AMM/RMM. These
distributions can be used to determine acceptable ranges for the signal of the AMM/RMM. The
results from both methods may be compared in the following manner: ̶

If signals are consistent, use regression analysis (linear, nonlinear, weighted, or Poisson
regression) to determine a calibration model. This approach may require analyzing
microbial concentrations across the practical range of the test instead of performing parallel
testing on a sample. ̶

Compare the ratio of recovered counts between the two datasets. Demonstrate
comparability if the same microorganism-related signals are being used for the
AMM/RMM and the CMM, or superiority when the AMM/RMM is using a more-sensitive
microorganism-related signal and the CMM provides a CFU signal.  ̶

Compare the frequency of detectable events in both methods. The stakeholder should
define what a detectable event or OOE event is in the AMM/RMM, and what CFU levels in
the CMM are relevant for comparability studies (which may include alert or action levels in
the CMM). The AMM/RMM should detect at least the same frequency of detection events
(e.g., deviations from expected baseline values in the AMM/RMM) as the CMM produces

in OOE events. Demonstrate this using statistical tests for the comparison of proportions
(either noninferiority or superiority).  ̶

Quantify the distribution of CFU counts in the CMM for each level of AMM/RMM counts.
Based on the OOE CFU counts, an upper level on AMM/RMM counts can be translated.
See Section 9.0 (Appendix 1) through Section 11.0 (Appendix 2) for additional guidance.

##### 5.4.11.3 Comparability Acceptance Criteria

Similar acceptance criteria should be used as was used during the assessment of validation criteria in the
primary validation when similar statistical approaches are being used. When a noninferiority statistical
method is used, the recovery of organisms in the AMM/RMM should be noninferior to the recovery of
organisms in the CMM. When a superiority statistical method is used, criteria for conventional hypothesis
testing can be applied. Criteria for prediction models and setting upper-control limits should be based on the
uncertainty of estimating the range of CFU levels, but this is usually translated to a proper number of test
samples, batches, and/or concentration levels. See Section 9.0 (Appendix 1) through Section 11.0
(Appendix 3) for additional guidance.

#### 5.4.12 Guidance on Setting Minimum Incubation Times for Growth-Based Methods

Growth-based methods require an appropriate incubation time to ensure the recovery of microorganisms in
the presence of the test sample and under the conditions of the test method. Minimum incubation times may
be established from the longest TTR for challenge microorganisms determined during primary validation,
method suitability, and/or comparability studies.
Adding a safety factor to the longest TTR should be considered. For example, rounding up to the nearest
whole day can be a relatively simple way to add such a safety factor. For example, if the longest TTR for a
slow-growing microorganism is 4.6 days, then the minimum incubation time for the routine test can be 5.0
days.
When appropriate, a larger safety factor may be considered, for example, an extra full day may be added to
the longest TTR. Using the same 4.6 day length of the longest TTR for a slow-growing microorganism, the
minimum incubation time for the routine test could be 5.6 days.
Both of these options are relatively simple to implement, and the stakeholder can justify a minimum TTR
that is suitable for the test method and routine-use requirements.

Another approach in setting a safety factor is based on the time needed for a ten-fold increase in the amount
of incubation time for the slowest-growing organism used during validation studies. This can be calculated
by multiplying the estimated generation time in the test media by log2(10) as illustrated in the following
equation:
𝑇𝑇 = 𝑡𝑡𝑡𝑡𝑡𝑡𝑡𝑡+ log2(10) · 𝐺𝐺
Where:
T
=
 incubation time for microbial detection in the test sample to be examined
        (hours (h))
tttr
=  longest TTR determined during primary validation, method suitability, and/or
       comparability studies (h)
G
=
 generation time of slowest-growing microorganism (h), which may be determined by
                    conducting separate studies or based on published literature
Using the same example, if the slowest microorganism has a TTR of 4.6 d (110.40 h) and has a generation
time of 1 h, the minimum time of incubation would be 110.40 + 3.32 × 1 = 113.72 h (or 4.7 d). Similarly, if
the slowest microorganism has a TTR of 4.6 d (110.40 h) but has a longer generation time of 5 h, the
minimum time of incubation would be 110.40 + 3.32 × 5 d = 127 h (or 5.3 d).
Stakeholders who want to calculate their own generation times can inoculate relevant organisms in the
alternative growth-based method and use the following equation:
𝐺𝐺 =
𝑡𝑡
3.3 𝑥𝑥 log 10 ቀ𝑁𝑁
𝑁𝑁0ቁ

Where:
t

=
 time interval (h)
N
=
 number of cells/CFU at the end of the time interval
N0
=
 number of cells/CFU at the beginning of the time interval
Note: Depending on the output signal measured, other formulas may apply.

#### 5.4.13 Guidance on Changing Acceptance Criteria

Though growth-based, CMM provide results in terms of a CFU, which could arise from a single cell or
multiple cells. Some AMM/RMMs will provide results or signals that are different from the CFU (e.g., a
viable cell count, a spectral analysis, relative light units, fluorescent units, etc.). As such, these
AMM/RMMs could potentially produce superior results (e.g., higher quantitative counts) when compared
with growth-based methods. Although strategies exist for demonstrating comparability between a non-CFU
method and a CFU method, data derived from non-CFU methods may not align with conventional
acceptance criteria, such as alert and action levels or specifications, because the number or rate of recovery
in these methods may be higher (see Section 5.4.10). Accordingly, the implementation of these non-CFU
methods may require the establishment of new acceptance criteria.

This is not a new concept. In a 2006 non-peer reviewed publication, the author’s concluded that new
microbiological methods rely on a completely different body of information—some may be direct
measurements, some indirect—and that previous acceptance criteria may not be applicable. Therefore,
implementation of newly developed, or more rapid microbiology methods may also require the
establishment of new acceptance criteria (86).
The 2022 revision of EU GMP Annex 1 allows AMM/RMMs, instead of growth-based, CMMs, to be used
for EM as long as they are appropriately validated and meet the intent of providing information during steps
when potential for contamination of the product exists. More importantly, throughout the document, the
microbiology limits are based on the CFU and, if new technologies are used that present results in a manner
different from the CFU, the manufacturer should scientifically justify the limits applied and, where possible,
correlate them to the CFU (9).
Similarly, the 2023 Swissmedicines Inspectorate publication Interpretation of GMP Annex 1 2022 (Rev. 1)
addresses whether it is possible to fully replace microbiological monitoring using settle plates and
volumetric air-sampling systems by other integrated sampling and testing systems, such as AMM/RMM.
The document states that the equivalence of methods should be demonstrated, and the effectiveness of the
chosen method should be proven. Additionally, for the use of real-time viable particle-counting and given
the nonequivalence of autofluorescent unit versus CFUs and current GMP pharmacopeial limits are in
CFUs, the company needs to collect data on their process for the real-time viable particle-counting to
compare it to the standard EM data (87). However, consideration should be given to the environments in
which these studies are performed, as some samples will provide microbial recoveries (e.g., Grade C and D,
or controlled, non-classified areas) while other environments may not (e.g., Grade A and B areas), in which
case alternative strategies may be used, including trending of zero to non-zero results. Additional guidance
is provided in Section 11.0 (Appendix 3).
AMM/RMMs that do not provide results as a CFU signal, are not based on the growth of microorganisms,
or are more sensitive than growth-based CMMs, may provide results that are numerically superior (higher)
than the CMM being compared. For these reasons, acceptance criteria historically based on the CFU, such
as EM alert and action levels or microbial specifications, may need to be changed to reflect the recovered
counts using the non-CFU method.
Establishing a numerical relationship between a non-CFU signal method to a CFU method may be possible
but only if the data can be correlated mathematically. For example, if the non-CFU signal is always five
times greater than the CFU method numerical values, then a 5X correlation factor may be used to establish
new acceptance levels. However, when a direct correlation between numerical values cannot be
demonstrated across the practical range of the test, across different sample matrices, different
microorganisms, or across different environmental areas, a general correlation may not be possible. In this
case, setting new acceptance levels for the AMM/RMM should be considered.
Understanding the AMM/RMM’s baseline measurements, similar to those described for comparability
studies, may be useful in establishing new acceptance levels, as recoveries considered to be “normal” would
not necessarily be treated as an OOE detection event. Where numerical baseline measurements indicate the
normal background noise in the absence of a test sample, these measurements may be subtracted from the
test sample measurements, when justified.
The most conservative approach is to continue to use the existing CFU levels and extend this to data derived
from using the AMM/RMM. For example, if an AMM/RMM demonstrates a normal baseline for

continuous EM as 0 CFU/m3, then excursions to this baseline may indicate an OOE event. Separately, if an
AMM/RMM indicates occasional recovery events over the course of some monitored period of time, then
these data should be used to establish the normally expected baseline. Using this information can help to
establish new acceptance criteria that can be related to the historical control measures using a conventional
CFU method. In this instance, the results from the AMM/RMM are used to make a quality decision about
the test result. This aligns with the decision-equivalence concept described in USP ⟨1223⟩.
Stakeholders may consider the following examples of how to establish new acceptance criteria:
•
Set the highest AMM/RMM recovery counts as an action level when you also show the
corresponding CFU count is at an acceptable level.
•
Use 97.5% and 99.5% percentiles or 2 and 3 standard deviations from the mean-AMM/RMM
counts for alert and action levels, respectively, based on the AMM/RMM historical data (i.e.,
baseline). This may also confirm correspondence to CFU acceptable levels.
•
Apply trending rules to determine when an out-of-trend (OOT) result is observed, when compared
with historical (baseline) data that may include numerical values for recovered counts and/or the
frequency of recovery or nonzero events over some period of time. This may be most appropriate
for a large number of test samples or monitored environments that are expected to have no or very-
low detection events. This may also be applied to higher detection events as long as the baseline is
appropriately defined. OOT events may include the following: ̶

One or more points outside the established alert or control limits ̶

Six points in a row that are steadily increasing ̶

Fourteen points in a row that are alternating up and down ̶

An unusual or nonrandom pattern in the data, when compared with historical data ̶

Any combination of the above recommendations
Discussions with relevant regulatory agencies or regulatory submissions may also be required prior to any
changes being finalized or implemented.
Ultimately, any changes to established specifications must be related to fitness for use and be suitable for the
application of interest. Additionally, final specifications should be scientifically sound, justified, and based
on an appropriate risk analysis.

#### 5.4.14 Ongoing Maintenance and Periodic Reviews

Following validation of the new microbiological method and accompanying system, appropriate procedures
should be established to maintain the system in a validated state; for example, standard operating procedures
should be implemented, the method and accompanying system should be included in a change control
program, and all instrumentation or equipment should be maintained in good working condition.
Once the new method and accompanying system has completed validation, subsequent change controls
should assess the impact of any change on the validation status of the system. Additionally, a formal
mechanism should be put in place to periodically review the method and the accompanying system’s
performance, as well as the overall validation program in relation to current good practices.
A special area of concern is the preventive maintenance program, frequently handled by the supplier of
specialized equipment. Many programs include updating system software with the most current software
versions, extension of databases, and periodic calibration checks. It is important to ensure that appropriate
requalification testing is performed before placing the system back into use, that the end user is cognizant of

good practice requirements, and that they perform the maintenance accurately in addition to documenting
the activities that were performed. The supplier should also provide information on the potential impact of
repairs or spare-part changes, or drift in instrument performance, in order to define requalification or
verification requirements.
Finally, the results or outputs of this phase should feed back into the first phase of the validation process,
namely, the risk assessment. This will ensure that the overall operation of the new method and
accompanying system does not introduce additional quality risks associated with the lifecycle of the
products and sample matrices that will be tested routinely.

#### 5.4.15 Decommissioning of Equipment

Decommissioning is part of the equipment’s lifecycle, and it must follow the same change-control rules to
ensure that the qualified and calibrated state is maintained until the final retirement. Decommissioning
activities include change documentation, documentation that the equipment is in a qualified and calibrated
status until its final use, termination of service or maintenance contracts (if applicable), archival of all
equipment-specific documentation, electronic files and the ability to retrieve them, decontamination prior to
retirement (if needed), update of the equipment inventory, and description of what happened to the
equipment—whether it is stored, given away, sold, or scrapped.
5.5 Alternative/Rapid Microbiological Methods for Mycoplasma Detection
PDA Technical Report No. 50: Alternative Methods for Mycoplasma Testing (TR 50) describes
mycoplasmas as “an unusual group of bacteria distinguished by the absence of a cell wall, a small genome
size and low G + C content” and provides a table of the most significant genera, which includes pathogenic,
saprophytic and commensal species (88, 89).
TR 50 provides a comprehensive review of the various methods available for mycoplasma testing as well as
describing what methods to use in evaluating the appropriateness of these methods.
Many of the recommendations provided in this technical report may be used in support of validating an
alternative or rapid mycoplasma method; however, reviewing the recommendations provided in TR 50 for a
thorough understanding of what is expected is recommended. Furthermore, Eur. Ph. Chapter 2.6.7
Mycoplasmas may provide additional guidance as it provides a detailed protocol for the primary method
validation and the product-specific tests for interfering substances as well as a section on NAT that has been
extensively revised to reflect the state of the art in science and technology, as of October 2025.

#### 5.5.1 Primary Method Validation

The parameters of the LoD, specificity, robustness, and comparability should be assessed during the primary
method validation as discussed in Sections 5.4.1-5.4.11.

##### 5.5.1.1 Limit of Detection

For the assessment of the LoD, the lowest amount of target nucleic acid in a sample that can be detected, the
positive cut-off point is determined. The positive cut-off point is the minimum number of target sequences
per sample-volume tested that can be detected in 95 percent of the test runs. To determine the positive cut-
off point, at least three (3) independent 10-fold dilution series of characterized and calibrated working

strains or standards should be tested. This design, with a sufficient number of replicates at each dilution,
gives a total number of 24 test results for each dilution which enables a statistical analysis of the results.
The specificity of a NAT, the ability to detect unambiguously the mycoplasma target nucleic acid, depends
on the primer and probe sequences and the stringency of the NAT conditions. Hence, the specificity
experiments should include a range of bacterial species other than mycoplasmas, that is, microorganisms
with a close phylogenetic relationship to mycoplasmas, such as other Gram-positive bacteria like
Clostridium, Lactobacillus, Streptococcus, or others, to evaluate the possibility for cross-detection of the
non-mycoplasma bacteria.

##### 5.5.1.2 Robustness

The robustness of the NAT, the capacity of the NAT to remain unaffected by small, but deliberate variations
in the method parameters, is assessed for example, by using different lots of the PCR-reagents, using
different thermal-cycler devices, or testing of samples on different days by different analysts, to examine the
variation between test runs. In addition, robustness of the alternative NAT can be evaluated by collaborative
studies.
5.5.1.3 Comparability/Equivalency Study
To demonstrate comparability/equivalency between the culture methods, the indicator-cell culture method,
and the NAT-based mycoplasma detection assay, cell-culture fluid should be spiked with relevant
mycoplasma strain stocks. Based on this initially spiked sample (e.g., 100 CFU/mL), a serial tenfold dilution
should be prepared using unspiked cell-culture fluid as diluent leading to samples spiked with 100 CFU/mL,
10 CFU/mL, 1 CFU/mL, 0.1 CFU/mL and, if needed, 0.01 CFU/mL. All dilutions are tested using all three
different mycoplasma detection methods in parallel without freezing the samples.
Acceptance criteria for the comparability study:
•
The NAT must be able to detect at least 10 CFU/mL or less than 100 GC/mL if the NAT is planned
as a replacement for the culture method.
•
The NAT must be able to detect at least 100 CFU/mL or less than 1000 GC/mL if the NAT is
planned as a replacement for the indicator-cell culture method.
•
The NAT must be able to detect at least 10 CFU/mL or less than 100 GC/mL if the NAT is planned
as a replacement for both the culture method and the indicator-cell culture method.

#### 5.5.2 Test for Interfering Substances/Method Suitability Testing

For each new product or cell source, a test for interfering substances must be performed to demonstrate that
the sample tested does not interfere with the NAT and/or the enrichment step (if applicable). Typically,
samples from three different lots of the product to be assessed or batches of the cell-culture harvests (if
available) are spiked with a maximum of 10 CFU/mL or 100 GC/mL and tested by the validated NAT to
demonstrate sufficient recovery (e.g., 95%) of the target nucleic acid in the presence of the product to be
tested.

#### 5.5.3 Mycoplasma Stocks and Standards

For the primary method validation and the product-specific test for interfering substances, use of a broad
range of mycoplasma, including challenging organisms (based on risk assessment), is recommended.

The selection process should consider the following:
•
Manufacturing process (such as use of mammalian, avian, or insect cell expression systems)
•
Use of mammalian or plant-derived media components
•
Product category (biopharmaceutical, ATMPs, or live vaccines) and the occurrence of
contamination (based on literature or their own experience)
Ph. Eur. Chapter 2.6.7 provides a suggestion of mycoplasma strains for validation testing based on their
frequency of occurrence as contaminants phylogenetic relationship.
The mycoplasma strains can be viable cultures, a preparation of nonviable whole organism derived from
these cultures, nucleic acid standards (e.g., the WHO International Standard for mycoplasma DNA for
nucleic acid amplification technique-based assays designed for generic mycoplasma detection), or assay
control plasmids. Positive control cultures should not be more than 15 passages from isolation, enumerated
(harvested during the exponential phase of growth to guarantee a high viability of the culture and titered in
CFU prior to freezing), and characterized using both the supernatant and cellular fractions, for genomic
copies (GC), that is, their GC/CFU ratio. A GC/CFU ratio of the reference preparations of less than 10 is
normally accepted by the relevant authorities; higher values must be justified.
The selection of the mycoplasma standard or reference material should be appropriate to the detection
technology employed and should reflect the complete analytical workflow, including any pre-treatment or
pre-processing steps (e.g., filtration, enrichment, nucleic acid extraction, lysis, concentration, or inactivation
procedures). For culture-based methods, viable organisms are generally required to evaluate growth
characteristics and recovery. For NAT or other molecular-based assays, nucleic acid standards or
appropriately characterized inactivated preparations may be suitable. When pre-processing steps are part of
the validated method, the chosen standard should allow assessment of the entire method performance, not
solely the detection step.

## 6.0 Implementation: Guidance on Secondary-Site Commissioning

Versus Initial Validation
Section 6.0 provides an overview and points to consider for transferring a validated AMM/RMM from a
primary validation site to a secondary site. For the purposes of this document, the “primary validation site”
is defined as the site performing the initial validation of the AMM/RMM, including equipment qualification
and method validation. The “secondary site” is defined as the site to which the method is transferred.

### 6.1 Guidance for the Transfer of an Alternative/Rapid Microbiological

Method from a Primary Validation Site to a Secondary Validation Site
The first time an AMM/RMM is qualified, it is expected that a comprehensive validation plan, as that
recommended in TR 33, is appropriately performed. When the AMM/RMM is transferred from a primary
validation site to a secondary site (e.g., testing or manufacturing facility), a copy of the original validation
package should be provided to the secondary site. Each new installation must be separately evaluated to
determine the extent of additional IQ, OQ, PQ, or method validation testing that may need to be performed.
As part of the installation, qualification, and method transfer activities at the secondary site, all necessary
training will be conducted, relevant procedures will be written and approved, and maintenance and
calibration programs will be developed prior to performing the analyst qualification and subsequent routine
use.

### 6.2 Equipment Installation and Operational Qualification at the Secondary

Site
When an identical technology is installed at the secondary site, it is expected that a standard equipment IQ
and OQ will be performed following the original qualification package (see Section 5.2.8 and Section
5.2.9). However, if the AMM/RMM is used at a secondary site for a different purpose or in a different
manner (e.g., standalone or LIMS integrated) than at the primary site, additional IQ, OQ and method
validation may be needed. There may also exist environmental or physical conditions related to the
secondary location that could warrant additional qualification or validation considerations, such as extremes
in altitude, relative humidity, or temperature.

### 6.3 Equipment Performance Qualification at the Secondary Site

Because an exhaustive microbiological testing plan will be completed during method validation at the
primary site, when a like-for-like instrument (e.g., the exact same model and components with the exact
same version numbers for all software, microprocessors, and computers) is installed, it may not be necessary
for the secondary site to repeat this testing in its entirety. However, it is recommended that a reduced

microbiological challenge from the original PQ, in addition to representative isolates recovered at the
secondary site, be performed to demonstrate that the system is operating as intended. A review of locally
recovered microbial isolates should indicate if the reference strains used during the qualification performed
at the primary site are representative of the isolates recovered at the secondary site. If they are not, then the
qualification plan should include a list of microbial isolates to be evaluated and what qualification
requirements they will be tested against. Additionally, it may be appropriate to determine if the original
qualification will meet current GMPs and internal requirements, taking into consideration the date the
original qualification was completed.

### 6.4 Implementation of the Alternative/Rapid Microbiological Method at

the Secondary Site
Method suitability in the presence of product must be repeated at the secondary site to demonstrate that the
method will provide the expected results when performed by the analysts at the secondary site. As part of
the method suitability test, local isolates from the secondary site (if it is a secondary manufacturing site),
especially those that were not tested at the primary site, must be included. See Section 5.3.2 for further
information on method suitability.
Once the AMM/RMM has been successfully installed and qualified for use at a secondary site and required
regulatory approval is obtained, the system may be used routinely.
In the event the secondary site intends to qualify the same instrument for use with a new product or process
material that was not assessed by the primary site, a risk assessment should be performed to determine if a
full-method validation, including method suitability testing and comparability testing, is required to be
performed (see Section 5.2.1). Section 5.3 discusses the use of test plans and acceptance criteria.

## 7.0 The Role of Artificial Intelligence in Microbiological Testing

AI is a scientific discipline established at the intersection of computer science, applied mathematics, and
engineering, dedicated to the development of systems capable of performing tasks traditionally requiring
human intelligence. From a functional perspective, AI can be defined as the simulation or approximation of
human intelligence in machines (90). Although AI incorporates ML and statistical methodologies, it remains
an independent and multidisciplinary field based on algorithm design, optimization, and logic-based
modeling (91).
In pharmaceutical manufacturing, AI is applied to support process control, enhance decision-making, and
strengthen quality operations. Within microbiological testing, AI contributes to improving the precision,
consistency, and efficiency of testing instruments, data analysis, and trending.
Applications of AI in microbiological testing include:
•
Within microbiological testing instruments, where it assists in interpreting signals for the
enumeration, detection, and identification of microorganisms, particularly in AMM/RMMs and
imaging-based technologies.
•
Outside the testing instruments, where it is used to analyze microbiological data (enumeration,
detection, and identification results) and to assist in decision-making, including trend analysis,
deviation detection, and contamination risk assessment.
•
In EM programs, where AI models process historical and real-time data to identify patterns
associated with microbial excursions and guide data-driven contamination control strategies.
From a regulatory perspective, the FDA has initiated several efforts to clarify expectations for the use of AI
in pharmaceutical development and manufacturing. In 2023, the FDA published the discussion paper
Artificial Intelligence in Drug Manufacturing which outlined potential regulatory considerations and invited
stakeholder feedback on how existing regulatory frameworks and current GMP requirements could apply to
AI-based models used in pharmaceutical manufacturing. This discussion paper served as an early step
toward developing a regulatory approach to AI-enabled technologies. Building on these efforts, the FDA
released the draft guidance Considerations for the Use of Artificial Intelligence to Support Regulatory
Decision-Making for Drug and Biological Products in 2025, which proposes a risk-based credibility
assessment framework for AI models used to generate data or information submitted in regulatory
applications. In parallel, the EMA published the draft guidance Annex 22: Artificial Intelligence, which
addresses the use of static AI systems in GMP-related processes where outputs may affect product quality,
patient safety, or data integrity. The document emphasizes clearly defined intended use, validation using
independent datasets, explainability, human oversight, and lifecycle monitoring to ensure that AI systems
remain controlled, auditable, and compliant within the GMP environment (92-94).
These published guidance documents reflect a growing recognition of the need to define clear expectations
for the validation, governance, and application of AI technologies within pharmaceutical development and

manufacturing. In this context, microbiological testing represents a critical area where AI can be responsibly
adopted in alignment with both scientific standards and evolving regulatory guidance. The integration of AI
into microbiological testing aligns with established scientific and regulatory frameworks, contributing to
improved data management, enhanced process understanding, and more robust microbial control.

### 7.1 Use of Artificial Intelligence in Signal Detection

Suppliers of microbiological methods have incorporated AI into the microbiological system to generate a
“reportable value” (e.g., microbial count, absent/present result, or identification) directly from raw
instrument data such as images or scatterplots.
For example, search algorithms are being used to screen databases with DNA patterns of known
microorganisms to map the observed DNA pattern from a test sample to one of the known DNA patterns in
a data library. Another example is the flow cytometry technology that provides two signals: light-scattering
and fluorescence from the individual microbial cells moving through the activators and detectors. The
detected signals are presented on a screen as a scatterplot that is used to define the enumeration of
microorganisms.
Traditional microbiological quality control methods rely on manual interpretation of culture plates, colony
morphology, or other analog signals generated during microbial detection assays. In many rapid
microbiological methods, signal interpretation has historically been performed using deterministic, rule-
based algorithms embedded in analytical instruments. In contrast, AI models learn patterns directly from
large datasets rather than relying solely on predefined rules, enabling the identification of complex
relationships and subtle variations in digital microbiological data. When properly trained and validated,
these models support more consistent and scalable analysis of signals generated by modern microbiological
technologies.
Many rapid microbiological methods produce digital image data that are analyzed computationally. In
image-based detection systems, microbial colonies or cells are represented as arrays of pixels describing
variations in light intensity or color. Computer-vision algorithms analyze these pixel patterns to recognize
shapes, textures, and spatial features associated with microbial cells or colonies. Because microbial
structures exhibit characteristic morphological patterns, AI-based image analysis improves the consistency
and throughput of microbial detection compared with manual counting, particularly when large image
datasets are analyzed (95, 96).
Other rapid microbiological technologies generate multidimensional optical or molecular signals that also
benefit from AI-assisted interpretation. Flow cytometry–based microbial detection systems, for example,
measure light-scattering and fluorescence signals emitted by individual cells as they pass through optical
detectors. Machine-learning models analyze these signal patterns to differentiate microbial cells from
background particles and support automated enumeration of microbial populations (97, 98). Similarly,
genomic identification methods compare DNA sequences obtained from a test sample with reference
databases of known microorganisms; machine-learning approaches enhance these analyses by identifying
complex sequence patterns and improving classification performance within large genomic datasets (99).
Among computer-vision techniques used in microbiological image analysis, object-detection models such as
the “You Only Look Once” (YOLO) architecture are widely applied. YOLO analyzes an image by dividing
it into regions and simultaneously predicting the location and classification of objects within each region,
enabling rapid identification of microbial cells or colonies in complex images. Because the model evaluates

the entire image in a single computational step, it efficiently recognizes biological structures and spatial
patterns within pixel-based microscopy images (100).
For the validation of AMM/RMM, it is important to distinguish between two types of AI model approaches
that may be implemented within the instrument’s software: static (locked) and dynamic (adaptive) AI
models.
Static AI models are trained once on a fixed dataset and remain unchanged during the operational use of the
microbiological method unless the software and its embedded models are formally updated. These models
are typically built using algorithms trained on extensive datasets to distinguish between “noise” and true
microbial signals. The performance and reliability of a static model depend on the quality,
representativeness, and diversity of the data used during its initial training, which remains the responsibility
of the supplier. Because these models do not modify their parameters during routine use, their validation
follows the established experimentation and data analysis recommendations provided in this technical
report. If the instrument software is updated and the AI model is retrained, for example, by incorporating
new data to enhance performance, the changes must be assessed, and revalidation of the microbiological
method may be required to ensure continued compliance and reliability (93, 101).
Dynamic AI models, in contrast, are designed to continuously learn and adapt by updating their parameters
as new data is generated during routine use of the microbiological method. This ongoing learning process
can potentially enhance the model’s ability to accurately detect microbial signals over time, especially as the
dataset expands beyond the initial training population. While dynamic models offer the advantage of
adaptability and potential performance improvements, they also introduce additional validation challenges.
Continuous updates may lead to model drift or unintended shifts in performance, particularly affecting the
detection of less-represented or newly emerging microbial subpopulations (93). Consequently,
microbiological methods employing dynamic AI models require ongoing monitoring to confirm that model
performance is improving or remaining stable and not deteriorating in critical areas.
Actual AI development routinely incorporates explainability techniques to ensure that model predictions
remain interpretable and transparent, especially in regulated environments. Methods such as the Shapley
Additive Explanations and Local Interpretable Model-Agnostic Explanations help clarify how complex
models reach their conclusions by identifying the contribution of each input variable to the final prediction
(102). Additionally, frameworks like the Open Neural Network Exchange provide a standardized format for
representing AI models across platforms, supporting both model portability and explainability (103). These
tools are particularly valuable for dynamic AI models in microbiological testing, ensuring reliable
performance monitoring and regulatory transparency.
The current guidance provided in this document can be applied to determine the performance of a
microbiological method employing AI models at a given point in time. However, dynamic AI models
additionally require regular verification of their operational behavior and performance trends. Defining
standardized procedures for ongoing monitoring, acceptance criteria, and revalidation for dynamic AI
models remains an active area of research, and specific regulatory expectations for this type of application
are still evolving (93, 104). It should be noted that certain regulatory bodies have adopted a more
conservative preliminary position regarding dynamic AI models in GMP-critical applications; notably, the
draft EU GMP Annex 22: Artificial Intelligence (EMA, 2025) currently limits its scope to static,
deterministic models and recommends that dynamic models should not be used in critical GMP
applications. Regulatory expectations in this area, however, continue to evolve, and other frameworks, such
as the FDA draft guidance on the use of AI to support regulatory decision-making (85) and the FDA Total

Product Lifecycle approach for AI/ML-based Software as a Medical Device, do not preclude the use of
dynamic models provided that appropriate validation, monitoring, and lifecycle controls are in place.

### 7.2 Use of Artificial Intelligence in Environmental Monitoring

AI is also being used on sets of data (or reportable values) that are generated by the microbiological method
to obtain a better understanding of the observed data and to assist with the decision-making process. An
active application area is EM, where it is important to know when a production or testing environment is
starting to show a number of microorganisms that is unlikely to occur under normal use of the environment.
An upward change in the number of microorganisms may increase the risk of product contamination.
Indeed, Section 2.1 of EU GMP Annex 1 states that:
Facility, equipment and process should be appropriately designed, qualified and/or
validated and where applicable, subjected to ongoing verification according to the relevant
sections of the Good Manufacturing Practices (GMP) guidelines. The use of appropriate
technologies (e.g. Restricted Access Barriers Systems (RABS), isolators, robotic systems,
rapid/alternative methods and continuous monitoring systems) should be considered to
increase the protection of the product from potential extraneous sources of
endotoxin/pyrogen, particulate and microbial contamination such as personnel, materials
and the surrounding environment, and assist in the rapid detection of potential contaminants
in the environment and the product.
EM is part of the field of statistical process control, where three main activities are being implemented
(105):
1. Monitoring the process (here, the environment)
2. Detecting deviations from what is considered in-control
3. Taking corrective action in response to an alarm signal to bring the environment back in control
Thus, part of EM can be viewed as a rule-based decision system for detecting an abnormal situation, and
specific AI techniques for anomaly detection can be used, such as:
•
Isolation Forests (effective for outlier detection in microbial count trends)
•
Autoencoders (unsupervised learning for anomaly detection in complex datasets)
•
Bayesian Networks (probabilistic models for uncertainty management in EM)
The primary AI approaches for EM, including their use cases, data requirements, and validation
considerations, are summarized in Table 7.2-1.

**Table 7.2-1 Artificial Intelligence Approaches for Environmental Monitoring**

Summary of AI Approaches for Environmental Monitoring
Supervised Learning (e.g., Random Forest, Gradient Boosting)
Typical EM Use Case
Predicting out-of-trend (OOT)/out-of-action (OOA) events, prioritizing investigations, multivariable risk scoring from
historical EM metadata.
When Most
Appropriate
When a site has sufficient labeled historical events and stable definitions of excursions/deviations.
Main Advantages
Good predictive performance on complex multivariable data; tree-based models are often favored in manufacturing QA
because they handle high-dimensional sensor/process data well; some interpretability is possible through feature
importance.
Main Trade-Offs
Requires enough representative labeled data; can overfit site-specific patterns; false positives may rise if the event class is
rare or process conditions shift.
Validation
Considerations
Use temporally separated training/test data or cross-validation; assess precision/recall, not accuracy alone; perform
external/site-specific revalidation and lifecycle review because pharmaceutical models require risk-based validation and
maintenance.
Peer Reviewed
Reference Examples
Explainable Machine Learning for the Regulatory Environment: A Case Study in Micro-droplet Printing by D. Ryan, E. Harris, and
G. O’Connor (2024)
Machine Learning Algorithms for Manufacturing Quality Assurance: A Systematic Review of Performance Metrics and
Systematic Review of Performance Metrics and Applications by A. Karim Kausik, A. Bin Rashid, R. Baki, and M. Maktum
(2025)

Summary of AI Approaches for Environmental Monitoring
Unsupervised Learning (e.g., k-means, DBSCAN, clustering-based anomaly detection)
Typical EM Use Case
Detecting novel anomalies, shifts in contamination patterns, spatial or temporal clustering of atypical EM behavior when
labels are limited.
When Most
Appropriate
When labeled OOT events are scarce, inconsistent, or unavailable; useful for exploratory surveillance and early signal
detection.
Main Advantages
Does not require labeled deviations; can identify previously unrecognized patterns or rare states; useful when excursions
are infrequent.
Main Trade-Offs
More sensitive to preprocessing and parameter choices; cluster meaning is not always obvious; higher review burden
because anomalies still need SME interpretation. DBSCAN is attractive when noise/outliers are expected, whereas k-
means is simpler but requires choosing cluster number and assumes more compact cluster structure.
Validation
Considerations
Predefine anomaly-review rules; test robustness to hyperparameters and time windows; compare outputs against known
historical excursions/trends and expert assessment before routine deployment.
Peer Reviewed
Reference Examples
Detection and Diagnosis of Process Fault Using Unsupervised Learning Methods and Unlabeled Data by A. Rahoma, S. Imtiaz,
S. Ahmed, and F. Khan (2023).

Summary of AI Approaches for Environmental Monitoring
Hybrid/Staged Strategy (e.g., unsupervised detection followed by supervised classification or transfer learning)
Typical EM Use Case
Early detection of atypical states followed by risk ranking or classification; adapting models across lines, rooms, or
equipment with data shifts.
When Most
Appropriate
When sites have mixed data maturity: many unlabeled records, few confirmed events, or changing operating conditions
between campaigns/areas.
Main Advantages
Combines strengths of both approaches: unsupervised methods discover new patterns, while supervised or transfer
components improve prioritization and robustness under data shift. Hybrid methods are also discussed as promising for
better prediction in bioprocess settings.
Main Trade-Offs
More complex to implement and govern; more moving parts means more documentation, change control, and validation
effort.
Validation
Considerations
Validate each stage separately and end-to-end; assess transferability across equipment/contexts; include model
maintenance, drift monitoring, and retraining triggers in the lifecycle plan.
Peer Reviewed
Reference Examples
Anomaly Detection for Drug Product Manufacturing Considering Data Limitations and Shifts: A Case Study on Industrial Freeze-
dryers by G. Lombardini et. al. (2025)
Explainable Machine Learning for the Regulatory Environment: A Case Study in Micro-droplet Printing by D. Ryan, E. Harris, and
G. O’Connor (2024)
Review on Machine Learning-based Bioprocess Optimization, Monitoring, and Control Systems by P. Pratim Mondal et. al.
(2023)

contact plates, settle plates, and personnel monitoring. The collected data is typically evaluated using control
charts based on the Poisson or negative-binomial distribution, which incorporate statistically derived limits
reflecting the natural variation inherent in production or testing environments due to common causes. When,
at a specific point in time, the enumeration exceeds the action limit (generating an out-of-control (OOC)
signal) or shows an adverse trend (OOT signal), for example, through a higher frequency of alert limit
excursions or a systematic increase in counts, it may indicate a change in the state of the controlled
environment (106). However, AI models can offer a more flexible and predictive approach by analyzing
complex, high-dimensional, and time-dependent patterns in EM data that conventional Poisson-based
control charts may not detect.
The cause of a potential change in the microbial burden depends on the characteristics of the environment
under investigation. For example, OOC or OOT signals in a cleanroom may be caused by such factors as the
opening of a barrier system, a HEPA-filter integrity failure, or a reduction in laminar airflow velocity. In
pharmaceutical water systems, potential causes may include diminished UV lamp performance, biofilm
formation, or leaks in the distribution system since the last sanitization.
To enhance the early detection and characterization of such deviations, AI techniques are increasingly being
applied in EM data analysis. A practical way to present these methods is to distinguish them by data
availability and intended use. Supervised models, such as Random Forest and Gradient Boosting, are most
appropriate when large, well-labeled historical EM datasets are available for excursion prediction or risk
scoring (107). In contrast, unsupervised approaches like k-means or Density-Based Spatial Clustering of
Applications with Noise (DBSCAN) are more suitable when labeled OOT events are scarce and the goal is
to detect unrecognized anomalies (108). Hybrid strategies may be preferable for mature EM programs as
they combine exploratory detection with targeted classification, though they require more rigorous lifecycle
validation.
Moreover, recurrent neural networks, particularly Long Short-Term Memory (LSTM) models, are well
suited for analyzing sequential EM datasets, enabling the prediction of future excursions or trends by
capturing temporal dependencies and latent trends in microbial counts. These AI-driven methods support
proactive contamination control by identifying potential system disturbances before traditional control
charts would signal an alert. Integrating these AI techniques into EM programs offers the potential to move
from reactive deviation management to predictive risk-based control strategies. Their application enhances
sensitivity to subtle environmental changes while reducing false positives caused by expected background
variability, thus improving contamination risk management and overall operational robustness.
Many companies are considering or are transitioning to microbial particle-counters for EM that generate
counts in an almost continuous manner, providing real-time and high-frequency data. High-frequency data
is often considerably more erratic than data obtained from conventional approaches, which is typically
collected at much lower frequencies (e.g., daily). In continuous monitoring, small and transient changes to
the environment immediately affect the datastream and would not be captured when data is accumulated
over longer intervals as such fluctuations tend to average out. As a result, these minor, short-term
aberrations complicate the application of conventional control charts on continuous datastreams, as they
may generate frequent OOT or OOC signals. Control charts typically assume a Poisson or negative-
binomial distribution for the observed data that remains constant over time while the environment is in
control. However, normal operational activities often introduce additional peaks and fluctuations that violate
this assumption of a stable, time-independent distribution.

To address these challenges, AI algorithms specifically designed for automatic anomaly detection in high-
frequency time-series data are increasingly applied in industrial and pharmaceutical monitoring
environments. One widely used method is the Isolation Forest technique, which isolates anomalies by
randomly selecting features and splitting the dataset into a tree-like structure. Since outliers differ markedly
from normal patterns, they require fewer splits to be isolated, making this approach highly efficient for real-
time anomaly detection in continuous monitoring systems (109). Another effective method involves LSTM
Autoencoders, which are neural-network architectures trained to learn and reconstruct normal sequential
patterns. When unexpected anomalies occur, these models fail to reconstruct the sequence accurately,
resulting in elevated reconstruction errors that act as reliable signals for deviations. This approach is
particularly suitable for detecting subtle or emergent shifts in continuous industrial process-monitoring,
environmental-contamination data, network security, and biomedical signals (110).
One approach for monitoring environments with high-frequency data is to aggregate the data to a larger
period of time (total or average number of counts per day) and then use conventional control charts. The
small aberrations will be averaged out over longer periods, assuming a constant distribution is more likely.
However, aggregation would not maximize the available information. Instead, ML methods may be applied
to the high-frequency datastream to learn what patterns of data are considered in-control (i.e., normal
variation even if it would lead to signals in conventional control charts) and what patterns of data are
considered OOC (i.e., signals beyond the normal aberrations or outlier results). The most suitable ML
approaches for EM are approaches that could detect outliers in data sets. The reason is that separating in-
control from OOC situations is very similar to detecting outliers or erratic data patterns.

## 8.0 References

1. U.S. Pharmacopeial Convention. General Chapter <1225> Validation of Compendial Procedures. In
USP 43–NF 38, USP: Rockville, Md., 2017.
2. International Council for Harmonisation. Quality Guideline Q2(R2): Validation of Analytical
Procedures; ICH: Geneva, 2023.
3. U.S. Food and Drug Administration. Guidance for Industry: Analytical Procedures and Methods
Validation for Drugs and Biologics; U.S. Department of Health and Human Services: Silver Spring,
Md., 2015.
4. U.S. Pharmacopeial Convention. General Chapter <1223> Validation of Alternative
Microbiological Methods. In Pharmacopeial Forum: Vol. PF 40(4), USP: Rockville, Md., 2018.
5. Council of Europe. Alternative Methods for Control of Microbiological Quality, Chapter 5.1.6. In
European Pharmacopoeia 11.8, Council of Europe: Strasbourg, 2023.
6. Pharmacopoeia, S o J. General Information–G4 Microorganisms. In The Japanese Pharmacopoeia,
18th Edition (English Version), Pharmaceutical and Medical Device Regulatory Science Society of
Japan: Tokyo, Japan, 2022; pp 2684-707.
7. Junyan Liu, et al. Viable but Nonculturable (VBNC) State, an Underestimated and Controversial
Microbial Survival Strategy. Trends in Microbiology 2023, 31 (10), 1013-23.
8. Epstein, S S. Uncultivated Microorganisms.  Epstein, S S, Ed. Springer: 2009.
9. European Commission. Annex 1: Manufacture of Sterile Medicinal Products, EudraLex – Volume 4
– EU Guidelines for Good Manufacturing Practice for Medicinal Products for Human and
Veterinary Use; European Commission: Brussels, 2022.
10. U.S. Food and Drug Administration. Pharmaceutical cGMPs for the 21st Century — A Risk-Based
Approach: Final Report; Department of Health and Human Services: Silver Spring, Md., 2004.
11. U.S. Food and Drug Administration. Guidance for Industry: PAT — A Framework for Innovative
Pharmaceutical Development, Manufacturing, and Quality Assurance; U.S. Department of Health
and Human Services: Rockville, Md., 2004.
12. U.S. Pharmacopeial Convention. General Chapter <1071> Rapid Microbial Tests for Release of
Sterile Short-Life Products: A Risk-Based Approach. In USP 43–NF 38, USP: Rockville, Md.,
2019.
13. Miller, M J. The Role of Rapid Microbiological Methods in Aseptic Processing. In Aseptic and
Sterile Processing, Control, Compliance and Future Trends, Sandle, T; Tidswell, E, Eds. PDA and
DHI Publishing, LLC: Bethesda, Md., 2017.
14. Miller, M J. The Regulatory Acceptance of Rapid Microbiological Methods. European
Pharmaceutical Review 2017, 22 (3), 55-58.
15. U.S. Food and Drug Administration. Guidance for Industry: Changes to an Approved NDA or
ANDA; Specifications – Use of Enforcement Discretion for Compendial Changes; Center for Drug
Evaluation and Research. U.S. Department of Health and Human Services: Silver Spring, Md,
2004.

16. U.S. Food and Drug Administration. Guidance for Industry: Sterile Drug Products Produced by
Aseptic Processing—Current Good Manufacturing Practice; U.S. Department of Health and
Human Services: Rockville, MD, 2004.
17. U.S. Food and Drug Administration. 21 CFR 610.12: Sterility; National Archives: Washington,
D.C., 2017.
18. U.S. Food and Drug Administration. Guidance for Industry: Chemistry, Manufacturing, and
Control (CMC) Information for Human Gene Therapy Investigational New Drug Applications
(INDs); U.S. Department of Health and Human Services: Silver Spring, Md., 2020.
19. U.S. Food and Drug Administration. Advancing Regulatory Science at FDA: A Strategic Plan; U.S.
Department of Health and Human Services: Rockville, Md., 2011.
20. U.S. Food and Drug Administration. FDA User Fee Programs. https://www.fda.gov/industry/fda-
user-fee-programs (accessed 6 Oct 2025).
21. U.S. Food and Drug Administration. Guidance for Industry: Formal Meetings Between FDA and
Sponsors or Applicants of BsUFA Products; U.S. Department of Health and Human Services:
Silver Spring, Md., 2025.
22. U.S. Food and Drug Administration. Guidance for Industry: Formal Meetings Between FDA and
ANDA Applicants of Complex Products Under GDUFA; U.S. Department of Health and Human
Services: Silver Spring, Md., 2022.
23. U.S. Food and Drug Administration. Draft Guidance for Industry: Formal Meetings Between FDA
and Sponsors or Applicants of PDUFA Products; U.S. Department of Health and Human Services:
Silver Spring, Md., 2023.
24. U.S. Food and Drug Administration. Emerging Technology Program (ETP).
https://www.fda.gov/about-fda/center-drug-evaluation-and-research-cder/emerging-technology-
program-etp (accessed 6 Oct 2025).
25. U.S. Food and Drug Administration. Guidance for Industry: Comparability Protocols for
Postapproval Changes to the Chemistry, Manufacturing, and Controls Information in an NDA,
ANDA, or BLA; U.S. Department of Health and Human Services: Silver Spring, Md., 2022.
26. European Commission. Regulation (EC) No 1234/2008 of 24 November 2008 Concerning the
Examination of Variations to the Terms of Marketing Authorisations for Medicinal Products for
Human Use and Veterinary Medicinal Products. OJ 2025.
27. European Medicines Agency. European Medicines Agency Guidance for Applicants Seeking
Scientific Advice and Protocol Assistance [EMA/4260/2001 Rev. 16]; EMA: London, 2025.
28. European Commission. Guidelines on the Details of the Various Categories of Variations, on the
Operation of the Procedures Laid Down in Chapters II, IIa, III and IV of Commission Regulation
(EC) No 1234/2008 Concerning the Examination of Variations to the Terms of Marketing
Authorisations for Medicinal Products for Human Use, and on the Documentation to be Submitted
Pursuan to those Procedures; C/2025/5045. European Commission: Brussels, 2025.
29. European Medicines Agency. Questions and Answers on Post-Approval Change Management
Protocols; EMA: London, 2012.
30. Council of Europe. Microbiological Examination of Cell-Based Preparations, Chapter 2.6.27. In
European Pharmacopoeia (Ph. Eur.), 11th Ed., Council of Europe: Strasbourg, France, 2023; p p.
5813.
31. British Pharmacopoeia Commission. British Pharmacopoeia 2026.  Care, D o H a S, Ed. Medicines
& Healthcare products Regulatory Agency: London, 2026.
32. Standardization., I O f. ISO/IEC 17025:2017 General Requirements for the Competence of Testing
and Calibration Laboratories; ISO: Geneva, 2018.

33. Chinese Pharmacopoeia Commission. Chapter 9201: Guidelines for the Validation of Alternative
Microbial Detection Methods for Pharmaceuticals. In Chinese Pharmacopoeia 2025, China
Medical Science Press: Beijing, 2025.
34. Indian Pharmacopoeia Commission. General Chapter 2.2.30: Approach to Alternative
Microbiological Methods. In Indian Pharmacopoeia (IP) 2022, India Ministry of Health & Family
Welfare: Ghaziabad, 2022; Vol. 9th Edition.
35. U.S. Pharmacopeial Convention. General Notices and Requirements, Sec. 6.30. Alternative and
Harmonized Methods and Procedures. In USP–NF, USP: Rockville, Md., 2025; Vol. Online.
36. Miller, M J. Rapid Microbiological Methods and Demonstrating a Return on Investment: It’s Easier
Than You Think! Am Pharm Rev 2009, Online (Aug 9, 2009).
37. International Council for Harmonisation. Quality Guideline Q9(R1): Quality Risk Management;
ICH: Geneva, 2023.
38. Deidda, R, et al. Risk-based Approach for Method Development in Pharmaceutical Quality Control
Context: A Critical Review. J Pharm & Biomed Anal 2018, 161, 110-21.
39. Verch, T, et al. Analytical Quality by Design, Life Cycle Management, and Method Control. AAPS
J 2022, 24 (34), 1-21.
40. Ganorker, A V; Gupta, K R. Analytical Quality by Design: A Mini Review. Biochem J Sci & Tech
Res 2017, 1 (6), 155-58.
41. Schweitzer, M, et al. Implications and Opportunities of Applying QbD Principles to Analytical
Measurements. Pharm Tech 2010, 34 (2), 52-59.
42. Council of Europe. Mycoplasmas, Chapter 2.6.7. In European Pharmacopoeia (Ph. Eur.), 11th
Edition, Council of Europe: Strasbourg, France, 2023; p 210.
43. U.S. Pharmacopeial Convention. General Chapter <1220> Analytical Procedure Life Cycle. In PF
46(5), USP: Rockville, Md., 2022; Vol. USPNF 2022 ISSUE 1 - online.
44. Gordon, O, et al. Validation of Milliflex® Quantum for Bioburden Testing of Pharmaceutical
Product. PDA J Pharm Sci Technol 2017, 71 (3), 206-24.
45. Parenteral Drug Association. Technical Report No. 44: Quality Risk Management for Aseptic
Processes; PDA: Bethesda, MD, 2008.
46. World Health Organization. Annex 7: Application of Hazard Analysis and Critical Control Point
(HACCP) Methodology to Pharmaceuticals; WHO: Geneva, 2003.
47. Deutschmann, S, et al. A Systematic Approach for the Evaluation, Validation, and Implementation
of Automated Colony Counting Systems. PDA J Pharm Sci Technol 2022.
48. Jones, J; Cundell, A. Method Verification Requirements for an Advanced Imaging System for
Microbial Plate Count Enumeration. PDA J Pharm Sci Technol 2018, 72 (2), 199-212.
49. Anders, H J, et al. Multisite Qualification of an Automated Incubator and Colony Counter for
Environmental and Bioburden Applications in Pharmaceutical Microbiology. J Pharm Sci Technol
2022, 77 (3), 236-47.
50. U.S. Pharmacopeial Convention. General Chapter <61> Microbiological Examination of Nonsterile
Products: Microbial Enumeration Tests. In Pharmacopeial Forum, Vol. PF 29(5), USP: Rockville,
Md., 2025.
51. Tidswell, E C; Sandle, T. Microbiological Test Data—Assuring Data Integrity. PDA J Pharm Sci
Technol 2018, 72 (1), 2-14.
52. Jarvis, B. Statistical Aspects of Sampling for Microbiological Analysis. In Statistical Aspects of the
Microbiological Examination of Foods (Third Edition), Academic Press (Elsevier): Cambridge,
Mass., 2016; pp 71-101.

53. Jongenburger, I, et al. Impact of Microbial Distributions on Food Safety I. Factors Influencing
Microbial Distributions and Modelling Aspects. Food Control, 2012, 26 (2), 601-09.
54. U.S. Pharmacopeial Convention. General Chapter <1113> Microbial Characterization,
Identification, and Strain Typing. In PF No. 51(5), 2025.
55. Cundell, A. Emerging Roles of Nucleic Acid-Based Methods in Pharmaceutical Microbiology.
American Pharmaceutical Review 2025, 28 (2), 12-16.
56. Council of Europe. Examples of Validation Protocols of The Alternative Microbiological Methods
according to Chapter 5.1.6 “Alternative Methods for Control of Microbiological Quality”;
European Directorate for the Quality of Medicines & HealthCare (EDQM). EDQM: Strasbourg,
2018. https://act.edqm.eu/s/S5JXXGXRWco9H6k (accessed 6 Oct 2025).
57. Council of Europe. Process Analytical Technology, Chapter 5.25. In European Pharmacopoeia
11.8, Council of Europe: Strasbourg, 2023.
58. Council of Europe. Monocyte-Activation Test (MAT), Chapter 2.6.30. In European
Pharmacopoeia (Ph. Eur. Online), 12th ed.; Council of Europe: Strasbourg, 2023.
59. BioPhorum Operations Group (BPOG). Alternative and Rapid Micro Methods (ARMM): A
Framework for the Evaluation, Validation and Implementation of Alternative and Rapid
Microbiological Testing Methods; BioPhorum: Online, 2020.
60. Sioen, I; Coenye, T. Evaluation of a Novel Isothermal Microcalorimetry-based Sterility Test.
bioRxiv 2026.
61. Reese, K, et al. Metabolic Profiling of Volatile Organic Compounds (VOCs) Emitted by the
Pathogens Francisella tularensis and Bacillus anthracis in Liquid Culture. Scientific Reports 2020.
62. Duncan, D, et al. The Application of Noninvasive Headspace Analysis to Media Fill Inspection.
PDA Journal of Pharmaceutical Science and Technology 2016, 70 (3), 230-47.
63. Li, K C, et al. Noise Tolerant Photonic Bowtie Grating Environmental Sensor. ACS Sensors 2024, 9
(4), 1857-65.
64. U.S. Food and Drug Administration. About Biomarkers and Qualification. U.S. Food & Drug
Administration Biomarker Qualification Program. https://www.fda.gov/drugs/drug-development-
tool-ddt-qualification-programs/biomarker-qualification-program (accessed 27 Oct 2025).
65. Hung, F-N, et al. Triple Combination of Interferon Beta-1b, Lopinavir–Ritonavir, and Ribavirin in
the Treatment of Patients Admitted to Hospital with COVID-19: An Open-Label, Randomised,
Phase 2 Trial. The Lancet 2020, 395 (10238), 1695-704.
66. Huang, X, et al. The Landscape of mRNA Nanomedicine. Nat Med 2022, 28, 2273–87.
67. Salvas, J, et al. Understanding the Non-Equivalency of Bio-Fluorescent Particle Counts versus the
Colony-Forming Unit. PDA Journal of Pharmaceutical Science and Technology 2023, 77 (6), 514-
18.
68. U.S. Pharmacopeial Convention. General Chapter <74> Solid Phase Cytometry-Based Rapid
Microbiological Methods for the Detection of Contamination in Clear Aqueous Solutions.
Pharmacopeial Forum 2025, 51 (3).
69. Clinical and Laboratory Standards Institute (CLSI). M52 Verification of Commercial Microbial
Identification and Antimicrobial Susceptibility Testing Systems; CLSI: Wayne, PA, 2015.
70. Janda, M J; Abbott, S L. Bacterial Identification for Publication: When Is Enough Enough? J Clin
Microbiol 2002, 40 (6), 1887–91.
71. Encyclopedia of Rapid Microbiological Methods.  Miller, M J, Ed. PDA: Bethesda, MD, 2015; Vol.
1-4.
72. Denoya, C. Nucleic Acid Amplification-Based Rapid Microbiological Methods: Are these
Technologies Teady for Deployment in the Pharmaceutical Industry? Am Pharm Rev 2009, 12 (4).

73. Jimenez, L. Molecular Applications to Pharmaceutical Processes and Cleanroom Environments.
74. Rapid Microbiological Methods (RMM). Rapid Micro. http://rapidmicromethods.com/ (accessed 6
Oct 2025).
75. U.S. Food and Drug Administration. 21 CFR 314.420 Drug Master Files; Department of Health
and Human Services: Washington, DC, 2004.
76. U.S. Pharmacopeial Convention. General Chapter <1058> Analytical Instrument Qualification.
USP 42-NF 38: Rockville, Md., 2017.
77. U.S. Food and Drug Administration. Guidance for Industry and Food and Drug Administrative
Staff: Computer Software Assurance for Production and Quality System Software; U.S. Department
Of Health and Human Services: Silver Spring, Md., 2025.
78. European Commission. Annex 11: Computerised Systems, EudraLex – Volume 4 – Good
Manufacturing Practice for Medicinal Products for Human and Veterinary Use; European
Commission: Brussels, 2011.
79. International Society for Pharmaceutical Engineering. What is GAMP®? ISPE® | Gamp®.
https://ispe.org/initiatives/regulatory/what-gamp (accessed 6 Oct 2025).
80. U.S. Food and Drug Administration. Guidance for Industry: Part 11, Electronic Records;
Electronic Signatures — Scope and Application; U.S. Department of Health and Human Services:
Silver Spring, Md, 2003.
81. Miller, M J, et al. The Role of Statistical Analysis in Validating Rapid Microbiological Methods.
European Pharmaceutical Review 2016, 21 (6), 46-53.
82. McKay, A T. Distribution of the Coefficient of Variation and the Extended “T” Distribution.
Journal of the Royal Statistical Society 1932, 95 (4), 695-98.
83. Brown, M B; Forsythe, A B. Robust Tests for Equality of Variances. J Am Stat Assoc 1974, 69,
364–67.
84. Blodgett, R J. BAM Appendix 2: Most Probable Number from Serial Dilutions. Bacteriological
Analytical Manual (BAM) Main Page. https://www.fda.gov/food/laboratory-methods-food/bam-
appendix-2-most-probable-number-serial-dilutions (accessed 6 Oct 2025).
85. Martindale, C, et al. Considerations for the Validation of Non-CFU Based Bio-Fluorescent Particle
Counting Technologies. PDA Journal of Pharmaceutical Science and Technology 2025, 79 (6),
694-706.
86. Hussong, D; Mello, R. Alternative microbiology methods and pharmaceutical quality control. Am
Pharm Rev 2006, 9 (1), 62-69.
87. Swissmedicines Inspectorate. Interpretation of GMP Annex 1 2022 (Rev.1); Swissmedic: Bern,
Switzerland, 2023.
88. Fadiel, A, et al. Mycoplasma Genomics: Tailoring the Genome for Minimal Life Requirements
through Reductive Evolution. Front Biosci 2007, 12, 2020-28.
89. Parenteral Drug Association. Technical Report No. 50: Alternative Methods for Mycoplasma
Testing; PDA: Bethesda, Md., 2010.
90. Parenteral Drug Association. PDA AI Glossary. Artificial Intelligence (AI) in Parenteral Drug
Manufacturing. https://www.pda.org/scientific-and-regulatory-affairs/pda-ai-glossary (accessed 6
Oct 2025).
91. Russell, S J; Norvig, P. Artificial Intelligence: A Modern Approach, Global Edition, 4th Edition.
Norvig, S J R a P, Ed. Pearson Education Limited: London, 2021.

92. U.S. Food and Drug Administration. Discussion Paper: Artificial Intelligence in Drug
Manufacturing; U.S. FDA: Silver Spring, Md., 2023. https://www.fda.gov/media/165743/download
(accessed 6 Oct 2025).
93. U.S. Food and Drug Administration. Draft Guidance for Industry and Other Interested Parties:
Considerations for the Use of Artificial Intelligence to Support Regulatory Decision-Making for
Drug and Biological Products; U.S. Department of Health and Human Services: Silver Spring,
Md., 2025.
94. European Commission. EU GMP Annex 22 (Draft 2025): Artificial Intelligence; European
Commission: Brussels, 2025.
95. LeCun, Y, et al. Deep Learning. Nature 2015, 521, 436-44.
96. Moen, E, et al. Deep Learning for Cellular Image Analysis. Nature Methods 2019, 16, 1233-46.
97. Hammes, F, et al. Flow-cytometric Total Bacterial Cell Counts as a Descriptive Microbiological
Parameter for Drinking Wter Teatment Processes. Water Research 2008, 42 (1-2), 269-77.
98. Van Nevel, S, et al. Flow Cytometric Bacterial Cell Counts Challenge Conventional Heterotrophic
Plate Counts for Routine Microbiological Drinking Water Monitoring. Water Research 2017, 113,
191-206.
99. Libbrecht, M; Noble, W. Machine Learning Applications in Genetics and Genomics. Naure
Reviews Genetics 2015, 16, 321-32.
100. Redmon, J, et al. You Only Look Once: Unified, Real-Time Object Detection, Presented at IEEE
Conference on Computer Vision and Pattern Recognition (CVPR), Las Vegas, NV, USA, 27-30
June 2016; IEEE: 2016; pp 779-88.
101. Manzano, T; Whitford, W. Artificial Intelligence Empowering Process Analytical Technology and
Continued Process Verification in Biotechnology. GEN Biotechnology 2025, 4 (1).
102. Salih, A M, et al. A Perspective on Explainable Artificial Intelligence Methods: SHAP and LIME.
Advanced Intelligent Systems 2025, 7 (1).
103. Shridhar, A, et al. Interoperating Deep Learning Models with ONNX.jl, Presented at JuliaCon 2019,
Baltimore, Md., 22-26 Jul 2019; Juliacon: 2020; p 59.
104. U.S. Food and Drug Administration. Using Artificial Intelligence & Machine Learning in the
Development of Drug & Biological Products: Discussion Paper and Request for Feedback; U.S.
FDA: Silver Spring, Md., 2025.
105. Guh, R S. Integrating Artificial Intelligence into On-Line Statistical Process Control. Quality and
Reliability Engineering Intl 2003, 19 (1).
106. Pan, W, et al. A Comparative Study of Count Data Modeling Using Poisson and Negative Binomial
Regression for Microbial Data. Microbial Risk Analysis 2020, 16.
107. Oluwatope, R O, et al. Applying Machine Learning Models for Real-Time Process Monitoring and
Anomaly Detection in Pharma Manufacturing. GSC Biological and Pharmaceutical Sciences 2024,
27 (1), 315-41.
108. Ester, M, et al. A Density-Based Algorithm for Discovering Clusters in Large Spatial Databases
with Noise, Presented at KDD'96: Proceedings of the Second International Conference on
Knowledge Discovery and Data Mining, 1996; pp 226-31.
109. Liu, F T, et al. Isolation Forest, Presented at 2008 IEEE International Conference on Data Mining,
Piza, Italy, 15-19 December 2008; IEEE: 2008; pp 412-22.
110. Malhotra, P, et al. Long Short Term Memory Networks for Anomaly Detection in Time Series,
Presented at 23rd European Symposium on Artificial Neural Networks, Computational Intelligence,
and Machine Learning, Bruges, Belgium, 22-24 Apr 2015; ESANN 2015 proceedings, 22-24 April
2015, i6doc.com publ., ISBN 978-287587014-8. Available from: 2015.

## 9.0 Appendix 1: Validation of Alternative and Rapid

Microbiological Methods: Statistical Analysis-Qualitative
Methods
The content provided in Section 9.0 (Appendix 1) through Section 11.0 (Appendix 3) has been written in a
manner that a microbiologist or an analysist with similar training would be able to understand the
fundamental (statistical) concepts described. However, stakeholders may want to engage the expertise of a
statistician to ensure the recommendations in these sections are appropriately executed.
Section 9.0 (Appendix 1) and Section 10.0 (Appendix 2) provide several acceptable statistical analyses for
the validation of alternative qualitative and quantitative microbiological methods, respectively, while
Section 11.0 (Appendix 3) focuses on additional considerations for non-colony forming units (CFU)
qualitative and quantitative alternative/rapid microbiological methods (AMM/RMMs). The statistical
analyses recommended in the body of PDA Technical Report No. 33 (Revised 2026): Evaluation,
Validation, and Implementation of Alternative and Rapid Microbiological Methods are restated with
example data to illustrate how the analyses can be used. Although the example data is artificial, the data is
based on real validation experiments previously conducted by the authors. Since these methods are
presented only as examples, the stakeholder is responsible for selecting the most appropriate statistical
analyses to use based on the data to be analyzed and the validation criteria being assessed. It is
recommended to align the validation approach with the firm’s quality management system (QMS).
The choice of statistical analysis depends on the type of experiment that is being performed and on the type
of data analyzed (i.e., binary or positive/negative results versus recovered counts). In each example, multiple
options for a statistical analysis based on the observed data will be presented, as the option selected will
depend on the statistical assumptions being made to describe the characteristics of the data. As such, Section
9.0 (Appendix 1) through Section 11.0 (Appendix 3) will recommend several alternative statistical analyses
for a given dataset while explaining the advantages and/or disadvantages of each.
Furthermore, Section 9.0 (Appendix 1) through Section 11.0 (Appendix 3) recommend statistical analyses
that are feasible for use without specialized software specifically designed for microbiological methods as
much as possible. Should specific calculations be needed that are not readily available through user-friendly,
general-purpose statistical software (e.g., Minitab®, SPSS, STATA), Section 9.0 (Appendix 1) through
Section 11.0 (Appendix 3) provides mathematical formulas that can be used manually, imported into an
appropriate spreadsheet with calculation capabilities (e.g., Microsoft Excel), conducted with programmable
statistical software (e.g., SAS®, R), or implemented in electronic systems using attributable, legible,
contemporaneous, original, and accurate (ALCOA) principles. For these reasons, the text may appear
significantly technical in nature.

Finally, where possible, Section 9.0 (Appendix 1) through Section 11.0 (Appendix 3) discusses sample size
in relation to the specific validation criteria and statistical analyses. Certain statistical analyses require a
relevant number of data points to be valid for validation studies, which may present a challenge for
stakeholders if large amounts of test sample are not readily available. Consequently, Section 9.0 (Appendix
1) through Section 11.0 (Appendix 3) discusses the importance of test power and provides examples of how
to pool the data from multiple organism experiments to increase the total sample size (where needed).
Because the results associated with pooling data may come at the expense of additional statistical
assumptions, the limitations of this practice are discussed.
Section 9.0 (Appendix 1) contains many formulas, Table 9.0-1 provides a key of all the symbols used in the
formulas and their meaning.
Note: The notation log will be used for the natural logarithm in Section 9.0 (Appendix 1).

**Table 9.0-1 Nomenclature for Symbols Used in Section 9.0 (Appendix 1)**

Symbol
Meaning
Δ
The non-inferiority margin that is selected a priori to do a non-inferiority test. In some other
texts, the notation 𝛿𝛿 is used.
𝜆𝜆
The mean number of microorganisms or the bacterial density in a set of test samples or in a
suspension. When we apply the MPN method for the AMM/RMM and CMM we may
denote 𝜆𝜆𝐴𝐴 and 𝜆𝜆𝐶𝐶 as theoretical bacterial densities for AMM/RMM and CMM, respectively.
When we apply logistic regression, 𝜆𝜆LOD represents the mean number of microorganisms in
the test samples that provide a positive rate of 95%.
𝑝𝑝
The proportion of independent test samples that were tested positively for the presence of
viable microorganisms with the microbiological method, also called the positive rate. 𝑝𝑝𝐴𝐴 and
𝑝𝑝𝐶𝐶 are the positive rates for the AMM/RMM and the CMM, respectively. When the test
samples are only blank samples, the positive rate is referred to as the false positive rate.
𝜃𝜃
The detection proportion for the microbiological method, which indicates the probability for a
presence test for test samples with exactly one microorganism present in the test sample. 𝜃𝜃𝐴𝐴
and 𝜃𝜃𝐶𝐶 indicate the detection proportions for the AMM/RMM and CMM, respectively.
𝑅𝑅
The ratio of a statistic for the AMM/RMM and CMM and is viewed as a measure for
accuracy or recovery. The ratio 𝑅𝑅pr is the ratio of positive rates 𝑝𝑝𝐴𝐴/𝑝𝑝𝐶𝐶. 𝑅𝑅gMPN is the ratio of
detection proportions 𝜃𝜃𝐴𝐴/𝜃𝜃𝐶𝐶. 𝑅𝑅MPN is the ratio of bacterial densities 𝜆𝜆𝐴𝐴/𝜆𝜆𝐶𝐶. 𝑅𝑅Pool is a pooled
ratio taken from multiple ratio estimates.
𝐿𝐿
The limit of detection (LoD).
𝛼𝛼
The intercept for a logistic regression analysis on the positive rate with log concentration as
the independent variable for a microbiological method.
𝛽𝛽
The slope for a logistic regression analysis on the positive rate with log concentration as the
independent variable for a microbiological method.

Symbol
Meaning
𝐿𝐿𝐿𝐿𝐿𝐿
The lower confidence limit. Often there will be an index 𝑋𝑋 attached to it, i.e., 𝐿𝐿𝐿𝐿𝐿𝐿𝑋𝑋, to indicate
for what (validation) parameter or statistic the confidence limit is calculated.
𝑈𝑈𝑈𝑈𝑈𝑈
The upper confidence limit. Often there will be an index 𝑋𝑋 attached to it, i.e., 𝑈𝑈𝑈𝑈𝑈𝑈𝑋𝑋, to
indicate for what (validation) parameter or statistic the confidence limit is calculated.
𝑛𝑛
The number of independent test samples for a single concentration tested with the
microbiological method. 𝑛𝑛𝐴𝐴 and 𝑛𝑛𝐶𝐶 are the number of test samples for AMM/RMM and
CMM, respectively.
𝑚𝑚
The number of species tested for a specific validation parameter.
𝑥𝑥̅
The average log-transformed MPN estimates from multiple MPN runs. 𝑥𝑥̅𝐴𝐴 and 𝑥𝑥̅𝐶𝐶 are the
average log-transformed MPN estimates for the AMM/RMM and CMM, respectively.
𝑋𝑋തlog(𝑅𝑅)
The average of the log-transformed ratios 𝑅𝑅.
𝑆𝑆log(𝑅𝑅)
The standard deviation of the log-transformed ratios 𝑅𝑅.
𝜒𝜒𝑝𝑝2
Pearson’s chi-square statistic calculated for contingency tables.
𝐶𝐶𝑚𝑚
The 𝑡𝑡-value that depends on the number of species 𝑚𝑚 and the confidence level of 90%.
𝑃𝑃𝑚𝑚
The 𝑡𝑡-value that depends on the number of species 𝑚𝑚 and the confidence level of 95%.

### 9.1 False-Positive Rates for Qualitative Alternative/Rapid Microbiological

Methods
One aspect of method suitability studies is to demonstrate that false positives or background interference
signals are not detected in an AMM/RMM when the test sample is known not to contain any viable
microorganisms. However, some level of false positives may be acceptable, depending on how this
information is used (e.g., when establishing a baseline level or an acceptable signal to noise ratio) (see
Section 5.3.2). The false-positive rate can be quantified by testing several independent blank samples (i.e.,
samples that are not expected to contain any viable microorganisms) and by observing the number of
positive and negative detection events. Table 9.1-1 provides artificial data for illustrating how to quantify
the false-positive rate. The data show that of twenty (20) independent blank samples tested for the presence
of a viable microorganism detection event in a single AMM/RMM, only one sample (#6) tested positive.

**Table 9.1-1 Presence/Absence Results on 20 Blank Samples**

Sample
Presence
Sample
Presence

#### 9.1.1 Estimation and Confidence Intervals

Using the data in Table 9.1-1, the false-positive rate of the AMM/RMM, denoted by 𝑝𝑝𝐴𝐴, is estimated as
0.05 or 5% (i.e., 1 positive/20 samples). This false-positive rate is based on only one experiment using 20
test samples. However, if the same experiment is repeated multiple times, it may result in a different, but
valid, false-positive rate for each repeated experiment. A 95% confidence interval can quantify the range of
valid estimates without having to repeat the experiments. In other words, the interpretation of the interval is
a range of false positives that captures the true false positive rate of the AMM/RMM with 95% confidence.
The smaller the experiment or the higher the confidence level, the wider the confidence interval. If the goal
was to obtain the absolute true false-positive rate with 100% confidence, an unrealistically large experiment
would need to be conducted. This is why the use of an appropriate confidence interval, such as 95%, is more
practical and acceptable.
Many different methods exist for constructing a confidence interval for analyzing proportions (1). The
simplest 95% confidence interval is the asymptotic or Wald confidence interval, which is based on a normal
approximation and calculated using the following formula:
𝑝𝑝𝐴𝐴± 1.96ඨ𝑝𝑝𝐴𝐴(1 −𝑝𝑝𝐴𝐴)
𝑛𝑛

Where:
n
=  number of samples tested (from Table 9.1-1, n = 20)

Using the formula above, the asymptotic 95% confidence interval for the false-positive rate based on the 20
samples is then estimated as (0, 0.146). Because the lower value of the interval was estimated below zero,
the result was truncated to zero, since negative false-positive rates do not exist. The asymptotic 95%
confidence interval indicates that the true false-positive rate of the AMM/RMM, when 20 samples are
tested, lies between 0% and 14.6%, with 95% confidence.
One limitation in using the asymptotic confidence interval is that the number of samples tested should be
above, for example, 50, and the number of events (here defined by the number of positive test samples)
should not be close to/not approaching zero, for example, above 5. Because the example in Table 9.1-1 used
20 samples and the number of positive test samples was one, it would be more appropriate to use an
alternative confidence interval known as the exact or Clopper-Pearson confidence interval (1), which is
better suited for a smaller number of samples and low number of events. This interval is based on a binomial
distribution (instead of a normal distribution for the asymptotic confidence interval), but the mathematical
expression is far more complicated.
General-purpose statistical software packages can easily perform the exact confidence interval. Using the
data in Table 9.1-1, the confidence interval becomes (0.001, 0.249). Thus, the exact 95% confidence
interval implies that the true false-positive rate of the AMM/RMM lies between 0.1% and 24.9%, with 95%
confidence. Due to the limitations of the asymptotic confidence interval, using the exact confidence interval
when estimating a false-positive rate is recommended.

#### 9.1.2 Sample Size Considerations When Estimating False-Positive Rates

If the length of the confidence interval for the false-positive rate is too large and a smaller confidence
interval is needed, the sample size must be larger. Table 9.1.2-1 shows the minimum sample size with an
upper 95% confidence limit for a false-positive rate when the experiment does not contain any positive
results.

**Table 9.1.2-1 Sample Size and 95% Upper Confidence Limit for Experiments with no Presence**

Tests
n
UCL
n
UCL
n
UCL
n
UCL
n
UCL
45.1
9.50
5.30
3.68
2.47
25.9
8.20
4.87
3.46
1.98
18.1
7.22
4.50
3.17
1.49
13.9
6.44
4.19
3.10
1.19
11.3
5.82
3.92
2.95
0.99
To demonstrate that the false-positive rate is less than 1%, with 95% confidence, 300 blank samples would
need to be tested, and all of the results must be negative. Alternatively, if 30 test samples tested negative, the
false positive rate would not be higher than 9.5% with 95% confidence. Given a maximum allowable false
positive rate 𝑝𝑝, for all experiments with no positive test results, the sample size can be calculated as:

𝑛𝑛≥log(0.05)
log(1 − 𝑝𝑝)
While given the sample size n, the maximum allowable false positive rate is given by 1 − (0.05)1/𝑛𝑛 , with
95% confidence.

### 9.2 Comparability on the Limit of Detection of Qualitative Alternative/

Rapid Microbiological Methods
For a comparability evaluation of a qualitative AMM/RMM, the detection of microorganisms in the
AMM/RMM must be compared with the conventional microbiological method (CMM). Such a comparison
does not require an estimation of the limit of detection (LoD); however, this appendix provides guidance on
how to perform this analysis. Indeed, by demonstrating the AMM/RMM provides similar detection results
as the CMM, the conclusion that the AMM/RMM has a LoD that is not inferior to the LoD of the CMM can
be reached, even without specifying what the LoD is in each method.

**Table 9.2-1 illustrates an example dataset that can be used to demonstrate comparability of a qualitative**

AMM/RMM. An experiment with a single suspension of microorganisms was used in which the challenge
concentration was adjusted to provide a positive rate of approximately 50%, as recommended in USP
⟨1223⟩. The AMM/RMM and the CMM were each allocated 40 random test samples (i.e., 80 samples in
total) and these were assayed for the presence or absence of microorganisms.

**Table 9.2-1 Presence/Absence Results of Alternative/Rapid Microbiological Method and**

Conventional Methods on a Single Type of Microorganism
Microbiological
Method
Test Result
Presence
Absence
Total
AMM/RMM
CMM
Total
These samples are representative of independent test samples, even though the samples are taken as separate
aliquots from the same microbial suspension, because each sample cannot be tested in both methods. The
data is considered paired if both microbiological methods measure the exact same test sample. Additionally,
there is a probability for a test sample to contain a specific number of microorganisms, and test samples may
differ in the number of microorganisms (irrespective of whether the sample is enumerated or tested for
absence/presence with the microbiological method). For example, Figure 9.2-1 illustrates the probabilities
(the vertical axis) for some number of microorganisms (the horizontal axis) in the test sample when the
mean number of microorganisms in the test sample (often denoted with λ) is equal to 2 and the number of
microorganism in the test samples follows a Poisson distribution. Figure 9.2-1 shows that almost 55% of all
the test samples will contain just one or two microorganisms, 13.5% of the test samples do not contain any
microorganisms, and more than 5% of the test samples have five or more microorganisms in the test
samples.

*[Figure 9.2-1 Probabilities for the Number of Microorganisms in Test Samples when the Average]*

Number of Microorganisms in the Test Samples is Equal to 2
It is important to emphasize that a random allocation of test samples to the AMM/RMM and CMM is
essential to guarantee that both microbiological methods would test samples with different numbers of
microorganisms in the same ratios. For example, if 22 of the 80 test samples in Table 9.2-1 contains a single
microorganism, it can be assumed that both the AMM/RMM and CMM would analyze 11 test samples with
a single microorganism when random allocation is applied. An imbalance in these ratios could severely
affect the comparison of detecting microorganisms between the AMM/RMM and CMM, because it would
be easier to detect test samples that contain more microorganisms. Thus, if the AMM/RMM is testing
samples with higher numbers of microorganisms than the CMM, the test results could lead to a conclusion
that the AMM/RMM is superior in detecting microorganisms than the CMM, whereas this was actually just
a result of an incorrectly executed experiment (e.g., of not applying random allocation). Conversely, if the
CMM received test samples with a higher number of microorganisms, the noninferiority in the AMM/RMM
could not be demonstrated. Since the exact number of microorganisms in the test samples is unknown, the
test samples cannot be perfectly allocated with the same number of microorganisms to both microbiological
methods and, as a result, the outcome relies on the randomization described above for all experiments.
Consequently, it is important to ensure the homogeneity of microbial suspensions as best as possible.

#### 9.2.1 Demonstrating Comparability Using Ratios of Positive Rates

Using the data summarized in Table 9-2.1, the positive rates for the AMM/RMM and CMM can be
calculated, together with their 95% exact confidence interval, as described in Section 9.1.1. The proportion
and confidence interval for the AMM/RMM (𝑝𝑝𝐴𝐴) is estimated at 0.625 (0.458, 0.773); the proportion and
confidence interval for the CMM (𝑝𝑝𝐶𝐶) is estimated at 0.700 (0.535, 0.834).
Considering these results, two conclusions are clear. First, the positive rate for the CMM is statistically
larger than the planned or intended 50% positive detection rate, since the confidence interval falls above the
value 0.5. Thus, the goal of achieving an approximate 50% positive rate was rejected with the collected data,
indicating that the spike used in the suspension was possibly higher than originally designed. Second, the
positive rate for the CMM appears somewhat larger than the positive rate for the AMM/RMM. Testing the
null hypothesis that the microbiological methods have the same positive rates (𝐻𝐻0: 𝑝𝑝𝐴𝐴= 𝑝𝑝𝐶𝐶) can be
performed with the Pearson’s chi-square test, which is available in many general-purpose statistical software
packages. The data can be entered in a 2x2 contingency table as presence and absence values for each
method.
Using the data in Table 9.2-1, the Pearson’s chi-square statistic is equal to 0.503, and the two-tailed p-value
is equal to 0.478, indicating that the null hypothesis, 𝐻𝐻0:𝑝𝑝𝐴𝐴= 𝑝𝑝𝐶𝐶, cannot be rejected. Because the p-value is
>0.05, the association between the number of positives between the AMM/RMM and the CMM is
considered to be not statistically significant. Another option for testing the null hypothesis 𝐻𝐻0:𝑝𝑝𝐴𝐴= 𝑝𝑝𝐶𝐶, is to
use the Fisher’s exact test, which is more accurate for small sample sizes (e.g., <50) or when the counts in
the contingency table are low (e.g., <5). Using the same data in Table 9.2-1, the two-tailed p-value is equal
to 0.637, also indicating that the null hypothesis cannot be rejected. Although both tests seem to provide a
good result (equality of the positive rates for AMM/RMM and CMM cannot be rejected), some care is
needed, because sample size plays an important role in accepting the conclusion when using traditional
hypothesis tests. The smaller the number of test samples, the less likely the null hypothesis of equal positive
rates will be rejected even if a large difference in positive rates is present. On the other hand, if many more
samples had been tested, only a small irrelevant difference in positive rates would already be rejected.
Although the Pearson’s chi-square or Fisher’s exact test provide valuable information, in particular when the
null hypothesis is being rejected, performing a non-inferiority test is preferred, where the primary goal is to
demonstrate that the AMM/RMM is "not worse" than the CMM. A key element of a non-inferiority test is
the use of a prespecified “non-inferiority margin,” which defines the largest acceptable difference or ratio in
positive rates between the AMM/RMM and the CMM. The non-inferiority hypothesis is then formulated as
𝐻𝐻0: 𝑝𝑝𝐴𝐴
𝑝𝑝𝐶𝐶
< ∆
Where:
Δ
=  non-inferiority margin (or 𝛿𝛿 in some statistical applications) that must be
               stated at the beginning of the experiment
𝑝𝑝𝐴𝐴
=  positive rate for the AMM/RMM
𝑝𝑝𝐶𝐶
=  positive rate for the CMM

Using this ratio of positive rates approach is most appropriate when the positive rates are expected to be low
(e.g., <50%). Furthermore, a Δ equal to 0.7 is commonly used, unless a stricter margin is desired (e.g., Δ =
0.8). The null hypothesis for non-inferiority indicates that the AMM/RMM is inferior to the CMM and that
this hypothesis should be rejected with the observed data to demonstrate non-inferiority. To execute the
non-inferiority test, a 90% confidence interval on the ratio of positive rates should be calculated. This
approach is often referred to as the Two-One-Sided Test (TOST), where an upper (UCL) and a lower (LCL)
95% confidence limit is calculated. However, for non-inferiority, only the lower 95% confidence limit
(which would be provided by the 90% confidence interval) needs to be calculated. When the lower 95%
confidence limit is above the non-inferiority margin, the null hypothesis of inferiority is rejected.
Similar to the confidence interval utilized when estimating false-positive rates, there are different ways of
constructing a confidence interval on the ratio of positive rates, and this may be related to the statistical
software package being used. For a qualitative microbiological method, USP ⟨1223⟩ refers to a confidence
interval developed by Farrington and Manning in 1990 (2). The Farrington and Manning approach is
programmed in the software package SAS® using the FREQ procedure, however, this may not be available
in all general-purpose software packages. In Minitab, the 2-Sample Equivalency Test for numerical data
may be used, as long as the two positive rates are away from the boundaries (e.g., 0.2 < positive rate < 0.8).
Alternative approaches for confidence intervals on ratios of proportions may also be used. For example, in
clinical trials the ratio of proportions is referred to as relative risk, and several calculation approaches exists
to determine non-inferiority as alternatives to the Farrington and Manning approach. These calculation
approaches are essentially different ways of constructing the confidence interval on the relative risk, and
there is no approach superior to all other approaches. These approaches can be calculated from a logistic
regression approach essentially using an asymptotic confidence interval, a Bayesian approach where prior
information can be used, or a direct approach making use of explicit formulas (3-6).
Applying the Farrington and Manning approach to the data in Table 9.2-1, the ratio of positive rates is
estimated with Rpr = 𝑝𝑝𝐴𝐴/𝑝𝑝𝐶𝐶= 0.893, and its lower 95% confidence limit is determined at 0.676. Since this
lower 95% confidence limit of 0.676 is below the margin 0.7, the null hypothesis of inferiority cannot be
rejected. Even though the null hypothesis of equal positive rates could not be rejected with Pearson’s chi-
square or Fisher’s exact tests, there is not enough evidence to show that the AMM/RMM is non-inferior to
the CMM for non-inferiority margins of at least 0.7.

#### 9.2.2 Justifying for Comparability with the Most Probable Number

It was demonstrated in 2022 that the comparison of positive rates may be unreliable if the experiment is not
properly executed (2). For example, if higher numbers of microorganisms are spiked in a test suspension, a
greater number of positive test responses will be observed in both methods, regardless of each method’s
detection limits. Conversely, if very low numbers are spiked in a test suspension, and there are differences in
the detection limits for each method, the analysis may lead to incorrect results. To illustrate this, assuming
the average number of microorganisms in test samples is four (4), and the Poisson probability distribution
are calculated similarly as that shown in Figure 9.2.2-1, only 7.3% of all test samples would contain exactly
one organism and 76.2% of all test samples would contain three or more microorganisms. If it is further
assumed that the CMM has a detection limit of 1 (resulting in a probability of 0.95 of a positive test when a
single microorganism is present) and the AMM/RMM has a detection limit of 4 (resulting in an inferior
probability of 0.527 = 1 - (1 - 0.95)1/4 for a positive test when a single microorganism is present)*, a
comparison of positive rates would not be able to detect a difference in recovery when the average spike in
the test samples is four or more, while the ratio of probabilities for samples with a single microorganism is

equal to 0.555 (= 0.527/0.95) and much lower than the non-inferiority margin of 0.70. For this situation with
higher number of microorganisms in test samples, the experiment may result in 39 positives for the CMM
and 35 positives for the AMM/RMM (still assuming 40 samples are tested in both methods as was done in

**Table 9.2-1). Conducting a non-inferiority test with positive rates as in Section 9.2.1 leads to a rejection of**

the null hypothesis of inferiority, since the results will be equal to Rpr = 𝑝𝑝𝐴𝐴/𝑝𝑝𝐶𝐶 = 0.897 (0.781, 0.997)
and the lower 95% confidence limit is far above the non-inferiority margin of 0.70. This is counterintuitive
compared to the ratio of 0.555 for test samples with single microorganisms and to the conclusion of not
rejecting inferiority in Section 9.2.1, where results were closer to each other (28 positives for the CMM and
25 positives for the AMM/RMM) when samples containing, on average, fewer organisms (around two)
were observed. Therefore, the conclusion derived with the ratio of positive rates when positive rates are
close to the boundary of one would be incorrect.
*Note: The formula used to calculate the inferiority probability in this example is:
𝜃𝜃≤1 − exp ቆlog(0.05)
LoD
ቇ
Where:
θ

=
detection proportion
Alternatively, if the detection proportion is known, the LoD can be calculated using this
formula:
LoD ≥ log 0.05
log(1 −𝜃𝜃)
To graphically illustrate how the positive rates would be affected by the change in the average number of
microorganisms, Figure 9.2.2-1 shows the positive rates for a CMM with a detection limit of one, and an
AMM/RMM with a detection limit of 4. The positive rates and their ratio converge to one when the average
number of microorganisms in a test sample increases. Thus, no matter how large the difference in the
detection limit, the ratio of positive rates will pass the inferiority margin when enough organisms are spiked
in the test samples. When the average number of microorganisms goes to zero, the positive rates of the
AMM/RMM and CMM also go to zero. However, mathematical peculiarities occur when the ratio of these
positive rates (as a consequence of dividing by zero) are examined. Consequently, the ratio of positive rates
converges to the true accuracy for testing test samples with only single microorganisms when the average
number of microorganisms converges to zero (under certain mathematical assumptions). Thus, only when
the observed positive rate for the CMM in the experiment is low, for example, below 50%, would the non-
inferiority approach discussed in Section 9.2.1, when comparing positive rates, be appropriate to use (2).

*[Figure 9.2.2-1 Visualization of Positive Rates as Function of the Average Number of]*

Microorganisms in Test Samples
A more reliable approach less affected by the spiked concentration of microorganisms, is to calculate the
most probable number (MPN) for both the AMM/RMM and CMM. This would require an experiment,
where multiple MPN values derived from the presence/absence data across multiple challenge
concentrations would be obtained for both microbiological methods. A non-inferiority analysis based on the
t-test could then be applied (see Section 9.2.3). Alternatively, literature has provided the so-called
generalized MPN (gMPN) method that could be conducted on a single concentration without repeating the
experiment, such that the data in Table 9.2-1 could be analyzed. This method is currently only programmed
in the specialized statistical software TriMSA (7). As such, the mathematical details for this type of analysis
are described in Section 9.2.3 so stakeholders can use this approach without the specialized software.

#### 9.2.3 Demonstrating Compatibility with the Generalized Most-Probable-Number

Approach
The MPN is based on the premise that the probability of a positive test result is equal to 1 −exp{−𝜆𝜆}, with
𝜆𝜆 being the average number of microorganisms in the test samples. When a number of test samples are
taken from a single suspension and tested for presence/absence with the AMM/RMM, the parameter 𝜆𝜆 can
be estimated by:
𝜆𝜆= −log(1 −𝑝𝑝𝐴𝐴)
Where:
𝑝𝑝𝐴𝐴
=
positive rate for the AMM/RMM

The MPN is then calculated by:
MPN = 𝑉𝑉𝑉𝑉
𝑣𝑣
Where:
V
=
volume of the suspension from which the test samples were taken
v

=
volume of the test sample (8)
The gMPN assumes that the probability of a positive test result is equal to 1 −exp{−𝜃𝜃𝜃𝜃}, with 𝜃𝜃 the
probability of a positive test for a test sample with exactly one microorganism. The MPN approach assumes
this probability is equal to one. The parameter 𝜃𝜃 is referred to as the detection proportion. Non-inferiority of
the AMM/RMM with respect to the CMM is then conducted on the detection proportions of the
AMM/RMM and CMM, that is, the null hypothesis of inferiority is:
𝐻𝐻0: 𝜃𝜃𝐴𝐴
𝜃𝜃𝐶𝐶
< ∆
Where:
𝜃𝜃𝐴𝐴
=
detection proportion of the AMM/RMM
𝜃𝜃𝐶𝐶
=
detection proportion of the CMM
∆
=
non-inferiority margin
The ratio RgMPN = 𝜃𝜃𝐴𝐴/𝜃𝜃𝐶𝐶 of detection proportions can be viewed as a kind of “accuracy” or “recovery”.
Since the detection proportion is the probability that test samples with a single microorganism are tested
positively, the ratio would indicate how much of the positive-tested samples of the CMM would be
recovered with the AMM/RMM. A ratio less than one would indicate that not all of the positively tested
samples of the CMM are being recovered (8, 9).
The ratio RgMPN = 𝜃𝜃𝐴𝐴/𝜃𝜃𝐶𝐶 of detection proportions, when the test samples are all collected from a single
suspension (like in Table 9.2-1), can be estimated by:
𝑅𝑅gMPN = log( 1 − 𝑝𝑝𝐴𝐴)
log(1 − 𝑝𝑝𝐶𝐶)
Where:
𝑝𝑝𝐴𝐴
=  positive rate for the AMM/RMM
𝑝𝑝𝐶𝐶
=
positive rate for the CMM

Its asymptotic lower 95% confidence limit (an exact confidence interval does not exist) can then be
calculated by:
𝐿𝐿𝐿𝐿𝐿𝐿gMPN = 𝑅𝑅gMPN ∙exp ቌ−1.645ඨ
𝑝𝑝𝐴𝐴
𝑛𝑛(1 − 𝑝𝑝𝐴𝐴)[log(1 −𝑝𝑝𝐴𝐴)]2 +
𝑝𝑝𝐶𝐶
𝑛𝑛(1 − 𝑝𝑝𝑐𝑐)[log(1 − 𝑝𝑝𝐶𝐶)]2)ቍ
Where:
𝑅𝑅𝑔𝑔𝑔𝑔𝑔𝑔𝑔𝑔 =  ratio of detection proportions
𝑝𝑝𝐴𝐴
=
positive rate for the AMM/RMM
𝑝𝑝𝐶𝐶
=  positive rate for the CMM
n

=
number of test samples offered to each microbiological method

𝑒𝑒𝑒𝑒𝑒𝑒
=
inverse of the natural logarithm
Applying the gMPN non-inferiority approach to the data obtained in Table 9.2-1, obtains RgMPN = 0.815,
with a lower 95% confidence limit equal to LCLgMPN = 0.506.
To illustrate that the gMPN is not affected by the average number of microorganisms in the test samples, the
gMPN approach was also applied to the data with 35 positives for the AMM/RMM and 39 positives for the
CMM, where the AMM/RMM is inferior to the CMM for a non-inferiority margin of Δ = 0.70. This data
would fit with the situation where the detection proportions are equal to 𝜃𝜃𝐶𝐶= 0.95 (an LoD equal to one)
and 𝜃𝜃𝐴𝐴= 0.527 (an LoD equal to 4) for the CMM and AMM/RMM, respectively, that is, a theoretical ratio
of 0.555 indicating the AMM/RMM is inferior to the CMM. The gMPN provides an estimate of RgMPN =
0.564 close to the true ratio, with a lower 95% confidence limit equal to LCLgMPN = 0.325. The gMPN
approach does not reject the null hypothesis of inferiority as it should, implying that the AMM/RMM is
inferior.

#### 9.2.4 Demonstrating Comparability Using Multiple Most Probable Number Experiments

To determine the non-inferiority of the AMM/RMM with respect to the CMM on detecting microorganisms,
multiple standard MPN experiments can be applied. The multiple MPN results obtained from both
microbiological methods can then be compared to demonstrate non-inferiority. Table 9.2.4-1 provides the
results of six (6) MPN runs in both microbiological methods where the same suspension was used to make
three (3) 10-fold dilutions in each of the runs. Three (3) replicates per dilution are analyzed. The two (2)
MPN values per run, derived from FDA tables, are considered independent (similar to the discussion for the
data of Table 9.2-1), and a two-sample t-test can be used to determine non-inferiority. However, if each run
had come from a separate suspension (e.g., different suspension preparations, tested on different days or by
different analysts), the two MPN values per run would be considered paired, and a paired t-test should be
applied. The last row in Table 9.2.4-1 presents the MPN results derived from the FDA MPN tables (10).

**Table 9.2.4-1 Six Standard Most-Probable-Number Runs on a Single Microorganism Tested by**

Two Microbiological Methods
Dilution
Run 1
Run 2
Run 3
Run 4
Run 5
Run 6
CMM
AMM/
RMM
CMM
AMM/
RMM
CMM
AMM/
RMM
CMM
AMM/
RMM
CMM
AMM/
RMM
CMM
AMM/
RMM
1.00
0.10
0.01
MPN
9.3
46.0
15.0
9.3
7.5
24.0
7.5
9.3
9.3
21.0
21.0

### 7.5 The MPN values can be considered estimates of the bacterial density of the suspension. Although the

suspension contained just one true number of organisms, both microbiological methods should provide
similar estimates when the methods would detect microorganisms in the same way. If the microbiological
methods were different, it could be conceptually formulated that the AMM/RMM would estimate bacterial
density 𝜆𝜆𝐴𝐴, and the CMM would estimate 𝜆𝜆𝐶𝐶. Non-inferiority would then be formulated by:
𝐻𝐻0: 𝜆𝜆𝐴𝐴
𝜆𝜆𝐶𝐶
< Δ
Where:
Δ
=  non-inferiority margin (equal to 0.7 in this example)
𝜆𝜆𝐴𝐴
=  bacterial density for the AMM/RMM
𝜆𝜆𝐶𝐶
=  bacterial density for the CMM
A natural logarithmic transformation of the MPN values, that is, 𝑥𝑥= log(𝑀𝑀𝑀𝑀𝑀𝑀), is preferred, as this would
reduce skewness in the MPN values (i.e., thicker right tail) and make the data more normally distributed.
The non-inferiority hypothesis would also be simplified, since it would become a difference in log-
transformed bacterial densities, that is, 𝐻𝐻0:log(λA) −log(λC) < log(Δ), instead of a ratio in bacterial
densities. For the transformed MPNs, then the TOST could be used that results from the t-test (available in
almost any general-purpose statistics software), since the difference log(𝜆𝜆𝐴𝐴) −log(𝜆𝜆𝐶𝐶) is estimated with the
difference in averages of the log-transformed MPNs, and a confidence interval can be calculated with the t-
distribution.
Applying the t-test to the logarithmically transformed MPNs leads to an average (standard deviation) 𝑥𝑥̅𝐶𝐶=
2.374 (0.415) for the CMM and 𝑥𝑥̅𝐴𝐴= 2.754 (0.709) for the AMM/RMM. Traditional hypothesis-testing
with the two-sample t-test does not reject the null hypothesis, 𝐻𝐻0:log(𝜆𝜆𝐴𝐴) = log(𝜆𝜆𝐶𝐶), for equality in log-
transformed bacterial densities (p-value = 0.289). The difference in means is now estimated at 0.381 with a
90% confidence interval equal to (-0.227, 0.989). Since the lower limit of the 90% confidence interval is
larger than log(0.7) ≈ -0.3567, the null hypothesis of inferiority is rejected, and the AMM/RMM is
considered non-inferior to the CMM. The mean difference between the two methods in the logarithmic scale

can be exponentiated (reverted to the original scale where the mean difference becomes a ratio) to obtain an
accuracy estimate 𝑅𝑅MPN = 𝜆𝜆𝐴𝐴/𝜆𝜆𝐶𝐶. Furthermore, if the traditional null hypothesis of 𝐻𝐻0: log(𝜆𝜆𝐴𝐴) =
log(𝜆𝜆𝐶𝐶) had been rejected and the AMM/RMM recovers more microorganisms than the CMM (i.e., the
AMM/RMM MPN is higher than the CMM MPN), the AMM/RMM can be claimed superior, although this
is not required.
Although the comparison of multiple MPNs between the AMM/RMM and CMM is an appropriate analysis
approach, an alternative analysis on the aggregated data (ignoring the run structure) is also possible. Table
9.2.4-2 presents the aggregated data according to a concentration and microbiological method from the data
in Table 9.2.4-1. This approach is somewhat more powerful than the comparison of multiple MPNs, but is
more difficult to analyze with general-purpose statistical software (2). There is no closed mathematical
formula for the ratio RgMPN 𝑅𝑅gMPN = 𝜃𝜃𝐴𝐴/𝜃𝜃𝐶𝐶 when multiple concentrations are involved. The analysis is
programmed in the specialized software TriMSA, and it can be programmed in the SAS® software or in the
open-access software [R]. Applying the gMPN approach to the aggregated data in Table 9.2.4-2, the ratio is
estimated at 𝑅𝑅gMPN = 1.338 with a 90% confidence interval equal to (0.726, 2.466). Thus, the gMPN
approach also shows that the AMM/RMM is non-inferior to the CMM at a non-inferiority margin Δ = 0.70.

**Table 9.2.4-2 Aggregated Data Per Concentration and Microbiological Method for the Multiple**

Most-Probable-Number Study
Dilution
CMM
AMM/RMM
Count
Total
Count
Total
1.00
0.10
0.01

#### 9.2.5 Sample Size Considerations: Combining Multiple Species

Demonstrating non-inferiority in detecting microorganisms between the AMM/RMM and CMM requires a
substantial number of test samples per microbiological method. For traditional hypothesis testing, where the
null hypothesis is that the detection limits are identical, at least 200 test samples per microbiological method
are needed (2,9).
For the gMPN approach, the minimal sample sizes are provided in Table 9.2.5-1. These sample sizes do not
yet incorporate the uncertainty that comes from estimating the parameters, implying that (substantial) larger
sample sizes are needed.

**Table 9.2.5-1 Minimal Theoretical Sample Size per Microbiological Method for the gMPN**

Approach
𝜃𝜃𝐶𝐶
𝜃𝜃𝐴𝐴
𝜃𝜃𝐶𝐶

Non-Inferiority Margin 0.7
Non-Inferiority Margin 0.8
Average number of microorganisms (λ)
Average number of microorganisms (λ)
1.5
2.0
2.5
3.0
3.5
1.5
2.0
2.5
3.0
3.5
0.35
0.90
1017
0.55
0.90
0.75
0.90
0.95
0.90
0.35
1.00
0.55
1.00
0.75
1.00
0.95
1.00
0.35
1.10
0.55
1.10
0.75
1.10
0.95
1.10
The sample size depends on the detection proportion of the CMM (𝜃𝜃𝐶𝐶), the true accuracy (𝜃𝜃𝐴𝐴/𝜃𝜃𝐶𝐶), the
average number of microorganisms (𝜆𝜆) in the test samples, and the non-inferiority margin (Δ). When the
AMM/RMM is superior to the CMM (𝜃𝜃𝐴𝐴/𝜃𝜃𝐶𝐶> 1), the minimal number of test samples in Table 9.2.5-1
may be reasonable in practice when the non-inferiority margin can be taken equal to 0.7. However, in most
other cases, an unrealistically large sample size is needed. Indeed, in case the true accuracy (𝜃𝜃𝐴𝐴/𝜃𝜃𝐶𝐶) is close
to the non-inferiority margin, the sample size can increase to hundreds of test samples per microbiological
method. Moreover, when spiking a suspension is imprecise, the required sample size must be robust against
deviations in the average number of microorganisms. In most settings, where the true accuracy may not be
known and spiking can vary substantially, a sample size of 200 samples (that was also needed for traditional
hypothesis) may be needed, even when the non-inferiority margin can be taken equal to 0.7. Since testing
200 test samples for a single species is often too much of a burden, creative approaches should be
considered.

One approach is to combine the results from multiple species to obtain a total sample size of at least 200 test
samples per microbiological method for a single dilution. However, to maintain a reliable estimate per
species, using at least 30 test samples per species is recommended, otherwise the risk is too high to obtain
positive rates at the boundary (i.e., equal to zero or one), and the width of the confidence interval becomes
very large. For example, if six species are being investigated on the LoD, a total of 34 test samples per
species and microbiological method is needed, to make the total sample size larger than 200 and the sample
size per species larger than 30. When meeting these sample-size recommendations is not possible (e.g.,
when enough test material is not available), it does not mean the studies cannot be conducted. Rather,
stakeholders will need to accept that the confidence interval may be too wide to demonstrate 70% non-
inferiority, unless the AMM/RMM is superior to the CMM.
Combining the results from different species would then be necessary to achieve enough power for non-
inferiority testing, but some statistical considerations should be mentioned, because a mistake in the analysis
could lead to incorrect conclusions. The simplest approach is to analyze the total data as one set, ignoring
the structure obtained by the species. An analysis as presented in Section 9.2.2 would then be appropriate
or, alternatively, the analysis in Section 9.2.1 if the conditions of the positive rate for the CMM is satisfied.
However, ignoring the species in the analysis is only acceptable when the ratios RgMPN = 𝜃𝜃𝐴𝐴/𝜃𝜃𝐶𝐶 for the
different species would be very similar across the species. Without this assumption, the AMM/RMM can be
inferior for one species, but this may not be detected because the data is masked by the data of the other
species where non-inferiority may be the truth. A somewhat more cumbersome alternative approach is
making use of the analysis shown in Section 9.2.2 for each species separately and then pooling the
estimated ratios. Both approaches are illustrated in Table 9.2.5-2 using presence/absence data.

**Table 9.2.5-2 Present Results of the Alternative/Rapid Microbiological Method and**

Conventional Microbiological Method for Seven Different Species
Species
CMM
AMM/RMM
Count
Total
Count
Total
B. subtilis
C. sporogenes
C.albicans
S. aureus
A. brasiliensis
P. aeruginosa
E.coli
Total

Ignoring the structure of species, just the numbers at the last row of Table 9.2.5-2 can be used for analysis.
The positive rates are then estimated by 𝑝𝑝𝐴𝐴= 0.703 (0.636, 0.764) and 𝑝𝑝𝐶𝐶= 0.753 (0.689, 0.811) for the
AMM/RMM and CMM, respectively, using the exact approach for confidence intervals. The positive rate
for the CMM is too high for a reliable analysis with the positive rates directly (see Section 9.2.3). With the
gMPN analysis of Section 9.2.3, a ratio of RgMPN = 𝜃𝜃𝐴𝐴/𝜃𝜃𝐶𝐶= 0.867 can be obtained with a lower 95%
confidence limit of LCLgMPN = 0.708. Thus, the gMPN analysis on all counts together shows that the
AMM/RMM is non-inferior to the CMM for a non-inferiority margin of Δ = 0.7. However, if each species
were analyzed separately with the gMPN analysis, the results in Table 9.2.5-3 (number of microorganisms
in 1 mL) would be obtained. For each species, the null hypothesis of inferiority at the non-inferiority margin
of Δ = 0.7 cannot be rejected. This is not unexpected, since 30 test samples (or less) is too low a number for
non-inferiority testing per species (Table 9.2.5-1 demonstrates this even if the AMM/RMM would be
slightly superior to the CMM). Moreover, the ratio for P. aeruginosa is different from the other six species,
which all vary around 0.90. This somewhat lower ratio would not be detected by a gMPN analysis of the
total counts.

**Table 9.2.5-3 Most Probable Number Estimates and the gMPN Ratio Estimates for Multi-**

Species Experiment
Species
MPN
AMM
MPN
CMM
RgMPN
LCLgMPN
log (RgMPN)
B. subtilis
1.32
1.46
0.908
0.534
-0.09624
C.
sporogenes
2.02
2.30
0.875
0.507
-0.13346
C. albicans
1.32
1.17
1.130
0.657
0.12190
S. aureus
1.61
1.79
0.898
0.529
-0.10731
A.
brasiliensis
1.00
1.20
0.833
0.482
-0.18233
P.
aeruginosa
0.31
0.69
0.447
0.216
-0.80417
E. coli
2.27
2.23
1.016
0.578
0.01559
The individual ratios for the species in Table 9.2.5-3 can be combined or pooled using different meta-
analyses methods but here, one of the simplest methods though perhaps not the most powerful technique,
has been used (11). All the meta-analyses methods for pooling a certain statistic across different groups, also
called a “measure of effect,” assume that the statistic is normally distributed. To best satisfy this assumption,
the log transformation of the ratios RgMPN in Table 9.2.5-3 is recommended as the measure of effect for
accuracy that is pooled. The log transformed ratios are also listed in Table 9.2.5-3.
The simplest meta-analysis method is to calculate the arithmetic average and the standard deviation of the
log-transformed ratios and then calculate a standard 90% confidence interval for normally distributed data

(available in any general-purpose statistical software package). Since this interval is in the log-transformed
scale, it must be transformed back to the ratio scale. Thus, for the confidence interval, the following must be
calculated:
exp ൜𝑋𝑋തlog(𝑅𝑅) ± 𝐶𝐶𝑚𝑚
𝑆𝑆log(𝑅𝑅)
√𝑚𝑚ൠ
Where:
𝑋𝑋തlog(𝑅𝑅) =  average value of the log transformed ratios of detection proportions (see below)
𝑆𝑆log(𝑅𝑅) =  standard deviation of the log transformed ratio of detection proportions (see below)
𝑅𝑅gMPN
𝑘𝑘
 =  ratio of detection proportions for species k (see below)
𝐶𝐶𝑚𝑚
=
 𝑡𝑡-value (see Table 9.2.5-4) that depends on the number of species and the
               confidence level chosen (here 90%)
m
=  number of species being pooled
𝑒𝑒𝑒𝑒𝑒𝑒
=  inverse of the natural logarithm
𝑋𝑋തlog(𝑅𝑅) = ෍
ቈ
log൫𝑅𝑅gMPN
𝑘𝑘
𝑚𝑚
቉
𝑚𝑚
𝑘𝑘 = 1
and 𝑆𝑆log(𝑅𝑅)
= ෍
൥
൫log൫𝑅𝑅gMPN
𝑘𝑘
൯ − 𝑋𝑋തlog(𝑅𝑅)൯
(𝑚𝑚 − 1)
𝑚𝑚
𝑘𝑘 = 1

Using the data in Table 9.2.5-3, the numbers can be calculated as 𝑋𝑋തlog(𝑅𝑅) = -0.16943, 𝑆𝑆log(𝑅𝑅) = 0.29796,
and 𝐶𝐶𝑚𝑚= 1.94318. The pooled ratio and its 90% confidence interval are then estimated at 𝑅𝑅Pool = 0.844
(0.678, 1.051).

**Table 9.2.5-4 Critical Values Rejecting Homogeneity**

Number of Species
Cm
Pm
2.91999
4.30265
2.35336
3.18245
2.13185
2.77645
2.01505
2.57058
1.94318
2.44691
1.89458
2.36462
1.85955
2.30600
1.83311
2.26216

In this pooled analysis, the null hypothesis of inferiority at margin Δ = 0.70 cannot be rejected because the
lower limit is below this value. The reason is that the result of P. aeruginosa is less masked in the pooled
analysis, since the result on P. aeruginosa pulls the pooled ratio down and increases the variability.
Removing the results of P. aeruginosa, which seems to be an outlier, the pooled ratio with its 90%
confidence interval is equal to 𝑅𝑅Pool = 0.938 (0.856, 1.029). Thus, non-inferiority is attained for the species
B. subtilis, C. sporogenes, C. albicans, S. aureus, A. brasiliensis, and E. coli; but, this cannot be
demonstrated for P. aeruginosa with the collected data.
To demonstrate that the result for P. aeruginosa is an outlier, 95% prediction limits for the ratios can be
calculated. A prediction limit is calculated similar to the confidence limit:
exp ቐ𝑋𝑋തlog(𝑅𝑅) ± 𝑃𝑃𝑚𝑚∙𝑆𝑆log(𝑅𝑅) ∙ඨ൬1 + 1
𝑚𝑚൰ቑ
Where:
𝑋𝑋തlog(𝑅𝑅) =  average value of the log transformed ratios of detection proportions
𝑆𝑆log(𝑅𝑅) =
standard deviation of the log transformed ratios of detection proportions
Pm
=
t-value (listed in Table 9.2.5-4) that depends on the number of species and the
              choice of confidence level (here selected equal to 95%)
m
=
number of species being pooled
𝑒𝑒𝑒𝑒𝑒𝑒
=  inverse of the natural logarithm
The prediction limits should be calculated without the extreme value (minimum or maximum ratio) to judge
if the extreme value falls within the prediction interval. If the extreme value does not fall inside the
prediction interval, the result is considered unexpected and could be qualified as an outlier. Thus, after
excluding the results of P. aeruginosa in the analysis, the prediction interval for a new ratio 𝑅𝑅gMPN is
determined at (0.688, 1.280). The result of 0.447 for P. aeruginosa is clearly outside the prediction interval
and can therefore be viewed as an outlier. This confirms the conclusion that the detection of P. aeruginosa
with the AMM/RMM, compared to the detection of P. aeruginosa with the CMM, cannot be viewed
similarly to the other species.

### 9.3 Estimation of the Detection Limit

Table 9.3-1 contains the results of an experiment set up to determine the LoD of the AMM/RMM, without
making a direct comparison with the CMM. The data was collected for one type of microorganism or
species with one suspension created and spiked with a known number of microorganisms that is close to the
AMM/RMM’s purported LoD (e.g., <10 cells). Five (5) additional suspensions, using different
concentrations from the initial suspension, were created. From each suspension, twenty (20) samples were
drawn and tested on the presence/absence with the AMM/RMM. The concentrations listed in Table 9.3-1
represent the expected average number of microorganisms present in the test sample.
Different statistical approaches exist for estimating the LoD based on the data in Table 9.3-1. The logistic
regression approach with different risk curves and the most probable limit (MPL) is described here (12-15).

**Table 9.3-1 Number of Positives and Total Tested Test Samples for Different Concentrations**

Concentration
Counts
Total
Positive Rate
2.2059
0.90
1.1691
0.75
0.6177
0.40
0.3309
0.25
0.1765
0.10

#### 9.3.1 Logistic Regression Analysis

The logistic regression approach models the positive rate as a function of concentration. Often the following
relationship is proposed (12, 13):
log ൬
𝑝𝑝𝐴𝐴
(1 − 𝑝𝑝𝐴𝐴)൰ = 𝛼𝛼 + 𝛽𝛽∙log(𝜆𝜆)
Where:
𝑝𝑝𝐴𝐴
=
positive rate for the AMM/RMM
𝜆𝜆
=
average number or concentration of microorganisms in the test samples
𝛼𝛼
=
intercept
𝛽𝛽
=
slope indicating how quickly the positive rate changes with the changes in log

              concentration log(𝜆𝜆)
The value log(𝑝𝑝𝐴𝐴/(1 −𝑝𝑝𝐴𝐴)) is called the “logit” of positive rate 𝑝𝑝𝐴𝐴. The value exp{−𝛼𝛼/𝛽𝛽} is the
concentration at which a positive rate of 50% is obtained.
This model assumes that the probability of a presence test for a blank test sample is equal to zero, since it
forces the positive rate to zero when no microorganisms are present in the test sample. Additionally, the
positive rate as a function of the log concentration has a nice S-shape (blue curve on the right of Figure
9.3.1-1) but, as the function of the concentration, the positive rate quickly rises to a high probability and
then flattens (blue curve on the left in Figure 9.3.1-1). This latter curve may be considered as a function of
the negative rate (i.e., one minus the positive rate), because the slow increase with decreasing concentration
and rapid increase when the concentration reaches zero seems like an exponential function. This alternative
model may be formulated as:
log(1 − 𝑝𝑝𝐴𝐴) = −𝜃𝜃∙𝜆𝜆
Where:
𝑝𝑝𝐴𝐴
=
positive rate for the AMM/RMM
𝜃𝜃
=  detection proportion
𝜆𝜆

=  average number or concentration of microorganisms in the test samples

In this expression we only have a single parameter 𝜃𝜃 instead of the intercept 𝛼𝛼 and slope 𝛽𝛽 for the logistic
regression analysis. In this exponential model, the positive rate would then be formulated as 𝑝𝑝𝐴𝐴= 1 −
exp{−𝜃𝜃𝜃𝜃}, which resembles the function for the gMPN approach*. The red curves in Figure 9.3.1-1 show
this alternative model and seems very close to the two-parameter logistic curve.
*Note: This gMPN-related curve has been shown in Figure 9.2.2-1 as well.

*[Figure 9.3.1-1 Visualization of the Positive Rate as Function of the Concentration (left) and Log]*

Concentration (right)
Both curves in Figure 9.3.1-1 can be estimated on multi-concentration data using logistic regression
analysis programmed in general-purpose statistical software but fitting the curve related to the gMPN
approach requires a deeper understanding of the options for the logistic regression function. Thus, the two-
parameter logistic function is more straightforward in practice and, therefore, easier to fit with general-
purpose statistical software. Nevertheless, the gMPN-related curve has only one parameter and is therefore a
simpler model, and it has a direct connection to the MPN approach, making it easier to determine the LoD.
Fitting both curves to the data in Table 9.3-1 results in the following parameter estimation with its
asymptotic 95% confidence (an exact confidence interval does not exist):
Logistic curve: 𝛼𝛼 = 0.707 (0.140, 1.275) and 𝛽𝛽 = 1.746 (1.081, 2.412)
gMPN-related curve: 𝜃𝜃 = 0.972 (0.673, 1.000)
The curves with the estimated parameters were already visualized in Figure 9.3.1-1. If the LoD is the
smallest number of organisms in a test sample that can be detected with at least 95% probability, the fitted
curves can be used to establish these limits.

The average concentration in test samples that can be detected with exactly 95% probability are given by:
Logistic curve: 𝜆𝜆LoD = exp ቀ
−𝛼𝛼
𝛽𝛽ቁ∙(19)
𝛽𝛽 = 3.60 (1.04, 6.16)
gMPN-related curve: 𝜆𝜆LoD =
−log(0.05)
𝜃𝜃
 = 3.08 (2.13, 4.03)
These limits are not the LoD, but an average concentration in test samples, which is typically an
overestimation of the LoD. An illustration of this is to assume that test samples with an average
concentration of 3.6 CFU’s per test sample have been created. If, additionally, the distribution of the number
of microorganisms in the test samples equals a Poisson distribution (with mean 3.6), 2.73% of the test
samples will be blank test samples and 97.27% of the test samples contain one or more microorganisms.
Something similar has already been visualized in Figure 9.2-1, but with an average number of 2 CFUs per
test sample. If, in addition, the AMM/RMM does not produce any false positives, all blank samples will be
tested as absent, which is approximately 2.7%. To obtain a 95% probability for all test samples, the
AMM/RMM should produce a presence test for almost all test samples that do contain at least one
microorganism. Thus, the 𝜆𝜆LoD = 3.60 implies that the LoD is most likely equal to one. This conclusion is
supported by the gMPN-related curve, because the parameter 𝜃𝜃 represents the detection probability, which
is the probability of a positive test for a test sample containing a single microorganism. The parameter 𝜃𝜃 is
estimated at 𝜃𝜃= 0.972, which is above 95%, indicating that the LoD is one. This can be confirmed by
calculating the cumulative 5% (0.05) probability for a Poisson distribution plot with a mean value = 3.60
(i.e., adding the individual probabilities and reporting the first number in the plot that passes the cumulative
5% threshold).

#### 9.3.2 Most-Probable Limit Analysis

The analyses so far have made use of statistical models where presence tests occur with a certain
probability. Although these models are reasonable statistical models, the mechanism of detection may also
be deterministic. This means that all test samples with a number of microorganisms below the LoD will be
tested negatively with 100% certainty, while test samples containing a number of microorganisms equal to
or greater than the LoD will test positive with 100% certainty. This model has been described in literature
and has been used for estimation of the LoD of AMM/RMMs. It is referred to as the MPL and extends the
MPN approach in a different way. The MPN approach assumes that the LoD is equal to one and then
provides an estimate of the number of organisms in a suspension using a serial-dilution experiment. The
MPL approach assumes that the LoD is equal to an unknown value 𝐿𝐿 and estimates both the LoD and the
number of microorganisms in the suspension (14, 15). The MPL approach is programmed in the specialized
software TriMSA and can be programmed in SAS® and [R]. Applying the MPL approach to the data in

**Table 9.2.5-4, an estimate of the LoD of L = 1 with 95% confidence interval of [1, 2] and an estimate of the**

number of microorganisms in the initial suspension of MPN = 87 with 95% confidence interval of [56, 126]
is obtained. If the LoD was equal to two, the MPN estimate would become MPN = 197 [160, 235]. The
MPL approach applied to the data in Table 9.2.5-4, shows that the LoD is either one or two.