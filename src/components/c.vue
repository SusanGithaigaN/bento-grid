<template>
  <div class="col-span-1 md:col-span-10">
    <!-- FIRST ROW!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <!-- Col A -->
      <div class="md:row-span-2">
        <!-- first row -->
        <div class="bg-darkPurple px-4 py-10 rounded-xl text-center shadow-md">
          <p class="text-xl md:text-2xl lg:text-3xl font-semibold">
            <span class="text-customWhite">Social Media</span>
            <span class="text-darkYellow">10x</span>
            <br />
            <span class="text-customWhite">Faster with AI</span>
          </p>
          <div class="flex justify-center py-4">
            <img
              class="img-fluid w-24"
              alt="five-stars"
              src="../assets/images/illustration-five-stars.webp"
            />
          </div>
          <p class="text-sm text-customWhite">Over 4,000 5-star reviews</p>
        </div>
        <!-- second row -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <!-- first col -->
          <div class="p-6 shadow-md rounded-md">
            <div class="overflow-hidden w-full aspect-[4/3] relative">
              <img
                class="object-contain w-full h-full max-w-full absolute right-[-25%]"
                alt="platforms"
                src="../assets/images/illustration-multiple-platforms.webp"
              />
            </div>
            <p class="text-xl md:text-2xl lg:text-3xl font-semibold text-customBlack">
              Manage<br />multiple<br />accounts and<br />platforms.
            </p>
          </div>
          <!-- second col -->
          <div class="p-6 shadow-md bg-darkYellow rounded-xl overflow-hidden">
            <p class="text-xl md:text-2xl lg:text-3xl font-semibold text-customBlack">
              Maintain a<br />consistent<br />posting<br />schedule.
            </p>
            <img
              class="img-fluid relative bottom-[-30%]"
              alt="schedule"
              src="../assets/images/illustration-consistent-schedule.webp"
            />
          </div>
        </div>
      </div>
      <!-- Col B -->
      <div class="bg-lightPurple h-fit p-4 rounded-md shadow-md">
        <p class="text-xl md:text-2xl lg:text-3xl font-semibold text-customBlack">
          Schedule to<br />social media.
        </p>
        <img
          class="img-fluid relative right-[-40%]"
          alt="schedule"
          src="../assets/images/illustration-schedule-posts.webp"
        />
        <p class="text-customBlack text-para break-words">
          Optimize post timings<br />to publish content at<br />the perfect time for<br />your
          audience
        </p>
      </div>
    </div>
    <!-- SECOND ROW -->
    <!-- <div class="grid grid-cols-1 md:grid-cols-2 gap-4"> -->
    <!-- ........................................Sub col 2........................................ -->
    <div class="grid grid-cols-12 gap-4 mt-4">
      <!-- First column -->
      <div class="col-span-4 bg-customWhite p-6 rounded-md shadow-md">
        <p class="text-customBlack">
          <span class="font-semibold my-2 text-xl md:text-3xl lg:text-4xl">>56% </span>
          <br />
          <span class="text-para">faster audience growth </span>
        </p>
        <div class="flex justify-center pt-4">
          <img
            class="object-contain w-32 img-fluid"
            alt="audience"
            src="../assets/images/illustration-audience-growth.webp"
          />
        </div>
      </div>
      <!-- Second column -->
      <div class="col-span-8 bg-darkPurple p-6 rounded-md shadow-md text-customWhite">
        <div class="grid grid-cols-2">
          <div>
            <img
              class="object-contain w-48 img-fluid"
              alt="audience"
              src="../assets/images/illustration-grow-followers.webp"
            />
          </div>
          <div>
            <p class="text-xl md:text-2xl lg:text-3xl font-semibold text-customWhite">
              Grow followers<br />with non-stop<br />content.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- </div> -->
  </div>
</template>
