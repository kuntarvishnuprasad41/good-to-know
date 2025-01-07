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
        for(int j=i; j<rows; j++){
            cout << j ;
        }
        cout <<endl;
    }

     cout <<endl;


      for(int i=0; i<=rows; i++){
        for(int j=rows; j>i; j--){
            cout << j ;
        }
        cout <<endl;
    }
cout <<endl;

    for(int i=0; i<rows; i++){
      
      for(int j = 1; j < rows-i; j++){
        cout << " ";
      }

       for(int j = 0; j<2*i-1; j++){
        cout << "*";
       }

       for(int j = i; j < rows-i; j++){
        cout << "\t";
      }
      cout <<endl;

    }

    

    return 0;
}