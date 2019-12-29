---
title: 'Discovergy Zähler: CO2 Fußabdruck eines Stromanschlusses'
date: 2019-12-29T12:25:46.142Z
description: >-
  Mit Hilfe von nur einer Zeile Code können Besitzer eines Discovergy Zählers
  die Kohlendioxidemission ermitteln. Genutzt wird hierfür der GrünstromIndex
  sowie das Corrently Ökosystem. 
image: /img/learn-1996845_640.jpg
---
Zunächst muss man feststellen, dass auch bei einem [Ökostromtarif](https://corrently.de/) der Strom nicht frei von Kohlendioxid ist. Ein solcher Tarif garantiert lediglich, dass bei der Erzeugung kein CO2 freigesetzt wird. Grund hierfür sind die Netzverluste, die bei weiten Transportstrecken entstehen ([Details in diesem Beitrag](https://blog.stromhaltig.de/2019/12/darum-ist-oekostrom-klimafreundlicher-aber-nicht-klimaneutral/)).

Wer einen Discovergy Zähler verbaut hat, für den ist ein vollständiges Lastprofil vorhanden, was nicht mehr und nicht weniger bedeutet, dass man genau feststellen kann, zu welcher Uhrzeit welcher Stromverbrauch vorhanden gewesen ist.  Kombiniert man den Zeitpunkt des Stromverbrauchs mit der zu diesem Zeitpunkt vorhandenen [Entfernung zur Erzeugung](https://gruenstromindex.de/transport.html), so lässt sich ein spezifischer CO2 Ausstoß berechnen (vergleiche [CO2 Demozähler](https://elements.corrently.io/co2reading.html?a=0xb844B766CE3EF91f03Aa1e3eAC3f3f414b25e942)).   Zusammengesetzt ergibt dies einen Webservice mit einer Echtzeitermittlung der freigesetzten Menge des Treibhausgases.

## CO2 Zähler selbst testen (mit eigenem oder Demoaccount)

* Source Code [auf Runkit](https://runkit.com/zoernert/discovergy-co2-counter)
* [Ausgabe des Endpunktes](https://discovergy-co2-counter-buxn9y37bhnf.runkit.sh/) (STROMDAO Demoaccount)
* Ausgabe der CO2 Emission in HTML FrontEnd: [Zähler1 (Edingen Neckarhausen)](https://elements.corrently.io/co2reading.html?a=0xb844B766CE3EF91f03Aa1e3eAC3f3f414b25e942) und [Zähler2 (Krefeld)](https://elements.corrently.io/co2reading.html?a=0x524ADC73EA2dE161E1ae586c6138D70FE916989b)

Das [verwendete Skript](https://www.npmjs.com/package/dgy-co2) steht als OpenSource zur Verfügung.
