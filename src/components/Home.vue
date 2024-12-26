<script setup></script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-4 bg-customWhite">
    <!-- MAIN Col 1 -->
    <!-- create and schedule content + write your content: row-reverse on small devices -->
    <div class="col-span-1 md:col-span-2 order-2 md:order-1">
      <!-- row A -->
      <div class="grid grid-rows-2 gap-4">
        <div class="bg-lightYellow p-6 rounded-xl shadow-md">
          <p class="text-xl md:text-2xl lg:text-3xl font-semibold">
            <span class="text-customBlack"
              >Create and<br />schedule<br />
              content </span
            ><br />
            <span class="text-darkPurple">quicker.</span>
          </p>
          <div class="pt-4">
            <img
              class="img-fluid w-54"
              alt="create post"
              src="../assets/images/illustration-create-post.webp"
            />
          </div>
        </div>
        <!-- row B -->
        <div
          class="text-xl md:text-2xl lg:text-3xl bg-darkYellow px-6 py-9 rounded-xl shadow-md"
        >
          <p class="font-semibold">Write your<br />content<br />using AI.</p>
          <div class="mt-2">
            <img
              class="img-fluid h-64"
              alt="ai-content"
              src="../assets/images/illustration-ai-content.webp"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- MAIN Col 2 -->
    <!-- top row -->
    <!-- ........................................Sub col 1........................................ -->
    <div class="col-span-1 md:col-span-10 order-1 md:order-2">
      <!-- Parent Grid with Additional Row -->
      <div class="grid grid-rows-1 md:grid-rows-2 gap-4">
        <!-- First Row: Two Columns -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <!-- Left Column -->
          <div class="grid grid-rows-2 gap-4">
            <!-- Row 1 -->
            <div class="bg-darkPurple px-4 py-8 rounded-xl text-center shadow-md">
              <p class="text-2xl md:text-3xl lg:text-4xl font-semibold">
                <span class="text-customWhite">Social Media</span>
                <span class="text-darkYellow">10x</span>
                <br />
                <span class="text-customWhite">Faster with AI</span>
              </p>
              <div class="flex justify-center py-4">
                <img
                  class="w-20 h-auto"
                  alt="five-stars"
                  src="../assets/images/illustration-five-stars.webp"
                />
              </div>
              <p class="text-sm text-customWhite">Over 4,000 5-star reviews</p>
            </div>

            <!-- Row 2 -->
            <div class="maxh-full overflow-hidden">
              <!-- Inner Grid for Two Columns -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-fit">
                <!-- Column 1 -->
                <div
                  class="bg-customWhite p-4 rounded-md shadow-md flex flex-col overflow-hidden"
                >
                  <img
                    class="img-fluid w-auto h-auto"
                    alt="platforms"
                    src="../assets/images/illustration-multiple-platforms.webp"
                    style="transform: translateX(100px)"
                  />
                  <p
                    class="text-xl md:text-2xl lg:text-3xl font-semibold text-customBlack text-start"
                  >
                    Manage<br />multiple<br />accounts and<br />platforms.
                  </p>
                </div>
                <!-- Column 2 -->
                <div class="bg-darkYellow rounded-md shadow-md flex flex-col">
                  <p
                    class="text-xl md:text-2xl lg:text-3xl font-semibold text-customBlack mb-4 p-4"
                  >
                    Maintain a<br />consistent<br />posting<br />schedule.
                  </p>
                  <div class="overflow-hidden h-32 px-4">
                    <img
                      class="w-full object-cover"
                      alt="schedule"
                      src="../assets/images/illustration-consistent-schedule.webp"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Column -->
          <!-- schedule to social media -->
          <div
            class="bg-lightPurple rounded-xl shadow-md h-auto flex flex-col justify-between overflow-hidden"
          >
            <!-- Content -->
            <p class="text-xl md:text-2xl lg:text-3xl font-semibold text-customBlack p-6">
              Schedule to<br />social media.
            </p>
            <div class="overflow-hidden max-h-[370px] py-2">
              <img
                class="w-full object-cover"
                alt="schedule-chart"
                src="../assets/images/illustration-schedule-posts.webp"
                style="transform: translateX(150px)"
              />
            </div>
            <p class="text-customBlack font-semibold text-para break-words p-6">
              Optimize post timings<br />to publish content at<br />the perfect time
              for<br />your audience
            </p>
          </div>
        </div>
        <!-- Second Row -->
        <!-- bottom row -->
        <div class="grid grid-cols-1 md:grid-cols-12 gap-4 h-fit">
          <!-- Add your content here -->
          <!-- <p>Content for the new row below</p> -->
          <div
            class="col-span-1 md:col-span-3 order-2 md:order-1 bg-customWhite p-6 rounded-md shadow-md"
          >
            <p class="text-customBlack py-4">
              <span class="font-semibold text-xl md:text-4xl">>56% </span>
              <br />
            </p>
            <span class="text-para text-customBlack">faster audience growth </span>
            <div class="flex justify-center pt-4">
              <img
                class="object-contain w-32 img-fluid"
                alt="audience"
                src="../assets/images/illustration-audience-growth.webp"
              />
            </div>
          </div>
          <div
            class="col-span md:col-span-9 order-1 md:order-2 bg-darkPurple p-6 rounded-md shadow-md"
          >
            <div class="flex items-center">
              <img
                class="object-contain w-48 img-fluid"
                alt="audience"
                src="../assets/images/illustration-grow-followers.webp"
              />
              <p
                class="text-xl md:text-2xl lg:text-3xl font-semibold text-customWhite ml-12"
              >
                Grow followers<br />with non-stop<br />content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- i need 2 rows for MAIN COL2 -->

    <!-- fin -->
  </div>
</template>

<style scoped></style>
