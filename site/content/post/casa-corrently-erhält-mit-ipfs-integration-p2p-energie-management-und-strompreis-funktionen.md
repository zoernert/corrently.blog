---
title: >-
  Casa Corrently erhält mit IPFS Integration P2P Energie Management und
  Strompreis Funktionen
date: 2020-09-13T22:52:22.386Z
description: >-
  Viele der zukünftigen Mehrwertdienste der Energiewirtschaft benötigten einen
  direkten Datenaustausch zwischen verschiedenen Netzanschlüssen. Mittels IPFS
  kann ein verteiltes "Web" aufgebaut werden, eine ideale Basis für ein
  dezentrales Energiemanagement, welches ohne Intermediär auskommt. 
image: /img/community_strompreis_ipfs.png
---
Schon vor  mehr als zwei Jahren hatte die **STROM**DAO beim Aufbau des Fury.Networks das [Inter Planetary File System (kurz IPFS)](https://ipfs.io/) eingesetzt, um Code - damals Smart Contracts - zwischen verschiedenen Parteien auszutauschen und zu verhandeln, bevor diese in der Blockchain festgeschrieben wurden. Heute werden keine smarten Verträge ausgetauscht, sondern Zustandsinformationen innerhalb einer Community.  Genauer gesagt sind es Strompreise sowie Stromkosten der Mitglieder. 

## P2P Energie Mehrwertdienste

Die Implementierung des [IPFS Moduls für Casa Corrently](https://www.npmjs.com/package/casa-corrently-ipfs-edge) steckt noch in einer sehr frühen Phase, was es aber heute macht, ist den Anwendern eine vollständige Transparenz über ihren _"Status"_ und den eines jeden anderen Mitglieds in der Community abzurufen. 

Wichtig ist, dass die Kommunikation von Haus/Anschluss zu Haus/Anschluss stattfindet und kein zentraler Server notwendig ist, um einen (Daten-)Austausch in der Gemeinschaft zu realisieren. Zwar hat dies zur Folge, dass die Ladezeiten manchmal etwas länger sind, als man diese heute aus dem Internet kennt, jedoch kann ein jeder Mehrwertdienst, der darauf aufsetzt, sich verlasen, dass es keine Kontrollinstanz gibt, die ausfallen oder korrumpiert werden kann.

## Online Demo

Casa Corrently wird eigentlich auf einem Raspberry PI oder ähnlichem Gerät installiert. Wir haben allerdings eine Version in das Internet gestellt, sodass man sich auch ohne eigene Installation, die [Casa Corrently ansehen](https://www.stromdao.de/casa) kann.

Öffnet man Casa Corrently, so dauert es ein paar Sekunden, bis das P2P Icon sichtbar wird. Danach kann man alle Ansichten uns Auswertungen betrachten, als ob man auf seiner eigenen Casa Corrently sein würde. Der einzige Unterschied: Die Daten werden direkt zwischen den Endgeräten ausgetauscht.
