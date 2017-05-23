import React from 'react';
import update from 'react-addons-update';
import ContactInfo from './ContactInfo';
import ContactCreator from './ContactCreator';

class Contacts extends React.Component {
    constructor(props) {
        super(props);

        this.state={
            contactData: [
                {name: "Abet", phone: "010-0000-0001"},
                {name: "Betty", phone: "010-0000-0002"},
                {name: "Charlie", phone: "010-0000-0003"},
                {name: "David", phone: "010-0000-0004"},
            ]
        };
    }

    _insertContact(name, phone) {
        let newState = update(this.state, {
            contactData: {
                $push: [{"name":name, "phone": phone}]
            }
        });
    }

    render() {
        return (
            <div>
                <h1>Contacts</h1>
                <ul>
                    {this.state.contactData.map((contact, i) => {
                        return (
                            <ContactInfo name={contact.name} phone={contact.phone} key={i} />
                        );
                    })}
                </ul>
                <ContactCreator onInsert={this._insertContact.bind(this)} />
            </div>
        );
    }
}

export default Contacts;
