function getUniqueTags(data) {
    const tags = [];
    
    // Iterate over each object in the data array
    data.forEach(item => {
      // Iterate over each tag in the current item
      item.tags.forEach(tag => {
        // Check if the tag already exists in the tags array
        if (!tags.includes(tag)) {
          // Add the tag to the tags array if it's unique
          tags.push(tag);
        }
      });
    });
    
    return tags;
  }
  
  const mediaData = [
    {
      id: 1,
      title: "Stranger Scrims", 
      duration: 40, 
      tags: ["supernatural", "horror", "drama"], 
    },
    {
      id: 2,
      title: "The Scrim of the Dragon", 
      duration: 60, 
      tags: ["drama", "fantasy"], 
    },
    {
      id: 3,
      title: "Scrim Hunters", 
      duration: 22, 
      tags: ["reality", "home improvement"], 
    },
    {
      id: 4,
      title: "This Old Scrim", 
      duration: 30, 
      tags: ["reality", "home improvement"], 
    },
    {
      id: 5,
      title: "What We Do in the Scrim", 
      duration: 55, 
      tags: ["drama", "comedy", "supernatural"], 
    },
    {
      id: 6,
      title: "The Scrimdalorian", 
      duration: 58, 
      tags: ["fantasy", "sci-fi", "adventure"], 
    },
  ];
  
  console.log(getUniqueTags(mediaData));
  