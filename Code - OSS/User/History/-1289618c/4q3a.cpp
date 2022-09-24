//
// Programskal till inl�mningsuppgift 4 - deluppgift A
//
// Hanterar fallet med 26 bokst�ver A-Z

#include <iostream>
#include <string>
#include <cctype>
#include <cmath>
using namespace std;


// Anv�nd g�rna denna globala konstant i programmet
// i st�llet f�r v�rdet 26
const int ANTAL_BOKSTAVER = 26;  //A-Z
// Globala variabler �r ej till�tna

//--------------------------------------------------------
// Funktionsdeklarationer:

// Funktionen berakna_histogram_abs
void berakna_histogram_abs(const string text, int freqCounter[ANTAL_BOKSTAVER]);

// Funktionen skriv_histogram_abs

//--------------------------------------------------------
// Huvudprogram:

int main()
{
  // Deklarera variabler
  int freqCounter[ANTAL_BOKSTAVER] = {0};
  string text;

  // L�s in en rad med text fr�n tangentbordet
  cin >> text;

  // Anropa funktionen berakna_histogram_abs som ber�knar histogrammet
  // och antalet bokst�ver.  
  berakna_histogram_abs(text, freqCounter);

  for (int i = 0; i < ANTAL_BOKSTAVER; ++i) {
    cout << (char) i << ": " << freqCounter[i] << endl;
  }
 

  // Anropa funktionen skriv_histogram_abs som skriver ut histogrammet

  return 0;
}

//--------------------------------------------------------
// Funktionsdefinitioner:

void berakna_histogram_abs(const string text, int &freqCounter[ANTAL_BOKSTAVER]) {
  for (char c : text) {
    ++freqCounter[c];
  }
}

// Redovisning av uppgiften i ord. 
