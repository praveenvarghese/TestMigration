#!/bin/bash

# Specify the destination folder where files are currently located
destination_folder="playwright-failing-tests"

# List of files with their original paths (with trailing commas)
files=(
  'bugs/GLc4322-legend-error.spec.js',
  'widgets/table/copy-paste/copy-paste-from-classic-page-to-a-grid-page.dnd.spec.js',
  'pagev2-tests/hidden-compact-widget-tests/hidden-tests/through-identifier/validate-hidden-fixed-widgets-when-toggled-through-identifier-column-gl-part2.spec.js',
  'customer-models/lineas-ibp-tests/scenario-comparision-overview-page-tests.spec.js',
)

# Loop through each file and move it to the correct folder structure
for file in "${files[@]}"
do
  # Remove the trailing comma, if any
  clean_file=$(echo "$file" | sed 's/,$//')

  # Extract the directory path of the file
  file_dir=$(dirname "$clean_file")

  # Extract the file name (basename) of the file
  file_name=$(basename "$clean_file")
  
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
