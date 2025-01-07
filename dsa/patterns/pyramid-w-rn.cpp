#include<stdio.h>
#include<iostream>

using namespace std;

int main(){

 cout <<endl; cout <<endl;


    cout << " Enter the number of Rows";

    int rows ;

    cin >> rows;

    for(int i=0;i<=rows;i++){

        for(int j = 1; j<=i; j++){
            cout << i;
        }
         cout <<endl;
    }


 cout <<endl; cout <<endl;

    return 0;
}