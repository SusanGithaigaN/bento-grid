<script setup></script>

<template>
  <div class="flex flex-col-reverse md:grid md:grid-cols-12 gap-10 bg-customWhite h-full max-h-100">

    <!-- MAIN Col 1 -->
    <!-- create and schedule content + write your content: row-reverse on small devices -->
    <div class="col-span-1 md:col-span-2">
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
          <div class="mt-4">
            <img
              class="img-fluid w-48"
              alt="create post"
              src="../assets/images/illustration-create-post.webp"
            />
          </div>
        </div>
        <!-- row B -->
        <div class="text-4xl bg-darkYellow p-6 rounded-xl shadow-md">
          <p class="text-xl md:text-2xl lg:text-3xl font-semibold">
            Write your<br />content<br />using AI.
          </p>
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
    <!-- needs to have 2 rows: top row & bottom row -->
    <!-- ........................................Sub col 1........................................ -->
    <div class="col-span-1 md:col-span-10">
      <!-- Parent Grid with Additional Row -->
      <div class="grid grid-rows-2 gap-4 h-full">
        <!-- First Row: Two Columns -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
          <!-- Left Column -->
          <div class="grid grid-rows-2 gap-4 h-full">
            <!-- Row 1 -->
            <!-- social media -->
            <div
              class="bg-darkPurple px-4 py-10 rounded-xl text-center shadow-md max-h-40"
            >
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
            <!-- Row 2 -->
            <div class="h-full overflow-hidden">
              <!-- Inner Grid for Two Columns -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
                <!-- Column 1 -->
                <div
                  class="bg-customWhite p-4 rounded-md shadow-md max-h-40 overflow-hidden"
                >
                  <div class="overflow-hidden w-full aspect-[4/3] relative">
                    <img
                      class="object-contain w-full h-full max-w-full absolute right-[-25%]"
                      alt="platforms"
                      src="../assets/images/illustration-multiple-platforms.webp"
                    />
                  </div>
                  <p
                    class="text-xl md:text-2xl lg:text-3xl font-semibold text-customBlack"
                  >
                    Manage<br />multiple<br />accounts and<br />platforms.
                  </p>
                </div>
                <!-- Column 2 -->
                <div
                  class="bg-darkYellow p-4 rounded-md shadow-md max-h-40 overflow-hidden"
                >
                  <p
                    class="text-xl md:text-2xl lg:text-3xl font-semibold text-customBlack"
                  >
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
          </div>
          <!-- Right Column -->
          <!-- schedule to social media -->
          <div
            class="bg-lightPurple p-6 rounded-xl shadow-md h-full flex flex-col justify-between overflow-hidden"
          >
            <!-- Content -->
            <p class="text-xl md:text-2xl lg:text-3xl font-semibold text-customBlack">
              Schedule to<br />social media.
            </p>
            <!-- <img
              class="img-fluid relative right-[-40%]"
              alt="schedule"
              src="../assets/images/illustration-schedule-posts.webp"
            /> -->
            <p class="text-customBlack text-para break-words">
              Optimize post timings<br />to publish content at<br />the perfect time
              for<br />your audience
            </p>
          </div>
        </div>
        <!-- Second Row -->
        <!-- bottom row -->
        <div class="grid grid-cols-1 md:grid-cols-12 gap-4">
          <!-- Add your content here -->
          <!-- <p>Content for the new row below</p> -->
          <div class=" col-span-1 md:col-span-2 order-2 md:order-1 bg-customWhite p-6 rounded-md shadow-md">
            <p class="text-customBlack py-4">
              <span class="font-semibold text-xl md:text-3xl lg:text-4xl">>56% </span>
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
          <div class="col-span-1 md:col-span-10 order-1 md:order-2 bg-darkPurple p-6 rounded-md shadow-md">
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
      </div>
    </div>

    <!-- i need 2 rows for MAIN COL2 -->

    <!-- fin -->
  </div>
</template>

<style scoped></style>
