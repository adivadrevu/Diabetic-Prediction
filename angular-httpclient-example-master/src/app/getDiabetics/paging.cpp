#include <iostream> // *Importing the input and output operations //
#include <cstdlib> // *Converting the strings into integers //

int main(int argumentone, char **arguments2) // This is the main method 
{
    int pageSize = 2048; // This variable is used to store or define the page size*.
    int addr; // This variable is used to store holds the arguments in the command line arguments.
    int page_no; // The variable is used to store the page number and arguments in the command line arguments
    int offset_data; // The varaible is used to store the 
    if (argumentone != 2) // This condition is used to check the provided arguments is 2 
    {  
        std::cout << "The" << arguments2[0] << " virtual_address\n"; // iF the provide command line arguments is not 2 , then the below writen statement will be displayed.
        return -1; // Returning the above statement
    }
    addr = atoi(arguments2[1]); // Is used to get the value from the command line , convert the argument into integer and the store in address.

   
    if (addr < 0) // Checking whether the given adddress is negative or positive
    {
        std::cout << "Kindly supply a working virtual address."; // if the provided address is negative this message will be displaying.
        return -1; // Returning the above statement
    }

    page_no = addr / pageSize; // This formula is used to compute the page number.


    offset_data = addr % pageSize; // This formulka is used to compute the offset data.

    std::cout << "Address " << addr << " contains the below values:\n"; // It is used to diaply the address
    std::cout << "The Page number " << page_no << "\n"; // Display the page number
    std::cout << "The offset  = " << offset_data << "\n"; // Display the offset address 

    return 0;
}