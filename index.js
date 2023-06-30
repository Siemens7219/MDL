 // JavaScript code for filtering books based on search input
 document.getElementById('searchForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission
    
    var searchInput = document.getElementById('searchInput').value.toLowerCase();
    var books = document.querySelectorAll('.book');
    
    books.forEach(function (book) {
        var title = book.querySelector('h3').textContent.toLowerCase();
        
        // Hide or show book based on search input
        if (title.includes(searchInput)) {
            book.style.display = 'block';
        } else {
            book.style.display = 'none';
        }
    });
});
document.getElementById("openPopupBtn").addEventListener("click", function() {
    document.getElementById("popupContainer").style.display = "flex";
  });
  
  document.getElementById("selectDateBtn").addEventListener("click", function() {
    var selectedDate = document.getElementById("dateInput").value;
    document.getElementById("selectedDate").textContent = selectedDate;
    document.getElementById("selectedDateContainer").style.display = "block";
    document.getElementById("popupContainer").style.display = "none";
  
  //   Save the selected date in a cookie
    document.cookie = "selectedDate=" + selectedDate;
  });
  
