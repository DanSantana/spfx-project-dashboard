
import * as React from 'react';
import { ProjectProps } from './ProjectProps';
import { ProjectState } from './ProjectState';

export class Projects extends React.Component<ProjectProps,ProjectState>{
    constructor(props: ProjectProps, state: ProjectState) {
        super(props);
        this.state = {
            items:[],
        };
    }
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    public getItems(){

    }

    public componentDidMount(){
        this.getItems();
    }

    public render(): React.ReactElement<ProjectProps>{
        return(<div>
            Hello from Projects Components
            </div> );
            
      
    }
}