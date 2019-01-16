echo "Building rmc-site..."
yarn build
echo "Build complete. Optimized version ready to release."
aws s3 cp --recursive build s3://rmc-site --profile ryanmchenry2
# syncs all files to s3
# accepts git commit message and pushes
echo "sync completed - s3 is up to date."
git add .
read -p "Commit description: " desc
git commit -m "$desc"
git push origin master
echo "Release complete!"
