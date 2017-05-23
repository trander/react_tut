import React from 'react';
import ContactInfo from './ContactInfo';

class Contacts extends React.Component {
    render() {
        return (
            <div>
                <h1> Contacts </h1>
                <ul>
                    <ContactInfo name="Abet" phone="010-0000-0001"/>
                    <ContactInfo name="Betty" phone="010-0000-0002"/>
                    <ContactInfo name="Charlie" phone="010-0000-0003"/>
                    <ContactInfo name="David" phone="010-0000-0004"/>
                </ul>
            </div>
        );
    }
}

export default Contacts;
