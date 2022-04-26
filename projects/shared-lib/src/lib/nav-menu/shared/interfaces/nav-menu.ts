export interface NavMenu {
  title: string,        // Title that appear in nav menu button
  libName: string; // Name of this library (as in package.json of the library)
  module: string, // Name of the Module in Angular
  path: string,         // The router path
  mfeURL: string;            // URL of the UMD Bundle file
  isFirstPage: boolean; // If this is the first page to load when app starts
  active: boolean
}
