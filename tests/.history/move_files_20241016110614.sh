#!/bin/bash

# Specify the destination folder where files are currently located
destination_folder="playwright-failing-tests"

# List of files with their original paths (without commas)
files=(
  'pagev2-tests/hidden-compact-widget-tests/compact-scalar/through-literal/validate-hidden-compact-scalar-widgets-when-toggled-through-literal-column-gl-part2.spec.js'
  'pagev2-tests/hidden-compact-widget-tests/compact-scalar/through-identifier/validate-hidden-compact-scalar-widgets-when-toggled-through-identifier-column-gl-part1.spec.js'
  'pagev2-tests/hidden-compact-widget-tests/compact-scalar/through-literal/validate-hidden-compact-scalar-widgets-when-toggled-through-literal-column-gl-part1.spec.js'
  'bugs/GL4270-pasting-into-read-only-cells.dnd.spec.js'
  'widgets/table/excel-download/validate-download-excel-in-sidepanel-dialog-page.spec.js'
  # Add more file paths here
)

# Loop through each file and move it to the correct folder structure
for file in "${files[@]}"
do
  # Extract the directory path of the file
  file_dir=$(dirname "$file")

  # Extract the file name (basename) of the file
  file_name=$(basename "$file")
  
  # Create the corresponding directory structure inside the destination folder
  mkdir -p "$destination_folder/$file_dir"
  
  # Check if the file exists in the root of the destination folder and move it
  if [ -f "$destination_folder/$file_name" ]; then
    # Move the file from the root of the destination folder into the correct subdirectory
    mv "$destination_folder/$file_name" "$destination_folder/$file_dir/$file_name"
    echo "Moved $file_name to $destination_folder/$file_dir/"
  else
    echo "File not found in root: $destination_folder/$file_name"
  fi
done

echo "Folder structure reconstruction and file moving completed!"
