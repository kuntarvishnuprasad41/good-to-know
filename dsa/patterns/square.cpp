#include <iostream> 

using namespace std;  

int main() {
    int row, col;

    std::cout << "Enter the number of rows and columns: ";
    std::cin >> row >> col;

    std::cout << "Rows: " << row << ", Columns: " << col << std::endl;


    for(int i = 0; i < row; i++) {
        for(int j=0; j< col; j++){
            std::cout << "*";
        }
        std::cout << std::endl;
    }

    return 0;
}
