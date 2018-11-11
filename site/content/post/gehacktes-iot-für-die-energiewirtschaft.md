---
title: 'Gehacktes: IoT für die Energiewirtschaft'
date: 2018-11-11T00:52:23.266Z
description: >-
  Basierend auf die Blockchain Technologie kann man Geräte eindeutig
  identifizieren und dennoch vollständig skalieren. Vorstellung des Corrently
  IoT API-Endpoints.
image: /img/minced-meat-1747910_640.jpg
---
API Endpunkt\
`https://app.corrently.de/api/iot`

Schreiben des Wertes _1337_ für ein neues Gerät:

`https://app.corrently.de/api/iot?value=1337`

Response

```
{result: {  value: 1337,  account: "0xF7454C82dFa3dde41c9b475a8704E931C3e0D59a",  signature:"0x637ebe2915cba3aa47ea157da1b2e51d727ab67632e281f65e4fa1fd082c4b0528a444a7a36e429b805feab920458b9a333faf63f7d7af4c1c6f3528f3892e1a1c" }}
```

Aktualisieren des Wertes auf 1338:

`https://app.corrently.de/api/iot?value=1338&account=0xF7454C82dFa3dde41c9b475a8704E931C3e0D59a&signature=0x637...`

Als Signature wird die beim initialen setzen des Wertes gelieferte Signatur angegeben sowie der Account. Der Wert muss zwingend ein Zahlenwert sein.

Der Abruf eines Wertes erfolgt allein durch Angabe des Accounts:\
`https://app.corrently.de/api/iot?account=0xF7454C82dFa3dde41c9b475a8704E931C3e0D59a`

Zur vereinfachten Aktualisierung kann der Parameter "`secret`" bei einer Aktualisierung anstelle der Signatur angegeben werden.
