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
    int result = 0;
    if (op == 'a') {
        for (int i = n1; i < n2; ++i) {
            result+=i;
        }
    }
    else if (op == 'm') {
        result = 1;
        for (int i = n1; i < n2; ++i) {
            result*=i;
        }
    }
    else {
        for (int i = n1; i < n2; ++i) {
            result+=i*i;
        }
    }
    return result;
 }
void skrivResultat(int n) {
    cout << "Resultatet är " << n << endl;
}