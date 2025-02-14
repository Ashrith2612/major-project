import React, { useState } from 'react';
import ContactCard from '../ContactCard/ContactCard.jsx';

const ContactsGrid = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const contacts = [
    { name: 'Rajesh Kumar', number: '+91 9876543210', address: '12 MG Road, Bangalore', image: '/images/male1.jpg' },
    { name: 'Priya Sharma', number: '+91 8765432190', address: '45 Park Street, Kolkata', image: '/images/female1.jpg' },
    { name: 'Arjun Singh', number: '+91 9123456789', address: '7 Ring Road, New Delhi', image: '/images/male2.jpg' },
    { name: 'Meera Patel', number: '+91 9234567890', address: '89 Civil Lines, Ahmedabad', image: '/images/female2.jpg' },
    { name: 'Ahmed Khan', number: '+91 9001234567', address: '14 MG Road, Mumbai', image: '/images/male3.jpg' },
    { name: 'Sonia Gupta', number: '+91 9198765432', address: '3 Cross Lane, Jaipur', image: '/images/female3.jpg' },
    { name: 'Vinay Joshi', number: '+91 9871234567', address: '22 Sector 21, Chandigarh', image: '/images/male4.jpg' },
    { name: 'Anjali Verma', number: '+91 8899001122', address: '67 MG Road, Pune', image: '/images/female4.jpg' },
  ];

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search Contacts..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-bar"
      />
      <div className="contacts-grid">
        {filteredContacts.map((contact, index) => (
          <ContactCard
            key={index}
            name={contact.name}
            number={contact.number}
            address={contact.address}
            image={contact.image}
          />
        ))}
      </div>
    </div>
  );
};

export default ContactsGrid;
