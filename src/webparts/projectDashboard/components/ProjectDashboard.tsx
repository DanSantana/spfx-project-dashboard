import * as React from 'react';
import styles from './ProjectDashboard.module.scss';
import { IProjectDashboardProps } from './IProjectDashboardProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { Projects } from './Projects/Projects';

export default class ProjectDashboard extends React.Component<IProjectDashboardProps, {}> {
  public render(): React.ReactElement<IProjectDashboardProps> {
    const {
      description,
      isDarkTheme,
      environmentMessage,
      hasTeamsContext,
      userDisplayName
    } = this.props;

    return (

      <div>
        <Projects
        context = {this.props.context}
        />
      </div>
    );
  }
}
