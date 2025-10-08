#!/bin/bash

# Specify the destination folder
destination_folder="playwright-failing-tests"

# Create the destination folder if it doesn't exist
if [ ! -d "$destination_folder" ]; then
  mkdir -p "$destination_folder"
fi

# List of new files to move and rename
files=(
  "customer-models/lineas-ibp-tests/scenario-comparision-overview-page-tests.spec.js"
  "widgets/table/copy-paste/copy-paste-multiline-strings.dnd.spec.js"
  "pagev2-tests/hidden-compact-widget-tests/compact-scalar/through-identifier/validate-hidden-compact-scalar-widgets-when-toggled-through-identifier-column-gl-part1.spec.js"
  "widgets/gantt/basic/hover-and-select/ganttchart-full-screen-hover-and-select.spec.js"
  "widgets/table/copy-paste/copy-paste-with-thresholds.dnd.spec.js"
  "widgets/diagram-widget/nodes/add-a-node-check-model-data.spec.js"
  "customer-models/vion/Vion.Calculations.spec.js"
  "pagev2-tests/hidden-compact-widget-tests/compact-scalar/through-identifier/validate-hidden-compact-scalar-widgets-when-toggled-through-identifier-column-gl-part2.spec.js"
  "widgets/table/search/search-and-find-feature-test-9.spec.js"
  "new-actions/assert-item-actions/on-bubble-chart/on-dialog-part1.spec.js"
  "widgets/table/excel-download/validate-download-excel-for-different-type-of-data-part1.spec.js"
  "widgets/map-v3/assert-tooltips/on-hover-of-arc-label/with-tooltip-annotation-and-dynamic-arc-setting-on.spec.js"
)

# Loop through each file and move it, then rename it
for file in "${files[@]}"
do
  # Check if the file exists
  if [ -f "$file" ]; then
    # Move the file to the destination folder
    mv "$file" "$destination_folder"
    
    # Rename the moved file by replacing .spec.js with .spec.disabled.js
    file_name=$(basename "$file")
    mv "$destination_folder/$file_name" "${destination_folder}/${file_name%.spec.js}.spec.disabled.js"
    
    echo "Moved and renamed $file to ${destination_folder}/${file_name%.spec.js}.spec.disabled.js"
  else
    echo "File not found: $file"
  fi
done

echo "File moving and renaming process completed!"
