// scripts.js

const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

// Edit below line 

book1 = document
  .querySelector('[id="book1"]')
  .querySelector('[class="status"]');
reserve1 = document
  .querySelector('[id="book1"]')
  .querySelector('[class="reserve"]');
checkout1 = document
  .querySelector('[id="book1"]')
  .querySelector('[class="checkout"]');
checkin1 = document
  .querySelector('[id="book1"]')
  .querySelector('[class="checkin"]');

book2 = document
  .querySelector('[id="book2"]')
  .querySelector('[class="status"]');
reserve2 = document
  .querySelector('[id="book2"]')
  .querySelector('[class="reserve"]');
checkout2 = document
  .querySelector('[id="book2"]')
  .querySelector('[class="checkout"]');
checkin2 = document
  .querySelector('[id="book2"]')
  .querySelector('[class="checkin"]');

book3 = document
  .querySelector('[id="book3"]')
  .querySelector('[class="status"]');
reserve3 = document
  .querySelector('[id="book3"]')
  .querySelector('[class="reserve"]');
checkout3 = document
  .querySelector('[id="book3"]')
  .querySelector('[class="checkout"]');
checkin3 = document
  .querySelector('[id="book3"]')
  .querySelector('[class="checkin"]');

const bookStatus = (book,reserve,checkout,checkin) =>{
    const currentStatus = book.innerHTML;

    if (currentStatus === 'overdue') {
        book.style.color = STATUS_MAP.overdue.color;
        reserve.disabled = STATUS_MAP.overdue.canReserve ? false : true;
        checkout.disabled = STATUS_MAP.overdue.canCheckout ? false : true;
        checkin.disabled = STATUS_MAP.overdue.canCheckIn ? false : true;    
    } else if (currentStatus === 'reserved'){
        book.style.color = STATUS_MAP.reserved.color;
        reserve.disabled = STATUS_MAP.reserved.canReserve ? false : true;
        checkout.disabled = STATUS_MAP.reserved.canCheckout ? false : true;
        checkin.disabled = STATUS_MAP.reserved.canCheckIn ? false : true; 
    } else if (currentStatus === 'shelf') {
        book.style.color = STATUS_MAP.shelf.color;
        reserve.disabled = STATUS_MAP.shelf.canReserve ? false : true;
        checkout.disabled = STATUS_MAP.shelf.canCheckout ? false : true;
        checkin.disabled = STATUS_MAP.shelf.canCheckIn ? false : true; 
    } else if (currentStatus === 'checkedout') {
        book.style.color = STATUS_MAP.checkedOut.color;
        reserve.disabled = STATUS_MAP.checkedOut.canReserve ? false : true;
        checkout.disabled = STATUS_MAP.checkedOut.canCheckout ? false : true;
        checkin.disabled = STATUS_MAP.checkedOut.canCheckIn ? false : true; 
    }
} 

const result1 = bookStatus(book1, reserve1, checkout1, checkin1);
const result2 = bookStatus(book2, reserve2, checkout2, checkin2);
const result3 = bookStatus(book3, reserve3, checkout3, checkin3);

