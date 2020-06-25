---
title: Heimautomatisierung ist kein EnergieManagement
date: 2020-06-25T15:42:50.402Z
description: >-
  SmartHome oder Heimautomatisierung gibt es mittlerweile in vielen Haushalten,
  was es auch gibt ist ein EnergieManagementSystem. Beide Arten von Systemen
  haben ähnliche Aufgaben und Funktionen, jedoch sollte man diese getrennt
  aufbauen und die Zuständigkeiten nicht vermischen. Von Rückmeldungen der
  Correntlyaner zum GrünstromIndex, sehen wir aber, dass die Unterschiede meist
  nicht bekannt sind. In diesem Beitrag daher eine Einordnung aus Sicht des
  Energieversorgers.
image: /img/smarthome_oder_energiemanagement.jpg
---
## SmartHome und Heimautomatisierung

Es gibt eine Vielzahl von Systemen auf dem Markt. Seit 10 Jahren verrichtet am Stammsitz der STROMDAO GmbH in Mauer das System IP-Symcon seine Dienste, vor einigen Jahren kamen mit der FritzBox eine weitere Plattform hinzu. Im Speicher gibt es eine OpenHAB Instanz auf einem Raspberry, der parallel noch ein FHEMs installiert hat. Alexa, Phillips Hue Manager und die mit dem Stromzähler Smappee mitgelieferten intelligenten Steckdosen runden das Bild ab. 

Anfänglich wurde gerade IP-Symcon dazu genutzt auch Teile des EnergieManagements zu übernehmen. So war es dem System natürlich völlig egal, ob es bei Stromüberschuss vom Solardach eine Lampe einschaltet, oder eine Waschmaschine. Ähnlich wird es in vielen Haushalten sein, denn in reiner Ermangelung eines auf EnergieManagement ausgelegtem Systems oder noch besser einer Hardware, die ein solches mitbringt, nutzte man das Werkzeug, das man hatte. 

**Sinnvolle Aufgaben einer Heimautomatisierung**

* Rolladensteuerrung
* Beleuchtung (Szenen)
* Sicherheitsfunktionen (Bewegungsmelder)
* Buttler um Geräte ein- und auszuschalten, bei denen man selbst zu faul ist



## EnergieManagement

Das erste EnergieManagementSystem welches hier verbaut wurde, ist der EATON X-Comfort HomeManager gewesen. Dieser noch sehr klobige Kasten an der Wand steuert(e) die Ventile der Fußbodenheizung entsprechend der Raumtemperatur der einzelnen Räume. Die Kommunikation hierfür ging drahtlos und direkt. Was auffällt, dass es bereits hier um die kontinuierliche Überwachung eines Datenstroms (Temperaturdaten) im Vergleich zur Uhrzeit und dann einer eventuellen Reaktion (Schaltung von Ventilen) ging.

Etliche Jahre später kam der SmartFox hinzu, ein System welches die Überschussladung an der Wallbox bei paralleler Überwachung des stationären Stromspeichers erlaubt. Der SmartFox war übrigens nie wirklich produktiv, da es eine entscheidende Intelligenz nicht (ausreichend) hatte, die ein EnergieManagement auszeichnet:

Beim EnergieManagement, was man sehr gut an OpenEMS erkennen kann, geht es um intelligentes Messen => Ableiten =>  Priorisieren => Regeln. Wobei Ableiten hierbei bedeutet, dass man das Blick auf das Ganze legt, also nicht nur Wallbox, Speicher und PV Erzeugung, sondern auch den Stromverbrauch des Haushaltes, das Wetter und für alle diese Komponenten die Prognose. Erst danach wird ein Fahrplan erstellt, auf dessen Basis dann geregelt wird. Dieser Kreislauf überblickt zwar meist einen Bereich von vielen Stunden, wird aber kontinuierlich in Echtzeit neu bewertet und an die gemessenen Werte angepasst.



## Variable Stromtarife

Produkte wie Corrently Ökostrom  sollten zunächst in das EnergieManagement integriert werden. Dort ganz gezielt in den Schritt der Priorisierung. Dies ist ein Grund, warum die STROMDAO als Gründungsmitglied bei der OpenEMS dabei ist, da für den einzelnen Haushalt hier das meiste Potenzial vorhanden ist. Sprechen Strompreis, benötigtes Warmwasser, benötigter Ladestrom und alle anderen Daten des EnergieManagements miteinander, dann spart man bares Geld (Energiekosten).

Heimautomatisierung unterstützen wir dennoch und haben auch hier etliche Schnittstellen, jedoch sind dies eher Displays und Anzeigen des GrünstromIndex. In diesen Bereich fällt auch die Alexa Schnittstelle, die man hört, wenn man sagt: _"Alexa, frage Corrently wann der Strom grün ist?"_
