#include <stdio.h>
#include <iostream>

using namespace std;


int main(){

    cout << "Hello World" <<endl;;

    cout << "Enter the number of Rows";

    int rows ; 

    cin >> rows ;

    cout << " Number of rows is  " << rows << endl;

    for(int i=0; i<=rows; i++){
        for(int j=1; j<=i; j++){
            cout << j ;
        }
        cout <<endl;
    }

     cout <<endl;

    return 0;
}