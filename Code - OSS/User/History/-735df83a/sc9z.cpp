#include <stdio.h>
#include <iostream>
#include <cmath>

#define ONE_DAY_IN_SEC 86400
#define ONE_HOUR_IN_SEC 3600
#define ONE_MINUTE_IN_SEC 60

using namespace std;

int main() {
    int amount_competitors = 0;
    int winner_number = -1;
    int best_time = ONE_DAY_IN_SEC;

    while (true) {
        int runner_number;
        cout << "Startnummer? ";
        cin >> runner_number;

        if (runner_number < 1) break;

        //Increase the amount of competitors because we got a valid runner_number i.e runner_number > 0.
        ++amount_competitors;

        //Taking in start time.
        int start_time_hour, start_time_minute, start_time_second, start_time;
        cout << "Starttid? ";
        cin >> start_time_hour >> start_time_minute >> start_time_second;
        start_time = start_time_hour * ONE_HOUR_IN_SEC + start_time_minute * ONE_MINUTE_IN_SEC + start_time_second;

        //Taking in finish time.
        int finish_time_hour, finish_time_minute, finish_time_second, finish_time;
        cout << "Måltid? ";
        cin >> finish_time_hour >> finish_time_minute >> finish_time_second;
        finish_time = finish_time_hour * ONE_HOUR_IN_SEC + finish_time_minute * ONE_MINUTE_IN_SEC + finish_time_second;

        int current_time = finish_time - current_time;
        if (current_time < 0) { 
            current_time += ONE_DAY_IN_SEC;
        }

        // Check if the current time is better than the current best time.
        if (current_time < best_time) {
            best_time = current_time;
            winner_number = runner_number;
        }
    }

    //If there were competitors added to the race then we print out "normally" otherwise we output "no competitors."
    if (amount_competitors > 0) {
        int disp_hour = floor(best_time);
        best_time -= disp_hour * ONE_HOUR_IN_SEC;
        int disp_min = floor(best_time/ONE_MINUTE_IN_SEC);
        best_time -= disp_min * ONE_MINUTE_IN_SEC;
        cout << "Vinnaren är startnr: " << winner_number << endl;
        cout << "Tim: " << floor(best_time/ONE_HOUR_IN_SEC) << " Min: " << best_time_minute << " Sek: " << best_time_second << endl;
        cout << "Antal tävlande: " << amount_competitors << endl;
    }
    else {
        cout << "Inga tävlande" << endl;
    }

    cout << "Programmet avslutas" << endl;
    return 0;
}