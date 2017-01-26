### QUB Full Project
# Cloned as of 1/26 9:24am MST
# Served on 8080

##Partials:
- √ Header - identical
- Footer (JS requirement differences)
  - Toma:
    - bootstrap toggle
    - select2.full
    - dropzone
    - easypiechart
    - flot - base js, canvas, resize, time,
    - spinner - For ticking over the decimals
  - QUB:
    - Vendor: Chart.bundle.min.js
    - bootstrap-tagsinput.min.js - for Tags (with x's) within an input.
  - Common:
    - QUB:
      - Sidebar
      - add servers
      - remove servers
      - dataTableInit
      - onend
      - dropdown
      - progress-square
      - section
      - chart-line, chart-circle, chart-graph
      - input-number
      - tags-dropdown
      - server-details
      - servers
      - Network
      - org Marketplace
      - Orders
      - support
      - servers
      - storage
      - storage-details
      - Tasks
      - provider plan-8
      - Dashboard
      - main

    - TOMA:
      - jquery
      - templates
      - dropdown
      - progress-square
      - add-item
      - selection
      - dataTable
      - main


- Admin-Sidebar
  - *?? No QUB admin-Sidebar? ??*

- Sidebar
  - √ Toggle works on small screens
  - **ISSUE:** Icon does not link to homepage.
  - **ISSUE:** Sidebar does not scroll or show the logged user at the bottom.  Use ZOOM OUT to view the lower portion.  
  - **ISSUE:** Showcases admin?  Are they different?
  - **ISSUE** No Active logic to highlight  current area. Add 'is-active' to <li><a>.  Add to each of the menu pages and sub pages.
  - *?? Nothing clickable on admin section.  Intended??*




## Login
- Sweet PW alert automatically shows (should have hidden class, then remove if you came from register)
- √ Otherwise identical

## Request PW
- √ Better base format.  Smaller Header.  
- √ Otherwise identical http://localhost:8080/request-password.html?email=timpending%40gmail.com

## Confirm PW
- Identical (minus styling)
- *No error handling if passwords do not matching.  =>  Length Check?*

## Servers
- √ Responsive
- √ Styling Good
- √ JSON dataset Server
- √ Servers are links to server-details *No UIDs*
- **ISSUE:** Filter Dropdown doesn't work.  TOMA file puts it into the search box onclick of drop down
- *?? Need to check search functions with more data ??*
- *?? No disabled styling for 'on hold' server vs Toma ??*
- *?? Need 6 per page vs 5 ??*

## Server: Add
- √ Footer Identical
- *?? Able to select multiples of image, applications, snapshops ??*
- *?? If one was selected, then will the others clear if you switch between tabs or during the selection of another option on another page ??*
- *?? Are the %'s blocks supposed to update? on this page or no? ??*
- *?? Step 4: What would you like on your server? => Which services would you like to be provided for your server? ??*
- *?? Add a no thanks limit so that its only the length of the span rather than the full width.  Prevent accidental clicks ??*
- *?? All added-value services highlighted in footer ??*
- *?? Footer Dynamic? ??*




## Server Details
## Network Details
## Org. Marketplace

## Billing: Orders
## Application stack
## Storage
## Storage Details
## Tasks: Dashboard
## Dashboard: Admin
## Dashboard: Org.

## Add Provider Plan: 1
## Add Provider Plan: 2
## Add Provider Plan: 3
## Add Provider Plan: 4
## Add Provider Plan: 5
## Add Provider Plan: 6
## Add Provider Plan: 7
## Add Provider Plan: 8
## Add Provider Plan: 9
