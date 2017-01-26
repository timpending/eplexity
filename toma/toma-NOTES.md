### Toma Full Project
# Merged as of 1/26/17 9:36am MST
# Served on 6660

## Login
- √ login transmits this url on sign in: http://localhost:8080/login.html?email=qweasd%40gmail.com&password=qweasd
- √ Validates the Email with @, empty field
- √ Forgot PW links out
- ?? Does not validate the '.com' part of email
- ?? Forgot PW could be styled differently, added to the bottom / middle of form or below input
- No min char count on PW

## Request password
- √ transmits the below url on request:
http://localhost:8080/request-password.html?email=qweasd%40gmail.com
- √ Validates the Email with @, empty field
- ?? Does not validate the '.com' part of email

## Confirm password
- √ Validates if empty
- √ Transmits the below URL when submitted:
http://localhost:8080/confirm-password.html?password=qweqwe&confirm_password=qweqwe
- ?? No minimum character count
- ?? No inline validation of matching strings

## Sidebar
- No categories in regular Sidebar
- Includes admin sub section


## Servers
- √ Search
- √ View Grid / Table Adjuster
- √ On Hold Disabled
- √ Add Server Links out
- ?? Clickable grid cards, other UI can click to activate, see more details
- ?? Aside does not have full functionality (only home link works)
- **ISSUE** Sidebar doesn't scroll to bottom
- **ISSUE** No toggle on small screens

## Add Server Page
- √ Input checkboxes function, are attractive
- Changing parameters does not update url string
http://localhost:8080/add-server.html?image=on&size=on&cloud=on&server_name_1=qweasd
- update line height in \_numbers to be 25px or font size to 1.1 em and line height to 1.6em
- Section Footer does not currently track totals (not MVP?)
- Top % does not updates (not MVP?)

## Provider A Page
# General
- Numbers within circles not centered.  Just active, no circles?
- Back arrow to home? to last screen doesn't work
- Column filters are located on the top of the line rather than in the middle of the line

# Clouds
- √ Add Cloud modal pops up, has flow, disables
- √ Pagination plus pagination styles work
- Cloud Modal doesn't submit
- Add Cloud has base dummy functionality
- Gear Dropdowns drop, but nothing happens when selected

# Image Library
- √ Pagination works, contains styles
- √ Upload More modal pops up and drops Dropdowns
- √ Dropzone allows for drop of file and it looks like its prepped for upload
- Add Cache doesn't link out
- Need Cache not positioned well
- Gear Dropdowns drop, but nothing happens when selected
- No submit functionality within the popup add new modal
- Cannot remove photo once uploaded into dropzone
- Mulitple photos allowed to be uploaded into dropzone


# Orgs
- √ Pagination works, contains styles
- √ Modal pops up and closes
- √ Modal swaps between all the pages on the form
- ^ Administrator + Billing Contact Name fields do not swap when changing tabs.  The fields remain the same,  
- √ Fields keep their values betweens screens
- Add Functionality does not trigger url
- √ Cancel works


# Provider Plans
- Blank Page

## Network Security Solutions / Admin Global Mktplace Catalog Details
-  Toggles Toggles
- Gear Dropdowns drop, but nothing happens when selected
- Disabled items change styles
- Back button doesn't work

## Administration

# Providers
- Providers returning Data in table
- Add Provider opens modal
- ? Modal doesn't clear on cancel?
- ? Modal doesn't validate
- ? Base page for others to be built on top of ?
- Gear Dropdowns drop, but nothing happens when selected

# Admin / Global Marketplace
- View All doesn't link out
- Add Marketplace doesn't link out

## Organization / Provider A Marketplace
- no distinct different between the two tab options: Marketplace, Application stack
- Add Market place does not create modal

## Server Detail Page

# Access
- No change from specs

# Specs (Splash)
- Box hover may indicate that you can click on them, but currently unable to
- View All nics not functioning
- Edit Storage Modal - Some interaction.  No save
- Edit Storage Modal - dropdowns on change in mem sizes
- Need to homogenize the image text / font with the spans.  Use lighter grey?

# Tickets
- √ Filter Functions
- √ Table functions
- No create ticket modal
-

# Monitoring
- No data

# History
- √ Table shows

# Backups
- √ Notification on next Backup
- Still shows create Ticket
