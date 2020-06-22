---
title: >-
  Intelligent für Klima und Geldbeutel schalten im SmartHome mit MQTT und
  GrünstromIndex
date: 2020-06-22T12:10:16.637Z
description: >-
  Wäre es nicht besser, den Strom immer dann zu verbrauchen, wenn viel Grünstrom
  aus nahegelegener Erzeugung kommt? Mit Sicherheit, denn so hat man den meisten
  Nutzen der Energiewende und schont das Klima. Das Corrently Ökosystem bietet
  die richtigen Werkzeuge, um Geräte die notwendige Intelligenz beizubringen. In
  diesem Beitrag wird die Nutzung von MQTT zur Einbindung des GrünstromIndex
  vorgestellt, ein Protokoll, welches von EnergieManagementSystem über
  SmartHome, Wärmepumpe, PV-Anlage bis zur Wallbox verbreitet ist. 
image: /img/intelligent_schalten_mit_gsi.jpg
---
## Herausforderungen

Es existieren eine Vielzahl von verschiedenen Systemen und Protokolle, die mit Energiedaten im heimischen Umfeld arbeiten. Eine Zusammenführung dieser Daten ist meist Aufgabe von einem EnergieManagementSystem (EMS) wie [OpenEMS](https://openems.io/), jedoch sind auch Produkte wie HomeManager, OpenHAB, Node-Red, Smappee, Alexa, Homematic im Prinzip ein EMS. 

Zum besseren Verständnis dieses Beitrags sollen unter EMS daher alle Systeme zusammengefasst werden, welche basierend auf Daten/Zuständen/Schalter eine Aktion ausführen können. Die meisten dieser Systeme erlauben eine Kommunikation mit anderen Geräten über das [MQTT Protokoll](https://de.wikipedia.org/wiki/MQTT) zum Nachrichtenaustausch. 

## Kommunikation via MQTT

Am Beispiel eines einfachen Schalters, der via MQTT mit einem EMS kommuniziert, welche in der Lage ist eine Lampe ein- bzw. auszuschalten soll der Nachrichtenfluss der bei der Betätigung des Schalters entsteht aufgezeigt werden:

1. Schalter wird auf Position "EIN" gestellt.
2. Nachricht wird an EMS gesendet mit dem Inhalt "Schalter EIN" (=1) 
3. EMS entscheidet, dass dies bedeutet eine Lampe soll eingeschaltet werden
4. Nachricht wird von EMS and den Schaltaktor der Lampe gesendet mit dem  Inhalt "EIN" (=1)

**Manuell** könnte man nun hergehen und den Schalter immer einschalten (=1), wenn der [GrünstromIndex](https://www.gruenstromindex.de/) einen hohen Wert hat. Sobald der Index einen geringen Wert hat, schalten wird der Schalter wieder ausgeschaltet (=0). Da es bei den Nachrichten (0 oder 1) um eine Maschinen zu Maschinen (M2M) Kommunikation handelt, kann man diesen Schritt auch **automatisieren**. 

Benötigt wird ein _Schalter,_ der die Nachricht 0 oder 1 sendet, entsprechend dem Wert des GrünstromIndex.  Einen solchen Schalter gibt es als fertigen Programmcode mit dem OpenSource Projekt [GSI4MQTT](https://www.npmjs.com/package/gsi4mqtt). 

## GSI4MQTT als Grünstromschalter

Bei MQTT unterscheidet man zwei verschiedene Arten von "Geräten". Zum einen existieren Clients, die nur Nachrichten senden und empfangen können, als auch Broker (Server), die zusätzlich Nachrichten an andere Clients weitergeben können. GSI4MQTT stellt generell einen Broker zur Verfügung, kann aber auch mit anderen Brokern sich verbinden und dorthin Nachrichten senden.

Nach der Installation gibt es entweder auf dem Rechner, auf dem GSI4MQTT ausgeführt wird einen Broker, den man abfragen kann, oder die Nachrichten werden an einen mit dem Kommandozeilenparameter \`-c\` angegebenen anderen Broker gesendet.

Die MQTT-Welt tickt in sogenannten Topics, die man abonnieren kann. Für unseren Grünstromschalter ist zum Beispiel das Topic \`/bestHours/3\` hilfreich. Mit diesem Topic werden regelmäßig Nachrichten verschickt, die den Wert "0" an 21 Stunden des Tages haben wird und den Wert "1" an 3 Stunden. 

Verbindet man diesen "automatischen" Schalter mit der Lampe, so wird die Lampe an den drei grünsten Stunden des Tages eingeschaltet sein. 

## Praktischer Nutzen für Klima und Geldbeutel

Wird eine Lampe (vereinfacht 100W) beliebig am Tag für drei Stunden eingeschaltet, so kommt diese innerhalb eines Jahres auf 109 kWh Stromverbrauch im Jahr. Diese verursachen nach BMU 3,85 kg Kohlendioxid bei einem klassischen (überregionalen) Ökostrom. Die reinen Energiekosten (Erzeugung+Transport) belaufen sich auf 6,05€.

Optimiert man die Schaltzeiten, wie hier im Beitrag beschrieben, dann werden lediglich 0,77 kg CO2 freigesetzt. Der Strom stammt aus der Region und die Energiekosten reduzieren sich auf 2,12€ im Jahr.

Eine Ersparnis, welche zum Beispiel die Correntlyaner nutzen, wie sich diese Ersparnis im Detail errechnet kann man in der [Stromkostenanalyse](https://www.corrently.de/tarifrechner.html) sich anzeigen lassen. 

## Achtung: Re-Bound Falle

Bei einem Gerät (wie hier die 100W-Lampe) macht es keinen Sinn, für eine Ersparnis von unter 4€ im Jahr einen Schaltaktor für 40€ zu kaufen. Dies ist auch dann wenig hilfreich, wenn der Schalter selbst 5 Watt an Strom verbraucht, damit er von außen auf Schaltbefehle hört.
