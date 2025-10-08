#!/bin/bash

# Specify the destination folder where files are currently located
destination_folder="playwright-failing-tests"

# List of files with their original paths (with commas at the end except the last entry)
files=(
  'pagev2-tests/hidden-compact-widget-tests/compact-scalar/through-literal/validate-hidden-compact-scalar-widgets-when-toggled-through-literal-column-gl-part2.spec.js',
  'pagev2-tests/hidden-compact-widget-tests/compact-scalar/through-identifier/validate-hidden-compact-scalar-widgets-when-toggled-through-identifier-column-gl-part1.spec.js',
  'pagev2-tests/hidden-compact-widget-tests/compact-scalar/through-literal/validate-hidden-compact-scalar-widgets-when-toggled-through-literal-column-gl-part1.spec.js',
  'bugs/GL4270-pasting-into-read-only-cells.dnd.spec.js',
  'widgets/table/excel-download/validate-download-excel-in-sidepanel-dialog-page.spec.js',
  'widgets/table/copy-paste/copy-paste-upon-change-procedures-and-their-order-in-table.dnd.spec.js',
  'customer-models/lineas-ibp-tests/mbr-cost-page-tests.spec.js',
  'export-to-image-button/gantt-chart/without-widget-title/on-click-assert-file-downloaded.spec.js',
  'widgets/table/copy-paste/copy-one-cell-and-paste-into-block-selection.dnd.spec.js',
  'widgets/table/copy-paste/copy-paste-aggregator-cells-with-item-actions.dnd.spec.js',
  'widgets/table/copy-paste/validate-error-message-on-copy-paste-of-invalid-values-in-table-dialog-page.dnd.spec.js',
  'widgets/table/copy-paste/copy-paste-with-vertical-scrollbars.dnd.spec.js',
  'widgets/map-v3/assert-store-focus/on-adding-editing-removing-store-focus-identifier/on-adding-new-arc-set.spec.js',
  'widgets/high-charts/combination-chart/x-y-axis-step-size/validate-configuring-step-size-and-viewport-for-x-axis.spec.js',
  'pagev2-tests/tablet-mode-tests/assert-item-action-classic-layout.tablet.spec.js',
  'new-actions/assert-item-actions/on-scalar/with-binary-data/with-single-content.spec.js',
  # (Add more files here, and make sure to put commas at the end of each line)
  'customer-models/exxon-mobil/c4125.spec.js' # No comma after the last file
)

# Loop through each file and move it to the correct folder structure
for file in "${files[@]}"
do
  # Extract the directory path of the file
  file_dir=$(dirname "$file")
  
  # Create the corresponding directory structure inside the destination folder
  mkdir -p "$destination_folder/$file_dir"
  
  # Move the file from the root of the destination folder into the correct subdirectory
  file_name=$(basename "$file")
  
  if [ -f "$destination_folder/$file_name" ]; then
    mv "$destination_folder/$file_name" "$destination_folder/$file_dir/$file_name"
    echo "Moved $file_name to $destination_folder/$file_dir/"
  else
    echo "File not found: $destination_folder/$file_name"
  fi
done

echo "Folder structure reconstruction completed!"
