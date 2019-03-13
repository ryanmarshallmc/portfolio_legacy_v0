echo "Building rmc-site..."

yarn build
echo "Build complete. Optimized version ready to release."

aws s3 cp --recursive build s3://ryan-mchenry.com --profile ryanmchenry2
echo "sync completed - s3 is up to date."

aws cloudfront create-invalidation --profile ryanmchenry2 --distribution-id E1MJG1CD11L03K --paths /
echo "cloudfront invalidation of caches complete."
echo ""
read -p "Do you want to commit to GitHub?" yn
    case $yn in
        [Yy]* ) git add .
		read -p "Commit description: " desc
		git commit -m "$desc"
		git push origin master	;;
        [Nn]* ) exit;;
        * ) echo "Please answer yes or no.";;
    esac

echo "Release complete!"
