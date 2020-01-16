import React, {Component} from 'react';
import MenuItem from '../menu-item/menu-item';
import './directory.scss';


class Directory extends Component {
    constructor() {
        super()

        this.state = {
            sections: [{
                title: 'hats',
                imageurl: 'https://i.ibb.co/cvpntL1/hats.png',
                id: 1
            },
            {
                title: 'jackets',
                imageurl: 'https://i.ibb.co/px2tCc3/jackets.png',
                id: 2
            },
            {
                title: 'sneakers',
                imageurl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                id: 3
            },
            {
                title: 'women',
                imageurl: 'https://i.ibb.co/GCCdy8t/womens.png',
                id: 4, 
                size: 'large'
            },
            {
                title: 'men',
                imageurl: 'https://i.ibb.co/R70vBrQ/men.png',
                id: 5,
                size: 'large'
            }
        ]
        }
    }
    render() {
        return (
            <div className="directory-menu">
                {this.state.sections.map(({title, imageurl, id, size}) => (
                    <MenuItem key={id} title={title} imageurl={imageurl} size={size} />
                ))
                }
            </div>
        )
    }
}
export default Directory;
