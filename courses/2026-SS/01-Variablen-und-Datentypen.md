<!--
author: Melanie Baur, Sebastian Speiser, Serkan Kabak, Maja Linke, and further professors and students of HFT Stuttgart, contact: melanie.baur@hft-stuttgart.de, sebastian.speiser@hft-stuttgart.de
logo: assets/hft-logo.jpg

language: de
version: 0.1
narrator: Deutsch Female
mode: Textbook

comment: Vorlesung Programmieren 1 und 2 an der HFT Stuttgart des Bachelor Studiengangs Informatik im flexibilisierten Studienmodell

import: https://raw.githubusercontent.com/LiaScript/CodeRunner/master/README.md

link: ../styles/liascript.css
link: ../styles/style.css

-->


# Kapitel 1: Variablen und Datentypen

Schauen Sie sich folgendes Beispiel an und überlegen Sie sich für jede Zeile, was das Programm tun könnte und welche Ausgabe der Code Ihrer Meinung nach erzeugt.

```java
class Variablen {
    public static void main(String[] args) {

        byte b = 1;
        System.out.println(b);

        short s = 250;
        System.out.println(s);

        int i = 5;
        System.out.println(i);

        long l = 105464560L;
        System.out.println(l);

        float f = 1.5f;
        System.out.println(f);

        double d = 1.8;
        System.out.println(d);

        char c = 'a';
        System.out.println(c);

        char c2 = 65;
        System.out.println(c2);

        boolean bl = true;
        System.out.println(bl);
    }
}
```
@LIA.java(Variablen)

- Führen Sie nun den Code aus und überprüfen Sie Ihre Vermutung.

- Ändern Sie den Code ab und probieren Sie aus, ob das Programm noch läuft und was die Ausgabe ist.

Achtung: Wenn Sie eine rote Ausgabe erhalten, haben Sie einen fehlerhaften Code erzeugt. Können Sie den Code wieder berichtigen?

<br>
Am Ende dieser Einheit sollten Sie folgende Fragen beantworten können:

- Was ist eine **Variable**?
- Was ist ein **Datentyp**?
- Wie **deklariert** man Variablen?
- Wann sind Variablen für den nachfolgenden Code **sichtbar**?
 <br>


Gehen Sie nun auf die nächste Seite und arbeiten Sie die Erklärungen durch!


### Variablen deklarieren

Der Speicher im Computer besteht nur aus einer langen Folge von 0en und 1en. Jeweils 8 werden zu einem Byte zusammengefasst. Die Bytes werden durchnummeriert (beginnend bei 0). Die Nummer eines Bytes ist dessen Adresse.

Variablen geben einer bestimmten Speicherstelle einen Namen und einen Typen:

- Einfacher zu merken als eine Speicheradresse
- Kann gleich bleiben, auch wenn sich die Speicheradresse ändert
- Der Typ kann bestimmte Arten von Programmfehlern verhindern und bestimmt wie viele Bytes die Variable umfasst

Eine Variable ist also eine Art Gefäß im Speicher. Werte können überprüft, verändert und vor allem gespeichert werden.
Variablen haben einen bestimmten **Typ**, eine **Adresse** im Speicher, einen **Namen** und natürlich einem **Wert**. Java ist eine statisch typisierte Programmiersprache. Das bedeutet, dass jede Variable einen festen Typ hat, der bereits zur Übersetzungszeit bekannt ist (hierzu später mehr).

<br>
![Variablen](assets/variablen.png)

Bildquelle: generiert mit ChatGPT

So funktioniert die Deklaration von Variablen:

```java
int schuhgroesse;  // Das hier ist übrigens ein Kommentar
char buchstabe1, buchstabe2, buchstabe3; // Hiervon braucht man oft mehrere
double temperatur; // Kommazahl
boolean sonnigerTag; // wahr/falsch, ja/nein -> boolean
```

In Java können wir Variablen direkt bei der Deklaration mit einem Wert initialisieren, hier _Literals_ also Konstanten im Programmtext:

```java
int schuhgroesse = 42; // Datentyp Name = Wert
double temperatur = 20.2; // Ohne Einheit, diese müssen wir uns separat merken
double wunschEinkommen = 50_000; // Euro? Brutto/Netto? Im Jahr oder Monat?
boolean sonnigerTag = true;
```

Allgemein also:

```
Datentyp Variablenname = Wert;
```

In einem kleinen Programm könnte das so aussehen, was ist die Ausgabe?

```java
class Schuhgroesse{
    public static void main(String[] args) {
        int schuhgroesse = 42;
        System.out.println("Meine Schuhgröße ist: " + schuhgroesse);
   }
}
```
@LIA.java(Schuhgroesse)

- Lassen Sie nun Ihre Schuhgröße ausgeben. 
- Was müssen Sie abändern, wenn Ihre Schuhgröße 39,5 ist?

Hinweis: Man muss einer Variable nicht sofort einen Wert geben. Dies kann auch später geschehen. Die Variable erhält dann zunächst einen Standardwert - je nach Datentyp.

Hier finden Sie eine Übersicht über verschiedene **primitive Datentypen**, das sind die elementaren Datentypen. Diese müssen Sie kennen, um entscheiden zu können, welcher Datentyp für Ihren Anwendungsfall der passende ist.

<!-- data-type="None" -->

| Datentyp | Bit    | Minimum                    | Maximum                   |
| :------- | :----- | :------------------------- | :------------------------ |
| byte     | 8-Bit  | -128                       | 127                       |
| short    | 16-Bit | -32768                     | 32767                     |
| int      | 32-Bit | -2147483648                | 2147483647                |
| long     | 64-Bit | -9223372036854775808       | 9223372036854775807       |
| float    | 32-Bit | -3.4 \* (10<sup>38</sup>)  | 3.4 \* (10<sup>38</sup>)  |
| double   | 64-Bit | -1.7 \* (10<sup>308</sup>) | 1.7 \* (10<sup>308</sup>) |

Weiterhin gibt es noch die beiden Datentypen `boolean` und `char`:

<!-- data-type="None" -->

| Datentyp | Bit    | Werte               |
| :------- | :----- | :------------------ |
| boolean  | 1 Byte | true / false        |
| char     | 2 Byte | Ein Unicode-Zeichen |


Hinweis: Ein char ist intern als Zahlen codiert (z.B. A → 65) – deshalb kann mit char gerechnet werden.


**Primitive Typen** werden immer klein geschrieben. Weiterhin gibt es **Referenztypen**, welche auf Klassen basieren (z.B. String). Diese werden groß geschrieben.

Java ist eine streng typisierte Sprache, d.h. Java erlaubt es nicht, Variablen die für einen Typ deklariert sind mit Werten aus einem anderen Typ zu belegen. Beim Übersetzen des Quellcodes wird geprüft, ob alle Werte zu den geforderten Typen passen – also auch Variablenwerte und Variablentypen.
Wenn Sie mit einer IDE arbeiten, überprüft diese dies bereits beim Schreiben und meldet ggf. einen Fehler. 

> **Benennung von Variablen:**

Bei der Benennung von Variablen ist es wichtig, einige Regeln zu beachten:

- Am Anfang muss ein Buchstabe (oder `_`) stehen
- Danach können Buchstaben oder Ziffern folgen
- Erlaubt (aber nicht empfohlen) sind: `$, _, ä, ö, ü, ß, €, …` (wobei `$` oft für generierte Namen verwendet wird)
- Nicht erlaubt sind Sonderzeichen wie `!, ?, *, /, … `
- Groß- und Kleinschreibung ist relevant. Das bedeutet, dass Variablennamen wie `glueckszahl` und `gluecksZahl` unterschiedlich sind
- Variablennamen sollten zusammengeschrieben werden, also ohne Leerzeichen
- Schlüsselwörrter dürfen nicht als Variablennamen verwendet werden, da sie zum Sprachumfang von Java gehören. Sie kennen bisher public, class, int, char, byte etc. Auch true und false dürfen nicht als Variablennamen verwendet werden

- Eine häufige Konvention ist die Verwendung von „CamelCase“:

  - Variablen, Methoden und Pakete beginnen klein und jedes neue Wort beginnt groß, z.B. kleinAnfangenUndJedesWortGrossBeginnen.
  - Klassennamen beginnen groß und jedes neue Wort beginnt groß, z.B. GrossAnfangenUndJedesWortGrossBeginnen.

> **Variablennamen:**

Gute Variablennamen sind nicht zu kurz und nicht zu lang. Sie sind immer aussagekräftig (z.B. int alterInTagen), nur temporäre Variablen dürfen auch mal kürzer sein (z.B. in Schleifen, vgl. folgendes Kapitel). Der Typ der Variable sollte nicht im Namen aufgeführt werden. Der Compiler meldet zurück, ob der Name gültig ist, nicht ob dieser sinnvoll gewählt ist.

### Variablen zuweisen

Die Initialisierung hat den Variablen direkt bei der Speicherreservierung einen Wert zugewiesen. Nachdem eine Variable angelegt wurde können wir ihr einen (neuen) Wert zuweisen:

```java
class Temperatur {
    public static void main(String[] args) {
        double temperatur = 18.1;
        System.out.println("Die Temperatur ist: " + temperatur + " Grad.");
        System.out.println("Die Sonne scheint...");
        temperatur = 24.5;
        System.out.println("Nun ist die Temperatur: " + temperatur + " Grad.");
   }
}
```
@LIA.java(Temperatur)

Sie sehen im Programmcode die Zuweisungen. Links vom Gleichheitszeichen steht der Name einer bereits deklarierten Variable. Rechts vom Gleichheitszeichen steht ein Ausdruck.

Für Ausdrücke gibt es verschiedene Aufbauten:

- **Literale** - das sind konstante Werte, die direkt im Programmtext geschrieben werden, z.B. `8`, `17.4`, `'a'`, `"Hallo Welt"`
- **Variablen** - der Name einer bestehenden Variable, dieser wird bei der Auswertung des Ausdrucks mit dem aktuellen Wert der Variable ersetzt, z.B. `schuhgroesse`
- **Methodenaufrufe** - es wird Code, der unter dem Methodennamen abgespeichert ist, ausgeführt und das Ergebnis zurück geliefert, z.B. `readInt()`, manche Methoden nehmen Parameter (wiederum Ausdrücke), z.B. `System.out.println("Hallo Welt")`
- **Operationen**: hier werden eine oder mehrere (meistens zwei) Ausdrücke mit einem Operator verknüpft, z.B. `schuhgroesse + wunschEinkommen`

In Java müssen wir den Wert eines Ausdrucks einer Variable zuweisen:

```java
double komischeZahl = schuhgroesse + wunschEinkommen;
```

oder uns per Methodenaufruf ausgeben:

```java
// "Hallo " + "Programmieren " + 1 ist ein Ausdruck (ergibt einen String)
// System.out.println(...) ist der Methodenaufruf, der diesen Ausdruck ausgibt
System.out.println("Hallo " + "Programmieren " + 1);
```

Mit Operationen und Methodenaufrufen können komplexe Ausdrücke geschaffen werden, z.B.:

```java
System.out.println("In Fahrenheit: " + ((readDouble() * 9.0/5.0) + 32))
```


Ausdrücke werden von innen nach außen ausgewertet, d.h. bei verschachtelten Ausdrücken erst die Sachen in Klammern, bzw. nach Prioritäten ("Punkt vor Strich").

Bei Zuweisungen wird erst die rechte Seite berechnet und dann erst die links genannte Variable aktualisiert. Überlegen Sie, was folgender Programmcode somit ausgibt. Probieren Sie dies dann aus.

```java
class Wert {
    public static void main(String[] args) {
       int wert = 10;
       System.out.println("Der Wert ist: " + wert);
       wert = wert + 1;
       System.out.println("Der Wert ist nun: " + wert);
   }
}
```
@LIA.java(Wert)

>**Aufgabe**

Schreiben Sie ein Programm, dass Ihre Glückszahl und Ihren Notendurchschnitt Ihres letzten Zeugnisses ausgibt.

```java
class MeineZahlen{
    public static void main(String[] args) {


       System.out.println("Meine Glückszahl ist: ");    
       System.out.println("Mein Notendurchschnitt war: ");
   }
}
```
@LIA.java(MeineZahlen)

- Welchen Datentyp braucht Ihre Glückszahl und welchen Ihr Notendurchschnitt?
- Wie legen Sie Datentyp, Name und Wert fest?
- Wie geben Sie die Werte aus?


>**Quiz**

Führen Sie folgendes Quiz durch und testen Sie Ihr Wissen:

**Frage 1**

Welcher Datentyp würde am besten verwendet werden, um die Temperatur `42,2` Grad zu speichern?

[( )] Integer
[(x)] Float
[( )] String
[( )] Boolean

---

**Frage 2**

Welcher Datentyp wird verwendet, um einzelne Buchstaben zu speichern?

[(x)] Char
[( )] Integer
[( )] Float
[( )] String

---

**Frage 3**

Welcher Datentyp könnte verwendet werden, um alle Menschen auf der Welt zu nummerieren?

[( )] Char
[( )] Float
[(x)] Long
[( )] Integer

---

**Frage 4**

Welcher Datentyp wird verwendet, um einen Satz zu speichern?

[( )] Char
[( )] Integer
[( )] Float
[(x)] String

### Operatoren

Um mit Variablen etwas zu berechnen, werden Operatoren verwendet. Hier eine Übersicht über die wichtigsten Java-Operatoren:

| Operator | Beschreibung                                    |
| -------- | ----------------------------------------------- |
| +        | Addition von Zahlen oder Verkettung von Strings |
| -        | Subtraktion von Zahlen                          |
| \*       | Multiplikation von Zahlen                       |
| /        | Division von Zahlen                             |
| %        | Modulo (Rest bei der Division)                  |
| +=       | Addition und Zuweisung                          |
| -=       | Subtraktion und Zuweisung                       |
| ++       | Inkrement (Erhöhung um eins)                    |
| \-\-     | Dekrement (Verminderung um eins)                |

Von den Standardoperatoren `+`, `-`, `*` (Mal), `/` (geteilt durch) für Zahlen gibt es auch jeweils eine Version, die gleich die Zuweisung integriert.

Überlegen Sie, welchen Wert `x` im folgenden Programm hat. Fügen Sie eine Zeile im Programmcode für die Ausgabe hinzu und überprüfen Sie Ihre Überlegung.

```java
class Operatoren1 {
    public static void main(String[] args) {
        int x = 5;
        x += 5; // Gleichbedeutend mit x = x + 5
   }
}
```
@LIA.java(Operatoren1)

Was ist `y` am Ende des folgenden Programmcodes? Fügen Sie auch hier eine Zeile für die Ausgabe hinzu, um Ihre Überlegung zu überprüfen.

```java
class Operatoren2 {
    public static void main(String[] args) {
        int y = 2;
        y *= y; // Gleichbedeutend mit y = y * y;
   }
}
```
@LIA.java(Operatoren2)

Häufig zählen wir Variablen um eins nach oben oder eins nach unten, hier gibt die Kurzformen `i++` und `i--`. Sie liefern den Wert von `i` zurück und danach wird `i` inkrementiert bzw. dekrementiert. Versuchen Sie folgenden Code nachzuvollziehen:

```java
class Operatoren3 {
    public static void main(String[] args) {
        int i = 0;
        System.out.println(i++); // Gibt 0 aus und erhöht dann i auf 1
        System.out.println(i); // Gibt den neuen Wert von i (1) aus
        System.out.println(i--); // Gibt 1 aus und verringert dann i auf 0
        System.out.println(i); // Gibt den neuen Wert von i (0) aus
   }
}
```
@LIA.java(Operatoren3)

Weniger verbreitet sind die Formen `++i` und `--i`, die zuerst `i` inkrementieren bzw. dekrementieren und dann den Wert zurückliefern. Dies liefert folgendes, doch etwas überraschende Ergebnis:

```java
class Operatoren4 {
    public static void main(String[] args) {
        int i = 0;
        System.out.println(++i); // Erhöht i zuerst auf 1 und gibt dann 1 aus
        System.out.println(i); // Gibt den aktuellen Wert von i (1) aus
        System.out.println(--i); // Verringert i zuerst auf 0 und gibt dann 0 aus
        System.out.println(i); // Gibt den aktuellen Wert von i (0) aus
   }
}
```
@LIA.java(Operatoren4)

Nützlich ist der Modulo-Operator `%` - er liefert den Rest bei einer Ganzzahlendivision, z.B.:

```java
class Operatoren5 {
    public static void main(String[] args) {
        int zahl = 22;
        int divisor = 4;
        int rest = zahl % divisor;
        System.out.println(rest); // Der Wert ist 2, da 22/4 = 5 Rest 2 ist
   }
}
```
@LIA.java(Operatoren5)

Weitere Operatoren sind Vergleichsoperatoren (`==`, `!=`, `<=`, `>=`, `<`, `>`), Bit-Operatoren (`&`, `|`, `<<`, `>>`) und logische Operatoren (`&&`, `||`)

### Sichtbarkeit von Variablen

„Sichtbar“ bedeutet: Die Variable kann vom folgenden Code verwendet werden. Variablen sind erst sichtbar, nachdem sie deklariert wurden.

Neben den Variablen, die wir innerhalb einer Methode deklarieren (bisher in der main-Methode), gibt es auch noch statische Klassenvariablen. Diese sind in der gesamten Klasse sichtbar und das Programm kann hierauf zugreifen, sobald es gestartet wurde. Eine statische Klassenvariable kann von mehreren Methoden einer Klasse verwendet werden. Sie wird im Rumpf einer Klassendeklaration geschrieben (nicht im Rumpf einer Methodendeklaration).

Hier ein Beispiel:

```java
class Klassenvariable {
    public static int zahl = 10; //statische Klassenvariable

    public static void main(String[] args) {
        int neueZahl = zahl + 10; //lokale Variable, nur innerhalb der Methode sichtbar
        System.out.println(neueZahl);
   }
}
```
@LIA.java(Klassenvariable)

- `static` bedeutet für uns zunächst etwa "von Anfang an vorhanden", "der Klasse zugeordnet"
- Variablen ohne den Modifier `static` sind den Objekten zugeordnet (ab Kapitel Klassen und Objekte)
- Lokale Variablen sind nur innerhalb des Blocks sichtbar

Weiterhin gibt es noch statische Klassenkonstanten. Diese werden mit dem Schlüsselwort `final` deklariert. Hier sind Änderungen nur an einer Stelle möglich. Dies erleichtert die Lesbarkeit.

```java
// statt den Wert als Literal fest im Code anzugeben
double umfang = 2.0 * radius * 3.14159;
double flaeche = radius * radius* 3.14159;

// wird der Wert als Klassenkonstante deklariert
public static final double PI = 3.14159;
double umfang = 2.0 * radius * PI;
double flaeche = radius * radius * PI;

```

Konstanten werden groß geschrieben. Beispiel: MEINE_KONSTANTE

>**Hinweis für Fortgeschrittene: Lebensdauer von Variablen**

Klassenvariable: beginnt mit dem Laden der Klasse und endet mit dem Ende des Programms

Lokale Variable: beginnt mit der Deklaration im Block und endet mit dem Blockende (schließende })


### Konvertierung

In Java können verschiedene primitive Datentypen durch Umwandlung konvertiert werden. Dabei unterscheidet man zwei Fälle:

- **Widening** = Erweitern: 

Eine Variable mit kleinerem Wertebereich wird **automatisch** in einen Typ mit größerem Wertebereich übernommen. Dies stellt in der Regel kein Problem dar.

```java
class Widening {
    public static void main(String[] args) {
		byte kleinsterTyp = 5;
		short kleinerTyp = kleinsterTyp;
		int grosserTyp = kleinerTyp;

		System.out.println(grosserTyp);
   }
}
```
@LIA.java(Widening)

- **Narrowing** = Eingrenzen: 

Gegenteil zu Widening -> hier ist eine Umwandlung (**Casting**) erforderlich

```java
class Narrowing {
    public static void main(String[] args) {
		byte kleinsterTyp = 5;
		short kleinerTyp = kleinsterTyp;
		int grosserTyp = kleinerTyp;

		// Type Mismatch
		// kleinerTyp = grosserTyp;

		// so geht's mit Narrowing
		kleinerTyp = (short) grosserTyp;
   }
}
```
@LIA.java(Narrowing)

Was ergibt dann folgendes Beispiel?

```java
class Konvertierung {
    public static void main(String[] args) {
		short zahl = 128;
		byte kleinesByte = (byte) zahl;
		// Was kommt hier heraus?
		System.out.println(kleinesByte);
   }
}
```
@LIA.java(Konvertierung)

### Übungen

**Aufgabe 1** 

Rechnen in Java - überraschende Ergebnisse

```java
class Ergebnisse{
    public static void main(String[] args) {
        // Rechnen mit ganzen Zahlen
        System.out.println("5/3 = " + 5 / 3 + ", Rest " + 5%3);
                
        // Rechnen mit Gleitkommazahlen
        System.out.println("5.0/3 = " + 5.0 / 3);
            
        // Rechnen an den Grenzen der ganzen Zahlen
        System.out.println("1000000 * 1000000 = " + 1000000 * 1000000);
        System.out.println("2147483646 + 1 = " + (2147483646 + 1) );
        System.out.println("2147483647 + 1 = " + (2147483647 + 1) );
                
        // Ungenauigkeiten beim Rechnen mit Gleitkommazahlen
        System.out.println("0.1 * 0.1 = " + 0.1*0.1);
                
        System.out.println();
        System.out.println("Rechnen mit Zeichenketten");
        System.out.println("=========================");
                
        // "+" Operator bei Zeichenketten
        System.out.println("Hallo " + "Welt");
        System.out.println("pi (gerundet): " + 3.1415927);
        System.out.println("1 + 2 = " + (1+2));
   }
}
```
@LIA.java(Ergebnisse)

Überlegen Sie zunächst, welches Ergebnis Sie erwarten. Notieren Sie sich Ihre Vermutung. 

Führen Sie erst dann das Programm aus. Stimmen Ihre Vermutungen? Welche Abweichungen gab es und warum kommen diese zustande?

**Aufgabe 2** 

Wahrheitswerte erlauben die sog. boolesche Algebra (nach George Boole, engl. Mathematiker). Sie kennt die zwei Werte true und false und die Operatoren und (&), oder (|) und nicht (!). Wie mit Zahlen, können Sie auch mit diesen Elementen „rechnen“, so liefert z.B. true & false den Wert false.

| Operator | Bedeutung            | Erklärung |
|----------|----------------------|-----------|
| `!`      | NICHT (NOT)          | Kehrt einen Booleschen Wert um: aus `true` wird `false` und aus `false` wird `true`. |
| `&`      | UND (AND)            | Liefert `true`, wenn **beide** Operanden `true` sind. Beide Seiten werden immer ausgewertet. |
| `|`      | ODER (OR)            | Liefert `true`, wenn **mindestens einer** der Operanden `true` ist. Beide Seiten werden immer ausgewertet. |
| `&&`     | UND mit verkürzter Auswertung      | Liefert `true`, wenn **beide** Operanden `true` sind. Die rechte Seite wird nur ausgewertet, wenn die linke `true` ist. |
| `||`     | ODER mit verkürzter Auswertung       | Liefert `true`, wenn **mindestens einer** der Operanden `true` ist. Die rechte Seite wird nur ausgewertet, wenn die linke `false` ist. |
| `^`      | Exklusives ODER (XOR)| Liefert `true`, wenn **genau einer** der beiden Operanden `true` ist, aber nicht beide. |


Schreiben sie ein Programm, das die Operatoren anwendet. Probieren Sie für alle vier Kombinationen von true/false die Operatoren & und | aus. Der Operator ! (vorangestellt) negiert einen Wahrheitswert – probieren Sie auch das aus.

Auch hier können Sie Ausdrücke klammern – negieren Sie den Ausdruck true & false.

```java
class Wahrheitswerte{
    public static void main(String[] args) {

   }
}
```
@LIA.java(Wahrheitswerte)

**Aufgabe 3** 

Rechnen mit Relationen

Zahlen können mit den relationalen Operatoren <, < =, >, >=, == (gleich?), != (ungleich?) verglichen werden. Schreiben Sie ein Programm, das die Operatoren ausprobiert und die Ergebnisse ausgibt, indem Sie die Zahlen 1 und 2 mit den Operatoren vergleichen.

Stellen Sie nun fest, ob 2 zwischen 1 und 3 liegt, indem Sie prüfen, ob 1 < 2 < 3 gilt – da Operatoren immer nur zwei Werte verknüpfen, können Sie es nicht direkt so schreiben – überlegen Sie, wie Sie es für Java formulieren müssen.

```java
class Relationen{
    public static void main(String[] args) {

   }
}
```
@LIA.java(Relationen)

**Weitere Aufgaben:**

TODO: anpassen, falls notwendig, ggf. brauchen wir die Aufgaben hier auch noch garnicht

Machen Sie die Aufgaben aus der [Aufgaben-Datenbank](https://speiser.hft-pages.io/programmieraufgaben/2026-ss-pro-1/) aus Kapitel 01.


### Ablage

Neue **Schlüsselwörter**:

- boolean, byte, char, double, float, int, long
- final 
- static 
- class


Wichtige Inhalte: 

- Operatoren +, -, *, /, %, <, >, <=, >=, ==, !=
- Weitere Operatoren ++, --, +=, -=
- Wahrheitswerte: !, &, |, &&, ||, ^
- Widening = Erweitern, Narrowing = Eingrezen, Casting = Umwandlung

Namenskonventionen:

- **Variablen**: Werden in Lower Camel Case benannt, wie z.B. alterInTagen
- **Klassen**: Werden in Upper Camel­Case benannt, wie z.B. TageDesJahres
- **Konstanten** (ändern sich nicht): komplett in Großbuchstaben (als Trennzeichen typischerweise Unterstrich), wie z.B. ANZAHL_JAHRESZEITEN

### Lösungen

Hier finden Sie Lösungsiden für die Aufgaben aus diesem Kapitel. 

**Aufgabe 1** 

```java
class MeineZahlenLoesung{
    public static void main(String[] args) {
        int meineGlueckszahl = 3;
        double meinNotendurchschnitt = 1.3;
       System.out.println("Meine Glückszahl ist: " + meineGlueckszahl);
       System.out.println("Mein Notendurchschnitt war: " + meinNotendurchschnitt);
   }
}
```
@LIA.java(MeineZahlenLoesung)

**Aufgabe 2** 

```java
class WahrheitswerteLoesung{

    public static void main(String[] args) {

        System.out.println("Operationen mit & ");
        System.out.println("(true  & true) = " + (true  & true));
        System.out.println("(true  & false) = " + (true  & false));
        System.out.println("(false & true) = " + (false & true));
        System.out.println("(false & false) = " + (false & false));

        System.out.println();

        System.out.println("Operationen mit | ");
        System.out.println("(true  | true) = " + (true  | true));
        System.out.println("(true  | false) = " + (true  | false));
        System.out.println("(false | true) = " + (false | true));
        System.out.println("(false | false) = " + (false | false));

        System.out.println();

        System.out.println("Negation");
        System.out.println("(!true) = " + (!true));
        System.out.println("(!false) = " + (!false));

        System.out.println();

        System.out.println("!(true & false) = " + !(true & false));
    }
}
```
@LIA.java(WahrheitswerteLoesung)

**Aufgabe 3** 

```java
public class RelationenLoesung{

    public static void main(String[] args) {
        System.out.println("1 < 2 -> "+(1 < 2));
        System.out.println("1 <= 2 -> "+(1 <= 2));
        System.out.println("1 > 2 -> "+(1 > 2));
        System.out.println("1 >= 2 -> "+(1 >= 2));
        System.out.println("1 == 2 -> "+(1 == 2));
        System.out.println("1 != 2 -> "+(1 != 2));

        System.out.println();

        System.out.println("1 < 2 < 3 -> " +  ((1 < 2) & (2 < 3)));

    }
}
```
@LIA.java(RelationenLoesung)