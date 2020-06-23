---
title: Intelligentes Schalten natürlich auch per REST
date: 2020-06-23T00:43:34.599Z
description: >-
  Das Schöne an einer REST API ist, dass diese einfach per Browser getestet und
  verwendet werden kann. In diesem Beitrag wird gezeigt, wie man die Nutzung von
  regionalem Ökostrom erhöhen kann, indem man einen Schalter per einfachem HTTP
  GET nutzt.
image: /img/intelligent_schalten_gsi_rest.jpg
---
Im [gestrigen Beitrag](https://corrently.blog/post/intelligent-f%C3%BCr-klima-und-geldbeutel-schalten-im-smarthome-mit-mqtt-und-gr%C3%BCnstromindex/) ging es darum, wie man mit dem MQTT Protokoll sehr bequem einen Schalter bauen kann, der Verbraucher auf Basis des GrünstromIndex schalten kann. Zur Vollständigkeit soll es heute um den REST Client gehen, der vollständig ohne die Nutzung einer weiteren Software genutzt werden kann.

Surft man durch das Netz mit einem Browser, dann führt dieser einen HTTP GET-Request durch, um von einem Server die gewünschten Daten (Webseite) abzurufen. Eine solche Anfrage nach Daten kann man mittels der Kommandozeile mit \`curl\` oder \`wget\` durchführen und so sehr einfach weitere Schritte durchführen.

Den GrünstromIndex gibt es unter der URL https://api.corrently.io/core/gsi  als Parameter \`zip\` fügt man eine Postzleitzahl in Deutschland hinzu und erhält so alle Daten des GrünstromIndex als sogenanntes JSON (Beispiel: <https://api.corrently.io/core/gsi?zip=69256> ). Das Problem an dieser JSON Ausgabe ist, dass man hiermit nicht direkt ein Gerät ansteuern kann. Vielmehr muss man zunächst die Vorhersage auswerten usw... usw.. - nützlich, aber kompliziert.

Einfacher geht es mit einer etwas abstrakteren Nutzung, die gleich das gewünschte Ergebnis liefert. Unter _https://rest.corrently.io/_  werden direkt Schalter für jede Postleitzahl angeboten. 

<https://rest.corrently.io/69256/bestHours/3>

Die Antwort wird an den drei grünsten Stunden im Postleitzahlenbereich 69256 den Wert "1" haben, ansonsten den Wert "0".

<https://rest.corrently.io/10117/bestHours/16/string>

Für die Postleitzahl 10117 wird hier an 16 Stunden der Wert "on" geliefert, an den restlichen 8 Stunden wird "off" geliefert.

Nach diesem Schema können für alle Postleitzahl und für alle Stunden ein GrünstromSchalter gebaut werden, der auf dem GrünstromIndex basiert.
