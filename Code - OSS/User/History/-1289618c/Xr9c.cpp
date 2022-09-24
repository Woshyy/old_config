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
const int A_ASCII_NUMBER = 65;
// Globala variabler �r ej till�tna

//--------------------------------------------------------
// Funktionsdeklarationer:

// Funktionen berakna_histogram_abs
void berakna_histogram_abs(const string text, int &number_of_characters, int freqCounter[ANTAL_BOKSTAVER]);

// Funktionen skriv_histogram_abs
void skriv_histogram_abs(const int &number_of_characters, const int freqCounter[ANTAL_BOKSTAVER]);

//--------------------------------------------------------
// Huvudprogram:

int main()
{
  // Deklarera variabler
  int freqCounter[ANTAL_BOKSTAVER] = {0};
  int number_of_characters;
  string text;

  // L�s in en rad med text fr�n tangentbordet
  cout << "Ge en rad med text?" << endl;
  getline(cin, text);

  // Anropa funktionen berakna_histogram_abs som ber�knar histogrammet
  // och antalet bokst�ver.  
  berakna_histogram_abs(text, number_of_characters, freqCounter);

  skriv_histogram_abs(number_of_characters, freqCounter); 

  // Anropa funktionen skriv_histogram_abs som skriver ut histogrammet

  return 0;
}

//--------------------------------------------------------
// Funktionsdefinitioner:

void berakna_histogram_abs(const string text, int &number_of_characters, int freqCounter[ANTAL_BOKSTAVER]) {
  // The index for the array.
  int i;
  for (char c : text) {
    //Turn everything to capitalize letter and take minus capital A ascii number so the letter A would be at index 0,
    //While capital B would be at index 1.
    i = toupper(c) - A_ASCII_NUMBER;
    //Check if it was a character from A - Z otherwise skip it.
    //The index must be between 0 and 25 if it was a valid character.
    if (0 <= i && i < ANTAL_BOKSTAVER) {
      ++freqCounter[i];
    }
  }
}

void skriv_histogram_abs(const int number_of_characters, const int freqCounter[ANTAL_BOKSTAVER]) {
  cout << endl << "Resultat för bokstäverna A-Z" << endl << endl << "Totala antalet bokstäver: " << number_of_characters << endl;

  cout << endl << "Bokstavfördelning: "
  for (int i = 0; i < ANTAL_BOKSTAVER; ++i) {
    cout << (char) (i+A_ASCII_NUMBER) << ": " << freqCounter[i] << endl;
  }
}

// Redovisning av uppgiften i ord. 
