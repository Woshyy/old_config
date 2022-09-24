#include <iostream>

using namespace std;

void skrivInfo();
int lasEttTal();
char lasOp();
void ordna(int &n1, int &n2);

int main() {
    skrivInfo();

    int tal1 = lasEttTal();
    cout << tal1 << endl;
    int tal2 = lasEttTal();
    cout << tal2 << endl;

    char op = lasOp();
    cout << op << endl;
    ordna(tal1, tal2);
    cout << tal1 << endl;
    cout << tal2 << endl;
    return 0;
}

void skrivInfo() {
    cout << "Föklara programmet" << endl;
}

int lasEttTal() {
    int tal;
    cin >> tal;
    return tal;
}

char lasOp() {
    char c;
    cin >> c;
    return c;
}

void ordna(int &n1, int &n2) {
    if (n2 > n1) {
        int temp = n1;
        n1 = n2;
        n2 = temp;
    }
}

int berakna(int &n1, int &n2, char &op) {
    if (op == 'a') {

    }
    else if (op == 'm') {

    }
    else {

    }
 }
void skrivResultat(int n1, int n2, char op) {

}