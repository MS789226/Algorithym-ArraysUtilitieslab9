ArrayUtilities {

    
     totalOfElements(int[] array, int size) {
        int total = 0;
        for (int i = 0; i < size; i++) {
            total += array[i];
        }
        return total;
    }

        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter " + size + " integers:");
        for (int i = 0; i < size; i++) {
            System.out.print("Element " + (i + 1) + ": ");
            array[i] = scanner.nextInt();
        }
        return array;
    }


     void printArray(int[] array, int size) {
        System.out.print("Array elements: ");
        for (int i = 0; i < size; i++) {
            System.out.print(array[i] + " ");
        }
        System.out.println();
    }
}

 