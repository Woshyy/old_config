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

        //Increase the amount of competitors because we got a valid runner_number i.e runner_number > 0.
        ++amount_competitors;

        //Taking in start time
        int start_time_hour, start_time_minute, start_time_second, start_time;
        cout << "Starttid? ";
        cin >> start_time_hour >> start_time_minute >> start_time_second;

        //Taking in finish time.
        int finish_time_hour, finish_time_minute, finish_time_second;
        cout << "Måltid? ";
        cin >> finish_time_hour >> finish_time_minute >> finish_time_second;

        //Creating the variable to save the lenght of the run and initiliaze them to 0.
        int current_time_hour = 0, current_time_minute = 0, current_time_second = 0;

        //Calculating the current run minute.
        current_time_second = finish_time_second - start_time_second;
        //If the second is minus than we need to decrease the minute by one and add 60 to the seconds.
        if (current_time_second < 0) {
            current_time_second += 60;
            --current_time_minute;
        }

        //Calculating the current run minute.
        current_time_minute = current_time_minute + finish_time_minute - start_time_minute;
        //If the minute is minus than we need to decrease the hour by one and add 60 to the minute.
        if (current_time_minute < 0) {
            current_time_minute += 60;
            --current_time_hour;
        }


        //Calculating the current run hour.
        current_time_hour = current_time_hour + finish_time_hour - start_time_hour;
        //If the hour is minus than we add 24 because we have gone from 23 hour to something smaller like 01 hour.
        if (current_time_hour < 0) {
            current_time_hour += 24;
        }

        //Check if the current time is better than the previous time.
        //If the current time is better then we update the best time and best runner with the current timer and current runner number.
        int time_in_number = current_time_hour
    }

    //If there were competitors added to the race then we print out "normally" otherwise we output "no competitors."
    if (amount_competitors > 0) {
        cout << "Vinnaren är startnr: " << winner_number << endl;
        cout << "Tim: " << best_time_hour << " Min: " << best_time_minute << " Sek: " << best_time_second << endl;
        cout << "Antal tävlande: " << amount_competitors << endl;
    }
    else {
        cout << "Inga tävlande" << endl;
    }

    cout << "Programmet avslutas" << endl;
    return 0;
}