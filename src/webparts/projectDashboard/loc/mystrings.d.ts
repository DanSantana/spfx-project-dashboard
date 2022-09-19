declare interface IProjectDashboardWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
  AppLocalEnvironmentSharePoint: string;
  AppLocalEnvironmentTeams: string;
  AppSharePointEnvironment: string;
  AppTeamsTabEnvironment: string;
}

declare module 'ProjectDashboardWebPartStrings' {
  const strings: IProjectDashboardWebPartStrings;
  export = strings;
}
