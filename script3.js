// Function to retrieve cookie value by name
function getCookie(name) {
    var cookieValue = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
    return cookieValue ? cookieValue.pop() : '';
}

// Function to retrieve stored values from cookie
function getStoredValuesFromCookie() {
    var cookieValue = getCookie('storedValues');

    if (cookieValue) {
        return JSON.parse(cookieValue);
    } else {
        return [];
    }
}

function displayStoredValues() {
    var storedValues = getStoredValuesFromCookie();
    var tableBody = document.querySelector('#cart-values tbody');
    tableBody.innerHTML = ''; // Clear table body

    if (storedValues.length > 0) {
        storedValues.forEach(function(value, index) {
            var row = tableBody.insertRow();
            var deleteCell = row.insertCell();
            var imageCell = row.insertCell();
            var titleCell = row.insertCell();
            var sizeCell = row.insertCell();
            var amountCell = row.insertCell();
            var quantityCell = row.insertCell();
            var subTotalCell = row.insertCell();

            var deleteButton = document.createElement('button');
            deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
            deleteButton.addEventListener('click', function() {
                storedValues.splice(index, 1);
                var jsonString = JSON.stringify(storedValues);
                document.cookie = 'storedValues=' + jsonString + '; path=/';
                location.reload(); // Refresh page after deleting
            });
            deleteCell.appendChild(deleteButton);

            var image = document.createElement('img');
            image.src = value.imageSrc;
            imageCell.appendChild(image);

            titleCell.textContent = value.valueFromP;
            sizeCell.textContent = value.size;

            var inputQty = document.createElement("input");
            inputQty.setAttribute("type", "number");
            inputQty.setAttribute("value", value.quantity); // Set input value
            inputQty.setAttribute("min", 1); // Set input value
            inputQty.addEventListener('change', function() {
                var inputValue = parseInt(inputQty.value);
                if (!isNaN(inputValue)) {
                    value.quantity = inputValue; // Update quantity in storedValues
                    subTotalCell.textContent = parseInt(value.amountVal) * parseInt(value.quantity); // Update subtotal
                    // updateStoredValues(storedValues); // Update storedValues in cookie
                    calculateTotal(); // Recalculate total
                } else {
                    console.error('Invalid quantity value.');
                }
                calculateGrandTotal();
            });
            quantityCell.appendChild(inputQty);

            amountCell.textContent = value.amountVal;
            subTotalCell.textContent = parseInt(value.amountVal) * parseInt(value.quantity);
        });
    } else {
        var emptyRow = tableBody.insertRow();
        var emptyCell = emptyRow.insertCell();
        emptyCell.colSpan = 7; // Adjust colspan for 7 cells
        emptyCell.textContent = "No stored values found in the cookie.";
    }

    function calculateGrandTotal() {

        var total = calculateTotal();
        
        var totalAmountP = document.getElementById('amountTotal');
        totalAmountP.innerHTML = total;
    }

    calculateGrandTotal();
}


document.addEventListener("DOMContentLoaded", function() {
    var total = calculateTotal();
    
    var totalAmountP = document.getElementById('amountTotal');
    totalAmountP.innerHTML = total;

});




// Call the function to display stored values when the page loads
window.addEventListener('load', displayStoredValues);

// Function to calculate the sum of values in the last column of the table
function calculateTotal() {
    var table = document.getElementById('cart-values');
    var tbody = table.querySelector('tbody');
    var rows = tbody.querySelectorAll('tr');
    var total = 0;

    rows.forEach(function(row) {
        var lastCell = row.cells[row.cells.length - 1]; // Get the last cell in the row
        var quantity = parseInt(lastCell.textContent); // Parse the quantity value as an integer
        if (!isNaN(quantity)) {
            total += quantity; // Add the quantity to the total if it's a valid number
        }
    });

    return total;
}

// Call the function to calculate the total and display it
function getNumberOfRowsInCookie() {
    var storedValues = getStoredValuesFromCookie();
    return storedValues.length;
}

var cartCount = getNumberOfRowsInCookie();
if (cartCount > 0) {
    document.getElementById('cartCount').innerHTML = cartCount;
}


    
const cartNumberValue = document.getElementById('cartCount');
if (parseInt(cartNumberValue.innerHTML) <= 0) {
    cartNumberValue.style.display = 'none';
}
else {
    cartNumberValue.style.display = 'flex';
}