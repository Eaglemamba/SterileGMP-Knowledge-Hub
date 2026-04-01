# PDA Technical Report No. 86 (2021): Industry Challenges and Current Technologies for Pharmaceutical Package Integrity Testing

## 1.0 Industry Challenges and Current Technologies for

2	Pharmaceutical Package Integrity Testing
5	Industry Challenges and Current Technologies for Pharmaceutical Package Integrity Testing Team
6	Authors and Contributors
7	Donald Singer, Ecolab Life Sciences, Co-Chair
8	Marla Stevens-Riley, PhD, Food and Drug Adminis-
9	tration, Co-Chair
10	Roger Asselta, Genesis Packaging Technologies
11	Marcus Adams, Merck
12	Kate Davenport, Hollister
13	Patrick Evrard, PALL Life Sciences
14	Patrick Gallagher, SCHOTT AG
15	Dana Guazzo, PhD, Consultant
16	Olivia Henderson, PhD, Amgen
17	Marc Hogreve, Sartorius
18	Chris Knutsen, Bristol-Myers Squibb Company
19	Carole Langlois, Sartorius
20	Li Lei, Eli Lilly
21	James Mellman, PhD, SHL Medical
22	Sangeetha Ravindran Nair, MS, Baxter Healthcare
23	Corporation
24	Paul Priebe, Qosina
25	Heino Prinz, Rommelag
26	Mike Sadowski, Baxter Healthcare Corporation
27	Hemi Sagi, Advanced Test Concepts (ATC), Inc.
28	Andrea Simonetti, Pharma Inspection Equipment
29	Oliver Stauffer, Packaging Technologies & Inspection
30	(PTI)
31	James Veale, Lighthouse Instruments
32	Heinz Wolf, PTI
33	Seung-Yil Yoon, AbbVie
34	Justine Young, Crohn’s & Colitis Foundation
35	Brandon Zurawlow, CS Analytical
36	Contributors
37	Thomas Brenner
38	Anil-Kuma Busimi
39	Jeff Carter
40	Christoph Herdlitschka
41	Carl Hitscherich
42	Laurent Jeanmart
43	Joshua Lance
44	Duncan Low
45	Anthony Marchesano
46	Chardientie Minns
47	Ron Mueller
48	Jayshree Patel
49	Vishwas Pethe
50	Mihaela Simianu
51	Destry Sillivan
52	Moli Wan
53	Sonja Wicks
54	Terry Wilhide
55	Joerg Zimmermann
58	Industry Challenges and
59	Current Technologies for
60	Pharmaceutical Package
61	Integrity Testing
63	ISBN: 978-1-945584-27-5
65	All rights reserved.
68	Table of Contents
69	1.0	 INTRODUCTION����������������������������������������������1
70	1.1	 Purpose and Scope���������������������������������������������2
71	2.0	 GLOSSARY������������������������������������������������������2
72	2.1	 Abbreviations�����������������������������������������������������3
73	3.0	 CHALLENGES WITH METHODOLOGIES���������������3
74	3.1	 Positive Controls�������������������������������������������������3
75	3.1.1	 Considerations for Selecting Positive
76	Controls�����������������������������������������������������4
77	3.1.2	 Considerations When Using Positive Controls
78	������������������������������������������������������������������4
79	3.1.3	 Types of Simulated Positive Controls����������5
80	3.1.4	 Calibrated Leaks�����������������������������������������7
81	3.1.5	 Additional Considerations for Controls�����8
82	3.2	 Blockage of Leak Paths���������������������������������������9
83	4.0	 CHALLENGES WITH PACKAGE DESIGN�������������10
84	4.1	 Prefilled Syringes ���������������������������������������������10
85	4.1.1	 Design�����������������������������������������������������10
86	4.1.2	 Challenges�����������������������������������������������13
87	4.1.3	 Test Method Consideration����������������������16
88	4.1.4	 Additional Considerations for Secondary
89	Packaging������������������������������������������������17
90	4.2	 Single-Use Systems — Flexible Bulk Containers
91	�������������������������������������������������������������������������17
92	4.2.1	 Design�����������������������������������������������������17
93	4.2.2	 Challenges ����������������������������������������������18
94	4.2.3	 Test Method Considerations���������������������18
95	4.2.4	 Additional Considerations for Flexible Bulk
96	Packaging Systems����������������������������������20
97	4.3	 IV Bags — Flexible Finished Pharmaceutical
98	Containers��������������������������������������������������������20
99	4.3.1	 Design�����������������������������������������������������20
100	4.3.2	 Challenges�����������������������������������������������20
101	4.3.3	 Test Method Considerations���������������������21
102	4.3.4	 Additional Considerations for IV Bags������22
103	4.4	 Cryogenic Conditions ���������������������������������������22
104	4.4.1	 Design �����������������������������������������������������22
105	4.4.2	 Challenges�����������������������������������������������24
106	4.4.3	 Test Method Considerations���������������������25
107	4.4.4	 Additional Considerations for Cryogenic
108	Conditions�����������������������������������������������25
109	5.0	 INNOVATIVE METHODS FOR EXISTING
110	TECHNOLOGIES���������������������������������������������26
111	5.1	 Helium Testing�������������������������������������������������26
112	5.1.1	 Application����������������������������������������������26
113	5.1.2	 Test Equipment and Parameters��������������27
114	5.1.3	 Leak Detection Limit��������������������������������27
115	5.1.4	 Considerations and Challenges����������������28
116	5.2	 Optical Emission Spectroscopy�������������������������28
117	5.2.1	 Application����������������������������������������������28
118	5.2.2	 Test Equipment and Parameters��������������28
119	5.2.3	 Leak Detection Limit �������������������������������29
120	5.2.4	 Considerations and Challenges����������������30
121	5.3	 Airborne Ultrasound�����������������������������������������30
122	5.3.1	 Application����������������������������������������������30
123	5.3.2	 Test Equipment and Parameters��������������30
124	5.3.3	 Leak Detection Limit �������������������������������33
125	5.3.4	 Considerations and Challenges����������������33
126	5.4	 X-Ray Detection�����������������������������������������������33
127	5.4.1	 Application����������������������������������������������33
128	5.4.2	 Test Equipment and Parameters��������������34
129	5.4.3	 Leak Detection�����������������������������������������35
130	5.4.4	 Considerations and Challenges����������������37
131	6.0	 ADDITIONAL CONSIDERATIONS FOR PACKAGE
132	INTEGRITY PROFILING����������������������������������38
133	6.1	 Transportation and Distribution�����������������������38
134	6.1.1	 Physical Stressors�������������������������������������38
135	6.1.2	 Pressure���������������������������������������������������38
136	6.1.3	 Testing Approaches����������������������������������39
137	6.2	 100% Online Testing����������������������������������������39
138	6.3	 Building a Quality by Design Approach into the
139	Container Closure Integrity Testing Program ����40
140	6.3.1	 Risk Assessment��������������������������������������42
141	6.4	 Bulk Container Lifecycle Approach�������������������42
142	6.5	 Educational Simulation about Limits of Detection
143	and Method Selection �����������������������������������������44
144	7.0	 CONCLUSION������������������������������������������������47
145	8.0	 REFERENCES�������������������������������������������������48
146	9.0	 ADDITIONAL READING����������������������������������49
147	FIGURES AND TABLES INDEX
148	Figure 3.1.3-1
149	Laser-Drilled Defect Through a
150	Glass Vial ������������������������������������������7
151	Table 3.1.4-1
152	Summary of Common Positive Controls
153	or Engineered Defects�����������������������8
154	Figure 4.1.1-1
155	Diagram of Prefilled Syringe������������10
156	Figure. 4.1.1-2
157	Staked Needle Interfaces�����������������11
158	Figure 4.1.1-3
159	Common Luer Lock Syringes������������12
162	Figure 4.1.1-4
163	Common Luer Cone (Luer Slip)
164	Syringes������������������������������������������12
165	Figure 4.2-1
166	Mobius® 2-D Bag Assemblies
167	from Merck Millipore and Flexsafe®
168	3-D Bag Assembly from Sartorius����18
169	Table 4.2.3-1
170	Comparison of Physical SUS Integrity
171	Testing Methods������������������������������19
172	Figure 4.4.1-1
173	Headspace Carbon Dioxide (CO2)
174	Pressure in a Set of 20 Vials Stored
175	on Dry Ice at -80 °C; Three Vials Show
176	Elevated Levels of CO2����������������������23
177	Figure 4.4.1-2
178	Headspace Oxygen Concentration in
179	the Same Set of 20 Vials Stored on Dry
180	Ice at -80 °C; Same Three Vials Show
181	Reduced Levels of Oxygen���������������23
182	Figure 4.4.1-3
183	Total Headspace Pressure in the Same
184	Set of 20 Vials Stored on Dry Ice at -80
185	°C; Same Three Vials Show Elevated
186	Total Pressure����������������������������������23
187	Figure 5.1.1-1
188	Sample Manifold with 10 2-D Bags
189	Attached to a Central Fluid Line
190	with 70+ Joining Points������������������26
191	Figure 5.1.3-1
192	Comparison of Helium Leak Rates
193	of a Nondefective Bag versus a
194	Defective Bag����������������������������������27
195	Figure 5.3.2-1
196	Airborne Ultrasound Through
197	Transmission�����������������������������������31
198	Figure 5.3.2-2
199	Propagation of Ultrasound Through
200	Material Being Tested����������������������31
201	Figure 5.3.2-3
202	Ultrasound Single Linear Scan
203	Graph of Channel Defect within a
204	Pouch Seal���������������������������������������32
205	Figure 5.3.2-4
206	Ultrasound Composite Scan/
207	Optoacoustic Image of Channel
208	Defect within a Pouch Seal��������������32
209	Figure 5.4.2-1
210	Principle of the Line Scan Imaging
211	Technique ���������������������������������������34
212	Figure 5.4.2-2
213	Principle of the Area Scan Imaging
214	Technique ���������������������������������������34
215	Figure 5.4.3-1
216	X-Ray Picture of a Large Crack in the
217	Syringe Barrel Inside an Auto-Injector
218	Device���������������������������������������������35
219	Figure 5.4.3-2
220	X-Ray Picture of a Vial with a
221	Glass Defect at the Rim under the
222	Crimp and Automated Detection
223	of the Defect.�����������������������������������36
224	Figure 5.4.3-3
225	X-Ray Picture of an Ampoule
226	Neck with a Glass Cut Detection
227	of the Defect������������������������������������36
228	Figure 5.4.3-4
229	X-ray Picture of Needle Socket with
230	the Glue made Visible����������������������36
231	Figure 5.4.4-1
232	Comparative CT Scans of Four Different
233	Elastomers Used to Calculate Stopper
234	Compression and Fit; Stopper D Shows
235	Signs of Dimpling.���������������������������37
236	Table 6.4-1
238	Considerations for Single-Use
239	System’s Lifecycle at User’s Site�������43
240	Figure 6.4-1
241	Single-Use System’s Lifecycle at
242	Manufacturing Site by User�������������43
243	Figure 6.4-2
244	Single-Use System’s Lifecycle at
245	User’s Site����������������������������������������43
246	Table 6.5-1
248	Leak Test Method Detection Limit and
249	Accuracy Determination Example����46
252	1
255	1.0  Introduction
256	For more than a decade, PDA Technical Report No. 27: Pharmaceutical Package Integrity served as an in-
257	fluential reference document, representing the best practices in sterile product package integrity testing.
258	At the time it was published, the information it presented was instrumental in shaping the revision of
259	USP General Chapter <1207> Package Integrity and Test Method Selection (1, 2). As a result, the content
260	of USP <1207> was expanded in 2016 and currently serves as the primary reference chapter focusing on
261	the basics of package integrity and best practices in sterile product package integrity evaluation and in-
262	tegrity testing. The intent of USP <1207> is to guide package integrity development away from testing
263	each sample at the smallest possible defect level, because quality cannot be tested into a product. Rather,
264	using a risk-based approach and leveraging testing to better understand, analyze, and eliminate the risks
265	during development phases is encouraged. Use of the appropriate testing during each manufacturing
266	phase can help in evaluating and mitigating residual risks (i.e., in production/stability to proactively ad-
267	dress risks/failure modes). Where feasible, regulations and quality risk management principles identified
268	in ICH Quality Guideline Q9: Quality Risk Management should be used (3).
269	Subsequently, the PDA Package Integrity Technical Report Team reexamined the role of TR-27 and de-
270	termined that a new technical report should be written, building on the package integrity basics updat-
271	ed by USP <1207> and focusing more on advanced issues related to pharmaceutical package integrity.
272	They researched the existing sources of information related to the challenges encountered with complex
273	packaging systems, such as large-volume bulk packages and prefilled syringe systems. Currently, no
274	single source is available that thoroughly addresses these issues. Likewise, the Technical Report Team
275	recognized the increasing number of innovative methods using existing technologies for integrity testing
276	that deserve consideration for their potential utility in the future of pharmaceutical package integrity.
277	This technical report is a consensus-based resource surrounding the challenges encountered in using
278	complex package systems and introduces important elements to consider in decision-making. It also
279	offers an examination of the technologies available for package integrity testing not yet established by
280	peer-reviewed research.
281	Although pharmaceutical container closure systems serve a variety of functions, the assurance of pack-
282	age integrity is primarily concerned with product containment. However, these systems also serve as
283	an effective barrier against the ingress of microorganisms and potentially reactive gases, such as oxygen
284	or water vapor, and sometimes function to maintain a vacuum.
285	Package integrity is the measure of the ability of the package to prevent product loss or maintain prod-
286	uct sterility and the ability to maintain the internal environment (e.g., loss of vacuum seal). Package
287	integrity testing is an ongoing process that starts in package development and continues throughout
288	the life of the product. When designing a container closure system and selecting and implementing an
289	appropriate method, the goal is to reduce the risk to product sterility and quality.
290	Best practices in pharmaceutical packaging suggest that all activities be evaluated for risk to the prod-
291	uct quality as a surrogate to patient safety. Failure of container closure integrity is a critical risk, as the
292	lack of package integrity can lead to contamination of the product which can impact both product
293	quality and potency. Contamination of a sterile product intended for parenteral administration could
294	result in dire consequences for the patient.
295	Demonstration of container closure integrity and ensuring the integrity of the container closure system
296	is required throughout the lifecycle of a sterile pharmaceutical product. A well-characterized and con-
297	trolled process should consist of a qualified container closure design with effective, monitored process
298	controls in place; this ensures the process parameters required to produce integral container closure
299	systems are maintained. These controls should establish appropriate specifications for incoming compo-
300	nents, qualification of manufacturing equipment, including a visual inspection system for detection of
301	irregularities in the process, and appropriate sampling strategies for container closure integrity testing.
304	2
307	Package integrity should ensure product quality is maintained through both the shelf life and life of
308	a product. Over the past two decades, analytical technology has progressed, improving the ability to
309	evaluate closure integrity. The information provided in this technical report is intended to assist users in
310	advancing their current integrity assessment and testing strategies during the phases of product lifecycle.
311	The report addresses container closure integrity in three main areas: challenges with complex systems and
312	package integrity methods, innovative methods for integrity testing using existing technologies, and ad-
313	ditional considerations for pharmaceutical package integrity. Additionally, how quality by design (QbD)
314	relates to package integrity and establishing a limit of detection are discussed in the final section.
315	1.1
316	Purpose and Scope
317	This technical report focuses on the challenges facing the pharmaceutical industry that use complex pack-
318	aging systems for sterile drugs and biologics (e.g., syringes, syringe assemblies, bulk containers). It also
319	presents information on some innovative methods for package integrity testing using existing technologies,
320	including the potential impact of cryogenic conditions. The intent is to update information and incorpo-
321	rate experiential learning which is not addressed in PDA TR-27 and USP <1207> (1,2).
322	It also serves as a technical resource, focusing particularly on sterile products and encouraging a risk-
323	based approach and leveraging testing to better understand, analyze, and eliminate the risks during
324	developmental phases. Use of the appropriate testing during each manufacturing phase can help in
325	evaluating and mitigating residual risks.
326	The information in this technical report is the result of a consensus achieved by the PDA Container
327	Closure Integrity Technical Report Team and are not necessarily the views of regulatory agencies.
328	2.0  Glossary
329	Definitions have been provided to help clarify the concepts discussed in this technical report. While
330	some of these definitions vary among companies, the definitions described below are consistent for use
331	within this document.
332	Container Closure System (CCS)
333	The sum of packaging components (primary and
334	secondary) and materials that together contain
335	and protect a product.
336	Container Closure Integrity Test (CCIT)
337	A package leak test (either physicochemical or
338	microbiological) that detects the presence of a
339	package breach or gap. Some tests may also be
340	able to identify the magnitude and/or location of
341	the leak (the term container closure integrity test
342	is synonymous with package leak test or package
343	integrity test for the purposes of this TR).
344	Destructive
345	A method in which a sample cannot be subse-
346	quently utilized in any other analytical method
347	or processed to a final product.
348	Deterministic Leak Test Method
349	A method in which the leakage event being de-
350	tected or measured is based on phenomena that
351	follow a predictable chain of events. In addition,
352	the measure of leak detection is based on physi-
353	cochemical technologies that are readily con-
354	trolled and monitored, yielding objective quan-
355	titative data.
356	Labeling
357	The process by which a label is affixed to a pack-
358	aging component.
359	Maximum Allowable Leak Limit
360	(MALL)
361	The greatest gap or leak rate that does not put
362	product quality at risk (2).
365	3
368	Nondestructive
369	A method in which a passing sample can subse-
370	quently be utilized in additional analytical meth-
371	ods or processed to a final product.
372	Package integrity
373	Is the measure of the ability of the package to
374	prevent product loss or maintain product steril-
375	ity and the ability to maintain the internal envi-
376	ronment (2).
377	Probabilistic Leak Test Method
378	A method that is the converse of a deterministic
379	leak test method, being stochastic in nature. Prob-
380	abilistic tests rely on a series of sequential and/or
381	simultaneous events, each associated with random
382	outcomes described by probability distributions.
383	Sterile/Microbial Barrier
384	The purported location on a container closure
385	system beyond which no microorganism can
386	pass under conditions qualified for the barrier.
387	2.1
388	Abbreviations
389	CCI
390	Container Closure Integrity
391	CCIT
392	Container Closure Integrity Test
393	CCS
394	Container Closure Systems
395	CPP
396	Critical Process Parameter
397	CQA
398	Critical Quality Attributes
399	HVLD	 High-Voltage Leak Detection
400	FISTA	 International Safe Transit Association
401	MALL	 Maximum Allowable Leak Limit
402	LOD
403	Limit of Detection
404	OES
405	Optical Emission Spectroscopy
406	QbD
407	Quality by Design
408	3.0  Challenges with Methodologies
409	The selection of container closure integrity methodology is based on sensitivity, reduced variability,
410	and clarification of the intended result of leak detection. The selected method will present challenges
411	to the investigator, however, inherent characteristics of the chosen method and other unknown factors
412	can increase variability, for example:
413	•
414	Formulations that impact flow through a leak or that create blockages within the leak.
415	•
416	Methods that impact formulations, e.g., a method that applies an energy level or introduces a
417	new chemical compound that impacts the original formulation in any way.
418	•
419	Unintended impacts of method on a container closure system (CCS) potentially introducing a
420	defect to or masking a defect in an otherwise unadulterated sample, e.g., pressure changing the
421	shape of the container and potentially the nature of the defect.
422	Section 3 addresses the challenges and potential impact of emerging issues on methodology design
423	and selection of container closure integrity testing (CCIT).
424	3.1
425	Positive Controls
426	Container closure integrity (CCI) methods use positive control units, also called “leak artifacts.” These
427	controls are useful for different purposes and during different stages of test methods and product de-
428	velopment, such as:
429	•
430	Design and development of the container
431	•
432	Development of a test method
435	4
438	•
439	Determination of the level of sensitivity to various types of leaks
440	•
441	Determination of detection limits
442	•
443	Validation of a test method
444	•
445	Validation or system suitability of the level of sensitivity to various types of leaks
446	•
447	Testing of containers for their stability properties
448	•
449	Development of container manufacturing process (quality control) parameters
450	Naturally occurring leaks are valuable positive controls during qualification of a CCIT method. Leaks
451	that occur naturally also have a limited shelf life; they may be measurable today but not tomorrow.
452	These samples might best be used for real-condition comparison of the method to better characterize
453	the capability of the method to detect actual leak paths when engineered leak paths are used to charac-
454	terize and develop a method. Acquiring a sufficient set of leak artifacts for development purposes is a
455	challenge due to the difficulty of using the normal container production processes to generate consis-
456	tent, naturally occurring leaks. Therefore, positive control units with simulated defects can be produced
457	to represent potential container and closure defects to use in method development and verification.
458	Naturally occurring leaks can also be used during process and product development. In most cases, the
459	geometry and leak size of naturally occurring leaks are unknown, whereas positive controls with simu-
460	lated defects (such as hole-type defects with channels) usually have leak paths with known geometry
461	that can be generated using a controlled process. Use of both types of positive controls can provide
462	useful information to develop methods for integrity testing.
463	Some CCIT system instruments can use calibrated leaks, another type of positive control. Calibrated
464	leaks are systematically built into the CCIT system hardware to simulate a leak. The leaks are cali-
465	brated against traceable standards and installed inside robust housing (not the product container). If
466	possible, the calibrated leak size should be equal to or less than the maximum allowed leak (MALL) for
467	the specific container design (2). For a rapid 100% CCIT method, the MALL may not be achieved.
468	The calibrated leaks are used in routine system performance verification and, for some CCIT methods,
469	as tools for routine and frequent calibration. The way in which the leaks were created and calibrated
470	should be completely described.
471	Note: References that provide a broad overview of historical approaches to defect development and
472	application can be found in the additional reading section.
473	3.1.1	 Considerations for Selecting Positive Controls
474	Positive controls should be selected based on product package profile, method type, and intended
475	outcome of the method used during the intended lifecycle phase. Positive controls used for method
476	development and validation should include a range of defect sizes and can include a set of different
477	types of defects. At a minimum it should include a set of surrounding leak sizes (above and below) that
478	include the MALL rate for the specific product package and the intended limit of detection for the use
479	of the selected method. There is a limit to these types of defects; therefore, the method cannot be fully
480	characterized to understand its capability or the true MALL of a CCS.
481	3.1.2	 Considerations When Using Positive Controls
482	Naturally occurring positive controls generated from manufacturing process failures present a chal-
483	lenge when attempting to control the size of leaks. In many cases, these types of defects generate large
484	leaks, or leaks that are fragile and can be easily plugged by product. If found, these types of defects
485	may be valuable to understand method performance against naturally occurring defects but naturally
486	occurring defects should not be used for method validation due to the wide variability they exhibit.
487	Positive controls with simulated defects can also be easily plugged during handling and storage; there-
488	fore, proper storage and handling precautions should be used.
491	5
494	During the development and validation or qualification of a CCIT method, the test system must
495	be challenged with positive controls. Positive controls should simulate large or gross leaks and those
496	that simulate small leaks. Table 3.1.4-1 offers a summary of common positive controls or engineered
497	defects. Engineered defects for positive controls can have the added advantage of being a micron-sized
498	defect, but other factors should also be considered:
499	•
500	Percentage of the micron-sized defects that can be consistently and reliably detected using a cho-
501	sen CCIT method (NOTE: All positive controls with leaks at or above the claimed limit of detection
502	(LoD) of the test method must be detected with high confidence (e.g., 95%).
503	•
504	Size and geometry of leaks that occur in real life and the ability of the test method to accurately
505	detect those defects.
506	•
507	Leak size needed for microbial contamination to occur and pose a risk to product sterility or qual-
508	ity over the entire lifecycle of the product.
509	3.1.3	 Types of Simulated Positive Controls
510	USP <1207.1> describes defect types as “positive controls representing realistic package flaws.” Along
511	with the examples given, it acknowledges that a chosen CCIT method may not be able to accurately
512	detect some type defects in a given package design, so an alternative method should be identified.
513	When a method cannot be identified, any information and design that can reduce the possible occur-
514	rence of such defects in the CCS should be sought (4).
515	Common materials used to create simulated defects include:
516	•
517	Glass micropipette
518	•
519	Wire
520	•
521	Laser-drilled
522	Glass micropipettes are available in diameter sizes from 0.1 µm to 10 µm. The main advantage of a
523	glass micropipette over laser-drilled and wire-simulated defects is the ability to generate relatively con-
524	sistent defects at small sizes (1, 2).
525	Use of a glass micropipette is considered a short microchannel of small diameter (5 µm and under);
526	diameters under 2 µm are not perfectly round.
527	The micropipette is inserted through a protective tool (such as a hollow metallic syringe needle) into
528	the septum or stopper and bonded to the container with epoxy, or through a hole drilled into the side
529	glass or rigid wall and bonded with epoxy. A microscopic examination of the micropipette tip can be
530	used to verify that the micropipette tip was not broken during sample preparation; then, a test cycle
531	can be performed with an equivalent simulated flow rate for comparison to verify the actual perfor-
532	mance of the micropipette (1).
533	Glass micropipettes are fragile, and the tip can be easily broken during sample preparation. Broken
534	micropipette tips will typically yield an unusually higher flow rate; such a sample should not be used
535	as a positive control.
536	Wires can simulate foreign objects, such a human hair (diameter range of 80 µm to 100 µm) at the seal-
537	ing area. Various wire material and sizes are available in diameters of 10 µm and greater. For some sterile
538	glass containers, a wire can be placed between the plunger and the glass barrel (syringes, cartridges) or
539	between the aluminum-crimped stopper and the glass vial. The elastomeric plunger or stopper, which
540	has been press-fitted to the container, will not fully deform around the wire; therefore, small leak paths
541	can be generated. This type of leak is also considered a microchannel. The defect size is dependent on,
542	for example, the wire size, elastomeric material formulation and hardness, press-fit forces, or assembly
543	forces (crimping for vials). The time between placing the wire and testing may also have some impact
544	due to potential relaxation of elastomeric material. Changes in elastomeric hardness by temperature
547	6
550	may also have an impact. When these parameters are controlled, repeatable leak paths can be generated.
551	Leak paths with calculated or estimated sizes of 2 µm to 10 µm and less have been created for glass sy-
552	ringes and glass vials using nickel-titanium wires with diameters of 25 µm and greater (1, 4).
553	Stainless steel wires (typically 50 µm and larger diameter) are used as simulated defects for heat-sealed
554	or ultrasonically sealed trays and pouches. For lidded trays and pouches, where the container and lid
555	material do not conform well to the wires generating a very large defect, the wire is pulled out shortly
556	after sealing (and before full seal-curing) to generate a smaller leak path. In this case, the strength and
557	width of the seal may not allow for wires of a softer wire material (such as copper) or a smaller diameter
558	to be left intact after pulling.
559	A laser at various wave lengths, when applied to the container surface, generates localized heat, melt-
560	ing the material and creating an opening (or hole) in the package wall. Laser-drilling on the container
561	walls will generate defects from equivalent sizes of 2 µm and greater. Containers are typically filled and
562	sealed after the laser-drilling process (1).
563	Laser-drilling of glass products (e.g., vials, cartridges, and syringes) is done by drilling a tapered hole in
564	the glass, where the hole does not protrude through the glass wall. The heat generated by this process
565	results in cracking the glass near that hole, creating the leak path through the cracks (1). The geometry
566	of such cracks is not consistent; however, the defect size and its behavior are hard to define. Its behav-
567	ior can be a sharp-edge orifice, a very short microchannel, or a combination of both. Updated laser-
568	drilling technology can increase the time interval between laser shots to allow heat dissipation, effec-
569	tively eliminating glass “cracking.” These defects are essentially wormholes that have some consistent
570	diameters across the entire glass wall thickness (i.e., hole-like defects). Laser-drilling manufacturers
571	can correlate the defect “equivalent diameter” using air flow and empirical air flow calibration curves
572	generated from known sharp-edged metallic orifices. Defect sizes less than 10 µm in glass products
573	may show larger variability (1). The size of laser-drilled defects in glass can be estimated to “equivalent
574	micropipette” size using calibration curves. Calibration curves should not be extrapolated beyond their
575	ranges. When dealing with laser-drilled holes, obtaining a verification of the flow rate prior to use is
576	recommended to prevent false negative or inaccurate results.
577	Figure 3.1.3-1(a) shows the cross-section a laser-drilled hole in the XY plane, which is approximately
578	in the center of the hole. Figure 3.1.3-1(b) shows an image in the YZ plane, indicated by the vertical
579	line in Figure 3.1.3-1(a), that shows cracks of the glass wall. Figure 3.1.3-1(c) shows an optical mi-
580	croscope image of the inner surface of a container, and Figure 3.1.3-1(d) shows the scanning electron
581	microscope (SEM) image of the glass container. The star-patterned fracture passes through the wall;
582	the crack is roughly 1 μm at its widest point.
583	Laser-drilled holes are often the most effective and reliable method for simulating positive controls in
584	flexible packaging. They may be the preferred way to introduce engineered defects in such flexible con-
585	tainers as single-use systems (e.g., for bulk storage) or IV bags. Though, when drilling in thin-walled
586	containers, the laser penetrates through the wall to generate a tapered hole with a throat. Another
587	concern is that multiple small holes and channels may add up to a nominal large leak rate.
588	Given the flexible nature of the packaging material and the stress conditions of some CCIT methods
589	(e.g., pressure), the hole size during and after CCIT may be different from the nominal size of the
590	defect prior to CCI testing. Hence, variation in test results may be observed due to defect size being
591	impacted during the test cycle.
592	An alternative to laser-drilling directly into a container is to use stainless-steel discs. These can be sub-
593	jected to laser-drilling to create defects as small as 0.5 µm and, generally, are more consistent defects
594	to use in equipment.
597	7
600	Figure 3.1.3-1(a)	Cross-section of a Laser-drilled Hole in
601	the XY Plane
602	Figure 3.1.3-1(b)	Image in the YZ Plane
603	Figure 3.1.3-1(c)	Optical Microscope Image of the Inner
604	Surface of a Container
605	Figure 3.1.3-1(d)	SEM Image of the Inner Surface of a
606	Container
607	3.1.4	 Calibrated Leaks
608	Calibrated leaks are designed to yield a given leakage rate calibrated against independent, traceable
609	calibration standards. A calibrated leak is typically an independent component that is introduced into
610	the container barrier or into the test system volume to introduce a certified known flow rate into the
611	test system during a challenge leak test. These calibrated leaks are engineered inside a robust metallic
612	housing and are protected from plugging via filter or clean-supplied gas. Generating a calibrated leak
613	to mimic the headspace of sterile containers (a space with a limited air supply) is difficult because
614	calibrated leaks need an infinite gas supply. The inlet to the calibrated leak is normally open to the gas
615	supply source, while the outlet of the calibrated leak is connected to the equipment test circuit or test
616	chamber via a valve. When this valve is open, a known amount of gas leakage is injected either into
617	the test circuit (in vacuum-test condition) or out of the test circuit (in pressure-test condition). When
618	Note: X-ray μCT was used for Figures (a), (b) and (c)
619	Figure 3.1.3-1 Laser-Drilled Defect Through a Glass Vial
622	8
625	running a test with a “master container,” the calibrated leak simulates a defect that is consistent and ro-
626	bust, which can be used to challenge and verify the CCIT equipment performance. In this condition,
627	the calibrated leak represents a positive control sample for the CCIT equipment to detect that leak.
628	3.1.5
629	Additional Considerations for Controls
630	The MALL used to define the CCI level of sterile products varies across the industry. This MALL is
631	used to prepare positive controls with simulated defects.
632	System suitability can be performed on each instrument prior to sample analysis using calibrated standards or
633	other means of instrument verification. If a deterministic method is validated and instruments are calibrated,
634	the use of positive controls to establish sensitivity may no longer be required for routine testing. The use of
635	Table 3.1.3-1
636	Summary of Common Positive Controls or Engineered Defects
637	Type
638	Possible Smallest Defect
639	Size Available (µ)*
640	Advantages
641	Disadvantages
642	Laser Drilling1
643	2 µ ± 0.5 µ
644	Most resembles natural
645	defects in pharmaceutical
646	containers (cracks, pin holes).
647	Laser-drilled holes are often a
648	reliable method for simulating
649	positive controls in flexible
650	packaging
651	Higher cost
652	Hole size needs to be
653	calibrated to a leak rate
654	Actual hole size on container
655	may differ from nominal hole size
656	or the hole diameter confirmation
657	by microscopic measurement
658	Glass
659	Micropipettes2
660	0.1 µ
661	Small defect size available
662	Clear fluid path
663	Fragile
664	Difficult to ensure a complete
665	seal between micropipette
666	perimeter and package wall
667	Broken tips may not be easily
668	detected
669	Need to prime micropipette
670	with media if using microbial
671	ingress or dye ingress
672	Direct Insertion
673	of Wire3
674	10 µ
675	Easy and inexpensive
676	approach to creating defects
677	that simulate channel defects
678	Can be used for test method
679	feasibility studies to explore
680	method’s detection range
681	May display gas, liquid, or
682	microbial leakage dynamics
683	that are very different from
684	real-world defects
685	Direct
686	Insertion of
687	Wire/Needle/
688	Microfilament4
689	10 µ
690	Easy and inexpensive
691	approach to creating defects
692	that simulate channel defects
693	Can be used for test method
694	feasibility studies to explore
695	method’s detection range
696	May display gas, liquid, or
697	microbial leakage dynamics
698	that are very different from
699	actual real-world defects
700	*	 Defect sizes stated here are for information purposes only and are intended to help make decisions on
701	appropriate positive controls that can be used with the CCS. Direct contact with vendors is recommended to get
702	current information on the smallest defect size that can be reliably created in a flexible pharmaceutical container.
703	1	 Lenox Laser Drilling Services; 2 World Precision Instruments; 3 Polymicro Technologies; 4Artificial Leaks in Container Closure
704	Integrity Testing: Nonlinear Finite Element Simulation of Aperture Size Original by a Copper Wire Sandwiched between the
705	Stopper and the Glass Vial (5).
708	9
711	controls during validation of a deterministic method demonstrates that leaks will be detected by the method,
712	so they may not be needed with routine testing, as long as the system is in a calibrated and maintained state.
713	For probabilistic methods, system suitability may need to be performed along with sample analysis.
714	Section 6.5. provides an example of a study using positive controls, see Section 7.0 for additional resources.
715	3.2
716	Blockage of Leak Paths
717	Biopharmaceutical products are formulated with a wide variety of ingredients, such as proteins, nucleic
718	acids, or living microorganisms and buffer solution. Some of these ingredients can present challenges
719	to CCIT. For example, some CCI physical testing methods have difficulty detecting defects in samples
720	formulated with proteins. A study was performed to compare CCIT between a highly concentrated
721	protein solution (120 mg/mL) and a surrogate solution with the same viscosity material property (6).
722	The surrogate solution could flow out easily through defects, but the highly concentrated protein solu-
723	tion did not flow out. One hypothesis suggests that highly concentrated large molecules in solution are
724	agglomerated around defect channels, completely or partially blocking the channels. The result was a
725	solution that had difficulty flowing out through the channels. This supports the idea that proteins may
726	play an important role in clogging the leak path.
727	Other types of defect clogging can occur when a product solution has ingredients that can crystallize
728	upon drying. In this case, the solution easily leaks out through the defect channel, but the leaking solu-
729	tion will dry over time and turn into crystallized material in the defect channel. Once the solution has
730	crystallized, it clogs the defect channel. This situation depends on the properties of the solution and
731	the type of defect. Defect samples can be detected if they are tested soon after they are prepared, but
732	the detection probability decreases as sample storage time increases.
733	When defect samples are clogged by proteins, vacuum or tracer gas-based CCI physical tests may
734	not be able to detect defects due to the difficulty creating pressure, mass, or gas changes through the
735	defect channel. Theoretically, if the clogged defect channels have some residual moisture and are still
736	electrically conductive, high-voltage leak detection (HVLD) may be able to detect those leaks. Also,
737	solution-based testing, such as the dye ingress test, may help to dissolve the crystallized materials in
738	the clogged area if the materials are in direct contact with the dye solution, constituting a valid CCIT
739	method for such products. However, that dye solution can also block small channels under certain
740	conditions, such as drying or vacuum or pressure exposure.
741	When considering clogging by proteins or other ingredients in liquid-filled products over time, seal
742	property, in addition to the CCIT, should be monitored in a stability program. This should be con-
743	sidered in feasibility studies and when selecting the CCIT method. CCIT may not be able to detect
744	a defect in the seal if it is blocked by the clogging. Sterility could be breached if the product is con-
745	taminated prior to the clogging. Clogging is one of the challenges in CCIT; consequently, the drug
746	manufacturers should not rely on CCIT to ensure the sterility but should develop a CCI strategy.
747	Manufacturers can develop different ways to resolve the clogging challenge.
748	The CCI testing strategy and methods should address this clogging challenge. Visual inspection and RSF
749	are examples. For example, when the seal is visible, like the plunger in a syringe, the plunger-rib contact
750	length can be monitored to verify that the seal contact pressure does not change. When the seal is not vis-
751	ible, like the stopper in a vial or the disc seal in a cartridge, the residual seal force or rubber bulge height
752	from the rubber compression can be used to verify that the seal contact pressure is acceptable.
755	10
758	4.0
759	Challenges with Package Design
760	Testing for CCI is intended to provide evidence of the use of appropriately matched components
761	and an adequate closing process. Assurance of integrity is developed from consistency of the latter
762	design parameters. This is simple with legacy CCS such as glass vials with stoppers or glass ampoules;
763	however, the industry has progressed to using newer product delivery designs and different materials.
764	These newer designs are more complex and introduce a new learning curve for developing leak detec-
765	tion methods. Section 4 will offer current knowledge and perspectives regarding the impact of current
766	package designs on package integrity and the impact on the performance and selection of CCIT.
767	4.1
768	Prefilled Syringes
769	Prefilled syringes and cartridges are now a common dosage form for injectables. Design has progressed
770	from standard glass prefilled syringes to plastic alternatives as well as assembled auto-injection systems.
771	All of these advances add complexity to better understanding integrity issues and add more specific
772	challenges to developing an approach to CCI that fits into the lifecycle assessment.
773	4.1.1	 Design
774	Syringes are sealed at three key locations, called interfaces. The plunger stopper-barrel interface is the
775	most common to all syringe (Fig. 4.1.1-1). Other interfaces are the needle–needle shield interface and
776	the barrel–needle shield interface. For more detailed information on syringe design see PDA Technical
777	Report No. 73: Prefilled Syringe User Requirements for Biotechnology Applications (7).
778	The seal interface (or closures) for each configuration presents challenges for package integrity and
779	CCI testing. In addition, the syringe design, materials of construction, components, manufacturing
780	processes, secondary packaging, and auto-injectors may also impact the integrity and testing of a pre-
781	filled syringe.
782	Since each type of syringe has its own type of closure system, unique considerations must be made
783	for CCI of the barrel–closure interface. To maintain CCI, proper packaging and handling procedures
784	should be in place to ensure that syringe closures remain properly positioned throughout the manu-
785	facture, fill-finish, and transportation of syringes.
786	Three common types of prefilled syringe designs, regardless of materials of construction, are:
787	•
788	Staked needle (barrel–closure and the needle shield–needle interfaces)
789	•
790	Luer lock
791	•
792	Luer slip (or luer cone)
793	Figure 4.1.1-2 highlights the key interfaces for staked needles.
794	Thumb pad
795	Plunger rod
796	Finger flange
797	Barrel
798	Cone
799	Needle
800	Needle shield
801	Shoulder
802	Drug solution
803	for injection
804	Plunger stopper
805	Plunger
806	Figure 4.1.1-1
807	Diagram of Prefilled Syringe
810	11
813	The impact of design features on integrity and testing challenges are discussed in more detail in Sec-
814	tion 4.1.2.
815	The barrel–closure and the needle shield–needle interfaces are included in the staked needle category
816	(see Fig. 4.1.1-2). The barrel–closure interface comprises the tip of the syringe and the corresponding
817	sealing surface of the closure. Careful consideration should be given to closure design and elastomeric
818	formulation because different closure systems respond differently to changes in environmental condi-
819	tions (e.g., heat, sterilization cycles, or CCIT method cycles). Proper interface fit between the closure
820	system and syringe barrel is an essential requirement to ensure CCI.
821	The needle shield–needle interface is formed when the staked needle of the syringe is embedded into
822	the elastomeric portion of the needle shield. The needle embedded into the elastomer is the most criti-
823	cal portion of the needle shield–needle interface, as it forms the closure between the drug product and
824	the environment. The drug manufacturer is responsible for working with its suppliers to ensure that
825	validated processes are used to properly position needle shields. The needle must be fully embedded in
826	the needle shield, but the needle should not completely pierce through the needle shield, which can
827	cause a defect. The drug manufacturer should then verify that additional fill-finish steps and shipping
828	conditions do not adversely affect the needle-shield positioning or introduce needle-shield piercing.
829	The luer lock adapter, elastomeric tip cap, and syringe cone form the sealing surface interface for a
830	luer lock syringe (Figure 4.1.1-3). Luer lock syringes with a luer lock adapter and tip cap and those
831	comprised of a luer lock adapter, screwed rigid cap, and tip cap are the primary types. For sufficient
832	CCI, the luer lock adapter, tip cap, and/or screwed rigid closure must be adequately positioned. Dur-
833	ing manufacturing, precautions should be taken to avoid potential silicone contamination of the luer
834	lock adapter, which may impact the sealing integrity of the system. This may require additional line
835	clearances to ensure residual silicone does not agglomerate on luer lock adapters.
836	For a luer cone (luer slip) syringe, the sealing surface interface is formed by interference between the
837	syringe cone and the tip cap (Figure 4.1.1-4). Often, cone-glazing or cone-coating is used on syringes
838	to provide surface roughness that enhances the fit of the tip cap with the syringe cone. The cone-
839	glazing or cone-coating must be adequately distributed to ensure that the tip cap does not become dis-
840	lodged during additional manufacturing steps or in transportation. Additionally, tip cap closures must
841	be adequately placed to ensure CCI is maintained through the syringe cone–tip cap interface. Similar
842	to the luer lock system, the presence of silicone at the tip cap of a syringe may impact sealing integrity.
843	For cartridge containers, CCI is maintained by a crimped combination seal (also known as a lined
844	seal or rubber septum) on one end of the cartridge and an elastomeric plunger on the other end. The
845	pen-injector may be a single-dose cartridge that uses a monolayer combination seal, or it may be a
846	multidose cartridge that uses a bilayer combination seal. Cartridges may also consist of a single or dual
847	chamber. Various options exist for dual-chambered cartridges including liquid–liquid, liquid–lyophi-
848	lized powder, or liquid–powder chambers.
849	Plunger stopper – Barrel Interface
850	Needle – Needle shield interface
851	Barrel – Needle shield interface
852	Figure. 4.1.1-2
853	Staked Needle Interfaces
856	12
859	The cartridge container must form a secure seal at the combination seal, cartridge, and cartridge
860	plunger to ensure the system maintains CCI. For dual-chambered cartridges, specific consideration
861	should be given to compatibility of the cartridge bypass feature (internal or external) and the cartridge
862	plunger. Because a dual-chambered cartridge uses two elastomeric plungers for system functionality,
863	the drug manufacturer must ensure that appropriate system-level testing is performed to maintain the
864	integrity of the drug product in both chambers and that premature mixing does not occur.
865	Figure 4.1.1-3
866	Common Luer Lock Syringes
867	Figure 4.1.1-4
868	Common Luer Cone (Luer Slip) Syringes
869	n	Tip Cap
870	n	Luer Lock
871	n	Syringe Barrel
872	n	Tip Cap
873	n	Luer Cone
874	n	Syringe Barrel
877	13
880	Combination seals perform a vital sealing function in a cartridge system that has unique requirements
881	as compared with a syringe-based system. The combination seal must be adequately crimped to the
882	cartridge with the appropriate compression to maintain CCI. During multiple use, the combination
883	seal will be punctured multiple times and must maintain integrity throughout use and product shelf
884	life (8). For multidose applications, an appropriate combination seal should be selected, including a
885	bilayer elastomer with robust resealing properties. The drug manufacturer is expected to test the system
886	for CCI according to the intended use of the product and regulatory test requirements, which includes
887	testing the system with the maximum number of punctures that would engage the combination seal.
888	Additional testing is outlined in ISO 13926-3 Pen systems – Part 3: Seals for pen-injectors for medical use,
889	though the resealability test it outlines does not constitute CCI testing (9).
890	Elastomers and plunger stoppers provide excellent sealing properties when paired with glass and plastic
891	containers. As with other pharmaceutical parenteral closures, halobutyl elastomers are most widely
892	used for prefilled syringe plungers due to good drug compatibility. The elastomeric formulation must
893	be carefully chosen and must be hard enough to provide sufficient rigidity for consistent functionality,
894	while allowing the viscoelastic properties of the plunger material to provide closure properties.
895	The design of the plunger provides CCI and functionality of the system. To take advantage of the
896	compressibility of the elastomer material, the plunger is designed to be slightly larger in circumference
897	than the inner diameter of the chosen barrel.
898	The number of ribs in the design of a stopper will depend on the end use of the assembled system. ISO
899	11040-5:2012 Prefilled syringes – Part 5: Plunger stoppers for injectables recommends that plungers be
900	designed to use all three ribs (10). In general, the rib closest to the drug is considered the primary seal-
901	ing rib; the second and third ribs are meant to stabilize the seal and provide secondary CCI assurance.
902	The design, including the placement of surface enhancements such as fluoropolymer laminate films,
903	will also influence the CCI performance (11).
904	The use of lubricity coatings on the syringe barrel will influence the ability of the container system to
905	create CCI. Syringe barrel suppliers have broad capabilities to provide lubrication for functionality;
906	silicone oil and vapor-deposited coatings being the most commonly used. When silicone oil is sprayed
907	on the inside of the barrel, the coating may or may not be heat-treated. The choice of treatment will
908	play a role in the optimization of the level of application.
909	Lubricity coatings are applied on plungers before they are assembled into syringes to allow machinabil-
910	ity of the components through the filling line; the coating also enhances the movement of the plunger
911	to expel the contents of the syringe in operation. The quantity of coating applied to the surface will
912	influence the ability of the plunger to push against the glass barrel and provide the seal.
913	Excess lubricity coating, while good for plunger and piston functionality and movement in use, may
914	result in the plunger or piston moving too freely during transit, causing a breech in CCI. If the silicone
915	oil is not heat-fixed, however, the force of the piston pushing out towards the walls of the barrel will
916	move much of the silicone oil away from the barrel–plunger interface, helping to keep the piston in
917	place over time. This phenomenon, though good for CCI, will make piston-initiation force difficult.
918	4.1.2	 Challenges
919	Alternate materials of construction provide additional challenges with design. Prefilled syringes made
920	of glass have long been available for use with pharmaceutical products. Polymeric (or plastic) syringes
921	in single-use or combination formats are available as an alternate material and have some advantages
922	over glass. Prefilled plastic or polymer syringes contain a barrel typically made from cyclic olefin poly-
923	mers or copolymers. Polymer barrel materials are stronger, tougher, and more flexible, allowing for
924	improved design and dimension control; consequently, they are used more often and, in some cases,
927	14
930	seen as a potential replacement for glass syringes. The CCI requirements for prefilled syringes apply
931	to syringes made of both glass and plastic throughout product lifecycle phases. Polymer materials and
932	their manufacturing processes, however, present a unique set of risks for forming and maintaining seal
933	integrity throughout the product lifecycle.
934	Syringes composed of polymers or copolymers present additional CCI risks. Polymeric materials are
935	prone to undergoing physicochemical changes upon exposure to heat, oxygen, irradiation, mechanical
936	stresses, or various combinations of such stress conditions throughout manufacturing, sterilization,
937	and storage. These risks are related not only to the syringe barrel design, but to its molding and ster-
938	ilization processes, downstream handling, packaging, and distribution processes, all of which must be
939	identified, assessed, evaluated, and mitigated.
940	The supplier of plastic syringe components is responsible for establishing and validating design require-
941	ments as well as critical process parameters (CPPs) for ensuring CCI. Appropriate CCIT methods
942	should be applied to verify that the inherent leak rate of the syringe design conforms, at a minimum,
943	to the MALL specified in USP <1207> for preserving product sterility and drug formulation content.
944	Such evaluations should encompass worst-case conditions in all relevant manufacturing processes,
945	such as molding parameters, processing, and sterilization methods. Furthermore, the design and devel-
946	opment process should include a risk assessment of the potential integrity failure modes.
947	Additional development studies may be required to illuminate potential surface and bulk material
948	property changes and assess the risks of losing CCI. Ultimately, acceptance criteria should be es-
949	tablished for the CPPs, such as dimensional specifications, relevant ISO standards, cleanliness, and
950	freedom from defects. Adequate controls must be established throughout the polymer resin manufac-
951	turing, syringe molding, sterilization, packaging, and distribution processes to ensure the quality of
952	components related to CCI.
953	The plastic syringe barrel is typically filled with product and then sealed with an elastomer plunger, which
954	may be supplied by a different manufacturer. The marketing authorization license holders are account-
955	able for defining the CCI requirements specific to the product, the MALL for example, and for ensuring
956	the plastic barrel and elastomer plunger form an integral system that conforms to requirements. For
957	semi-finished plastic syringes (product-filled and sealed), the CCI requirements must be assessed during
958	the evolution of the product and process development, validation, and routine manufacturing phases
959	and maintained throughout final injection device assembly (manual syringe or auto-injector devices),
960	packaging, distribution, storage, and use. The plastic syringe design verification should consider all the
961	components of the system, including any secondary packaging, and demonstrate that the inherent leak
962	rate of the system conforms to the MALL required for the product. The outcome of the risk assessment
963	should help define filling and sealing equipment requirements, CPPs, and special handling procedures.
964	For instance, polymers are prone to surface damages by mechanical forces; therefore, special handling
965	considerations may be needed to eliminate or mitigate damages to critical sealing surfaces.
966	Product stability studies should be performed to verify that the drug formulation does not significantly
967	interact with the plastic/polymer materials in the syringe. If secondary packaging materials (e.g., la-
968	bels) are expected to contact the polymer material, either directly (e.g., adhesive back of a label) or
969	indirectly through permeation (e.g., ink on a label), those materials should be included in the stud-
970	ies. Appropriate CCIT methods and other relevant product attribute tests, such as visual inspection,
971	should be included in the studies; results should be analyzed to monitor potential changes in seal qual-
972	ity and to verify CCI throughout the product’s shelf life. Final product studies should be performed
973	on assembled injection devices, especially when the device design applies additional mechanical stress
974	on the polymer syringe during storage. Relevant International Conference on Harmonisation (ICH)
975	guidelines should be considered in the study design, which may include stress conditions such as an-
976	ticipated temperature excursions.
979	15
982	For products sensitive to specific gases (e.g., oxygen) or when the headspace in the syringe must be
983	preserved, in addition to gas leakage, the gas permeation rate through the plastic syringe barrel should
984	be considered during syringe design and component selection. The total migration rate into the sy-
985	ringe system due to gas leakage and permeation and its impact on product stability must be assessed.
986	Various measures can be taken to minimize gas permeation through the plastic barrel including, but
987	not limited to, coatings both on the inside and outside of the barrels or containers, use of multilayer
988	barrels or containers, and use of labels or secondary packaging with high barrier properties.
989	An appropriate CCIT method must be selected, and its applicability and key performance attributes
990	must be characterized and demonstrated specifically for polymer syringes. Potential interfering factors
991	associated with polymer materials, including higher gas permeation rates, out-gassing potential (espe-
992	cially under vacuum), and surface staining by various dye solutions, may limit method applicability,
993	lower detection sensitivity, or cause false detections for various CCIT methodologies, helium leak
994	detection, vacuum decay, and dye ingress testing for example. During method selection and devel-
995	opment phases, these potential interferences must be considered, and method parameters should be
996	tailored and optimized to minimize their impact on method performance. Use of CCI “type defects”
997	that are common to polymer syringes, either simulated defects fabricated in the labs or real defects
998	sampled from incoming materials, are encouraged to assist method development, and ensure method
999	performance, (see Section 3.1). The final method performance must be evaluated and validated, if
1000	required, for the specific polymer syringe system and drug product.
1001	Filling and stoppering a prefilled syringe may impact CCI, so that should be considered when testing.
1002	When using mechanical means of placing the plunger stopper, the stopper may be compressed into a
1003	tube, the tube inserted into the syringe, and a metal rod used to push the stopper out of the tube where
1004	it expands to form a compression fit inside the syringe barrel. If the plunger is laminated with a fluo-
1005	ropolymer coating, the compression and pushing may create wrinkles on the plunger which should be
1006	evaluated for any impact to CCI.
1007	Vacuum stoppering is another means of stoppering the syringe; it involves creating a vacuum in the
1008	syringe, thus pulling the plunger into the syringe. Vacuum methods are less likely to create wrinkles
1009	on a fluoropolymer coating, but an incorrect vacuum setting may cause the filled liquid in the syringe
1010	to boil, creating other concerns.
1011	The fill volume of samples should be sufficient to conduct the testing method. For example, if dye
1012	ingress testing will include spectrophotometric testing, the volume of fill must be sufficient to fill the
1013	cuvette used by the instrument. In the case of HVLD, the fill volume must be sufficient for the con-
1014	ducting liquid to cover any defects.
1015	In laser-based headspace oxygen analysis, the sample fill level should allow a minimum headspace vol-
1016	ume. The laser light should be able to pass through the headspace region of the sample without being
1017	scattered by the liquid product or by the syringe shoulder.
1018	A filled syringe without secondary items, such as plunger rod, backstop, label, or anti-needle stick
1019	device, is referred to as a semi-finished syringe. These components items are frequently added to the sy-
1020	ringe to aid in its functionality, identification, and safety. Once all the desired components are added,
1021	the syringe is referred to as a finished syringe.
1022	Since the addition of these secondary items may impact different seal interface points on the syringe,
1023	the CCI of the finished syringe should be assessed. For instance, plunger rod insertion may potentially
1024	impact the seal between the plunger stopper and the inner wall of the syringe barrel, thereby deserving
1025	careful evaluation. The CCIT method should also be evaluated for any additional modification that
1026	may be required for the finished syringe as compared to the semi-finished syringe.
1028
1029	16
1032	Assurance of CCI of the primary package within a device assembly or needle safety system during
1033	assembly, transport, storage, and usage is critical to ensure drug sterility, stability, efficacy, potency,
1034	strength, and purity. Consideration of the impact of auto-injector (or pen) and safety system design
1035	on CCIT must be taken into account.
1036	Due to the often-complex mechanisms of well-designed auto-injectors and pens, testing the tightness
1037	or integrity of the system is difficult. The design and content (syringe or single- or double-chamber
1038	cartridge) of auto-injectors and pens is highly variable and this variability increases the difficulty of
1039	developing a standard approach to evaluating their CCI.
1040	4.1.3	 Test Method Consideration
1041	Decisions regarding which CCIT method to select for prefilled syringes should be based on packaged
1042	product physical properties such as density, viscosity, electrical conductivity, molecule size, and evapo-
1043	ration capability.
1044	Although many methods are available for CCIT of prefilled syringe or cartridge systems, CCIT after the
1045	assembly of prefilled syringes with auto-injectors or pen-injectors creates a new set of challenges. Dispos-
1046	able auto-injectors are designed to avoid tampering with the primary packaging container. Consequently,
1047	using the standard battery of CCIT methods like dye ingress, HVLD, and vacuum decay may not be
1048	suitable for this purpose; instead, they must be adapted. An adaptation may involve disassembly of the
1049	device before testing, which should verify that the disassembly method does not impact integrity or accept
1050	the decreased method sensitivity that testing the intact device would allow. A similar evaluation would be
1051	warranted if an auto-injector or pen-injector is carefully cut or separated from the naked syringe.
1052	Risk assessment of a fully assembled syringe and device and its impact on CCIT should be considered.
1053	The following factors could compromise the CCIT and may need to be evaluated as part of the design
1054	verification:
1055	•
1056	Forces applied onto the primary container closure during final assembly, storage, and use of the
1057	device that may cause breakage or defects.
1058	•
1059	Critical forces on the needle shield (rigid or flexible needle shield), cartridge septum, or cartridge cap.
1060	•
1061	Critical forces on the plunger stopper (in cartridges or prefilled syringes).
1062	Testing the actual packaged product for CCI is preferred; however, some solution properties inhibit leak
1063	detection, preventing direct testing. When the physical properties of a packaged product inhibit the use
1064	of otherwise suitable technologies, surrogate solutions may be used. For example, protein-based drug
1065	products are known for their propensity to dry in created defects; this inhibits the ability to detect those
1066	created defects by otherwise sensitive, deterministic technologies. In such cases, using a surrogate solu-
1067	tion, such as water for injection, to demonstrate the integrity of the assembled package is widely used.
1068	Stopper movement should be deliberately managed during CCIT. If the test methods exploit a pres-
1069	sure differential between the container interior and the test chamber (e.g., vacuum decay and mass
1070	extraction), stopper movement should be minimized. Stopper movement, and the resulting change in
1071	headspace volume, will reduce the pressure differential, possibly reducing the sensitivity of the method.
1072	The application of a pressure differential to the prefilled syringe during CCIT may cause the stopper to
1073	move outward and then move back to its ordinary position once the pressure differential is removed.
1074	Stopper movement might allow entry of unwanted foreign matter; in addition, microbial contamina-
1075	tion can be caused that could compromise the product. The adoption of technical solutions to prevent
1076	stopper movement during testing is recommended. For instance, in a vacuum decay system, one way
1077	to overcome this risk is to balance the outward stopper movement with a force equal in magnitude
1078	and opposite in direction to that of the stopper itself; this can be achieved by using a contrast pin in
1079	the test chamber.
1081
1082	17
1085	CCIT of auto-injectors provides challenges far beyond those presented by prefilled syringes and car-
1086	tridges, and the options described in this section must be carefully considered before being implemented.
1087	4.1.4	 Additional Considerations for Secondary Packaging
1088	A risk-based analysis should be performed to determine if any of the secondary packaging operations
1089	could impact CCI, and if CCIT should be performed to confirm that the integrity of the primary con-
1090	tainer system is maintained. If such a unit operation is identified, a CCI study should be performed on
1091	worst-case samples to demonstrate that the unit operation does not impact container integrity.
1092	With the increasing use of self-administered prefilled syringes, secondary packaging of the filled sy-
1093	ringe following completion of primary packaging takes place prior to distribution. Secondary pack-
1094	aging typically consists of (in order) plunger rod placement, finger flange placement, labeling, tray
1095	placement, and carton insertion. Depending on the dosage, additional design steps may be required.
1096	Secondary packaging of a prefilled syringe can be performed manually by a technician, by a fully auto-
1097	mated packaging line, or by a combination of manual and automated packaging.
1098	Plunger rod placement is the process by which a plunger rod is inserted into the elastomeric stopper.
1099	The most commonly used method is screwing the plunger rod into the back of the threaded stopper.
1100	The stopper serves as the primary barrier that maintains container integrity. Consequently, the process
1101	of inserting the plunger rod should be evaluated to determine if CCIT should be performed on the
1102	syringe after the plunger rod has been inserted to confirm that integrity has been maintained.
1103	Finger flange placement is the process of placing a finger flange on the syringe flange. Typically, plastic
1104	syringe flanges are clipped onto the glass flange. The main risk this operation poses to CCI is fracture
1105	of the syringe. To ensure that no broken or cracked syringes enter the supply chain, a 100% visual
1106	inspection must be performed. Given that the glass syringe is the primary container, an evaluation
1107	should be performed to determine if CCIT is required.
1108	Tray placement and carton insertion is the process by which a prefilled syringe is placed into a tray,
1109	typically a corrugated or thermoform tray, and packaged in a carton. The tray may contain one sy-
1110	ringe or multiple syringes, depending on the packaging design. The tray is then placed inside a carton
1111	for distribution. The operation of placing the syringe in the tray, should be evaluated to determine if
1112	CCIT is required on the packaged syringe.
1113	4.2
1114	Single-Use Systems — Flexible Bulk Containers
1115	The term “flexible bulk container” refers to the application of single-use flexible technologies, com-
1116	monly referred to as bioprocess containers, bioprocess bags, or single-use systems (SUS), for the manu-
1117	facturing process of bulk drug substance and bulk drug product. In general, these bags are available
1118	in “2-D” shapes, scaled from roughly 20 mL to 50 L, and in “3-D” shapes scaled from roughly 50 L
1119	to 3000 L in size (Figure 4.2-1). Historically, the use for bulk containers has been limited to less than
1120	1000 L. With their broad range of sizes, complexity of design, and polymer material characteristics,
1121	flexible bulk containers present unique challenges for establishing inherent SUS integrity. The terms
1122	“flexible bulk container” and “single-use system” are used synonymously throughout Section 4.2.
1123	4.2.1	 Design
1124	For products not terminally sterilized, the sterility of the final drug product depends on the sterility of
1125	the bulk; therefore, the integrity of the bulk container system is crucial. An integrity assessment may
1126	even be required to support a sterile claim on the bulk container for terminally sterilized products.
1127	The critical leak size of concern for flexible containers typically relates to microbial ingress, although
1128	liquid leaks can be a critical risk to some products, for example, environmental and operator safety
1130
1131	18
1134	related to toxicity. Gas permeation could also be a factor for product quality inside the SUS. Barrier
1135	properties to gas exchange are established during the development of the laminate material, and the
1136	protection offered may need to be assessed during the selection stage. For establishing the integrity of
1137	the SUS, the MALL must be established based on the use conditions. While SUS are out of the scope
1138	of USP <1207>, a lifecycle approach can be applied to CCI of these systems as well. Section 6.4 dis-
1139	cusses the lifecycle approach for bulk containers in more detail. How to evaluate the lifecycle and apply
1140	quality risk management (QRM) principles related to the SUS is described in ASTM WK64337: New
1141	Guide for Integrity Assurance and Testing of Single-Use Systems (12).
1142	4.2.2	 Challenges
1143	During routine production, transportation, and handling, various scenarios and events may arise that
1144	can affect the integrity of the SUS. Qualification and a holistic approach should be used to ensure
1145	product quality as well as ensure patient and operator safety.
1146	A good understanding of the failure mode along the product lifecycle and the result of a risk analysis
1147	may lead to implementation of nondestructive integrity testing. This testing could be performed at the
1148	supplier’s manufacturing site or at the user’s site, depending on the risks to be mitigated.
1149	One key challenge for integrity testing on bulk containers is defining the critical leak size, or MALL,
1150	that the system must satisfy. Suppliers of bulk containers own the design of the whole system and
1151	therefore should be expected to qualify the containers against such a requirement. Existing literature
1152	does not support a universal maximum defect size for flexible bulk containers to determine the MALL
1153	for any specified test method. However, a maximum defect size for common use conditions, like the
1154	transport of filled bulk containers, must be determined in order to select a corresponding test method
1155	to evaluate whether the leak is present or not. The key step to determining the MALL is to measure it
1156	during the intended use condition.
1157	4.2.3	 Test Method Considerations
1158	Microbial challenge testing is a well-known approach for identifying the MALL if prevention of mi-
1159	crobial ingress is the critical container quality attribute. Two types of microbial integrity test methods
1160	are commonly used for primary packaging: testing by immersion and testing by aerosol. Immersion
1161	testing is generally used to assess microbial integrity, more specifically, for the storage component (1).
1162	Under normal use conditions of flexible bulk containers, aerosol challenges may be more representa-
1163	tive; even though, historically, immersion testing has been considered both more stringent and more
1164	statistically reliable.
1165	Figure 4.2-1	 Mobius® 2-D Bag Assemblies from Merck Millipore and Flexsafe® 3-D Bag Assembly
1166	Image courtesy of Sartorius
1168
1169	19
1172	Recent studies performed on rigid microtubes and flexible packaging material have recently demon-
1173	strated aerosol testing for microbial ingress to be equally as stringent as the immersion method (13).
1174	Taking into consideration the representative pressure conditions occurring during typical use for bulk
1175	containers, such as large-volume storage and shipping, a microbial challenge test by aerosol can be as
1176	stringent as immersion, showing a MALL of 2 µm no matter which method is used. With aerosol test-
1177	ing, the ability to easily test a greater number of samples is an advantage in reducing the impact of the
1178	probabilistic nature of the test. One option to perform this type of testing is described in the proposed
1179	standard, ASTM Proposed Standard Test Method for Microbial Ingress Testing on Single-Use Systems (14).
1180	Regardless of the method, test conditions should be defined and reliably validated to simulate the expected,
1181	or even worst-case, conditions that enhance the risk of loss of integrity. Due to the flexible nature of these
1182	container systems, the variation of atmospheric pressure associated with elevation changes in air transport
1183	is not expected to increase the risk of integrity loss, but it should be verified that it will not impact the sys-
1184	tem. Higher occurrences for defects related to transportation processes, due to vibration or shocks, and to
1185	transient pressure increases above the normal static pressure from the bulk product should be considered.
1186	Once the MALL for maintaining the critical container quality attribute of the container is determined,
1187	with targeted detection limits that correlate to the MALL, appropriate physical test methods can be
1188	developed and implemented. Both probabilistic and deterministic physical methods are available for
1189	testing bulk containers; the industry is encouraged to evaluate deterministic methods.
1190	Ideally, the deterministic test method would have an LoD at or below the MALL. Especially for large-
1191	volume SUS and complex designs; this method is not always as sensitive as the MALL. However, it
1192	may be justified if the test method can be validated to detect process-related risks.
1193	Suppliers of SUS have successfully demonstrated that implementation of 100% release testing cor-
1194	related to the MALL is possible. Helium leak detection applied to bulk containers, which can be
1195	destructive or nondestructive depending on availability of access points, is the most sensitive technol-
1196	ogy available. Its complex nature and relatively high investment cost suggest this technology would be
1197	used more appropriately by the supplier for release testing rather than by user. Specific challenges and
1198	solutions to testing large SUS with helium are described more fully in Section 5.0.
1199	In general, an assessment should be made to determine whether a point-of-use test (at user’s site) will
1200	add risk to the integrity of the system. A point-of-use leak test could be replaced by transport valida-
1201	tion and visual control for holes or other rationales. If a point-of-use leak test is considered, there are
1202	options. For example, pressure drop technology is less complex, less expensive, easier to operate, and
1203	sensitive to detecting leaks of concern to check for final integrity directly before use. Larger defects
1204	than the MALL are more likely to occur during normal operations. Table 4.2.3 -1 compares various
1205	physical features of helium and pressure drop technologies used for SUS integrity testing.
1206	Table 4.2.3-1 Comparison of Physical SUS Integrity Testing Methods
1207	Feature
1208	Helium Technology
1209	Pressure Drop Technology
1210	Sensitivity
1211	≥ 2 µm
1212	≥ 10 µm
1213	Environmental Effects
1214	Low
1215	Medium (Temperature)
1216	Volume Impact
1217	Low to Medium
1218	Medium to High
1219	Material Impact
1220	Medium to High
1221	Low to Medium
1222	Handling
1223	Complex
1224	Simple
1225	Test Time
1226	Low to Medium
1227	Medium to High
1228	Maintenance
1229	Complex
1230	Simple
1231	Investment Cost
1232	High
1233	Low
1235
1236	20
1239	In general, no single test method can sufficiently assess all criteria throughout a product’s entire life-
1240	cycle. Four major obstacles must be identified and resolved in order to develop a reliable 100% (all
1241	units) release-testing system:
1242	•
1243	Size of leaks that occur in real life.
1244	•
1245	Maximum leak size that poses no risk to microbial ingress (MALL).
1246	•
1247	Minimum leak size that can be rapidly and reliably detected by the inspection system (LoD).
1248	•
1249	Selection and creation of model defects for qualification of the test method.
1250	To successfully validate test methods, both positive and negative controls must be included to demon-
1251	strate the ability of the test to detect defective containers containing an artificial leak.
1252	4.2.4	 Additional Considerations for Flexible Bulk Packaging Systems
1253	Flexible bulk packaging systems are increasingly being used for drug substance, drug product, and
1254	fill-finish applications in the biotech industry. Sound, scientific test methods are needed to ensure
1255	their quality throughout the product lifecycle. The current model to ensure integrity is based on a
1256	quality by design (QbD) and QRM approach that should be applied by suppliers and users. Suppli-
1257	ers must possess a strong understanding of the design and qualification of a product for its intended
1258	use. Likewise, users must ensure their handling and other processes are compatible with the design
1259	of the SUS. Both suppliers and users should consider the method and frequency of testing as part of
1260	risk mitigation.
1261	New technologies will continue to develop to meet the market needs, such as faster inspection times
1262	and greater sensitivity. Regardless of the capability of any single test method, it must always fit into
1263	an overall approach to quality and risk mitigation through each step of the supply chain. Ongoing
1264	research on MALLs and the comparison of real-world to model defects is required to enhance under-
1265	standing and increase integrity assurance for flexible bulk container systems.
1266	4.3
1267	IV Bags — Flexible Finished Pharmaceutical Containers
1268	An IV bag is a pharmaceutical product container made of flexible material, closed at the bottom and along the
1269	sides by sealing; the top of the container may be closed by fusion to IV tubing or a medication port, depending
1270	on the intended use. Because it comes in direct contact with the pharmaceutical product or formulation, IV
1271	bags are made of materials that will not alter the quality (efficacy or stability) of the product or formulation.
1272	Some of the information in this section may be relevant to considerations for bulk containers as well.
1273	4.3.1	 Design
1274	Flexible packages often undergo temporary shape changes caused by forces within the environment,
1275	such as damages incurred during distribution and storage. The magnitude of forces sufficient to cause
1276	loss of package sterility by converting a defect into a leak must be considered when trying to determine
1277	an appropriate CCIT method that can reliably detect the leak of concern.
1278	Imposed pressures capable of initiating liquid or gas flow through a defect provide the necessary con-
1279	ditions for ingress or egress to occur and, subsequently, result in a loss of sterility or quality of the
1280	product. For a specific product package system, an understanding of product’s liquid properties, such
1281	as surface tension and viscosity, is useful to determine the critical leak for that system.
1282	4.3.2	 Challenges
1283	When liquid-filled IV bags are tested for CCI, any leak from the container can pose a challenge if the
1284	product leaks and contaminates the test system (equipment and/or test chamber). The residual liquid
1285	or vapor that leaks into a test chamber from a defect in the container must be removed and the test
1286	system must be cleaned before testing can resume. This activity can affect the throughput of the test
1287	method. These challenges can also be relevant to other container closure systems.
1289
1290	21
1293	A defect in direct contact with air may be detected at a faster rate than a defect in contact with a liquid
1294	or product solution, and the location of the defect can have a significant impact. For a liquid-filled
1295	container, surface tension of the liquid or product must be overcome for the defect to turn into a de-
1296	tectable leak. The product solution of some IV bags can also dry and crystallize, potentially clogging
1297	micron-size defects and making leak detection a challenge.
1298	The magnitude of forces sufficient to cause loss of package integrity by transforming a defect into a
1299	true leak must be considered. The role of temperature, imposed pressure, vacuum, impact, and vibra-
1300	tion on compromising the integrity of an IV bag must be evaluated. Design studies should include
1301	testing of samples exposed to worst-case scenarios, for example:
1302	•
1303	Stress conditions during the sterilization process (using maximum time and temperature for moist
1304	heat sterilization).
1305	•
1306	Worst-case conditions seen during handling and storage of these containers.
1307	Ensuring that the worst-case conditions have been accounted for during leak detection test method de-
1308	velopment is a challenge. Pinholes, channel leaks, and improper sealing all present challenges for leak
1309	detection in IV bags given that each leak can have a different geometry and pathway (direction of flow
1310	through the container). No one method can detect every different type of defect. Hence, the CCIT
1311	tool kit should encompass a variety of methods that can be employed to detect defect types critical to
1312	maintaining product quality or sterility.
1313	Positive controls (or engineered defects) for IV bags can pose a challenge when considering leak detec-
1314	tion through micron-sized holes. When creating positive controls, leakage dynamics as a function of
1315	different defect types and materials of construction should be kept in mind (see Section 3.1).
1316	The escape of residual volatile gases and vapors from the outside surface of IV bags when they are
1317	exposed to vacuum conditions may affect leak test results by giving false positives during testing (e.g.,
1318	with vacuum decay or mass extraction test methods). With such methods, the use of special fixtures
1319	or the inclusion of equilibration time before the actual test time may be necessary to limit such effects
1320	and isolate the area undergoing testing.
1321	4.3.3	 Test Method Considerations
1322	The condition of the test specimens can have a significant impact on the test results; for example, the
1323	temperature of flex bag, time between sterilization and testing, humidity, and many other factors can
1324	influence test results. Moisture may be present on the surface of liquid-filled IV bags, especially after
1325	moist heat sterilization, which may make it difficult to detect leaks with certain technologies. Certain
1326	IV bags may not be suitable for leak detection methods that employ high vacuum or high pressure due
1327	to the potential for bursting or dislodging the container closure components.
1328	Different methods have been considered and attempted for IV bags. Deterministic method options
1329	are HVLD, vacuum decay, mass extraction, force decay, and laser headspace analysis (tunable laser
1330	diode spectroscopy). Probabilistic method options are dye or microbial ingress, and internal pressure.
1331	An appropriate method can be selected following the guidance in USP <1207> for probabilistic or
1332	deterministic types of methods. Instrumentation should be able to, or be modified to, hold an IV bag.
1333	Certain CCIT methods, like HVLD, detect leaks in the walls of nonporous, rigid, or flexible packag-
1334	ing containing liquid product. Hence, this method is not compatible with dry pharmaceutical drug
1335	products or product packages with liquid on the exterior of the package (e.g., liquid loads immediately
1336	removed from a sterilizer).
1337	Some films that are used in the manufacture of IV bags are readily permeable to inert gases like helium,
1338	which makes application of a helium leak test method a challenge for that specific type of CCS.
1340
1341	22
1344	Natural or real-world CCI defects are generally larger in size than engineered or manufactured defects
1345	and represent all possible CCI failure modes. Natural CCI defects may not be pristine holes but rather
1346	long, complex, irregular channels and tortuous pathways. Where applicable, test method performance
1347	may be further supplemented using these CCI defects. Although difficult to acquire, such defects may
1348	be obtained from rejected or returned samples.
1349	4.3.4	 Additional Considerations for IV Bags
1350	Drug products can interact with defects in IV bags in ways that can interfere with the leak detection
1351	capability of the specific CCIT method. The possible impact to product stability (e.g., HVLD or
1352	short-wave infrared imaging) should be considered in the application of certain CCIT methods.
1353	Inherent package integrity is typically established during product-package development and manufac-
1354	turing qualification. The permeation rate of gaseous molecules through the material of an IV bag must
1355	be defined and differentiated from a true leak through a micron-size defect that is critical to product
1356	quality. Some gaseous permeation may be acceptable; leakage is not.
1357	4.4
1358	Cryogenic Conditions
1359	Many sterile products are stored at cold (2 °C to 8 °C), freezing (-20 °C), and ultra-cold (-80 °C to
1360	-196 °C) temperatures to limit formulation degradation and extend product shelf life. Several consid-
1361	erations should be addressed regarding cryogenic storage and package integrity:
1362	•
1363	Risks to package after fill and freeze.
1364	•
1365	Risks to large-scale bags after fill and freeze.
1366	•
1367	Loss of integrity in frozen state due to material differences at low temperatures that are restored at
1368	high temperatures.
1369	•
1370	Risk to package integrity in frozen state during transport and handling.
1371	4.4.1	 Design
1372	Refrigeration storage temperatures in the 2 °C to 8 °C range are common for many products. Freezer
1373	storage at 20 °C is the next most common temperature for storage of sterile injectable products. Ultra-
1374	cold storage, beginning at 80 °C, is most commonly used for clinical trial samples where complete
1375	stability data may not yet be available (e.g., live viral vaccines); it is also the temperature of dry ice,
1376	commonly used for the shipment of product. The coldest storage temperatures are used for storing
1377	cellular materials, which use liquid nitrogen as the refrigerant at a temperature of -196 °C.
1378	Observations of overpressure have been reported in a significant number of vials after storage at -80 °C.
1379	When syringes were inserted into these vials, the plungers pushed outwards and, when the syringe was re-
1380	moved, product sprayed from needle puncture holes (5). Syringe plunger movement after being inserted
1381	into a vial, or product spraying out of a needle hole, indicates a substantial overpressure inside the vial.
1382	When vials exhibiting the overpressure phenomena were tested using laser headspace gas analysis
1383	methods, the results clearly showed changes in headspace conditions different from the specified man-
1384	ufacturing process parameters. The vials described should have, at room temperature, a headspace gas
1385	composition of air (20.9% oxygen / 79.1% nitrogen / 0.04% CO2) and a pressure of 1 atmosphere.
1386	Figures 4.4.1-1, 4.4.1-2, and 4.4.1-3 show examples of the changes in headspace gas composition
1387	and pressure after storage at -80 °C on dry ice. The measurements show excessive levels of CO2 (atmo-
1388	spheric air has < 0.4 mbar), reduced levels of oxygen (atmospheric air has 20.9% oxygen), and elevated
1389	levels of total pressure (atmospheric air is 1000 mbar). The headspace changes (overpressure, reduced
1390	oxygen, elevated CO2) have been attributed to a CCI failure while the product was stored at -80 °C.
1391	The storage of injectable products at ultra-cold temperatures creates challenges for packaging scientists
1392	and engineers. Package integrity must be maintained at the lowest temperature a package will experi-
1394
1395	23
1398	Figure 4.4.1-1
1399	Headspace Carbon Dioxide (CO2) Pressure in a Set of 20 Vials Stored on Dry Ice at -80 °C; Three Vials
1400	Show Elevated Levels of CO2
1401	Figure 4.4.1-2
1402	Headspace Oxygen Concentration in the Same Set of 20 Vials Stored on Dry Ice at -80 °C; Same Three
1403	Vials Show Reduced Levels of Oxygen
1404	Figure 4.4.1-3 Total Headspace Pressure in the Same Set of 20 Vials Stored on Dry Ice at -80 °C; Same Three Vials Show
1405	Elevated Total Pressure
1407
1408	24
1411	ence over its intended shelf life. The loss of CCI at any temperature leads to sterility and stability risks
1412	to the product and patient as well as to the clinicians administering the products.
1413	The root cause of CCI loss at cold temperatures is believed to be a result of physical changes to
1414	packaging components that occur at low temperatures. Elastomers and glass have markedly differ-
1415	ent thermal expansion coefficients, and stopper elastomers have glass transition temperatures similar
1416	to storage temperatures. The greater thermal contraction of elastomer materials, compared to glass,
1417	and the material transition below the glass transition temperature of elastomers to more plastic-like
1418	(versus rubber-like) properties, increases the possibility of a CCI failure. When CCI is compromised,
1419	nonsterile reactive gases from the surrounding environment enter the package and are trapped; once
1420	the vial warms to room temperature, the elastomer regains its elastic properties and returns to its room-
1421	temperature dimensions and fit. When high pressure, nonsterile, reactive gases (CO2 or oxygen) are
1422	trapped inside a vial, the risk to clinicians during administration, the risk to product sterility, and the
1423	risk to the product stability increase significantly.
1424	USP <1207> advocates a lifecycle approach to package integrity testing. CCI methods should be devel-
1425	oped to assess package integrity for all phases of the product lifecycle—development, manufacturing, and
1426	shelf life—including assessment of CCI for a given storage temperature. For product packages that will
1427	be stored at cryogenic temperatures, CCI should be assessed as part of the package development phase.
1428	4.4.2	 Challenges
1429	The thermal properties of parenteral packaging components, found in the common glass vial, stopper,
1430	and crimp assembly, should be given consideration.
1431	Glass vials used to package finished sterile products are commonly made of borosilicate materials.
1432	Plastic vials used to package finished sterile products are made of polymer materials, cyclic olefin
1433	copolymer and cyclic olefin polymer. Stoppers used to package finished sterile products are primarily
1434	butyl elastomers. Each of these components have coefficients of linear thermal expansion and may also
1435	have glass transition temperatures. These parameters are influenced by changes in temperature. The
1436	change in temperature of a sterile product package is significant, from room temperature of 20 °C to
1437	ultra-cold temperature of -80 °C and, possibly, to liquid nitrogen temperatures of 196 °C. The change
1438	in the length of material due to thermal expansion can affect the fit of the components.
1439	For example, the volume of a butyl elastomer stopper will decrease by 6% when the temperature drops
1440	from 20 °C to -20 °C, and decrease by 11% when the temperature drops from 20 °C to -70 °C (the glass
1441	transition temperature). Below the glass transition temperature, the thermal expansion-contraction rate of
1442	materials decreases, but a further decrease in temperature, to -196 °C, could result in a total stopper vol-
1443	ume decrease of up to 20% compared to room temperature volume. In contrast, over the same tempera-
1444	ture range (room temperature to -196 °C), borosilicate glass undergoes a volume change of less than 1%.
1445	The greater volumetric contraction of stoppers relative to vials, and the transition of stopper material
1446	from an elastic state to a glass state below the glass transition temperature greatly increase the risk of
1447	a CCI failure.
1448	If a sealed vial is integral at room temperature and then stored at -80 °C, the headspace pressure will
1449	decrease as the vial temperature decreases. Depending on the cold storage atmosphere (air in a freezer
1450	or CO2 on dry ice) the increases in CO2 or total pressure and/or the decreases in oxygen concentration
1451	can be measured.
1452	When the temperature drops from room temperature of 20 °C to 80 °C, the stopper will contract to
1453	88% of its original volume while the glass vial contracts to 99.5% of its original volume. Below the
1454	glass transition temperature, the stopper loses its elasticity and becomes rigid and more plastic-like.
1456
1457	25
1460	In addition, as the temperature drops to -80 °C, the headspace gas pressure in the vial drops to 66%
1461	of its initial room temperature value (e.g., 1 atmosphere (1000 mbar) drops to 0.66 atmospheres
1462	(660 mbar)).
1463	The physical environment in two common cryogenic storage conditions, in terms of temperature, gas
1464	pressure, and gas composition, are an air freezer (T = -80 °C, P = 1 atmosphere, gas composition is air)
1465	and a dry ice cooler (T = -80 °C, P=1 atmosphere, gas composition is CO2). The headspace pressure
1466	in a vial stored at -80 °C drops from 1 to 0.66 atmospheres. When a stopper–vial seal loses integrity
1467	at -80 °C, the pressure difference between the 1 atmosphere storage environment and the 0.66 atmo-
1468	sphere inside the vial will drive the outside gas into the vial headspace. The vial headspace pressure will
1469	equalize with the storage environment at 1 atmosphere in a time proportional to the defect size. The
1470	gas composition, when pressure equilibrium is initially reached, will be 2/3 air and 1/3 storage envi-
1471	ronment (either air or CO2). If a leaking vial remains in cold storage once the pressure equilibrium is
1472	reached, a different physical leak mechanism, diffusion, continues to cause exchange of the nonsterile
1473	storage atmosphere with the vial headspace. Over a period of time, depending on the size of the leak,
1474	the atmosphere in the vial (both pressure and gas composition) will come to equilibrium with the
1475	storage environment.
1476	When the vial–stopper–crimp package is removed from cryogenic storage and warmed to room tem-
1477	perature, the stopper will begin to expand, and the above-the-glass transition temperature will regain
1478	its elastic properties. The vial–stopper–crimp combination will reseal and trap the cold dense gas in the
1479	vial. As the temperature continues to rise in the now-resealed vial, the headspace pressure rises linearly
1480	until the package reaches thermal equilibrium with room temperature.
1481	In this vial–stopper–crimp example, if a vial is stored at -80 °C on dry ice and loses CCI below the
1482	glass transition temperature of -70 °C, the vial will fill with 0.35 atmosphere of CO2. Over a longer
1483	storage period, the oxygen in the vial will diffuse out and be replaced with CO2. If the vial is then
1484	removed from dry ice storage and warmed, the stopper will regain elasticity at the glass transition
1485	temperature and the vial will reseal. The headspace pressure will increase linearly in temperatures
1486	from 70 °C to 20 °C; the headspace pressure will increase from 1 atmosphere at -70 °C to 1.4 at-
1487	mosphere at 20 °C; and the gas composition will contain high concentrations of CO2 and reduced
1488	concentrations of oxygen.
1489	4.4.3	 Test Method Considerations
1490	Measuring changes in headspace gas composition and pressure after cryogenic storage can provide
1491	insight into whether a package has maintained CCI. A key point is that the CCI failure is temporary.
1492	As the vial warms up, the elastomer regains its elastic properties, expands, and reseals the vial. Some
1493	methods are well suited for measuring CCI failure. Laser headspace analysis is uniquely suited to
1494	study changes nondestructively in headspace gas composition and pressure to determine CCI failures.
1495	Helium leak detection and residual seal force measurement can also be used to indicate changes from
1496	cold conditions (15).
1497	When CCI is lost in a sterile pharmaceutical vial stored at cryogenic temperatures, the gas composi-
1498	tion and pressure in the vial headspace will change, and headspace analysis can measure those changes.
1499	Depending on the cold storage atmosphere (air in a freezer or CO2 on dry ice), the increases in CO2
1500	or total pressure and/or the decreases in oxygen concentration can be measured.
1501	4.4.4	 Additional Considerations for Cryogenic Conditions
1502	Several studies have been published in the PDA Journal of Science and Technology or presented at PDA
1503	meetings on the study of CCI failures of sterile product packages stored at cryogenic temperatures and
1504	other established sources (5,11,16–18). Some of these thermal properties of parenteral packaging com-
1505	ponents, found in the common glass vial, stopper, and crimp assembly, should be given consideration.
1507
1508	26
1511	5.0
1512	Innovative Methods for Existing Technologies
1513	The pharmaceutical industry is constantly searching for new package integrity testing technologies to
1514	support the sterility assurance of drug products. Two innovative CCIT methods—helium testing and
1515	optical emission spectroscopy—and two seal-integrity methods— ultrasound and x-ray detection—
1516	are described in Section 5. Though these methods may be improvements in technology, they, too,
1517	present limitations and challenges.
1518	5.1
1519	Helium Testing
1520	Helium integrity testing is a well-known, deterministic, nondestructive test method that has been
1521	used for many years in several industries to test rigid containers. The technology, which has special
1522	applications, now allows the testing of flexible polymeric container systems, such as those described
1523	in Section 4.2.
1524	5.1.1	 Application
1525	Helium testing is suitable for test units that are dry and can withstand at least 1 psi pressure differential
1526	once they are restrained by a special holder. This test method can be used to verify the integrity of fully-
1527	assembled 2-D and 3-D single-use bags (such as disposable bioreactor or mixing and storage bags)
1528	as well as complex manifold systems consisting of multiple 2-D or 3-D bags connected to a central
1529	tubing manifold (Figure 5.1.1-1). Specific components that have a natural leak rate above the deter-
1530	mined limit, e.g., aseptic connectors with porous membranes, cannot be tested and must be excluded.
1531	Permeation leak rate of nondefective assemblies should also be considered. The complex assemblies,
1532	which have more than 100 connection points (such as barb–tube, film–film, and film–fitment joints),
1533	can be tested to a defect size of a 2 µm pinhole equivalent flow-effective diameter.
1534	The method involves placing a finished biopharmaceutical single-use bag assembly into an enclosed
1535	test chamber, evacuating the chamber to create a vacuum, and then introducing a measured quantity
1536	of helium gas into the bag assembly being tested. A specialized pumping technique reduces the stress
1537	on the bag assembly by reducing the internal pressure of the bag along with the external (chamber)
1538	pressure. In addition, the test chamber can be equipped with restraining plates and porous spacers to
1539	mechanically support the assembly under test and avoid the masking effect of defects. The helium-
1540	filled bag assembly is then held for a fixed time while the surrounding vacuum is monitored for
1541	leaking helium using a sensitive mass spectrometer. An automatically preceded pressure-sensing gross
1542	leak check prevents the test chamber from being saturated with large quantities of helium, practically
1543	Figure 5.1.1-1
1544	Sample Manifold with 10 2-D Bags Attached to a Central Fluid Line with 70+ Joining Points
1546
1547	27
1550	eliminating the system down times due to helium pollution. This method has the advantage that it can
1551	be made semi-automatic, reducing the role of the operator.
1552	5.1.2	 Test Equipment and Parameters
1553	The helium test apparatus includes a vacuum test chamber, pressure sensors, a vacuum pump, and a
1554	path providing the helium to escape. The chamber can optionally be equipped with restraining plates
1555	and porous spacers constraining the bag volume. The test chamber is connected via two lines: the first
1556	line evacuates the test chamber and, in the process, carries any helium molecules in the test chamber
1557	to the detector; the second line introduces helium into the bag assembly undergoing the test.
1558	Typically, this test is performed in a vacuum chamber with low test pressures, at room temperature.
1559	The test time varies depending on the complexity and/or volume of the bag design being tested. The
1560	critical parameters impacting the test results are defect size, helium permeability of a single-use bag
1561	wall, test pressure, test temperature, bag-tubing surface area, helium injection volume, and test time
1562	(time during which helium is collected). Actual test parameters must be obtained by collecting data for
1563	defective versus nondefective bags that provide the highest difference between the two.
1564	Helium molecules escaping through the defects are sensed by mass spectrometer and are related to a
1565	leak rate through a known defect size.
1566	5.1.3	 Leak Detection Limit
1567	Helium testing can sense helium leak rates in the range of 10-8 to 10-4 atmosphere mbar L/s. The test
1568	sensitivity depends on the background helium leak rate of a nondefective bag assembly versus one with
1569	a defect. The greater the difference between the background leak rate of the nondefective bag assembly
1570	versus the defective bag assembly, the higher the confidence that a defect can be detected. Helium test-
1571	ing is capable of detecting 2 µm laser-drilled defects, as shown in Figure 5.1.3-1 (examples of helium
1572	leak rates of a nondefective bag versus a defective bag). Just as design-specific characteristics like num-
1573	bers of connections, surface area, and type of film and tubing material can highly impact the natural
1574	background leak rate of nondefective assemblies, an individual acceptance limit must be identified and
1575	proven with a statistically significant number of positive and negative controls.
1576	Figure 5.1.3-1
1577	Comparison of Helium Leak Rates of a Nondefective Bag versus a Defective Bag
1579
1580	28
1583	5.1.4	 Considerations and Challenges
1584	Instrument performance can be verified by using standard calibrated helium leaks. A helium leak rate
1585	through the actual test sample with a known defect size versus a helium leak rate through nondefective
1586	samples helps determine the smallest detectable defect for a given test unit. Helium testing provides a
1587	quantitative leak rate. The test can detect the presence of multiple defects, but not the location of a defect.
1588	The preferred test method uses test units with reasonable gas barrier properties. If the test unit is highly
1589	permeable to helium, then sensitivity drops significantly. The risk of false positives can be minimized
1590	by incorporating an in-line leak in the instrument to ensure that the sensor is in good working condi-
1591	tion during each test cycle.
1592	5.2
1593	Optical Emission Spectroscopy
1594	The emission spectrum of a chemical element or compound (atom or molecule) is the spectrum of fre-
1595	quencies of electromagnetic radiation emitted due to the atom or molecule making a transition from
1596	high energy state to a lower energy state. The energy of the emitted photon is equal to the difference
1597	between the two states. For each atom, there are many possible electron transitions, and each transition
1598	has a specific energy difference. This collection of different transitions, leading to different radiated
1599	wavelengths, makes up an emission spectrum. Each element’s emission spectrum is unique; therefore,
1600	optical emission spectroscopy (OES) can be used to identify the elements in matter of unknown com-
1601	position or to perform chemical analysis of substances.
1602	OES analysis does not require any specific tracer gas to measure total leakage on sealed containers (18).
1603	Instead, the gas mixture naturally present in the container headspace of the primary container is used
1604	to perform high-sensitivity tests over a large detection range.
1605	5.2.1	 Application
1606	The OES equipment measures the total leak rate for a specific gas from a sample under vacuum. The
1607	test method is deterministic, nondestructive, easy to use, easy to set up, and highly sensitive.
1608	OES has been developed to measure or check the CCI of a variety of sterile CCS such as pouches, vi-
1609	als, prefilled syringes, and cartridges. In the case of prefilled liquid products, water leaks coming from
1610	the surface and air leaks coming from the air headspace can potentially be measured simultaneously.
1611	The ability to analyze the molecular signature of the leaking gas helps troubleshoot the source and location
1612	of the leak (e.g., for a CO2-filled liquid package, a higher level of CO2 indicates headspace leakage). In addi-
1613	tion, the molecular signature may reduce false rejects (e.g., for dry products filled with nitrogen, an unusu-
1614	ally high level of hydrogen may suggest moisture leakage into the chamber due to chamber-seal leakage).
1615	For sterile glass products, the low outgassing rate of the glass vials and syringes allows testing of the
1616	products in batches of several syringes, potentially increasing the throughput while maintaining the
1617	high sensitivity of the test.
1618	5.2.2	 Test Equipment and Parameters
1619	The OES equipment includes a certified calibrated leak, which is used for the calibration. The leakage
1620	is measured in leak flow unit of mbaržL/s.
1621	The OES sensor is connected directly to a test chamber in which the container to be analyzed is loaded.
1622	The test chamber is evacuated and, at low pressure (< 5.10-2 mbar), the OES sensor is able to generate
1623	plasma. The excited atoms and ions in the discharge plasma generate light through numerous charac-
1624	teristic emission spectral lines generated by the elements in the gas mixture and captured by a camera.
1625	The wavelength and intensity (amplitude) of each emission line is analyzed. The emission intensity
1627
1628	29
1631	(amplitude) is dependent on the partial pressure (mol ratio) of the related element in the gas mixture,
1632	and change in intensity over time is proportional to leakage and/or outgassing (desorption of the gas
1633	from the container surface).
1634	Testing time is a direct consequence of the desired LoD in combination with the total outgassing flow,
1635	which depends on the materials under vacuum and the relative humidity in the ambient air trapped
1636	on the container.
1637	Special considerations and set-up parameters should apply to testing containers with high outgassing
1638	materials and dry products with small headspace applications.
1639	The test sequence has three major steps to check the integrity of the CCS. The operator loads one or
1640	more test samples into the test chamber and starts the test.
1641	1.	 Rough Evacuation Step. The chamber starts at barometric conditions and is evacuated down to
1642	a few mbar. At the end of this step, if the set vacuum level is not reached due to a gross leak, the
1643	test will stop and a proper test failure message will be displayed.
1644	2.	 High-Vacuum Evacuation Step. When the pressure inside the test chamber reaches the maxi-
1645	mum allowed pressure for the turbo pump (typically a few mbar), the OES sensor is in contact
1646	with the test chamber and pressure can be measured. It takes one or two seconds to reach steady
1647	measurement due to pressure fluctuations.
1648	3.	 Measurement Step. The OES sensor is measuring continuously while the pressure is continu-
1649	ously decreasing. The test duration has been defined during the calibration of the equipment in
1650	order to achieve a signal-to-noise ratio large enough to reach a good capability. Calibration is done
1651	during initial set-up of a given product and includes a negative sample and the calibrated leak with
1652	the proper gas at its inlet.
1653	5.2.3	 Leak Detection Limit
1654	The instrument measures the leak rate for any gas in a container (e.g., oxygen, nitrogen or even water
1655	vapor) escaping from a leaking sample under vacuum. Because the test is performed under high vacu-
1656	um, the driving parameter of the OES method sensitivity is the outgassing rate of the container mate-
1657	rial in contact with or exposed to high vacuum. The smaller the leak, the longer the outgassing takes
1658	for creating a measurable pressure difference, and this rate or better the amount of gas escaping from a
1659	leak determines as a consequence the LoD for a given test time. Due to the physical constraints under
1660	those high-vacuum conditions, water exists only in vapor form, which enhances the LoD towards
1661	smaller leak sizes when the leak is filled with water because an evaporating droplet of water creates
1662	significantly more gas as if it would escape from the head space of a container. In other words, in the
1663	case of a small dry leak, compared to the same small leak with liquid behind it, due to a constant water
1664	evaporation during the measurement cycle, the amount of gas escaping through the leak is far higher
1665	and the detection limit for those holes is also shifted toward much smaller hole sizes.
1666	The upper detection limit, the limit of how large a leak can be to become detected with a differential
1667	pressure method, depends on the size of the headspace volume compared to the amount of liquid in the
1668	container. This is the result of creating high-vacuum conditions in a test chamber, usually by evacuating
1669	the chamber with vacuum pumps over time. If a leak is very large relative to the container size and fill level
1670	during this evacuation cycle, all gas and water vapor could be evacuated before the test cycle can start.
1671	Under these conditions, the test will produce a false-positive detection, which means a leaking product
1672	can pass as an integral product because the container is already empty. Usually those conditions do not
1673	occur on all container and fill level variations, but it should be considered as a risk factor before choosing
1674	the method. If it can occur, assisting the quality check with a visual inspection method that can detect a
1675	malformed container before or empty container after such a leak detection is recommended.
1677
1678	30
1681	5.2.4	 Considerations and Challenges
1682	A number of factors should be considered when using OES, such as safety considerations and the
1683	design of the vacuum chamber. Local safety rules and regulations should be followed at all times, and
1684	particular attention should be paid when handling toxic drugs, especially if large leaks may be present.
1685	Design of the vacuum chamber affects both testing and packaging. Proper chamber design is criti-
1686	cal to contain liquid spills and minimize test volume. Tests are performed at high vacuum (under
1687	5 × 10-2 bar-absolute), during which large-molecule drugs may plug the leak path; consequently,
1688	this method should be qualified for the specific drug being tested. In addition, flexible packages, or
1689	packages with moving parts (e.g., prefilled syringes), must have proper vacuum chamber design to
1690	constrain expansion from causing damage to the package. Flexible packages with large outgassing,
1691	such as IV bags, should be tested based on the specific application, as outgassing depends on the
1692	package material.
1693	5.3
1694	Airborne Ultrasound
1695	Ultrasonic waves are high-frequency sound waves that exhibit behaviors characteristic of sound waves.
1696	When a boundary exists between two media with varying acoustic impedances, the ultrasonic waves
1697	are partially reflected and partially transmitted through one medium into the other. Additionally, re-
1698	fraction, absorption, and diffraction occur at various instances. Airborne ultrasound is a point-focused
1699	signal that pulsates at 500 pulses per second.
1700	5.3.1	 Application
1701	Airborne ultrasound, a seal integrity test, is a “through transmission technology” that transmits ultra-
1702	sound through a material and receives the signal on the opposite side of the material. Since, porous
1703	packaging film allows the passage of gases (such as air) while maintaining a sterile barrier, traditional
1704	vacuum decay or tracer gas leak tests cannot be used to ensure its integrity. Airborne ultrasound seal
1705	inspection allows the seals of porous packaging to be inspected online, quantitatively and nondestruc-
1706	tively (19, 20).
1707	Porous sterile barrier packaging is one of a variety of flexible package formats available. Creating a
1708	functional flexible barrier package typically requires bonding two films together to create a flexible
1709	package structure, then sealing it once it has been filled with the product. Each of the pouch seals is
1710	critical to the integrity of the pouch, and measuring the quality of those seals is a means of ensuring
1711	the integrity of the flexible packaging.
1712	Visual inspection of both porous and nonporous flexible packaging assumes that all defects are visible.
1713	The quality of a seal is dependent only on physical properties; therefore, the visual appearance of a seal
1714	area does not ensure the integrity of the seal. Heat-sealing bars can leave a seal imprint on the outside
1715	of a package, while the inner seal fails to reach bonding temperature and never seals completely or has
1716	a weak peel strength.
1717	5.3.2	 Test Equipment and Parameters
1718	The airborne ultrasound system consists of an ultrasound sensor head and a signal processing system.
1719	The sensor head is used to pulse sound at a bonded film material and measure the signal strength on
1720	the opposing side. The ultrasound signal processor gathers the ultrasound pulsing measurements and
1721	processes the measurement into quantitative summary data for evaluation.
1722	The sound is focused on an active area relative to frequency (or wavelength) of the sound. The active
1723	area determines the resolution of the focused measurement. Airborne ultrasound is primarily suited
1724	for film materials, providing an acoustic signature of bond materials or material characteristics based
1725	on thickness, density, and material uniformity (Figure 5.3.2-1).
1727
1728	31
1731	The principle of ultrasound measurement relates to double-paned, soundproof windows. A single-
1732	pane window allows sound to propagate through the single pane and be measured on the opposing
1733	side. A double-pane window absorbs and reflects most of the sound waves, preventing the majority
1734	of sound from reaching the opposing side. Relating this principle to airborne ultrasound, the sound
1735	waves will propagate through a well-bonded seal (a single pane, Figure 5.3.2-2). The signal transmit-
1736	ted through a bonded seal is measured and used to determine seal quality. A weak seal, seal defect,
1737	or point of nonbonding will prevent the ultrasound from propagating through the seal. For multiple
1738	layers (no seal), the signal through the seal is blocked completely (like the double-paned window).
1739	The ultrasound signal is a point-focused measurement. Test data comprises signal intensity associated
1740	with a position on the material or seal area and the decibel-level signal strength. The strength of sig-
1741	nal value provides the measurement of seal quality, and that measurement is paired with the position
1742	within the material or seal area.
1743	Seal defects can create additional transitions of plastic-to-air or plastic-to-foreign contaminant, causing
1744	multiple reflections and refractions. Trapped air or sufficiently large solid contamination (≥1 mm) could
1745	also cause the signal to attenuate or decrease in strength. Alternatively, the presence of cuts or holes in
1746	the seal would result in a peak in the signal strength. The ultrasonic signal can provide an acoustic sig-
1747	nature of bonded materials or material characteristics based on density and material uniformity.
1748	Figure 5.3.2-1
1749	Airborne Ultrasound Through Transmission
1750	Figure 5.3.2-2
1751	Propagation of Ultrasound Through Material Being Tested
1752	Image courtesy of PTI
1753	Image courtesy of PTI
1755
1756	32
1759	The measurement can be presented in a line graph format (Figure 5.3.2-3), or a composite scan can
1760	pair line scans to create an optoacoustic image (Figure 5.3.2-4). The optoacoustic image is a data ma-
1761	trix of ultrasonic signal strength data paired with X-Y coordinates. The data is presented in the form
1762	of a bitmap file, making the image quantitative in its base measurement. Both methods of presenting
1763	data provide quantitative and visually qualitative assessments of materials and seal quality. Quantita-
1764	tive measurement results characterize different properties of seals and seal materials.
1765	The ultrasonic measurement can be performed in a variety of ways. In order to provide such measure-
1766	ments, the seal must pass through the inspection head. As the seal passes through, moving at a rate that
1767	allows the pulses to overlap slightly, the ultrasonic sensor emits chirps at a specified rate. The most effi-
1768	cient way to perform seal inspections is to scan seals directly after they are made on the production line.
1769	While an optoacoustic image can be used to evaluate seal quality, the linear scan inspection mode is
1770	the most appropriate for discrete defect detection. When a linear scan is performed on a package seal,
1771	the system gathers the signal strength data of all the pulses applied to the seal area. The leak detection
1772	is based on processing a series of high-frequency data points and compiling the population of data into
1773	summary statistics for each scan.
1774	Once a scan is complete, the data points are recorded, and the summary statistics are produced for the
1775	scan. The summary statistics consist of the average signal, maximum signal, minimum signal, standard
1776	deviation of the signal, and length of the scan.
1777	A low signal value or minimum value usually indicates the presence of a defect such as contamination,
1778	inclusions, delamination, voids, or no seal. It may also indicate the test was taken beyond the seal. A
1779	very high signal or maximum value indicates the presence of a cut or gap in the seal, or that the test
1780	was taken too close to the edge of the sample.
1781	Figure 5.3.2-3
1782	Ultrasound Single Linear Scan Graph of Channel Defect within a Pouch Seal
1783	Figure 5.3.2-4
1784	Ultrasound Composite Scan/Optoacoustic Image of Channel Defect within a Pouch Seal
1786
1787	33
1790	The ultrasound system uses the summary data to provide the discrete pass or fail test result. The result-
1791	ing statistical summary data from each scan are then evaluated against acceptance limits for each sum-
1792	mary statistic. If any of the statistical summary data points fall outside the acceptance limits, the test
1793	result is a “fail.” If all the summary statistics fall within the limits set, the ultrasound scan is a “pass.”
1794	5.3.3	 Leak Detection Limit
1795	Defect detection using airborne ultrasound is based on the quantitative assessments of a scanned seal.
1796	As described in Section 5.3.2, the defect is detected by breaching a set-point limit for a summary
1797	statistic; defects can also be visually apparent in graphical form. The ability of the airborne ultrasound
1798	to detect a defect is based on a variety of factors. Defects that can be detected are typically cold seals,
1799	channel defects, wrinkles, areas of nonbonding, poor seals, material variations, seal variations, cuts, or
1800	holes. The ability to detect these defects is primarily dependent on the physics of ultrasound and the
1801	material properties.
1802	5.3.4	 Considerations and Challenges
1803	Two additional factors that need to be evaluated before an application can be considered are the pack-
1804	age contents and the seal geometry. With package contents, many seal defects occur due to product
1805	inclusion in the seal area. Liquids can propagate an ultrasonic signal effectively from one material to
1806	another, which means the sound would transfer through a defect if liquid were present in the defect.
1807	The presence of liquids in the seal can produce test results similar to that of a good seal.
1808	Seal geometry can also affect seal inspection. The ultrasonic signal is a focused beam of sound, and
1809	approximately 90% of the sound remains within the target focal point. Some sound energy resides
1810	outside the focal point. If a seal is located on the edge of the material and a scan is performed on the
1811	edge of the material, sound will travel around the edge and will be measured on the receiving side. The
1812	ultrasonic sensor must be within 2 mm to 3 mm inside the pouch to produce a useful ultrasonic signal
1813	response. As the sensor nears the edge of a seal, the ultrasonic signal is impacted by sound reflecting
1814	within the seal, as well as sound passing around a seal edge to reach the receiver. These two factors limit
1815	the ability of an ultrasound to scan near the edge of a seal.
1816	5.4
1817	X-Ray Detection
1818	X-ray detection may not be considered a leak test, as it neither quantitatively nor qualitatively evalu-
1819	ates leak rates or leakage; however, X-ray technologies support CCI evaluations in a variety of ways.
1820	Technological breakthroughs in manufacturing of less costly and more sensitive large detector arrays,
1821	as well as the increased acceptability of products exposed to X-ray radiation, have resulted in an in-
1822	creased potential for its use.
1823	X-radiation (composed of X-rays) is a form of electromagnetic radiation that has a wavelength in the
1824	range of 0.01 nm to 10 nm, corresponding to frequencies in the range of 30 PHz to 30 EHz (3×1016
1825	Hz to 3×1019 Hz) and energies in the range of 100 eV to 100 keV. X-rays are shorter in wavelength
1826	than UV rays and longer than gamma rays. X-rays can be generated by an X-ray tube, a vacuum tube
1827	that uses a high voltage to accelerate the electrons released by a hot cathode to a high velocity. The high
1828	velocity electrons collide with a metal target, the anode, creating the X-rays.
1829	5.4.1	 Application
1830	X-ray is applied to package systems to evaluate physical attributes of the test system that may not be
1831	visible to the naked eye or even to some visual inspection systems. For this reason, X-ray detection,
1832	in its current state, is best used as a supporting technology rather than a leak test, as a supplemental
1833	means of characterizing a package system with respect to CCI. Physical attributes may include defects
1834	conducive to leakage, such as poor stopper fit or cracks in a glass vial or syringe, but not necessarily the
1835	propensity for gas or liquid to leak, or flow, through such defects.
1837
1838	34
1841	5.4.2	 Test Equipment and Parameters
1842	For pharmaceutical CCI applications, an X-ray image can be produced in a number of ways. The first
1843	is a line scan technique (Figure 5.4.2-1), where the object to be inspected is slowly moved through a
1844	plane of X-ray radiation and the picture is created in a linear X-ray-sensitive diode array. This technique
1845	is called fan or line-beam X-ray scanning. The advantage is high resolution, although from a very low
1846	speed (because the picture needs to be composed line by line), and the scan speed defines the resolution.
1847	A variation of this scanning technique known as X-ray tomography, or CT (computerized tomogra-
1848	phy) scan, employs the use of multiple X-ray scans at different angles to reconstruct a 3-D volume
1849	rendering of the external and, importantly, internal geometries of the sample. This is more commonly
1850	performed through the use of a cone-beam X-ray scanner. Cone-beam scanning is similar in nature
1851	to line-beam X-ray scanning but differs in that the sample is placed on a rotating stage from which a
1852	cone of X-rays is emitted. CT scans have the advantage of high resolution and complete 3-D render-
1853	ing, enabling the operator to evaluate a single package from an array of angles, increasing the analytical
1854	value of a single scan. However, a single scan may span minutes, hours, or even days depending on
1855	instrument capability and resolution (scan speed).
1856	Another technique for X-ray analysis is the area X-ray camera, which works much like a simple photog-
1857	raphy camera. Here, the object will be penetrated by the radiation, attenuated by the object, and the
1858	result captured as a gray-scale image on a large X-ray-sensitive diode array (See Figure 5.4.2-2). This
1859	scanning process produces 2-D as well as 3-D pictures, but 3-D is widely used in material research.
1860	Figure 5.4.2-2
1861	Principle of the Area Scan Imaging Technique
1862	Figure 5.4.2-1 Principle of the Line Scan Imaging Technique
1863	Image courtesy of WILCO
1865
1866	35
1869	The area imaging technique is fast and reliable because the pictures are taken during a complete stand-
1870	still of sample and beam. With this technology, a picture can be produced and evaluated within 100 ms
1871	or faster compared to scanning technologies.
1872	In addition to the detector and technique, the X-ray source itself affects crucial result properties. These
1873	properties are defined by the application field. In short, there are two types of X-ray tubes. The first
1874	is the closed-tube design, which produces radiation with a focus between 800 µm and 1500 µm. The
1875	most useful application field, as it pertains to CCI evaluation, is referred to as the microfocus tube
1876	design, which has a focus between 1 µm and 5 µm. In general, the focus defines the spatial resolution
1877	of an imaging system or the smallest object, which can be made visible in a resulting picture.
1878	5.4.3	 Leak Detection
1879	X-ray technology can detect cracks in glass containers like syringes, vials, and cartridges if the spatial
1880	resolution of the separation of the glass edges is adequate. If this resolution is sufficient, Xray can de-
1881	tect glass defects under the vial crimp due to its ability to easily penetrate aluminum. This ability also
1882	provides options to inspect assembled devices or syringes inside blisters or other secondary packs. For
1883	this reason, X-ray detection may be a valuable addition to an automated process or may be used as an
1884	offline tool to evaluate the physical characteristics behind a known leaking sample.
1885	Figures 5.4.3-1, 5.4.3-2, 5.4.3-3, 5.4.3-4 show defects identified by X-ray technology.
1886	Spotting the crack in Figure 5.4.3-2 strongly depends on the angle of the view. For an automated
1887	inspection, a minimum of six angles needs to be inspected. A more comprehensive CT scan may prove
1888	more valuable for nonautomated, offline sampling, which could be used during an investigation or
1889	design study.
1890	X-ray technology also has the ability to detect functional defects in pharmaceutical primary packages,
1891	especially in syringes. Many defects can be associated with prefilled syringes, ranging from imperfec-
1892	tions in glueing the needle socket to defective luer locks around the syringe socket. Other defects can
1893	be associated with bent needles within the needle shield or cut-off needle tips that can cause package
1894	Figure 5.4.3-1
1895	X-Ray Picture of a Large Crack in the Syringe Barrel Inside an Auto-Injector Device
1896	Image courtesy of WILCO
1898
1899	36
1902	Figure 5.4.3-2
1903	X-Ray Picture of a Vial with a Glass Defect at the Rim under the Crimp (left) and Automated
1904	Detection of the Defect (right)
1905	Figure 5.4.3-3
1906	X-Ray Picture of an Ampoule Neck with a Glass Cut Detection of the Defect (right)
1907	Figure 5.4.3-4
1908	X-ray Picture of Needle Socket with the Glue made Visible
1909	Image courtesy of WILCO
1910	Image courtesy of WILCO
1912
1913	37
1916	integrity issues or detrimental effects to the patient, such as pain during administration. Many such
1917	defects can be visualized using X-ray.
1918	5.4.4	 Considerations and Challenges
1919	An increasingly popular application of X-ray technology in CCI occurs in the package design and
1920	development stages. X-ray might be used to support package component selection and assembly pa-
1921	rameters, or even to evaluate the impact of storage conditions, such as frozen conditions, on sealing
1922	geometries. Low temperature storage is known to contribute to stopper shrinkage as a glass transition
1923	state (Tg) is reached; see Section 4.4. This effect may be characterized by X-ray imaging. These efforts
1924	are typically performed in tandem with a true leak test, such as helium leak detection or headspace
1925	analysis.
1926	In a 2016 study, Mathaes et al. performed a comprehensive capping optimization study, evaluating
1927	correlations between capping settings, stopper compression, residual seal force, and CCI as tested by
1928	helium leak detection. CT scans using X-rays were used to both calculate stopper compression, a criti-
1929	cal assembly parameter, and provide visualization of sealing geometries for a range of stoppers (20).
1930	Figure 5.4.4-1 compares four different elastomers and highlights the ability of CT scans to nonde-
1931	structively evaluate geometries, including “dimpled” stoppers.
1932	In a 2016 study by Nieto et al., CT scans were used to visually and geometrically explain a difference
1933	in leak test results between two stopper groups stored at frozen conditions. CT scans identified gaps
1934	between the flip-off cap and the elastomer, as well as the outer edge of the land seal in the group with
1935	fewer ideal leak results (5).
1936	Figure 5.4.4-1
1937	Comparative CT Scans of Four Different Elastomers Used to Calculate Stopper Compression and Fit;
1938	Stopper D Shows Signs of Dimpling
1940
1941	38
1944	6.0  Additional Considerations for Package Integrity Profiling
1945	A robust package integrity profile for a given product-package system considers factors experienced
1946	throughout the product’s lifecycle as required by USP <1207>. As such, a package integrity profile
1947	must consider anticipated or experienced stresses, including those resulting from transportation and
1948	distribution. Such stresses may include shock, vibration, compression, temperature, pressure, and gen-
1949	eral package storage environment.
1950	6.1
1951	Transportation and Distribution
1952	A package integrity profile is unique to each product-package system, a concept that also applies to
1953	storage and distribution considerations. The types of stresses experienced in these lifecycle phases vary
1954	widely with dosage form, pack-out configuration, product requirements, and distribution chain. Ad-
1955	ditionally, the impact of any single stress factor, such as a temperature excursion, can vary with respect
1956	to product. An excursion critical to one product may be insubstantial to the quality of another.
1957	Given the potential impact to product quality and sterility, appropriate challenges and assessments
1958	should be made to ensure that product quality is not affected during the transportation and distribu-
1959	tion circuit. The types of challenge conditions and subsequent assessments performed, however, reflect
1960	the properly assessed risks for the system in question.
1961	As the intent of this report is to focus on package integrity, only those distribution challenges impact-
1962	ing integrity are discussed here. Transportation and distribution challenges are not limited solely to
1963	integrity of the package, however. A fully integral package containing a proteinaceous product may
1964	experience vibration and shock that does not lead to integrity failure but, for example, may cause ag-
1965	gregation of protein. Thus, in addition to post-challenge CCIT, other assessments may be necessary to
1966	evaluate the impact of distribution on overall product quality.
1967	6.1.1	 Physical Stressors
1968	Perhaps the most obvious challenges experienced during distribution are physical stresses such as
1969	shock, vibration, and compression. Often, these types of events result in gross leakage, for instance, a
1970	vial shattering. This type of gross defect is easily detected and generally prevents final use of the prod-
1971	uct. The formation of cracks, checks, chips, and other small defects, however, may result in leakage
1972	that negatively impacts product quality but is not readily detectable by the end user. Thus, these types
1973	of defects present a more latent and use-specific risk. Furthermore, such types of defects may result in
1974	more serious integrity concerns further along in the distribution chain, as a check may develop into a
1975	crack, or a crack may widen and permit liquid loss or microbial ingress.
1976	Consequently, to evaluate and reduce risk associated with a shipment, not only the primary package,
1977	but the secondary and tertiary packaging should be considered. Numerous standards are available
1978	from such organizations as ASTM and the International Safe Transit Association (ISTA) to reliably
1979	and reproducibly subject package systems to physical stresses that replicate a variety of distribution
1980	chains, including via truck, rail, air, sea, or others.
1981	The effects of temperature on packaging and distribution is also discussed in Section 4.4 on Cryogenic
1982	Conditions.
1983	6.1.2	 Pressure
1984	In cases where a low-pressure environment could present challenges to the package and product it
1985	contains, evaluation of the pressure differentials in a distribution chain could be critical. This is par-
1986	ticularly relevant in cases of air shipment, where product may be stored in cargo areas with partial to
1987	nonexistent pressurization that, if left unevaluated, may result in unintended consequences. The abil-
1988	ity of a sealed flexible container to resist creep or burst during air shipment is an example of risk that
1989	should be characterized.
1991
1992	39
1995	Another example, one discussed with increasing frequency as the prevalence of prefilled syringes and
1996	prefilled syringe-based devices expands, is the concept of plunger movement. Although the degree to
1997	which plunger movement occurs is impacted by fill level, headspace volume, general package design,
1998	and pressure differentials experienced, how a low-pressure environment may impact product sterility
1999	and quality in these types of systems must also be characterized. As a plunger moves backward, the
2000	seal, and possibly the product, may move into an unsterile area of the container. In extreme cases, the
2001	plunger may completely exit the barrel.
2002	6.1.3	 Testing Approaches
2003	Numerous documents from internationally recognized organizations (e.g., ASTM, ISTA, ICH, ISO)
2004	are available for reference and provide reproducible ways of evaluating some of these stressors, including
2005	physical shock events, thermal cycling, and pressure cycling. However, the simulated distribution chain
2006	should reflect the anticipated stressors. Standards are meant to employ reproducible simulations but
2007	may not account for the variations and intricacies of specific distribution networks, such as iterative air
2008	shipments or a combination of different modes of transport. As with the application of many test meth-
2009	ods and techniques, a proper assessment of the risks should inform decisions on evaluating such risks.
2010	6.2
2011	100% Online Testing
2012	A holistic approach to controlling CCI should be taken to ensure package integrity at the time of manu-
2013	facture as well as over the shelf life of the product (17). This holistic approach includes consideration of:
2014	•
2015	CCIT method (in-line, near-line, off-line)
2016	•
2017	Quality of primary package components
2018	•
2019	Primary package design
2020	•
2021	Manufacturing process qualification
2022	•
2023	Product manufacturing process
2024	•
2025	Change control process
2026	•
2027	Shelf-life assessment
2028	The CCIT method is a critical part of the control strategy, and an in-line test can make the overall ap-
2029	proach more robust. However, the in-line test should not be the sole point of control.
2030	In-line testing is defined as 100% testing of all filled and sealed primary packages for CCI during the
2031	production process, after the final sealing operation.
2032	Currently, some regulatory requirements state that all container types fused and filled on the filling line
2033	(e.g., ampules, blow-fill-seal containers) must be 100% inspected (19). For other products, no current
2034	regulatory requirement exists for 100% in-line testing. The decision to conduct 100% in-line testing
2035	for other products should be based on risk assessment, as part of a holistic approach. A package that is
2036	accepted at the in-line test station is not guaranteed to maintain its CCI during the shelf life and use of
2037	the product. Conversely, a package that is rejected by the in-line test station is guaranteed not to meet
2038	the product’s CCI requirements. Therefore, the in-line test station acts as a filter for rejected packages,
2039	reducing the risk of CCI failures due to random process failure modes.
2040	Consistent failure modes that are due to equipment malfunctioning or setup can be detected by other
2041	means, such as off-line quality control testing. A particular advantage of in-line CCIT compared to
2042	off-line quality control testing is the elimination (and cost savings) of handling suspect lots of products
2043	due to sample rejection at the off-line test station.
2044	For high-speed lines, current technologies cannot test for the small-sized defects that off-line test
2045	methods can. However, since most process failure modes result in medium to large defects in the pack-
2046	age, widening the reject limit for in-line testing is a reasonable and low-risk decision. For each product,
2048
2049	40
2052	its process failure modes are examined to ensure that the in-line test station LoD does indeed present
2053	a low risk for that specific product based on its components, parameters, and requirements.
2054	While it can add value in some situations, technology is not currently available to enable 100% in-line
2055	testing for all CCS and product types. Where feasible, regulations and quality risk management prin-
2056	ciples identified in ICH Quality Guideline Q9: Quality Risk Management should be used to determine
2057	if 100% in-line testing should be implemented (3).
2058	Integrating 100% in-line testing into the manufacturing process requires a strong commitment. The in-
2059	line test station requires capital investment and the operational cost of the equipment, which adds to the
2060	cost of the product. Multiple test stations may be required on each filling line to overcome differences be-
2061	tween line speeds and test station throughput. Furthermore, the equipment requires the manufacturer to
2062	provide skilled resources to qualify, operate, and support this type of equipment, which is inherently much
2063	more complicated than an off-line quality control test station using the same measurement technology.
2064	No one test method fits all products. In-line test methods must be nondestructive for the specific
2065	product to be tested.
2066	6.3
2067	Building a Quality by Design Approach into the Container Closure
2068	Integrity Testing Program
2069	Pharmaceutical QbD is a systematic approach to development that begins with predefined objectives
2070	and emphasizes product and process understanding and control based on sound science and risk man-
2071	agement. A QbD concept can be built into a CCIT program, including such elements as:
2072	•
2073	Quality target product profile that identifies the critical quality attributes (CQAs) of the product-
2074	package system
2075	•
2076	Package design and understanding, including identification of critical material attributes that can
2077	affect package integrity
2078	•
2079	Process design and understanding, including identification of CPPs, linking the material attri-
2080	butes and process parameters to the CQAs
2081	•
2082	Control strategy that includes specifications for the product-package configuration with respect
2083	to CCI as well as controls during each step of the manufacturing process that will help meet those
2084	specifications
2085	•
2086	Regular quality checks on process capability and continual improvement initiatives
2087	One of the ways users can build QbD into a CCIT program is to employ a risk-based approach. A
2088	risk-based CCIT program is built on science-based decisions; it offers an ongoing database of product
2089	lifecycle CCIT results (also called a package integrity profile) and a risk management tool for package
2090	integrity assurance throughout the lifecycle of the product. The program should demonstrate CCI as
2091	a function of ongoing, operative variations that takes into consideration:
2092	•
2093	Design and material of the package
2094	•
2095	Package assembly
2096	•
2097	Processing conditions
2098	•
2099	Storage, distribution, and stability conditions
2100	Following are some key aspects that can be used to build a risk-based CCIT program by considering
2101	QbD principles:
2102	•
2103	CCI over the entire lifecycle of product: The CCIT tool kit needs to demonstrate CCI over
2104	the entire lifecycle of the product. More than one test may be employed during a given prod-
2105	uct’s lifecycle based on the critical parameters to be controlled at that stage in the lifecycle of
2106	the product-package system. Section 6.4 discusses the lifecycle approach related to bulk flexible
2107	containers.
2109
2110	41
2113	•
2114	Choice of deterministic versus probabilistic methods: Deterministic methods are those
2115	where the leakage event is based on phenomena that follow a predictable chain of events. Such
2116	methods require less preparation, are performed with instruments, and offer quantitative out-
2117	comes. Probabilistic methods offer qualitative outcomes that are subject to the probability of a
2118	series of events to occur but may still provide valuable information when properly applied. For
2119	example, some probabilistic methods may provide information on the location of a defect in
2120	a flexible pharmaceutical container. Some probabilistic methods may prove more advantageous
2121	than deterministic methods with respect to enhanced sensitivity. For example, internal-pressure
2122	testing has in some cases demonstrated sensitivity down to a smaller micron size when compared
2123	to the sensitivity established with a deterministic method.
2124	•
2125	Choice of off-line versus in-line, on-line or at-line test methods: Implementation of a
2126	chosen CCIT method may vary in its nature depending on the stage in the product lifecycle and
2127	the CQAs pertaining to package integrity required at that specific time point.
2128	—	 Off-line methods: Measurement does not involve samples removed directly from the manu-
2129	facturing line. Test methods are typically not high speed, are not integrated into the manufac-
2130	turing line, and are usually implemented in a laboratory setting.
2131	—	 In-line methods: Measurement where the sample is not removed from the process stream
2132	and methods are not destructive to the sample (see Section 6.2).
2133	—	 On-line methods: Measurement where the sample is diverted from the manufacturing pro-
2134	cess and may be returned to the process stream; these test methods are not destructive to the
2135	sample (see Section 6.2).
2136	—	 At-line methods: Measurement where the sample is removed, isolated from the process
2137	stream, and analyzed.
2138	In-line and on-line test methods are typically needed when 100% testing is required during man-
2139	ufacturing. At-line and off-line tests are better suited for testing based on a scientifically valid
2140	sampling plan, stability study, and development environments. The selected method(s) must be
2141	suitable for the intended use and scope of the specific CCIT. In-line and on-line methods can po-
2142	tentially provide greater assurance that all packages have integrity and can yield instant feedback
2143	in the event of package misassembly.
2144	•
2145	Sampling: Scientifically valid sampling plans should be based on risk assessment in association
2146	with appropriate statistical criteria. This could lead to various scenarios, including one where
2147	the occurrence of leaks is sufficient to require 100% testing due to a complex or highly variable
2148	manufacturing process. In cases where the process is under statistical control, sampling plans may
2149	be based on standards adhered to within the local quality management system.
2150	Factors to consider for sampling plans include the complexity of the product-package design and
2151	related manufacturing process, available test methods required to ensure product quality, and
2152	prior experience with similar configurations.
2153	•
2154	Regardless of the nature of the test method (deterministic or probabilistic), the number of samples
2155	can provide sufficient confidence through risk assessment.
2156	•
2157	Defining the MALL: CCI is established when a package meets its maximum allowable leak limit.
2158	Since product quality requirements define the MALL, the choice of test method may be based on
2159	the stage of the product lifecycle (initial development, routine manufacturing, shelf life, and stabil-
2160	ity assessments) and should depend on the critical parameters to be controlled at the specific stage.
2161	•
2162	Designing a CCIT tool kit: The CCIT tool kit should encompass different test methods that
2163	can be employed to detect defect types critical to product quality and sterility. Ideally, the tool kit
2165
2166	42
2169	would provide the user with not only details about the test method, its application, and leak detec-
2170	tion capability, but also with testing efficiency, including testing speed (time taken to detect leaks
2171	of critical value) and throughput (rest times for sample equilibration and measurement of control
2172	groups). This information will help the user determine which CCIT can be implemented at each
2173	stage of the product lifecycle based on the desired CQAs to be achieved.
2174	•
2175	Ensuring continuous improvement: In the event of a change to the package design, material,
2176	or manufacturing processing conditions (including sterilization conditions), the risk-based strat-
2177	egy should be designed to trigger a review of the CCIT tool kit to ensure it includes test methods
2178	that can detect defects critical to product sterility and quality.
2179	6.3.1	 Risk Assessment
2180	A risk-based approach using the quality tools mentioned in ICH Q9 can be a very effective way to as-
2181	sess sterile package integrity and testing applications. Following the lifecycle phases, relevant package
2182	integrity parameters are considered to determine product-package quality intent and how to evaluate
2183	the critical parameters that effectively impact the integrity of the CCS.
2184	A lifecycle assessment process provides ample time and opportunity to develop improved learning, bet-
2185	ter understanding, and ongoing generation of compelling data to support the risk of package integrity
2186	failure. This QbD approach consists of learning, evaluation, and control strategy determination. The
2187	impact or risk of an integrity failure is relevant to both patient and product. The complexity of a pack-
2188	age integrity risk assessment is derived from the numerous inputs to the manufacturing and packaging
2189	processes and the multiple ways of evaluating the outcomes of these processes.
2190	A first step in risk assessment (e.g., using the Hazard Analysis Critical Control Points (HACCP) qual-
2191	ity tool) is to identify each incremental process step and the appropriate materials relevant to that step.
2192	Next, a verification of the potential risk of failure (i.e., a leak) at the process step is made and a list
2193	drawn up of causal factors that might lead to each failure type. Another list is developed that indicates
2194	what controls may exist that could mitigate the risks. Subsequently, the risk tool can be used to deter-
2195	mine what types of testing (monitoring) are valuable, how frequently testing should be performed, and
2196	where or what types of samples should be taken for evaluation.
2197	Similar to Six Sigma thinking (define-measure-analyze-improve-control), the risk assessment process is
2198	an ongoing methodology for quality improvement.
2199	6.4
2200	Bulk Container Lifecycle Approach
2201	Bulk containers go through two distinct phases of lifecycle: First, the development phase that en-
2202	compasses material selection, design, and qualification and, second, the product phase, from manu-
2203	facturing steps through supply chain to point of use. QbD and QRM principles can be applied
2204	throughout both phases, during which specific risks are identified and evaluated using appropriate
2205	methods. The responsibilities and capabilities of identifying and mitigating such risks can be di-
2206	vided between the development and manufacturing centers by the supplier as well as the user before,
2207	during, or after use.
2208	Increasingly, according to the criticality of their application, users are asking suppliers to conduct test-
2209	ing, or choose to do it themselves to mitigate the risk of leakage or contamination. The materials used
2210	for these applications are engineered polymers that must be specified and controlled appropriately up
2211	the supply chain to ensure consistency of product quality. Therefore, prior to implementing specific
2212	testing, a consistent product robustness must be established using QbD principles and a QRM ap-
2213	proach that will result in an appropriate validation and process control strategy. Figure 6.4-1 illustrates
2214	an initial framework to manage the current options.
2216
2217	43
2220	Figure 6.4-1	 Single-Use System’s Lifecycle at Manufacturing Site by User are Items Similar to those in Table 6.4-1
2221	Figure 6.4-2	Single-Use System’s Lifecycle at User’s Site
2222	Table 6.4-1	 Considerations for Single-Use System’s Lifecycle at User’s Site
2223	Area to Manage Product Quality
2224	Considerations
2225	Risk assessment
2226	Evaluate the quality risk from the supply chain as well as the risks associated
2227	with their processes that can affect integrity; develop a control strategy,
2228	which may involve use of a physical leak test method
2229	Incoming goods inspection
2230	Identify seal quality and integrity attributes to be evaluated upon receipt
2231	Assembly storage
2232	Ensure that products are stored in a manner that prevents damage
2233	Assembly unpacking and
2234	installation
2235	Ensure that assemblies are transported through the plant in a manner that
2236	does not induce damage; support the product appropriately (large surface),
2237	eliminating use of sharp tools and short-term storage racks with sharp edges
2238	Visual inspection
2239	Check visually for marks, damages, and abnormalities on the SUS
2240	Pre-use leak testing
2241	Verify integrity after transportation and handling directly before use;
2242	supplement release testing at supplier
2243	Use
2244	Use the SUS within its specifications
2245	Post-use leak testing
2246	Verify integrity of the SUS after use to support the sterility claim on the
2247	final product
2248	Operator training
2249	Ensure that operators understand in which modes assemblies may be
2250	damaged by handling and deployment, how to inspect an assembly prior
2251	to use, and how to run a leak test
2252	Supplier feedback
2253	Inform supplier of integrity failures so supplier can understand and correct
2254	issues
2256
2257	44
2260	For the flexible container manufacturer, test methods may differ between the phases of the lifecycle. At
2261	the supplier site, specific test methods are used during the design phase to establish the capability for
2262	integrity assurance. The right materials in a laminate structure are selected and the welds and seals are
2263	designed for the intended use. Other tests are applied during the manufacturing phase, such as those
2264	used for in-process controls.
2265	6.5
2266	Educational Simulation about Limits of Detection and Method Selection
2267	In this textual illustration of the key role leak testing can play in the lifecycle of a parenteral product,
2268	fictional firm PharmaCo-A is working to bring a new parenteral product to market. During devel-
2269	opment, the inherent integrity of the primary package met the MALL for the intended product.
2270	However, during scale-up, poor quality package components and line equipment issues resulted in
2271	defective packages. Part of the action plan to ensure the absence of such rejects includes incorporating
2272	leak testing equipment into routine manufacturing to monitor for and, if necessary, cull out defective
2273	product-packages. This methodology is also intended to support quality assurance studies. Details
2274	reveal how four leak-test technologies were screened, optimized, and validated and how the LoD was
2275	determined.
2276	This illustration is purely fictional, and the content is provided for educational purposes only. There
2277	is no requirement to follow this approach in content, specificity, or scale. Any similarity to an actual
2278	product, package, or leak test method is unintended and coincidental.
2279	•
2280	Package development. PharmaCo-A was trying to bring a new parenteral product to market.
2281	The CCS chosen was based on a variety of package selection criteria. The inherent package integ-
2282	rity required that the system meet the MALL set for the intended product. To check this, empty
2283	package units were assembled and processed on mock-production equipment and the leak tested
2284	using a highly sensitive quantitative test method. Findings showed that, when properly assembled,
2285	the gaseous leakage rates of the packages met the MALL, ensuring proper product containment
2286	without risk of product contamination. These studies provided valuable information on optimum
2287	component design, component processing, and package assembly parameters that PharmaCo-A
2288	used during the next phase of package processing and assembly validation.
2289	•
2290	Package processing and assembly validation. Later in the course of manufacturing scale-up, the
2291	potential for cracked containers, torn closures, and misassembled container closures was noted. Failure
2292	mode analysis implied such defects were linked to insufficient process control, outdated production
2293	equipment, and a lapse in component quality. PharmaCo-A put in place an action plan that addressed
2294	each of these issues to minimize the risk of creating defects during routine manufacturing. In addition,
2295	the company decided to identify and implement a nondestructive leak test method for monitoring batch
2296	quality and for culling out problematic packaged product units when necessary. PharmaCo-A planned
2297	to analyze the resultant data for trends as part of their ongoing, package-integrity profile database.
2298	•
2299	Leak test method selection. One requirement for the selected leak test method is the need for
2300	compatibility with testing product-filled package units in routine manufacturing. PharmaCo-A
2301	also chose to employ a nondestructive test method so the actual tested product could be marketed
2302	or used for other testing purposes. The test must accurately screen out defective packages, such as
2303	those observed during scale-up. Other test method requirements related to test speed, equipment
2304	footprint, and more may be evaluated. PharmaCo-A intended to employ this same method for
2305	verifying the package integrity of samples retained for quality assurance stability studies, if possible.
2306	•
2307	Leak test method qualification. PharmaCo-A identified four leak-test technology candidates.
2308	Four instruments were leased and installed at their process research and development site. Each
2309	instrument was qualified for use using appropriate calibration equipment and tools.
2311
2312	45
2315	•
2316	Leak test method feasibility. Feasibility studies were performed to investigate each method’s
2317	potential for detecting the various defects observed during scale-up. This work was done using a
2318	population set of nondefective units (negative controls) plus defective units (positive controls).
2319	Positive controls included rejects culled from manufacturing scale-up studies, supplemented with
2320	artificially simulated rejects (type defects). A small number of packages made defective by laser-
2321	drilling through the package wall also were included. The outcome of these screening studies
2322	proved all four technologies had the potential to identify packages having larger defects.
2323	•
2324	Leak test method optimization and validation. PharmaCo-A proceeded to optimize test
2325	method parameters for each of the four technology candidates. Test package units for this phase
2326	included negative control packages, a small set of type defects, along with a much larger pool of
2327	laser-drilled defective packages. The larger defect subset included defects of various sizes placed in
2328	various package locations.
2329	The goal of optimization was to achieve maximum defect detection sensitivity, while minimiz-
2330	ing the risk of falsely rejecting good units. Method optimization studies also investigated each
2331	method’s performance for possible variability in leak test equipment setup and operating pa-
2332	rameters, package dimensions and materials, and testing environment (e.g., humidity). Thus,
2333	each leak test method was evaluated for specificity (ability to detect leaking packages despite po-
2334	tential interfering factors) and robustness (ability to detect defects despite shifts in test param-
2335	eters, test equipment operation, test environment, and test units). The detection range (largest
2336	leak sizes and types detectable) was also evaluated. All four methods performed satisfactorily
2337	and comparably.
2338	•
2339	Leak test method detection limit and accuracy. PharmaCo-A performed a study to es-
2340	tablish and compare the detection limit and accuracy of the four potential leak test methods.
2341	PharmaCo-A used a population of negative control product-filled packages that had no known
2342	leaks of concern and a population of positive control product-packages. Unlike earlier stud-
2343	ies that employed more qualitatively defined type defects, all positive control defects for these
2344	studies were laser-drilled and sized by gas flow-rate methodology. Defect sizes ranged from the
2345	smallest leaks that could be reliably created (2 µ in nominal diameter) to larger-sized leaks (20 µ
2346	in diameter). PharmaCo-A chose laser-drilled defects because they most closely represented the
2347	smallest defects likely to occur, they could be consistently manufactured, and their size could be
2348	independently certified.
2349	Each test method was evaluated over the course of three days by two or more operators. Only one
2350	instrument was used for this initial study (additional work was planned to check for intermediate pre-
2351	cision using multiple instruments once the final technology was chosen). New positive control subset
2352	populations were used for each test day and each test method to lessen the risk of defect-size change
2353	caused by repeated testing and handling. All methods were considered nondestructive to the pack-
2354	age; therefore, the same negative control population set was tested throughout. Positive and negative
2355	controls were tested in random order in a blinded fashion. Each operator was instructed to perform a
2356	leak test using a known good package (a “master”) following any failing (leaking) result. Testing was
2357	allowed to continue if the master test result passed (no leakage detected), thus confirming satisfactory
2358	instrument performance.
2359	PharmaCo-A predefined the test method detection limit as that smallest defect size (defined as the
2360	average size in each positive control-size subset) in which 95% or more of the defect size-subset was de-
2361	tected as leaking on all test days. All defects larger than the detection limit must fail (leakage detected).
2362	Method accuracy was confirmed if all negative controls pass (no leaks detected).
2363	Detection limit and accuracy validation study data for the four test methods are provided in Table 6.5-1.
2365
2366	46
2369	The tabulated data results are discussed below.
2370	•
2371	Test Method A. All positive controls in the 6 µm subset were detected at least 95% of the time
2372	on all three test days. All larger defect units were detected on all test days. Therefore, a test method
2373	detection limit of 6 µm was confirmed.
2374	Method A failed to accurately identify all negative controls on all test days; however, a small
2375	chance of falsely rejecting good packages was observed. Thus, the predefined test method accep-
2376	tance criterion for method accuracy was not met.
2377	•
2378	Test Method B. The smallest defect subset in which 95% or more of the positive control units
2379	were detected on all three test days was 20 µm. Study acceptance criteria also required confirmation
2380	of the method’s ability to screen all defects larger than the apparent detection limit; however, no
2381	larger defect size dataset was included.
2382	All negative controls passed on all test days, thus confirming method accuracy in differentiat-
2383	ing between no-defect packages and packages having defects 20 µm in nominal diameter. The
2384	method’s accuracy in screening defects larger than the detection limit was unconfirmed.
2385	•
2386	Test Method C. The smallest defect size subset in which 95% or more of the positive control
2387	units were detected on all three test days was 10 µm. All negative controls passed.
2388	PharmaCo-A’s detection limit acceptance criteria also required the detection of all positive con-
2389	trols with defects larger than the detection limit. In this case, the method detected only 92.5% of
2390	defects larger than 10 µm on Day 2 (three packages failed to be detected); therefore, the detection
2391	limit could not be confirmed.
2392	•
2393	Test Method D. All negative controls passed. However, the method was unable to reliably detect
2394	95% or more of the defects in any positive control subset on all three test days. Therefore, no de-
2395	tection limit could be established, and method accuracy remained unproven.
2396	Table 6.5-1	 Leak Test Method Detection Limit and Accuracy Determination Example*
2397	Nominal Leak Path
2398	Diameter
2399	(n = units tested per
2400	test, per day)
2401	Test Packages Rejected as Leaking (%)
2402	Test Method A
2403	Test Method B
2404	Test Method C
2405	Test Method D
2406	Day 1
2407	Day 2
2408	Day 3
2409	Day 1
2410	Day 2
2411	Day 3
2412	Day 1
2413	Day 2
2414	Day 3
2415	Day 1
2416	Day 2
2417	Day 3
2418	0 µm
2419	 (n = 300)
2420	0.3
2421	0
2422	0.7
2423	0
2424	0
2425	0
2426	0
2427	0
2428	0
2429	0
2430	0
2431	0
2432	3 µm
2433	(n = 40)
2434	90
2435	87.5
2436	92.5
2437	5
2438	7.7
2439	5
2440	30
2441	0
2442	20
2443	0
2444	0
2445	2.5
2446	6 µm
2447	(n = 40)
2448	100
2449	100
2450	95
2451	12.5
2452	20
2453	10
2454	100
2455	2.5
2456	0
2457	2.5
2458	2.5
2459	2.5
2460	10 µm
2461	(n = 40)
2462	100
2463	100
2464	100
2465	20
2466	10
2467	30
2468	100
2469	100
2470	95
2471	50
2472	20
2473	20
2474	20 µm
2475	(n = 40)
2476	100
2477	100
2478	100
2479	100
2480	100
2481	100
2482	100
2483	92.51
2484	100
2485	80
2486	90
2487	100
2488	Leak Detection Limit (µm)
2489	6 µm
2490	Data suggest 20 µm
2491	10 µm
2492	Undefined
2493	All Larger Defects
2494	Detected
2495	(Yes/No)
2496	Yes
2497	Data absent
2498	Confirmed
2499	Undefined
2500	All Negative Controls Pass
2501	(Yes/No)
2502	No
2503	Yes
2504	Yes
2505	Yes
2506	* Data are hypothetical
2507	1 Later investigation found all 3 packages rejected to be clogged. 100% of the remaining defects were rejected.
2509
2510	47
2513	PharmaCo-A further evaluated and compared study results, as described below.
2514	•
2515	Test Method A. This method was notably best at culling out defective packages of all defect sizes;
2516	however, the observed small risk of falsely rejecting good packages was cause for concern. Two
2517	paths forward were proposed:
2518	—	 First, adjust test method parameters to reduce method sensitivity to a small degree, thereby re-
2519	ducing the false reject risk. While this would likely compromise the method’s ability to detect
2520	3 µm defects, data suggest it would have little impact on the current 6 µm detection limit.
2521	—	 Second, use the method as-is to ensure capturing as many defects as possible, knowing that
2522	some good product may be lost. Quality assurance stability samples tested in this way would
2523	also run a greater risk of false positive results, potentially triggering costly investigations and
2524	marketed-product recalls. To address this concern, quality assurance protocols were proposed
2525	to require replicate testing on each sample to confirm findings, including instrument perfor-
2526	mance verification steps should any test package fail.
2527	PharmaCo-A continued to pursue Method A and explore the options proposed.
2528	•
2529	Test Method B. Unlike Method A, Method B showed no tendency to falsely reject good prod-
2530	uct. The detection limit defect size was much larger than Method A, however, so smaller defects
2531	capable of putting product quality at risk would likely be missed. Given the availability of a more
2532	sensitive testing option, further work on Method B was placed on hold.
2533	•
2534	Test Method C. The 20 µm reject findings of Day 2 were considered suspect. A follow-up in-
2535	vestigation revealed the three defects missed were clogged; therefore, these data were discounted.
2536	This information allowed a detection limit of 10 µm to be defined, and the method’s accuracy to
2537	be confirmed. However, the wide discrepancies in leak detection observed for the smaller defect
2538	subsets among test days caused PharmaCo-A to question Method C’s overall reliability. Further
2539	work on this method was placed on hold.
2540	•
2541	Test Method D. As no detection limit could be defined, Method D was considered too insensi-
2542	tive for PharmaCo-A’s use and was therefore eliminated from further consideration.
2543	Leak test Method A was finalized and put into place to support routine manufacturing and to veri-
2544	fy package integrity of quality assurance stability study samples. PharmaCo-A obtained commercial
2545	product market approval. Ongoing Method A leak-test data, along with package component quality
2546	trends, remained part of the package integrity profile database. The information gleaned helped ensure
2547	ongoing marketed-product package integrity.
2548	7.0
2549	Conclusion
2550	Best practices in pharmaceutical packaging suggest that all activities must be evaluated for risk to the
2551	product quality attributes and, by extension, to the patient. Failure of CCI is a critical risk that can po-
2552	tentially result in serious to dire consequences. While USP <1207> defined the basic concepts of CCI
2553	and integrity testing methodologies, this technical report serves as a resource that addresses the challenges
2554	with test methods and complex packaging systems, introduces new uses of some existing technologies,
2555	and discusses additional considerations, such as use of a risk-based approach relevant to the packaging
2556	lifecycle. There is no one-size-fits-all approach for packaging integrity testing methods; however, using a
2557	risk-based approach and leveraging existing test methods as described in this technical report can assist in
2558	better understanding and potentially mitigating, if not eliminating, the risks to package integrity.
2560
2561	48
2564	8.0
2565	References
2566	1.	 Parenteral Drug Association. Technical
2567	Report No. 27: Pharmaceutical Package
2568	Integrity; PDA: Bethesda, Md., 1998;
2569	July-August 1998, Supplement. (accessed
2570	October 30, 2018).
2571	2.	 U.S. Pharmacopeial Convention. General
2572	Chapter <1207> Sterile Product Packag-
2573	ing—Integrity Evaluation. In USP 41–NF
2574	36, USP: Rockville, Md., 2018; p 7578.
2575	(accessed February 20, 2019).
2576	3.	 Quality Guideline Q9: Quality Risk Man-
2577	agement; International Conference on Har-
2578	monisation: 2006. www.ich.org (accessed
2579	October 30, 2019).
2580	4.	 U.S. Pharmacopeial Convention. General
2581	Chapter <1207.1> Package Integrity and
2582	Test Method Selection. In USP 41–NF 36,
2583	USP: Rockville, MD, 2018; p 7585. (ac-
2584	cessed October 30, 2017).
2585	5.	 Nieto, A, et al. Evaluation of Container Clo-
2586	sure System Integrity for Frozen Storage Drug
2587	Products. PDA J Pharm Sci Technol 2016, 70
2588	(2), 120-33. (accessed June 15, 2019).
2589	6.	 Yoon, Seung-Yil, et al.,, Mass Extraction
2590	Container Closure Integrity Physical Test-
2591	ing Method Development for Parenteral
2592	Container Closure Systems, PDA Journal
2593	of Pharmaceutical Science and Technology
2594	September 2012, 66 (5) 403-419 (accessed
2595	August 10, 2018).
2596	7.	 Parenteral Drug Association. Technical
2597	Report No. 73: Prefilled Syringe User Require-
2598	ments for Biotechnology Applications; PDA:
2599	Bethesda, Md., 2015. (accessed October
2600	30, 2020).
2601	8.	 U.S. Pharmacopeial Convention. Gen-
2602	eral Chapter <381> Elastomeric Closures
2603	for Injections. In USP 42-NF 37, USP:
2604	Rockville, Md., 2018. (accessed October
2605	30, 2018).
2606	9.	 International Organization for Standardiza-
2607	tion. ISO 13926-3:2012 Pen systems — Part
2608	3: Seals for pen-injectors for medical use; ISO:
2609	Geneva, 2012. (accessed May 30, 2018).
2610	10.	 International Organization for Standardiza-
2611	tion. ISO 11040-5:2012 Prefilled syringes –
2612	Part 5: Plunger stoppers for injectables; ISO:
2613	Geneva, 2012. (accessed July 20, 2019).
2614	11.	 Asselta, R. Parenteral Vial Sealing and
2615	Integrity, Presented Jan 26 2017; Genesis
2616	Packaging Technologies: 2017. (accessed
2617	November 30, 2019).
2618	12.	 ASTM International. ASTM WK64337:
2619	New Guide for Integrity Assurance and
2620	Testing of Single-Use Systems; ASTM:
2621	West Conshohocken, Pa., 2018. (accessed
2622	October 30, 2019).
2623	13.	 Aliaskarisohi, S., Hogreve M., Langlois C.,
2624	Cutting, J., Barbaroux M., Cappia J.-M.,
2625	and Menier, M.-C. Single -Use System
2626	Integrity I: Using a Microbial Ingress Test
2627	Method to Determine the Maximum
2628	Allowable Leakage Limit (MALL). PDA
2629	Journal of Pharmaceutical Science and
2630	Technology, Vol. 73(5) 459-469 September
2631	2019 (accessed October 30, 2019).
2632	14.	 ASTM International. ASTM WK64975:
2633	Proposed Standard Test Method for Micro-
2634	bial Ingress Testing on Single-Use Systems;
2635	ASTM: West Conshohocken, Pa., 2020.
2636	(accessed October 30, 2020).
2637	15.	 Roger Asselta and Derek Duncan 2015
2638	PDA Pharmaceutical Packaging Conference
2639	Session P3 - Container Closure Integrity -
2640	Case Studies and Regulatory Perspectives/
2641	Expectations https://www.pda.org/member-
2642	ship/members-only/conference-presenta-
2643	tion-archives/2015/2015-pda-pharmaceu-
2644	tical-packaging-conference (Accessed May
2645	12, 2017) (accessed March 30, 2019).
2646	16.	 Polini, E. Packaging Systems – Container
2647	Closure Integrity in Cryogenic Storage Environ-
2648	ments. Drug Development and Delivery 2016,
2649	October, 60-63. (accessed May 16, 2019).
2650	17.	 White Paper: Container Closure Integrity
2651	Control versus Integrity Testing during
2652	Routine Manufacturing. Scott Ewan, Min
2653	Jiang, Chris Stevenson et al. PDA Journal
2654	of Pharmaceutical Science and Technology
2655	2015, 69 461-465.
2656	18.	 R. F. Boyer and R. S. Spencer, J. Appl. Phys.
2657	15, 398 (1944) (Accessed June 12, 2019).
2658	19.	 EudraLex, The Rules Governing Medicinal
2659	Products in the European Union: Volume 4,
2660	EU Guidelines to Good Manufacturing Prac-
2661	tices for Medicinal Products for Human and
2662	Veterinary Use—Annex 1, Manufacture of
2663	Sterile Medicinal Products; European Com-
2664	mission: 2008. http://ec.europa.eu/health/
2665	files/eudralex/vol-4/2008_11_25_gmp-
2666	an1_en.pdf (accessed November 19, 2019).
2667	20.	 ASTM International - ASTM F3004-13
2668	Standard Test Method for Evaluation of
2669	Seal Quality and Integrity Using Airborne
2671
2672	49
2675	Ultrasound ASTM: West Conshohocken,
2676	Pa., 2013. (accessed October 15, 2019).
2677	21.	 Mathaes, R, et al. Impact of Vial Capping on
2678	Residual Seal Force and Container Closure
2679	Integrity. PDA J Pharm Sci Technol 2016, 70
2680	(1), 12-19. (accessed July 15, 2019).
2681	9.0
2682	Additional Reading
2683	1.	 Guazzo, D. Nondestructive Detection of Leaks in Packages by Vacuum Decay Method ASTM
2684	F2338, Presented at 2nd Annual PDA Global Conference on Pharmaceutical Microbiology,
2685	Bethesda, Md., Oct. 29–Nov. 2, 2007; Parenteral Drug Association.
2686	2.	 Morrical, B, et al. Leak Testing in Parenteral Packaging: Establishment of a Direct Correlation
2687	between Helium Leak Rate and Microbial Ingress for Two Different Leak Types. PDA J Pharm
2688	Sci Technol 2007, 61 (4), 226-36.
2689	3.	 Orosz, J S; Guazzo, D. Glass Vial Finish Defects: Leak Detection and Product Risk Assessment,
2690	Presented at Packaging Science Interest Group, PDA Annual Meeting, Orlando, Fla., March 16,
2691	2010.
2692	4.	 Patel, J, et al. Vacuum Decay Container Closure Integrity Leak Test Method Development and
2693	Validation for a Lyophilized Product-Package System. PDA J Pharm Sci and Tech 2011, 65 (5),
2694	486-505.
2695	5.	 Pelaez, S., et al. Comparing Physical Container Closure Integrity Test Methods and Artificial
2696	Leak Methodologies. PDA J Pharm Sci and Tech 2019, 74 (1), 7-46.
2697	6.	 U.S. Food and Drug Administration. Guidance for Industry: Container Closure System Integrity
2698	Testing In lieu of Sterility Testing as a Component of the Stability Protocol for Sterile Products. 2008.
2699	https://www.fda.gov/regulatory-information/search-fda-guidance-documents/container-and-
2700	closure-system-integrity-testing-lieu-sterility-testing-component-stability-protocol.
2701	7.	 Victor, K. Method Development for Container Closure Integrity Evaluation via Headspace Gas
2702	Ingress by Using Frequency Modulation Spectroscopy. PDA J Pharm Sci Technol 2017, Nov
2703	71(6), 429-453.
2704	8.	 Vogt, S.-R. B. (2012). Influence of X-ray Radiation as PAT Method on Model Substances Tra-
2705	madol and Nifedipine Compared to the Influence of UV-Vis Radiation. Techno Pharm 2, Nr. 3,
2706	S. 200-210.
2707	9.	 Zuleger, B, et al. Container/Closure Integrity Testing and the Identification of a Suitable Vial/
2708	Stopper Combination for Low Temperature Storage at -80 °C. PDA J Pharm Sci Technol 2012,
2709	66 (5), 453-65. (accessed October 22, 2018).
2711
2712	50
2715	Terms of Usage for PDA Electronic Publications (Technical Reports, Books, etc.)
2716	An Authorized User of this electronic publication is the purchaser.
2717	Authorized Users are permitted to do the following:
2718	• Search and view the content of the PDA Electronic Publication
2719	• Download the PDA Electronic Publication for the individual use of an Authorized User
2720	• Print the PDA Electronic Publication for the individual use of an Authorized User
2721	• Make a reasonable number of photocopies of a printed PDA Electronic Publication for the individual use of an
2722	Authorized User
2723	Authorized Users are not permitted to do the following:
2724	• Allow anyone other than an Authorized User to use or access the PDA Electronic Publication
2725	• Display or otherwise make any information from the PDA Electronic Publication available to anyone other
2726	than an Authorized User
2727	• Post the PDA Electronic Publication or portions of the PDA Electronic Publication on websites, either available
2728	on the Internet or an Intranet, or in any form of online publications without a license from PDA, Inc.
2729	• Transmit electronically, via e-mail or any other file transfer protocols, any portion of the PDA Electronic
2730	Publication
2731	• Create a searchable archive of any portion of the PDA Electronic Publication
2732	• Use robots or intelligent agents to access, search and/or systematically download any portion of the PDA
2733	Electronic Publication
2734	• Sell, re-sell, rent, lease, license, sublicense, assign or otherwise transfer the use of the PDA Electronic Publication
2735	or its content
2736	• Use or copy the PDA Electronic Publication for document delivery, fee-for-service use, or bulk reproduction or
2737	distribution of materials in any form, or any substantially similar commercial purpose
2738	• Alter, modify, repackage or adapt any portion of the PDA Electronic Publication
2739	• Make any edits or derivative works with respect to any portion of the PDA Electronic Publication including any
2740	text or graphics
2741	• Delete or remove in any form or format, including on a printed article or photocopy, any copyright information
2742	or notice contained in the PDA Electronic Publication
2743	• Combine any portion of the PDA Electronic Publication with any other material
2744	To License or purchase Reprints
2745	• Licensing: Site licenses and licenses to distribute PDA Electronic Publication can be obtained for a fee.
2746	To learn more about licensing options and rates, please contact:
2747	Janny Chua, Publications Manager, +1 (301) 656-5900,
2748	ext. 133. Written correspondence can be sent to: PDA, Inc. Attn: Janny Chua, 4350 East West Highway,
2749	Suite 150, Bethesda, MD 20814.
2750	• Reprints: Reprints of PDA Electronic Publication can be purchased for a fee.
2751	To order reprints, please contact:
2752	Janny Chua, Publications Manager, +1 (301) 656-5900, ext. 133.
2753	Written correspondence can be sent to: PDA, Inc. Attn: Janny Chua, 4350 East West Highway, Suite 150,
2754	Bethesda, MD 20814.
2756
2757	Industry Challenges and Current Technologies for Pharmaceutical Package Integrity Testing
2758	About PDA Technical Reports
2759	PDA Technical Reports are global consensus documents, prepared by member-driven Task Forces (listed on inside
2760	front cover) comprised of content experts, including scientists and engineers working in the pharmaceutical/bio-
2761	pharmaceutical industry, regulatory authorities and academia. While in development, PDA Technical Reports are
2762	subjected to a global review of PDA members and other topic-specific experts, often including regulatory officials.
2763	Comments from the global review are then considered by the authoring Task Force during the preparation of the
2764	final working draft. The level of expertise of the Task Force and those participating in the global review ensure a
2765	broad perspective reflecting best thinking and practices currently available.
2766	The final working draft is next reviewed by the PDA Advisory Board or Boards that sanctioned the project. PDA’s
2767	Advisory Boards are: Science Advisory Board, Biotechnology Advisory Board, and Regulatory Affairs and Quality
2768	Advisory Board. Following this stage of review, the PDA Board of Directors conducts the final review and deter-
2769	mines whether to publish or not publish the document as an official PDA Technical Report.
2770	While PDA goes to great lengths to ensure each Technical Report is of the highest quality, all readers are encouraged
2771	to contact PDA about any scientific, technical, or regulatory inaccuracies, discrepancies, or mistakes that might be
2772	found in any of the documents. Readers can email PDA at: TRfeedback@pda.org.
2773	PDA Officers and Directors
2774	Officers
2775	Chair: Jette Christensen, Novo Nordisk
2776	Chair-Elect: Susan Schniepp, RCA
2777	Treasurer: Melissa Seymour, Biogen, Inc.
2778	Secretary: Emma Ramnarine, Genentech/Roche
2779	Immediate Past-Chair: Rebecca Devine, Consultant
2780	President: Richard Johnson
2781	Directors
2782	Barbara M. Allen, PhD, Eli Lilly and Company
2783	Michael Blackton, Adaptimmune, LLC
2784	Bettine Boltres, PhD, West Pharmaceutical Services
2785	Tia Bush, Amgen, Inc.
2786	Javier Camposano, Celltrion
2787	Ghada Haddad, Merck & Co./Merck Sharp & Dohme
2788	Joyce Hansen, Johnson & Johnson
2789	Stephan Krause, PhD, AstraZeneca Biologics
2790	Mary Oates, Emergent Bioscience
2791	Mathias Romacker, Pfizer (ret.)
2792	Anil Sawant, PhD, Merck & Co./Merck Sharp & Dohme
2793	Osamu Shirokizawa, LifeScientia
2794	PDA Publication Production and Editing
2795	Jahanvi Miller, MBA, Assistant Director, Scientific Affairs
2796	Glenn Wright, VP, Scientific & Regulatory Affairs
2797	Walter Morris, Senior Director of Publishing and Press Relations
2798	Katja Yount, Publication Designer
2799	Marilyn Foster, Technical Editor/Writer
2800	Sanctioning Advisory Board: SAB
2801	Phil DeSantis, DeSantis Consulting Associates (Chair)
2802	Greg Bassett, Amgen (Vice Chair)
2803	Masahiro Akimoto, OTSUKA
2804	John Ayres, MD, Consultant
2805	Ed Balkovic, PhD, MicroBio Technical Support
2806	Marcia Baroni, Emergent BioSolutions Inc
2807	Rebecca Brewer, Quality Executive Partners
2808	Tom Damratoski, Bristol Myers Squibb
2809	Rhonda Ezell, Vitruvias Therapeutics
2810	Guenther Gapp, Gapp Quality GmbH
2811	Mauro Giusti, MS, Eli Lilly
2812	Marc Glogovsky, MS, Valsource, LLC
2813	Gabriele Gori, MS, GlaxoSmithKline
2814	Dennis Guilfoyle, PhD, Johnson & Johnson
2815	Ghada Haddad, PhD, Merck
2816	Kenneth Hinds, PhD, Johnson & Johnson
2817	Ken-ichi Izutsu, PhD, National Institute of Health
2818	Sciences
2819	Gitte Letting, Novo Nordisk
2820	Ivy Louis, VIENNI TRAINING & CONSULTING
2821	LLP
2822	Stefan Merkle, PhD, Janssen
2823	Mike Sadowski, Baxter
2824	Matthew Schmidt, MS, Merck
2825	Siegfried	Schmitt, PhD, Parexel International Corp.
2826	Kristin Valente, PhD, Merck
2828
2829	Bethesda Towers
2830	4350 East West Highway
2831	Suite 600
2832	Bethesda, MD 20814 USA
2833	Tel: +1 (301) 656-5900
2834	Fax: +1 (301) 986-0296
2835	E-mail: info@pda.org
2836	Web site: www.pda.org
2838