/* eslint-disable @typescript-eslint/explicit-function-return-type */

import * as React from 'react';
import { ProjectProps } from './ProjectProps';
import { ProjectState } from './ProjectState';
import {SPHttpClient, SPHttpClientResponse, ISPHttpClientOptions} from '@microsoft/sp-http';
import { PropertyPaneTextField } from '@microsoft/sp-property-pane';
export class Projects extends React.Component<ProjectProps,ProjectState>{
    constructor(props: ProjectProps, state: ProjectState) {
        super(props);
        this.state = {
            items:[],
        };
    }
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    public getItems() {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.props.context.spHttpClient
            .get(
                `${this.props.context.pageContext.web
                    .absoluteUrl}/_api/web/lists/GetByTitle('Projects')/Items',
                SPHttpClient.configurations.v1
            )
            .then(
                (response: SPHttpClientResponse): Promise<{ value: any[] }> => {
                    console.table(response);
                    return response.json();                  

                }
            )
            .then((response: { value: any[] }) => {
                var _items: any[] = [];
                _items = _items.concat(response.value);
                this.setState({
                    items: _items,
                });
            });
    }

    public componentDidMount(){
        this.getItems();
    }

    public render(): React.ReactElement<ProjectProps>{
        return(
        <div>
            {
            this.state.items.length > 0?
            <div>{this.state.items.map((item:any , key:React.Key) =>
            <li key={key}>
                <span>show something</span>
                <h3>{item.Title}</h3>
            </li>
            )}
            </div>
            : 
            
            <div>
                <p>Theres is anything</p>
                <p>{this.props.context.pageContext.web
                    .absoluteUrl}</p>
            </div>
            
           

        
        }</div> ); 
    }
}
