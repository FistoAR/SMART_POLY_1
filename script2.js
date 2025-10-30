document.addEventListener("DOMContentLoaded", function(){
 const menuBar = document.querySelector('.Menu_Bar');
    const menuBarIcon = document.querySelector('.Menu_Bar i');
    const getNavLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links a');
    var dropdownValues = document.getElementById('sizeOption');
    var dropdownName = document.getElementById('dropdown_name');
    const addToCartBtn = document.getElementById("addToCartBtn");
    const cartNumberValue = document.getElementById('cartCount');
    var amountRs = document.getElementById('priceAmount');

    // ... existing menu toggle code ...

    window.onload = function() {
        var params = new URLSearchParams(window.location.search);
        var item = params.get('product');
        fetchDetails(item);
    };

    function fetchDetails(item) {
        var detailsContainer = document.getElementById('productDescription');

        // Product data with table configurations
        var items = {
            'Transparent-Plastics-Bags': {
                title:"Transparent Plastics Bags",
                image: "./Smart_poly_images/products_image/Transparent_Plastics_bags.jpg",
                paragraphs: [
                    `High-quality transparent bags made from PP, LD, HM, and BOPP materials.
                     They are strong, moisture-proof, and hygienic for all types of packaging.
                     Perfect for protecting and displaying products in a clean, clear way.`
                ],
                application: "Suitable for use in Hotels, Retail Stores, Supermarkets, Restaurants, Textile Shops, and more.",
                amount: 296,
                // Table configuration
                tableData: {
                    headers: ['Property', 'Details', 'Closure Type', 'Open'],
                    rows: [
                        ['Capacity', '0.5 kg (Customizable)', 'Pattern', 'Plain/Custom Print'],
                        ['Material', 'PP/LD/HM/BOPP', 'Property', 'Moisture-Proof'],
                        ['Usage/Application', 'General Packaging', 'Country Of Origin', 'Made In India']
                    ]
                }
            },
            'stretch-film': {
                title: "Stretch Film",
                image: "./Smart_poly_images/products_image/Stretch_film.jpg",
                paragraphs: [
                    `High-quality stretch films ensure strong wrapping and load stability with excellent stretch, cling, and durability. Ideal for pallet wrapping, bundling, and protective packaging.`
                ],
                application: "Suitable for use in Hotels, Household, Pet Shops, Restaurants, Apartments, and many other places.",
                amount: 296,
                tableData: {
                    headers: ['Property', 'Details','Closure Type','Open' ],
                    rows: [
                        ['Capacity', '0.5 Kg (customizable)', 'Pattern','Plain /Custom Print'],
                        ['Material', 'PP / LD / HM / BOPP', 'Property', 'Moisture Proof'],
                        ['Usage / Application', 'General Packaging', 'Country of Origin', 'Made in India'],
                        
                    ]
                }
            },
            'PP-Box-Strapping-Roll': {
                title: "PP Box Strapping-Roll",
                image: "./Smart_poly_images/products_image/pp_Box_Strapping_roll.jpg",
                paragraphs: [
                    `Durable PP strapping rolls designed for firm, break-resistant packaging.
                     Ideal for manual, semi, and automatic strapping machines.
                     Lightweight, flexible, and reliable for box and pallet bundling.`
                ],
                application: "Suitable for use in Kirana Stores, Grocery Stores, Supermarkets, Instant Grocery Delivery Apps & many other purposes.",
                amount: 296,
                tableData: {
                    headers: ['Property', 'Width', 'Color', 'Material'],
                    rows: [
                        ['Details', '9 Mm', 'White', 'PP']
                    ]
                }
            },
            'BOPP-Tapes': {
                title: "BOPP Tapes",
                image: "./Smart_poly_images/products_image/bopp_tapes.jpg",
                paragraphs: [
                    `High-performance BOPP tapes for carton sealing and packaging — offering strong adhesion, clear finish, and smooth unwinding. Ideal for industrial and e-commerce use with size and print customization.`
                ],
                application: "Suitable for use in Hotels, Retail Stores, Super Markets, Restaurants, Textile Shops & many other places.",
                amount: 300,
                tableData: {
                    headers: ['Property', 'Details','Material / Backing','BOPP / Polypropylene' ],
                    rows: [
                        ['Minimum Order Qty', '5–10 Boxes / 72 Pcs / 5 Pcs', 'Size (Width × Length)','0.75" × 10–20 m to 3" × 100 m'],
                        ['Type', 'Adhesive', 'Box Contains', '48–288 Pcs'],
                        ['Color', 'Beige / Brown / Transparent / Printed (Red-White)', 'Usage / Application', 'Packaging / Carton Sealing / Fragile Item / General Packaging'],
                        
                    ]
                }
            },
            'Fraglie-Handle-with-Care-printer-tapes': {
                title: "Fraglie Handle with Care printer tapes",
                image: "./Smart_poly_images/products_image/Fraglie_Handle_with_Care_printer_tapes.jpg",
                paragraphs: [
                    `Durable printed BOPP tapes with strong adhesion and clear red-white “Fragile Handle With Care” print — ideal for secure e-commerce and industrial packaging.`
                ],
                application: "Suitable for use in Hotels, Retail Stores, Super Markets, Restaurants, Textile Shops & many other places.",
                amount: 300,
                tableData: {
                    headers: ['Property', 'Details','Size (Width × Length)','48 mm × 65 m' ],
                    rows: [
                        ['Minimum Order Qty', '72 Pcs', 'Backing Material','Plastic (Polypropylene)'],
                        ['Tape Width', '41–60 mm', 'Color', 'Printed (Red/White)'],
                        ['Tape Type', 'Adhesive', 'Country of Origin', 'Made in India'],
                        
                    ]
                }
            },
            'POD-Courier-covers': {
                title: "POD Courier covers",
                image: "./Smart_poly_images/products_image/POD_Courier_covers.jpg",
                paragraphs: [
                    `Our POD Courier Covers provide a reliable, tamper-evident packaging solution for e-commerce, logistics and shipping. Built from strong LDPE film, they are designed for easy sealing and safe transport of documents and parcels. Ideal for use by courier firms, online sellers and freight handlers.`
                ],
                application: "Suitable for use in Hotels, Household, Pet Shops, Restaurants, Apartments, and many other places.",
                amount: 296,
                tableData: {
                    headers: ['Property', 'Base Material', 'Design', 'Available Colour', 'Packaging Type', 'Minimum Order Quantity', 'Typical Sizes Offered', 'Usage / Application'],
                    rows: [
                        ['Details', 'LDPE', 'Readymade', 'White', 'Bag', '200 Pieces', '10″ × 12″, 12″ × 14″, 12″ × 16″ (And More)', 'Document Shipping, E-Commerce Parcels, Courier Jobs'],
                       
                    ]
                }
            },
            'Sutli-Twine': {
                title: "Sutli Twine",
                image: "./Smart_poly_images/products_image/Sutli_Twine.jpg",
                paragraphs: [
                    `Durable twisted twine made from virgin plastic, available in multicolor finishes — 
                        ideal for bundling, tying, packaging and general-purpose industrial use. The Zen 
                        Sutli variant delivers premium quality; the Plastic Sutli option offers strong 
                        performance at great value.`
                ],
                application: "Ideal for bundling, tying, packaging and general-purpose industrial use.",
                amount: 296,
                tableData: {
                    headers: ['Property', 'Approx. Price', 'Twine Type', 'Usage / Application', 'Raw Material', 'Minimum Order Quantity', 'Country of Origin'],
                    rows: [
                        ['Zen Sutli',  '₹ 150 / Kg', 'Twisted', 'Packaging', 'Virgin Plastic', '___', 'Made in India'],
                        ['Plastic Sutli', '₹ 85 / Kg', '___', 'Packaging', 'Virgin Plastic','5 Kg', 'Made in India']
                    ]
                }
            },
            // Add similar table configurations for other products
            'Bubble-wrap-roll': {
                title: "Bubble wrap roll",
                image: "./Smart_poly_images/products_image/Bubble_wrap_roll.jpg",
                paragraphs: [
                    `High-quality LDPE & HDPE covers offer superior clarity, strength, and flexibility. Protects products from dust, moisture, and dirt—ideal for industrial, warehouse, and packaging use.`
                ],
                application: "Protects products from dust, moisture, and dirt—ideal for industrial use.",
                amount: 296,
                tableData: {
                    headers: ['Property', 'Material', ' Application', 'Type', 'Feature', 'Thickness', 'Country of Origin'],
                    rows: [
                        ['Details', 'LDPE / HDPE', 'Industrial & Packaging Use', 'Transparent / Plain', 'Waterproof', 'Customizable (Micron Based)', 'Made in India'],
                       
                    ]
                }
            }, 

            'Zip-lock-pouch': {
                title: "Zip lock pouch",
                image: "./Smart_poly_images/products_image/Zip_lock_pouch.jpg",
                paragraphs: [
                    `Durable, resealable pouches made from LDPE or BOPP materials. Designed to keep products fresh, moisture-free, and secure, these pouches are ideal for food, pharma, and retail packaging. Available in various sizes, thicknesses, and custom prints for branding needs.`
                ],
                application: "Ideal for bundling, tying, packaging and general-purpose industrial use.",
                amount: 296,
                tableData: {
                    headers: ['Type', 'Material', 'Finish', 'Size (mm)', 'Use'],
                    rows: [
                        ['Transparent Stand-Up',  'PET / LLDPE', 'Glossy Clear', '170 × 260', 'Food, Snacks'],
                        ['Kraft Paper (Window)', 'Kraft + Film', 'Matte Kraft', '150 × 230', 'Bakery, Retail'],
                        ['Foil Barrier',  'PET / AL / PE', 'Metallic Gloss', '200 × 300', 'Coffee, Powders'],
                        ['Eco Biodegradable', 'PLA Film', 'Frosted', '180 × 240', 'Eco Packaging']
                    ]
                }
            },

            'PVC-cling-flim-wrap': {
                title: "PVC cling flim wrap",
                image: "./Smart_poly_images/products_image/PVC_cling_flim_wrap.jpg",
                paragraphs: [
                    `Crystal-clear, food-safe PVC film that clings tightly to trays, fruits, and bakery items to lock in freshness and prevent odors. Ideal for home, bakery, and Commercial Use`
                ],
                application: "Ideal for bundling, tying, packaging and general-purpose industrial use.",
                amount: 296,
                tableData: {
                    headers: ['Property', 'Primary Material', 'Grade', 'Roll Length', 'Origin', 'Thickness', 'GST'],
                    rows: [
                        ['Value',  'PVC / Transparent', 'Bakery / Food', '100 m / 300 m / 600 m', 'Made in India', 'Not specified /Customizable', '18% Extra'],
                        
                    ]
                }
            },
        };

        var details = items[item];
        if (!details) return;

        // Clear and populate basic details
        detailsContainer.innerHTML = '';
        productTitle.innerHTML = details.title;
        document.title = "Product - " + details.title;
        productImage.src = details.image;
        applicationContent.innerHTML = details.application;
        amountRs.innerHTML = details.amount;

        // Add paragraphs
        details.paragraphs.forEach(function(paragraphText, index) {
            var paragraph = document.createElement('p');
            paragraph.textContent =  paragraphText;
            detailsContainer.appendChild(paragraph);
        });

        // Create and insert table if tableData exists
        if (details.tableData) {
            createProductTable(details.tableData);
        }

        // Handle sizes dropdown
        if (details.sizes) {
            details.sizes.forEach(function(size) {
                var createOption = document.createElement("option");
                createOption.textContent = size;
                dropdownValues.appendChild(createOption);
            });
        }
        if (!details.sizes && !details.colour) {
            dropdownName.style.display = 'none';
            dropdownValues.style.display = 'none';
        }
    }

    // Function to create product specification table
    function createProductTable(tableData) {
        var tableContainer = document.createElement('div');
        tableContainer.className = 'product-specifications-table';
        
        var tableTitle = document.createElement('h3');
        tableTitle.textContent = 'Technical Specifications';
        tableContainer.appendChild(tableTitle);

        var table = document.createElement('table');
        table.className = 'specs-table';

        // Create header
        var thead = document.createElement('thead');
        var headerRow = document.createElement('tr');
        tableData.headers.forEach(function(header) {
            var th = document.createElement('th');
            th.textContent = header;
            headerRow.appendChild(th);
        });
        thead.appendChild(headerRow);
        table.appendChild(thead);

        // Create body
        var tbody = document.createElement('tbody');
        tableData.rows.forEach(function(rowData) {
            var row = document.createElement('tr');
            rowData.forEach(function(cellData) {
                var td = document.createElement('td');
                td.textContent = cellData;
                row.appendChild(td);
            });
            tbody.appendChild(row);
        });
        table.appendChild(tbody);

        tableContainer.appendChild(table);
        
        // Insert table after product description
        var productRight = document.getElementById('productRight');
        var applicationDiv = document.getElementById('application');
        productRight.insertBefore(tableContainer, applicationDiv);
    }

    
        const cartNumber = document.getElementById('cart_no');
        cartNumber.addEventListener("change", function() {

            cartNumber.addEventListener("blur", function() {
                if (cartNumber.value <= 0) {
                    // Check the validity of the input
                    const isValid = cartNumber.checkValidity();
                    
                    // If the input is not valid, display the validation message
                    if (!isValid) {
                        // Trigger the browser's built-in validation message
                        cartNumber.reportValidity();

                    }
                }
    
            
            });
        });

        addToCartBtn.addEventListener("click", function() {
            const getDropdownValue = dropdownValues.value;
            const qty = cartNumber.value;
            const getProductTitle = document.getElementById('productTitle').innerHTML;
            const image = productImage.src;
            const getRs = amountRs.innerHTML;
            if (qty > 0 && getDropdownValue !== "default") {
                storeValuesInCookie(getProductTitle, getDropdownValue, qty, image, getRs)
            }
        });

        
       
        function storeValuesInCookie(valueFromP, selectedSize, quantity, image, amount) {
            // Retrieve existing cookie value
            var existingCookie = getCookie('storedValues');
        
            // If the cookie already exists, parse the JSON string
            var storedValues = existingCookie ? JSON.parse(existingCookie) : [];
        
            // Check if the new values already exist in the stored values
            var duplicateFound = storedValues.some(function(entry) {
                return entry.valueFromP === valueFromP && entry.size === selectedSize;
            });
        
            if (duplicateFound) {
                alert('Product already added to the cart.');
                return;
            }
        
            // Add the new values to the array of stored values
            storedValues.push({
                imageSrc : image,
                valueFromP: valueFromP,
                amountVal: amount,
                size: selectedSize,
                quantity: quantity,
            });
        
            // Convert the array of values back to a JSON string
            var jsonString = JSON.stringify(storedValues);
        
            // Store the JSON string in a cookie
            document.cookie = 'storedValues=' + jsonString + '; path=/';
        
            // Alert that product has been added to the cart
            alert('Product added to cart.');
            window.location.reload();
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
        
        // Function to get cookie value by name
        function getCookie(name) {
            var cookieValue = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
            return cookieValue ? cookieValue.pop() : '';
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

        if (parseInt(cartNumberValue.innerHTML) <= 0) {
            cartNumberValue.style.display = 'none';
        }
        else {
            cartNumberValue.style.display = 'flex';
        }
        
    });
    
window.addEventListener("load", () => {
  document.getElementById("product-out-container").classList.add("visible");
});




// active page intigater 



