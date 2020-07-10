# M223: Punchclock
Dies ist eine Applikation zur Erstellung von Einträgen der Arbeitszeit. Das Programm wurde von einer Vorlage genommen und geforkt.
Ich habe sie für meine Bedürfnisse modifiziert.

Die Applikation wurde insofern modifiziert vom Original, dass zwei neue Entitäten erstellt wurden. Die Möglichkeit zur Verwaltung des Benutzeraccounts (Passwort ändern, Benutzerkonto löschen) wurde implementiert und die Möglichkeit einen Urlaubsantrag zu stellen.

Der Akteur sollte einen Mitarbeiter des fiktiven Unternehmens darstellen, welche diese Applikation anbietet.

## Loslegen
Folgende Schritte befolgen um loszulegen:

Sicherstellen, dass JDK 12 installiert und in der Umgebungsvariable path definiert ist.
Ins Verzeichnis der Applikation wechseln und über die Kommandozeile mit ./gradlew bootRun oder ./gradlew.bat bootRun starten
Unittest mit ./gradlew test oder ./gradlew.bat test ausführen.
Ein ausführbares JAR kann mit ./gradlew bootJar oder ./gradlew.bat bootJar erstellt werden.

Folgende Dienste stehen während der Ausführung im Profil `dev` zur Verfügung:
- REST-Schnittstelle der Applikation: http://localhost:8081
- Dashboard der H2 Datenbank: http://localhost:8081/h2-console

Autor: AztecCodes
