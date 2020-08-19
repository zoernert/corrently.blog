---
title: 'PV Anlage und Speicher, haben sie sich gerechnet?'
date: 2020-08-19T00:28:54.065Z
description: >-
  Heute jährt sich zum fünften male die Inbetriebnahme meiner eignen PV Anlage.
  Zeit für ein Zwischenfazit im Sekundentakt, welches mit der heutigen Technik
  kein Problem ist.
image: /img/img_20200405_192147_web.jpg
---
Im Jahre 2015 hatten über zehn verschiedene Solateure die Möglichkeit erhalten mir ein Angebot für eine PV-Anlage zu machen. Ein Speicher war angedacht, jedoch erst im Folgejahr. Eine Regel gab es: Wer mir etwas von Rentabilität erzählt, der wird den Auftrag nicht bekommen. Warum? Da keiner wissen kann, wie sich meine Verbrauchsverhalten entwickelt und auch nicht die Strompreise. 

Es hat nur ein Solateur geschafft konsequent mir zwar die Daten der Anlage transparent zu machen,  dennoch nichts von Rendite oder Ersparnis zu orakeln. [Fritz Solar aus Wiesloch-Schatthausen](https://www.fritzsolar.de/)  bekam den Zuschlag und hätte wahrscheinlich auch vollständig daneben gelegen. 

![Strombilanz meiner Anlage](/img/strombilanz.png "Strombilanz meiner Anlage")

Mit Hilfe des [Node-RED Moduls für Discovergy Zähler](https://flows.nodered.org/node/node-red-contrib-discovergy-meter) kann eine stets aktuelle Bilanz erstellt werden, welche sämtliche Informationen beinhaltet, die zur Überwachung der Rentabilität bei einem Prosumer notwendig sind:

* Kosten für den [Strombezug](https://www.corrently.de/tarifrechner.html)
* Erträge aus Überschusseinspeisung (EEG)
* Eträge aus Corrently Erzeugung (GrünstromBonus)
* Abschreibung der Kosten für die Anlage (Installation, Wartung und Versicherung)
* Kosten für den [Grünstromzähler](https://www.corrently.de/transparenz/bestellung-smartmeter/) (SmartMeter).

Im Gegensatz zur steuerlichen Abschreibung, gehe ich bei mir von einer kalkulatorischen Abschreibung über 10 Jahre aus. Dies deckt sich von der Frist mit der Garantie auf die meisten Komponenten. 

## Ein Plus von mehr als 1000 € und...

Rechnet man über die bisherigen 5 Jahre, so habe ich mit der damaligen Investition von insgesamt 25.000€ ein Plus von 200€ pro Jahr gemacht. Dies entspricht zwar einer jährlichen Verzinsung von unter einem Prozent, jedoch darf nicht vergessen werden, dass zu den Einnahmen eigentlich noch die Strombezugskosten hinzugefügt werden müssten, die ohne die Anlage angefallen wären.  Dies Bezugsgröße für diese Kosten ist der gemessene Eigenverbrauch in den 5 Jahren. Hätte dieser aus dem Netz in selber Höhe bezogen werden müssen, so hätte dieser 3000€ gekostet, was zusamen mit den 1000€ eine Rentabilität der Investition von etwa **4% pro Jahr** entspricht.

Sagen wir es so, auf dem Sparbuch hätte ich weniger bekommen. Das Eigentliche ist aber, dass etliche Entscheidungen erst durch das Vorhandensein der Anlage getroffen wurden. So werden mittlerweile zwei Autos regelmäßig geladen und ein Wäschetrockner darf auch wieder laufen.
