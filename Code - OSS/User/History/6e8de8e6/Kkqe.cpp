#include <iostream>

using namespace std;

void skrivInfo();
int lasEttTal();
char lasOp();
void ordna(int &n1, int &n2);
int berakna(int n1, int n2, char op);
void skrivResultat(int n); 

int main() {
    skrivInfo();

    int tal1 = lasEttTal();
    int tal2 = lasEttTal();

    char op = lasOp();
    ordna(tal1, tal2);

    int svar = berakna(tal1, tal2, op);
    skrivResultat(svar);

    return 0;
}

//*********************************************************************************
// Funktion skrivInfo
// Syfte: Funktionen skriver ut ett text som förklarar hur programmet fungerar.
//
//*********************************************************************************
void skrivInfo() {
    cout << "Programmet kommer att be om två siffor och en operation där den kommer att returnera resultatet när operationen" << endl; 
    cout << "är utförd på alla tal mellan de angivna siffrorna och de angivna siffrorna." << endl;
    cout << "De givna talen behöver inte vara i storleksordingen." << endl; 
    cout << "op:" << endl << "a = addera" << endl << "m = multiplicera" << endl << "k = kvadratsumman" << endl;
}

//*********************************************************************************
// Funktion lasEttTal
// Syfte: Funktionen frågar användaren för ett talgräns och returnerar den.
//
//*********************************************************************************
int lasEttTal() {
    cout << "Skriv en av talgränsen: ";
    int tal;
    cin >> tal;
    return tal;
}

//********************************************************************************************
// Funktion lasOp
// Syfte: Funktionen frågar användaren för ett karaktär som kan användas som ett operation.
//
//********************************************************************************************
char lasOp() {
    char c;
    while (true) {
        cout << endl << "a = addera" << endl << "m = multiplicera" << endl << "k = kvadratsumman" << endl;
        cout << "Skriv ett operation: ";
        cin >> c;
        if (c == 'a' ||
            c == 'm' ||
            c == 'k') {
            break;
        }
        cout << "Det där var inte ett operation som är implementerad! Vänligen mata in ett operation som är giltig." << endl;
    }
    return c;
}
//********************************************************************************************

//*****************************************************************************************************************************
// Funktion ordna
// Syfte: Funktionen ordnar så att n1 ska innehålla det största talet. Funktionen kommer att ändra på de angivna variablen.
// Inparametrar: n1 ett av tal gräsen
//
//*****************************************************************************************************************************
void ordna(int &n1, int &n2) {
    if (n2 > n1) {
        int temp = n1;
        n1 = n2;
        n2 = temp;
    }
}
//*****************************************************************************************************************************

int berakna(int n1, int n2, char op) {
    int result = 0;
    if (op == 'a') {
        for (int i = n2; i <= n1; ++i) {
            result+=i;
        }
    }
    else if (op == 'm') {
        result = 1;
        for (int i = n2; i <= n1; ++i) {
            result*=i;
        }
    }
    else {
        for (int i = n2; i <= n1; ++i) {
            result+=i*i;
        }
    }
    return result;
 }
void skrivResultat(int n) {
    cout << "Resultatet är " << n << endl;
}