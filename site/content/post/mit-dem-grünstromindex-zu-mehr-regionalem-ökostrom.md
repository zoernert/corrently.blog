---
title: Mit dem GrünstromIndex zu mehr regionalem Ökostrom
date: 2020-06-06T11:57:12.732Z
description: >-
  Der GrünstromIndex ist ein Datendienst, der anzeigt, wann es einem Ort mehr
  Strom aus Erneuerbaren Energien gibt. Der Indexwert kann von
  EnergieManagementSystemen, Speicher, SmartHome, Wallbox, Wärmepumpe oder jedem
  anderen System abgerufen werden, welches eine Information benötigt, wann es in
  den kommenden 24-36 Stunden mehr oder weniger Ökostrom gibt. Der
  GrünstromIndex gibt dem Strom, der aus der Steckdose kommt ein Gesicht. 
image: /img/gsi_regionalerstrom.png
---
Geräte oder Systeme greifen über einen kostenlos nutzbaren Webserice (RESP) auf die Vorhersage des GrünstromIndex zu. Hierzu wird an den Datenendpunkt lediglich eine Postleitzahl aus Deutschland angehängt:

```
https://api.corrently.io/core/gsi?zip=[POSTLEITZAHL]
```

Als Rückgabe gibt es ein Array mit den Indexwerten für die kommenden 24-36 Stunden, sowie etliche zusätzliche Datenfelder zur Information. Die vollständige Dokumentation der Parameter und der Rückgabewerte findet sich auf [corrently.io](https://corrently.io/libraries/resp-api) . 

## GrünstromIndex kennenlernen

Es gibt viele Wege, wie man den GrüntromIndex in Aktion erleben kann. Um sich ein Bild darüber zu verschaffen, auf Basis welcher Informationen zum Beispiel eine Wärmepumpe entscheidet, wann sie für den Tag das warme Wasser zubereiten soll, schaut man am besten auf [www.gruenstromindex.de](https://www.gruenstromindex.de/).

Nach Eingabe einer Postleitzahl erhält man eine aktuelle Vorhersage für den gewählten Ort:

![](/img/gsi_grafik.png)

Die Visualisierung ist sehr einfach:

* Grüne Zeiten suchen 
* Orangene Zeiten meiden

Folgt man mit seinem Verbrauch diesem Schema, so bezieht man mehr Strom aus regionaler (nahe gelegener) Erzeugung und verhindert Zeiten, bei denen der Strom aus weiter entfernten Orten transportiert werden muss.

Sehr vereinfacht, ergibt der GrünstromIndex eine Priorisierung für bestimmte Stunden, die durch Steuerungssysteme genutzt werden kann. 

## Aussage des GrünstromIndex verstehen

Der Indexwert ist immer eine Zahl zwischen 0 (kein regionaler Ökostrom) und 100 (voller regionaler Ökostrom). Die beiden Extrema wurden allerdings seit dem bestehen und der Berechnung des Indexwertes im Jahre 2013 noch nie erreicht. 

Berechnet wird der Wert, indem ein Algorithmus quasi in die Steckdose hineingeht und schaut, wie weit die Strecke ist, bis der Verbrauch an Strom gedeckt wird. D.h. ausgehend vom Gerät die Entfernung zur Energiequelle. 

Das Stromnetz ist ein Netz, von daher ist es immer ein Mix aus verschiedenen Quellen, die unterschiedlich stark dafür sorgen, dass der benötigte Verbrauch vollständig durch Erzeugung gedeckt wird. 

Nun ist ein Stromnutzer nicht allein auf der Welt und wird die Erzeugung einer Quelle auch nicht exklusiv erhalten. Daher muss der Algorithmus bei seinem _"Gang in die Steckdose"_ die Konkurrenz mit anderen Verbrauchern beachten. Desto weiter die Wegstrecke ist, desto mehr Konkurrenz ist vorhanden (gemeinsame Nutzung einer Erzeugungsquelle).

Als damals der Algorithmus und die Systeme hinter dem GrünstromIndex aufgebaut wurden, hatte uns besonders überrascht, wie sehr der schwankende Verbrauch und die dadurch entstehenden Veränderung der Nutzer der Erzeugungsquellen das Ergebnis beeinflusst. Von den ersten externen Nutzern kam daher auch prompt die Rückfrage: _"Wieso gibt es in der Nacht so häufig viel regionalen Grünstrom?"._ Bei unserem Bauchgefühl hatten wir komplett unterschätzt, wie stark der Verbrauch in der Nacht tatsächlich zurückgeht; dabei erzählen uns dies die [Zahlen der Netzbetreiber ](https://transparency.entsoe.eu/)  bereits sehr lange.

## Validierung mit dem Bauchgefühl

Aus technischer Sicht hat der GrünstromIndex eine Genauigkeit von über 98%. Es fällt jedoch schwer, die Qualität von Daten und eine Prognosegüte tatsächlich fassbar zu machen. 

Bei der Entwicklung hatten wir daher eine Maxime: 

> "Der Nutzer soll durch einen einfachen Blick aus dem Fenster die Werte des GrünstromIndex überprüfen können"  

Tatsächlich hat sich mit den Jahren gezeigt, dass unser Ziel erreicht wurde. Schon bei der Einführung des [Alexa-Skills](https://www.amazon.de/StromDAO-Corrently/dp/B07N2H61DP) gab es keine Rückfragen mehr. 

Vertrauen auf die Richigkeit von Daten ist wichtig, bevor man einen Webservice/Datendienst zur Automatisierung von Steuerungen nutzt. Automatisierung von Stromnutzung für mehr regionalen Ökostrom ist der Hauptnutzen, der mit dem GrünstromIndex erreicht wurde.
