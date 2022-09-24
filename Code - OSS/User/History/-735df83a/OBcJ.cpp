#include <stdio.h>
#include <iostream>
#include <limits.h>

using namespace std;

int main() {
    int amount_competitors = 0;
    int winner_number = -1;
    int best_time_hour = INT_MAX;
    int best_time_minute = INT_MAX;
    int best_time_second = INT_MAX;

    while (true) {
        int runner_number;
        cout << "Startnummer? ";
        cin >> runner_number;

        if (runner_number < 1) break;

        ++amount_competitors;

        //Taking in start time.
        int start_time_hour, start_time_minute, start_time_second;
        cout << "Starttid? ";
        cin >> start_time_hour >> start_time_minute >> start_time_second;

        //Taking in finish time.
        int finish_time_hour, finish_time_minute, finish_time_second;
        cout << "Måltid? ";
        cin >> finish_time_hour >> finish_time_minute >> finish_time_second;

        int current_time_hour = 0, current_time_minute = 0, current_time_second = 0;

        //Calculating the current run minute.
        current_time_second = finish_time_second - start_time_second;
        if (current_time_second < 0) {
            current_time_second += 60;
            --current_time_minute;
        }

        //Calculating the current run minute.
        current_time_minute = current_time_minute + finish_time_minute - start_time_minute;
        if (current_time_minute < 0) {
            current_time_minute += 60;
            --current_time_hour;
        }


        //Calculating the current run hour.
        current_time_hour = current_time_hour + finish_time_hour - start_time_hour;
        if (current_time_hour < 0) {
            current_time_hour += 24;
        }

        if (current_time_hour <= best_time_hour && 
            current_time_minute <= best_time_minute && 
            current_time_second && best_time_second) {
            winner_number = runner_number;
            best_time_hour = current_time_hour;
            best_time_minute = current_time_minute;
            best_time_second = current_time_second;
        }
    }

    if (amount_competitors > 0) {
        cout << "Vinnaren är startnr: " << winner_number << endl;
        cout << "Tim: " << best_time_hour << " Min: " << best_time_minute << " Sek: " << best_time_second << endl;
        cout << "Antal tävlande: " << amount_competitors << endl;
        cout << "Programmet avslutas";
    }
    else {
        cout << "Inga tävlande" << endl;
    }

    return 0;
}